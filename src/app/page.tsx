import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import CourseCategories from "@/components/CourseCategories";
import ExpertGurus from "@/components/ExpertGurus";
import Features from "@/components/Features";
import LearningJourney from "@/components/LearningJourney";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import CulturalHeritage from "@/components/CulturalHeritage";
import Footer from "@/components/Footer";
import DecorativeDivider from "@/components/ui/DecorativeDivider";

export const metadata: Metadata = {
  title: "Sri Kalavedika | Online Arts Academy - Indian Classical Music, Dance & Chess",
  description: "Learn Indian classical music, dance, chess, Vedic Maths & more from expert gurus. Live online classes for all ages. Book a free demo today!",
  keywords: "online music classes, online dance classes, Carnatic vocal, Hindustani vocal, Bharatanatyam, Kathak, Kuchipudi, chess coaching, Vedic Maths, flute, guitar, keyboard, online courses",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <DecorativeDivider />
        <Statistics />
        <DecorativeDivider />
        <CulturalHeritage />
        <DecorativeDivider />
        <CourseCategories />
        <DecorativeDivider />
        <ExpertGurus />
        <DecorativeDivider />
        <Features />
        <DecorativeDivider />
        <LearningJourney />
        <DecorativeDivider />
        <Testimonials />
        <DecorativeDivider />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
