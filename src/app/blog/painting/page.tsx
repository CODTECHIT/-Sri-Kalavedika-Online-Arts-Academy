import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react";

export default function Painting() {
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
              Arts
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              The Joy of Painting: A Creative Journey
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">Art Instructor</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>June 12, 2026</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src="/b2.jpeg" 
              alt="Painting art" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Painting is more than just creating beautiful images—it's a powerful form of self-expression and creativity. At Sri Kalavedika, we help children discover the joy of putting brush to canvas.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Unlocking Imagination</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Through painting, children learn to visualize their thoughts and bring them to life. There are no rules in creativity—every child's unique perspective is celebrated.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Developing Fine Motor Skills</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Holding brushes, mixing colors, and making precise strokes helps develop fine motor skills and hand-eye coordination, which are essential for many other activities.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Building Confidence</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Seeing their creations come to life gives children a tremendous sense of accomplishment and confidence in their abilities.
            </p>

            <div className="bg-primary/5 rounded-[2rem] p-8 mt-12">
              <h3 className="text-xl font-bold text-primary mb-4">Explore Your Creativity</h3>
              <p className="text-gray-600 mb-6">
                Join our painting classes at Sri Kalavedika and watch your child's imagination soar with colors and creativity.
              </p>
              <Link href="/services/creative-art">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Explore Painting Classes
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
