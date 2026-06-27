import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react";

export default function Bharatanatyam() {
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
              Exploring the World of Bharatanatyam
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">Dance Guru</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>June 10, 2026</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src="/b1.jpeg" 
              alt="Bharatanatyam dance" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Bharatanatyam, one of India's oldest classical dance forms, has enchanted audiences for centuries with its grace, storytelling, and spiritual depth. At Sri Kalavedika, we proudly teach this beautiful art form to children of all ages.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">History and Origins</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Originating in Tamil Nadu, Bharatanatyam has roots in the temples of South India where devadasis performed sacred dances as offerings to the deities. Today, it is celebrated worldwide for its artistic excellence.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Key Elements of Bharatanatyam</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This dance form combines nritta (pure dance), nritya (expressive dance), and natya (dramatic representation). The intricate footwork, hand gestures (mudras), and facial expressions create a complete storytelling experience.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Benefits for Children</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Learning Bharatanatyam improves flexibility, rhythm, concentration, and cultural awareness. It instills discipline, confidence, and a deep appreciation for Indian heritage.
            </p>

            <div className="bg-primary/5 rounded-[2rem] p-8 mt-12">
              <h3 className="text-xl font-bold text-primary mb-4">Start Your Dance Journey</h3>
              <p className="text-gray-600 mb-6">
                At Sri Kalavedika, our Bharatanatyam program guides students from basic steps to advanced performances under the guidance of experienced gurus.
              </p>
              <Link href="/services/bharatanatyam">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Explore Bharatanatyam Classes
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
