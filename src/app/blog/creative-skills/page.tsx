import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react";

export default function CreativeSkills() {
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
              Education
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Developing Your Child's Creative Skills
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">Creative Director</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>June 20, 2026</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src="/b5.jpeg" 
              alt="Creative skills" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Creativity is not just for artists—it's an essential skill for success in every field. At Sri Kalavedika, we believe in nurturing creativity from an early age.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Why Creativity Matters</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Creative thinking helps solve problems, adapt to change, and see opportunities others miss. It's a skill that benefits children throughout their lives.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Encouraging Creativity at Home</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Provide open-ended materials, ask open-ended questions, and allow time for unstructured play. Let children make mistakes and learn from them.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Arts and Creativity</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Music, dance, art, and theater are powerful ways to develop creative thinking. They teach children to express themselves and think outside the box.
            </p>

            <div className="bg-primary/5 rounded-[2rem] p-8 mt-12">
              <h3 className="text-xl font-bold text-primary mb-4">Nurture Creativity</h3>
              <p className="text-gray-600 mb-6">
                Explore our various arts programs at Sri Kalavedika and help your child unlock their creative potential.
              </p>
              <Link href="/services">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Explore All Programs
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
