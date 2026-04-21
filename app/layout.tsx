import type { Metadata } from "next";
import { roboto } from "@/app/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://cedroapp.vercel.app/"),

  title: {
    default: "Cedro Adventures | Unforgettable travel experiences",
    template: "%s | Cedro Adventures",
  },

  description:
    "Discover unforgettable travel experiences across Kenya and beyond with expertly curated tours and personalized adventures.",

  openGraph: {
    title: "Cedro Adventures | Unforgettable travel experiences",
    description:
      "Explore Kenya’s top destinations with curated tours, expert guides, and seamless travel planning.",
    url: "https://cedroapp.vercel.app",
    siteName: "Cedro Adventures",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cedro Adventures Travel Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cedro Adventures | Unforgettable travel experiences",
    description:
      "Explore Kenya’s top destinations with curated tours and seamless planning.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Cedro Adventures" />
      </head>
      
      <body
        className={`${roboto.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}