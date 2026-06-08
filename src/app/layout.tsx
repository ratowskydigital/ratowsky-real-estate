import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — Huntington Beach Real Estate`,
    template: `%s · ${site.name} at ${site.brokerage}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.fullName} — Huntington Beach Real Estate`,
    description: site.description,
    url: site.url,
    siteName: site.fullName,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
