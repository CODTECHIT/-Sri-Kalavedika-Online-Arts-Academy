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
