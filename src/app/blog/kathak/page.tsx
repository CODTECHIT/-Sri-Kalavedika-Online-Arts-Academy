import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react";

export default function Kathak() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:text-secondary transition-colors">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest rounded-full mb-6">
              Dance
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              The Magic of Kathak Dance
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">Kathak Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>June 18, 2026</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src="/b4.jpeg" 
              alt="Kathak dance" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Kathak, the classical dance of North India, is known for its graceful spins, intricate footwork, and beautiful storytelling. At Sri Kalavedika, we bring this magical art form to our students.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">A Rich Cultural Heritage</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kathak evolved in the courts of North Indian kings, blending Hindu and Muslim cultural influences. It tells stories from Indian epics through movement and expression.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Beauty of Spins</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The signature spins (chakkars) of Kathak require incredible balance and control, creating a mesmerizing visual effect that captivates audiences.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Rhythm and Expression</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kathak dancers master complex rhythmic patterns (tala) and express emotions through facial expressions and hand gestures.
            </p>

            <div className="bg-primary/5 rounded-[2rem] p-8 mt-12">
              <h3 className="text-xl font-bold text-primary mb-4">Experience Kathak</h3>
              <p className="text-gray-600 mb-6">
                Join our Kathak classes at Sri Kalavedika and discover the grace and beauty of this timeless dance form.
              </p>
              <Link href="/services/kathak">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Explore Kathak Classes
                </button>
              </Link>
            </div>
          </article>

          {/* Share & Like */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
            <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
              <Heart size={20} />
              <span className="font-medium">Like this article</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
              <Share2 size={20} />
              <span className="font-medium">Share</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
