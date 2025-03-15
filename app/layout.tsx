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
  title: "Rangau Tiles and Sanitaryware Limited | Quality Tiles and Sanitaryware in Nairobi, Kenya",
  description: "Supplier of high-quality tiles and sanitaryware in Nairobi, Kenya.",
  icons: {
    icon: "/Rangau_1200x1200.ico",
  },
  openGraph: {
    title: "Rangau Tiles and Sanitaryware Limited",
    description: "Your go-to store for premium tiles and sanitaryware.",
    url: "https://rangautiles.com",
    siteName: "Rangau Tiles",
    type: "website",
    images: [
      {
        url: "https://rangautiles.com/Rangau_1200x1200.ico.png",
        width: 1200,
        height: 630,
        alt: "Rangau Tiles and Sanitaryware Limited Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="_tFuWxvoQft8N9tJOfbjiVt-6FJPq1f1BHJGqqk311s" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rangautiles.com" />
        <meta property="og:title" content="Rangau Tiles and Sanitaryware Limited" />
        <meta property="og:description" content="Your go-to store for premium tiles and sanitaryware." />
        <meta property="og:image" content="https://rangautiles.com/Rangau_1200x1200.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rangau Tiles and Sanitaryware Limited" />
        <meta name="twitter:description" content="Your go-to store for premium tiles and sanitaryware." />
        <meta name="twitter:image" content="https://rangautiles.com/Rangau_1200x1200.ico" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Rangau Tiles and Sanitaryware Limited",
          "url": "https://rangautiles.com",
          "logo": "https://rangautiles.com/Rangau_1200x1200.ico",
          "description": "Supplier of high-quality tiles and sanitaryware in Nairobi, Kenya.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "OleKasasi,OngataRongai",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          }
        }) }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
