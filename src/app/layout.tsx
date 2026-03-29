import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
