import { NextResponse } from "next/server";

export const runtime = "nodejs";

type SubscribePayload = { email?: string };

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as SubscribePayload | null;
  const email = body?.email?.trim();
  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid-email" }, { status: 400 });
  }

  // TODO: persist to Supabase `tides_subscribers` table once envs are wired.
  console.log("[subscribe] new subscriber", { email });

  return NextResponse.json({ ok: true });
}
