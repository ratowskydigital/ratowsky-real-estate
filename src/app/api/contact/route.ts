/**
 * /api/contact — Lead intake route
 *
 * Flow:
 *  1. Validate payload.
 *  2. Try to send notification email via Gmail API (Google Workspace, primary).
 *  3. If Gmail fails, fall back to Resend.
 *  4. Append lead row to Google Sheets (non-blocking — failure is logged, not surfaced).
 *
 * Env vars required:
 *  GMAIL_CLIENT_ID         — OAuth2 client ID from Google Cloud Console
 *  GMAIL_CLIENT_SECRET     — OAuth2 client secret
 *  GMAIL_REFRESH_TOKEN     — Refresh token for justin.ratowsky@compass.com
 *  NOTIFY_EMAIL            — Where notifications land (defaults to justin.ratowsky@compass.com)
 *  RESEND_API_KEY          — Resend API key (fallback)
 *  RESEND_FROM_EMAIL       — Sender address in Resend (e.g. leads@ratowskyrealestate.com)
 *  GOOGLE_SERVICE_ACCOUNT_KEY — JSON string of service account key (for Sheets)
 *  GOOGLE_SHEETS_ID        — ID of the lead-tracking Google Sheet
 */

import { NextResponse } from "next/server";

export const runtime = "nodejs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  intent?: string;
  message?: string;
  source?: string; // which page / form submitted
};

type Lead = Required<Pick<ContactPayload, "name" | "email">> & ContactPayload;

// ---------------------------------------------------------------------------
// Gmail sender
// ---------------------------------------------------------------------------

async function sendViaGmail(lead: Lead): Promise<void> {
  const {
    GMAIL_CLIENT_ID,
    GMAIL_CLIENT_SECRET,
    GMAIL_REFRESH_TOKEN,
    NOTIFY_EMAIL = "justin.ratowsky@compass.com",
  } = process.env;

  if (!GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN) {
    throw new Error("Gmail env vars not configured");
  }

  // Exchange refresh token for access token
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GMAIL_CLIENT_ID,
      client_secret: GMAIL_CLIENT_SECRET,
      refresh_token: GMAIL_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  if (!tokenRes.ok) throw new Error(`Gmail token exchange failed: ${tokenRes.status}`);
  const { access_token } = (await tokenRes.json()) as { access_token: string };

  const subject = `New lead: ${lead.name} — ${lead.intent ?? "website contact"}`;
  const bodyLines = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.phone ? `Phone: ${lead.phone}` : null,
    lead.intent ? `Intent: ${lead.intent}` : null,
    lead.source ? `Source: ${lead.source}` : null,
    "",
    lead.message ?? "(no message)",
  ].filter((l): l is string => l !== null);

  // RFC 2822 message, base64url-encoded
  const rawMessage = [
    `To: ${NOTIFY_EMAIL}`,
    `Reply-To: ${lead.name} <${lead.email}>`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    ...bodyLines,
  ].join("\r\n");

  const encoded = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const sendRes = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: encoded }),
    }
  );

  if (!sendRes.ok) {
    const errBody = await sendRes.text();
    throw new Error(`Gmail send failed: ${sendRes.status} ${errBody}`);
  }
}

// ---------------------------------------------------------------------------
// Resend fallback sender
// ---------------------------------------------------------------------------

async function sendViaResend(lead: Lead): Promise<void> {
  const {
    RESEND_API_KEY,
    RESEND_FROM_EMAIL = "leads@ratowskyrealestate.com",
    NOTIFY_EMAIL = "justin.ratowsky@compass.com",
  } = process.env;

  if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

  const bodyLines = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.phone ? `Phone: ${lead.phone}` : null,
    lead.intent ? `Intent: ${lead.intent}` : null,
    lead.source ? `Source: ${lead.source}` : null,
    "",
    lead.message ?? "(no message)",
  ].filter((l): l is string => l !== null);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      reply_to: lead.email,
      subject: `New lead: ${lead.name} — ${lead.intent ?? "website contact"}`,
      text: bodyLines.join("\n"),
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Resend send failed: ${res.status} ${errBody}`);
  }
}

// ---------------------------------------------------------------------------
// Google Sheets lead append (non-blocking)
// ---------------------------------------------------------------------------

async function appendToSheets(lead: Lead, timestamp: string): Promise<void> {
  const { GOOGLE_SERVICE_ACCOUNT_KEY, GOOGLE_SHEETS_ID } = process.env;

  if (!GOOGLE_SERVICE_ACCOUNT_KEY || !GOOGLE_SHEETS_ID) {
    console.warn("[contact] Google Sheets env vars not set — skipping sheet append");
    return;
  }

  // Parse service account key
  let serviceAccount: {
    client_email: string;
    private_key: string;
    token_uri?: string;
  };
  try {
    serviceAccount = JSON.parse(GOOGLE_SERVICE_ACCOUNT_KEY);
  } catch {
    console.error("[contact] Could not parse GOOGLE_SERVICE_ACCOUNT_KEY");
    return;
  }

  // Create signed JWT for Google service account
  const now = Math.floor(Date.now() / 1000);
  const jwtHeader = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" }))
    .toString("base64url");
  const jwtPayload = Buffer.from(
    JSON.stringify({
      iss: serviceAccount.client_email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: serviceAccount.token_uri ?? "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  ).toString("base64url");

  const signingInput = `${jwtHeader}.${jwtPayload}`;

  // Import private key and sign
  const pemKey = serviceAccount.private_key.replace(/\\n/g, "\n");
  const keyBody = pemKey
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");
  const binaryKey = Buffer.from(keyBody, "base64");

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signatureBuffer = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(signingInput)
  );

  const signature = Buffer.from(signatureBuffer).toString("base64url");
  const jwt = `${signingInput}.${signature}`;

  // Exchange JWT for access token
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) {
    console.error("[contact] Sheets token exchange failed:", tokenRes.status);
    return;
  }

  const { access_token } = (await tokenRes.json()) as { access_token: string };

  // Append row: [timestamp, name, email, phone, intent, source, message]
  const values = [
    [
      timestamp,
      lead.name,
      lead.email,
      lead.phone ?? "",
      lead.intent ?? "",
      lead.source ?? "",
      (lead.message ?? "").slice(0, 500),
    ],
  ];

  const appendRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_ID}/values/Leads!A:G:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    }
  );

  if (!appendRes.ok) {
    console.error(
      "[contact] Sheets append failed:",
      appendRes.status,
      await appendRes.text()
    );
  } else {
    console.log("[contact] Lead appended to Google Sheets");
  }
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body || !body.email || !body.name) {
    return NextResponse.json({ ok: false, error: "missing-fields" }, { status: 400 });
  }

  if (!/.+@.+\..+/.test(body.email)) {
    return NextResponse.json({ ok: false, error: "invalid-email" }, { status: 400 });
  }

  const lead: Lead = body as Lead;
  const timestamp = new Date().toISOString();

  // --- Notification email (Gmail → Resend fallback) ---
  let emailSent = false;
  try {
    await sendViaGmail(lead);
    emailSent = true;
    console.log("[contact] Sent via Gmail");
  } catch (gmailErr) {
    console.warn(
      "[contact] Gmail failed, trying Resend:",
      (gmailErr as Error).message
    );
    try {
      await sendViaResend(lead);
      emailSent = true;
      console.log("[contact] Sent via Resend (fallback)");
    } catch (resendErr) {
      console.error(
        "[contact] Both email paths failed:",
        (resendErr as Error).message
      );
    }
  }

  // --- Google Sheets append (non-blocking) ---
  appendToSheets(lead, timestamp).catch((err: unknown) => {
    console.error("[contact] Sheets append threw:", err);
  });

  // Always return 200 to the user — even if email delivery failed, the lead
  // is logged in Vercel function logs and the Sheets append will catch it.
  console.log("[contact] Lead received", {
    name: lead.name,
    email: lead.email,
    intent: lead.intent,
    emailSent,
    timestamp,
  });

  return NextResponse.json({ ok: true });
}
