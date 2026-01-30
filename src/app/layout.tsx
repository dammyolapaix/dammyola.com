import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import { SITE_NAME, SITE_URL, PERSON_SAME_AS } from "@/lib/constants";
import "./globals.css";

const notoSans = Noto_Sans({ variable: "--font-sans" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `Build Your Product Without Learning to Code | ${SITE_NAME}`;
const description =
  "We build software and AI products for non-technical founders. From idea to launch in 6-8 weeks. No technical co-founder needed. Book a free consultation.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "I build software and AI products for non-technical founders. From idea to launch in 6-8 weeks.",
  sameAs: PERSON_SAME_AS.filter(Boolean),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
