import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const title = "Costume Cart Check | Buy the look. Check the details.";
const description = "Independent US-focused buying guides for costumes, cosplay accessories, wigs, props, makeup and collectibles.";
const siteBasePath = "/costume-cart-check";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidoctuk-ai.github.io/costume-cart-check"),
  title,
  description,
  icons: {
    icon: `${siteBasePath}/favicon.svg`,
    shortcut: `${siteBasePath}/favicon.svg`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: `${siteBasePath}/og.png`, width: 1536, height: 1024, alt: "Costume Cart Check" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteBasePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
