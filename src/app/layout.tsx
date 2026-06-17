import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Kalavedika | Online Arts Academy",
  description: "Nurturing Talent, Preserving Tradition, Inspiring Excellence. Expert-led online training in Performing Arts and Intellectual Skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${outfit.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-inter bg-white text-gray-900" suppressHydrationWarning>
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
