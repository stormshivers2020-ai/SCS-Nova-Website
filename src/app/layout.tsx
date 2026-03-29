import type { Metadata } from "next";
import Image from "next/image";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SCS Nova / Cauris",
  description:
    "SCS Nova builds digital and brand work for companies. Cauris and B-Cauris are life- and work-intelligence products in development — explore the guided Cauris demo and studio contact on this site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-black font-sans text-zinc-100`}
      >
        <div className="relative min-h-screen">
          <div
            className="pointer-events-none fixed inset-0 z-0"
            aria-hidden="true"
          >
            <Image
              src="/FULL-BACKGROUND.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
