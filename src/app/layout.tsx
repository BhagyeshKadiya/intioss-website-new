import type { Metadata } from "next";
import { Marcellus, Jost, EB_Garamond } from "next/font/google";
import "./globals.css";
import ConciergeChatbot from "@/components/ConciergeChatbot";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INTIOSS Luxury Surfaces",
  description: "Production website for INTIOSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${jost.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-jost text-intioss-charcoal bg-intioss-ivory relative">
        {children}
        <ConciergeChatbot />
      </body>
    </html>
  );
}
