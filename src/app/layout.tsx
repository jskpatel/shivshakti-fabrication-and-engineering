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
  title: "Shivshakti Fabrication and Engineering",
  
  description:
    "Shivshakti Fabrication and Engineering specializes in industrial fabrication, structural engineering, welding, and customized metal solutions with precision, durability, safety, and innovation.",

  keywords: [
    "Shivshakti Fabrication",
    "Fabrication Company",
    "Industrial Fabrication",
    "Structural Engineering",
    "Welding Services",
    "Metal Fabrication",
    "Engineering Works",
    "Heavy Fabrication",
    "Steel Fabrication",
    "Industrial Solutions",
  ],

  authors: [{ name: "Shivshakti Fabrication and Engineering" }],

  openGraph: {
    title: "Shivshakti Fabrication and Engineering",

    description:
      "Leading industrial fabrication and engineering company delivering precision-driven structural fabrication, welding, and customized engineering solutions.",

    url: "https://shivshaktifabrication.com",

    siteName: "Shivshakti Fabrication",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shivshakti Fabrication and Engineering",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Shivshakti Fabrication and Engineering Works",

    description:
      "Industrial fabrication, structural engineering, welding, and customized metal solutions.",

    images: ["/og-image.png"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
