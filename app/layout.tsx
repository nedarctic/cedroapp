import type { Metadata } from "next";
import { roboto } from "@/app/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Cedro Adventures | Unforgettable travel experiences.",
  description: "Unforgettable travel experiences.",
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