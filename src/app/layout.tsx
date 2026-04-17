import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { OrganizationJsonLd } from "./OrganizationJsonLd";
import { SITE_DESCRIPTION, SITE_TITLE, siteMetadataBase } from "@/data/siteMeta";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteMetadataBase(),
  title: {
    default: SITE_TITLE,
    template: "%s | SCS Nova",
  },
  description: SITE_DESCRIPTION,
  applicationName: "SCS Nova",
  category: "technology",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SCS Nova",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 320,
        height: 320,
        alt: "Cauris mark — SCS Nova",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SCS Nova",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-transparent text-zinc-100 antialiased">
        <OrganizationJsonLd />
        <div
          className="pointer-events-none fixed inset-0 -z-10 min-h-[100dvh] w-full overflow-hidden"
          aria-hidden
        >
          <Image
            src="/FULL-BACKGROUND.png"
            alt=""
            aria-hidden={true}
            priority
            fill
            sizes="100vw"
            className="h-full min-h-[100dvh] w-full object-cover opacity-[0.52]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/24 via-black/10 to-black/30" />
        </div>
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
