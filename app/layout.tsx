import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"; // fix casing
import Footer from "../components/footer"; // import Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summit Buildworks",
  description: "Residential & Commercial Construction Experts in California",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar appears on every page */}
        <Navbar />

        {/* Page content */}
        <main className="pt-28">{children}</main> 
        {/* pt-28 to offset the fixed navbar height */}

        {/* Footer appears on every page */}
        <Footer />
      </body>
    </html>
  );
}