import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import PopularCourses from "@/components/PopularCourses";
import Philosophy from "@/components/Philosophy";
import StudentVideos from "@/components/StudentVideos";
import GalleryPreview from "@/components/GalleryPreview";
import ReferEarn from "@/components/ReferEarn";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Testimonials />
        <PopularCourses />
        <Philosophy />
        <StudentVideos />
        <GalleryPreview />
        <ReferEarn />
      </main>
      <Footer />
    </div>
  );
}
