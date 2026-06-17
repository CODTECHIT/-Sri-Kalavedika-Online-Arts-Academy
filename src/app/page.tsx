import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import CourseCategories from "@/components/CourseCategories";
import Features from "@/components/Features";
import LearningJourney from "@/components/LearningJourney";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Statistics />
        <CourseCategories />
        <Features />
        <LearningJourney />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
