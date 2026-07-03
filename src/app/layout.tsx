import type { Metadata } from "next";
import { Varela_Round, Open_Sans } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Preloader from "@/components/Preloader";
import bgImage from "../../background-template-with-mandala-designs/kvtx_cz5f_191104.jpg";

// Rounded bold font for headings
const varelaRound = Varela_Round({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
  display: "swap",
});

// Clean font for body content
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Kalavedika | Online Arts Academy — Indian Classical Arts",
  description:
    "Nurturing Talent, Preserving Tradition, Inspiring Excellence. Expert-led online training in Indian Classical Music, Dance, Fine Arts & Cognitive Skills.",
  keywords:
    "Indian classical music, Carnatic vocal, Bharatanatyam, Kathak, online arts academy, Kalavedika",
  icons: {
    icon: "/logo/logo.jpeg",
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
      className={`${varelaRound.variable} ${openSans.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col text-[#1a0a2e]"
        style={{
          fontFamily: "var(--font-body)",
          backgroundImage: `linear-gradient(rgba(253, 246, 227, 0.88), rgba(253, 246, 227, 0.88)), url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundColor: "#fdf6e3",
        }}
        suppressHydrationWarning
      >
        <Preloader />
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
