import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healthy Awareness — Explore Nutrition & Health Benefits of Foods",
  description: "Discover research-backed nutritional facts, health scores, and dietary benefits of fruits, vegetables, nuts, and superfoods.",
  keywords: ["nutrition", "health benefits", "fruits", "vegetables", "superfoods", "calories", "vitamins", "healthy eating"],
  authors: [{ name: "Healthy Awareness Team" }],
  openGraph: {
    title: "Healthy Awareness — Explore Nutrition & Health Benefits of Foods",
    description: "Discover research-backed nutritional facts, health scores, and dietary benefits of fruits, vegetables, nuts, and superfoods.",
    url: "https://healthylife.app",
    siteName: "Healthy Awareness",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Awareness — Explore Nutrition & Health Benefits of Foods",
    description: "Discover research-backed nutritional facts, health scores, and dietary benefits of fruits, vegetables, nuts, and superfoods.",
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
