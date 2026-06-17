import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import bgImage from "../../background-template-with-mandala-designs/kvtx_cz5f_191104.jpg";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Kalavedika | Online Arts Academy — Indian Classical Arts",
  description:
    "Nurturing Talent, Preserving Tradition, Inspiring Excellence. Expert-led online training in Indian Classical Music, Dance, Fine Arts & Cognitive Skills.",
  keywords:
    "Indian classical music, Carnatic vocal, Bharatanatyam, Kathak, online arts academy, Kalavedika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${playfair.variable} ${cinzel.variable} ${inter.variable}`}
    >
      <body
        className="min-h-full flex flex-col font-inter text-[#1a0a2e]"
        style={{ 
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundColor: "#fdf6e3"
        }}
        suppressHydrationWarning
      >
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
