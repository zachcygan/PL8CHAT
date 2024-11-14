// RootLayout.tsx

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import FooterFinal from "../components/footerFinal";
import "./globals.css";
import NavbarFinal from "../components/navbarFinal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "PL8CHAT - Smart & Social Parking",
  description: "We unite parking communities through license plate chat and connectivity",
  openGraph: {
    title: "PL8CHAT",
    description: "Smart & Social Parking",
    images: "./assets/images/logoGreen.jpg",
    url: "PL8CHAT",
    type: "website",
  },
};

// Adjust the prop type to include `hideNavbar`
export default function RootLayout({ children, hideNavbar }: { children: React.ReactNode; hideNavbar?: boolean }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header>{!hideNavbar && <NavbarFinal />}</header>
        <div className="pt-16">
          {children}
          <Analytics />
        </div>
        <div>
          <FooterFinal />
        </div>
      </body>
    </html>
  );
}
