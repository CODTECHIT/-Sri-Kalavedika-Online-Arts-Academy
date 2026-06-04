import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
