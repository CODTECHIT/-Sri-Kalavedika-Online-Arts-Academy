import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react";

export default function ChessStrategicThinking() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
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
              Intellectual
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              How Chess Improves IQ and Strategic Thinking
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">Chess Master</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>June 02, 2026</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1200" 
              alt="Chess game" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Chess is more than a game—it&apos;s a powerful mental workout that sharpens strategic thinking, improves problem-solving abilities, and builds character. At Sri Kalavedika, our chess coaching program has transformed countless young minds.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Science Behind Chess and Intelligence</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Studies from around the world confirm that regular chess practice leads to improved cognitive abilities. Children who play chess show enhanced memory, better concentration, and superior analytical skills that transfer to academic performance.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Strategic Thinking Development</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every chess move requires thinking multiple steps ahead. This habit of strategic planning develops naturally and helps children in decision-making across all areas of life—from academics to personal relationships.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Building Patience and Resilience</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Chess teaches children to handle defeat gracefully and celebrate wins with humility. They learn that every decision has consequences and that patience often outlasts impulsive moves.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Focus and Concentration</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In an age of distractions, chess demands complete focus. Our students report improved attention spans and better academic engagement after just a few months of training.
            </p>

            <div className="bg-primary/5 rounded-[2rem] p-8 mt-12">
              <h3 className="text-xl font-bold text-primary mb-4">Start Your Chess Journey</h3>
              <p className="text-gray-600 mb-6">
                At Sri Kalavedika, our chess coaching program takes students from beginners to competitive players. Our structured curriculum ensures steady progress and genuine skill development.
              </p>
              <Link href="/services/chess">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Explore Chess Classes
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
