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
  title: "Sri Kalavedika | Online Arts Academy — Indian Classical Arts, Music, Dance & Chess",
  description:
    "Nurturing Talent, Preserving Tradition, Inspiring Excellence. Expert-led online training in Indian Classical Music, Dance, Fine Arts, Chess, Vedic Maths & Cognitive Skills for all ages.",
  keywords:
    "Indian classical music, Carnatic vocal, Hindustani vocal, Bharatanatyam, Kathak, Kuchipudi, online arts academy, Kalavedika, online music classes, online dance classes, chess coaching, Vedic Maths, flute classes, guitar classes, keyboard classes, mridangam, violin, drawing, painting, theatre, online courses India",
  icons: {
    icon: "/logo/logo.jpeg",
  },
  openGraph: {
    title: "Sri Kalavedika | Online Arts Academy",
    description: "Expert-led online training in Indian Classical Music, Dance, Fine Arts & Cognitive Skills.",
    url: "https://www.srikalavedika.com",
    siteName: "Sri Kalavedika",
    locale: "en_US",
    type: "website",
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
