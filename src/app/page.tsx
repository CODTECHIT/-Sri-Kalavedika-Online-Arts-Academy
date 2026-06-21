import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import CourseCategories from "@/components/CourseCategories";
import ExpertGurus from "@/components/ExpertGurus";
import Features from "@/components/Features";
import LearningJourney from "@/components/LearningJourney";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Statistics />
        <CourseCategories />
        <ExpertGurus />
        <Features />
        <LearningJourney />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
