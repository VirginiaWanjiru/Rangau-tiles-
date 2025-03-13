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
  title: "Rangau Tiles and Sanitaryware Limited | Premium Ceramic & Porcelain Tiles and Modern Sanitaryware in Nairobi, Rongai & Kenya",
  description: "Rangau Tiles and Sanitaryware Limited supplies high-quality ceramic tiles, porcelain tiles, and modern sanitaryware. Serving residential and commercial needs in Nairobi, Rongai, and across Kenya.",
  icons: {
    icon: "/Rangau_1200x1200.ico",
  },
  openGraph: {
    title: "Rangau Tiles and Sanitaryware Limited | Premium Ceramic & Porcelain Tiles and Modern Sanitaryware",
    description: "Your go-to source for premium quality tiles and sanitaryware. Discover our wide range of ceramic tiles, porcelain tiles, and modern sanitaryware available in Nairobi, Rongai, and Kenya.",
    url: "https://rangautiles.com",
    siteName: "Rangau Tiles and Sanitaryware Limited",
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

        {/* Additional Meta Keywords for broader search context */}
        <meta name="keywords" content="tiles, sanitaryware, ceramic tiles, porcelain tiles, modern sanitaryware, tile showroom, bathroom tiles, kitchen tiles,floor tiles, wall tiles, tiles in Kenya, cheap tiles, affordable tiles, premium tiles, Rangau Tiles, Nairobi tiles, Rongai tiles, Kenya sanitaryware, home improvement, cement, micasso adhesives, adhesives, grout, frencia sanitaryware, twyford tiles, best adhesives in Nairobi" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rangautiles.com" />
        <meta property="og:title" content="Rangau Tiles and Sanitaryware Limited" />
        <meta property="og:description" content="Your go-to source for premium quality tiles and sanitaryware. Discover our wide range of ceramic tiles, porcelain tiles, and modern sanitaryware available in Nairobi, Rongai, and Kenya." />
        <meta property="og:image" content="https://rangautiles.com/Rangau_1200x1200.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rangau Tiles and Sanitaryware Limited" />
        <meta name="twitter:description" content="Discover premium ceramic tiles, porcelain tiles, and modern sanitaryware at Rangau Tiles. Serving Nairobi, Rongai, and Kenya for all your tile and sanitaryware needs." />
        <meta name="twitter:image" content="https://rangautiles.com/Rangau_1200x1200.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rangau Tiles and Sanitaryware Limited",
              "url": "https://rangautiles.com",
              "logo": "https://rangautiles.com/Rangau_1200x1200.ico",
              "description": "Supplier of high-quality ceramic tiles, porcelain tiles, and modern sanitaryware for residential and commercial projects in Nairobi, Rongai, and across Kenya.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "OleKasasi, OngataRongai",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "areaServed": ["Nairobi", "Rongai", "Kenya"]
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
