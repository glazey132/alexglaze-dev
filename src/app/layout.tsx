import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Glaze — Web Development",
  description:
    "I build fast, beautiful websites and web apps for small businesses and startups — powered by modern AI tools.",
  openGraph: {
    title: "Alex Glaze — Web Development",
    description:
      "Custom websites, web apps, and AI-powered features for businesses that want to move fast.",
    url: "https://alexglaze.dev",
    siteName: "Alex Glaze",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
