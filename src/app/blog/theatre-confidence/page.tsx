import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react";

export default function TheatreConfidence() {
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
              Arts
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              The Importance of Theatre for Children&apos;s Confidence
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">Theatre Coach</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>May 28, 2026</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200" 
              alt="Theatre acting" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Theatre training is one of the most effective ways to build confidence in children. At Sri Kalavedika, our theatre program transforms shy children into confident performers who can express themselves clearly and connect with any audience.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Overcoming Stage Fright</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Many adults still struggle with public speaking. Theatre training at a young age helps children overcome the fear of being watched and judged, giving them an unfair advantage in interviews, presentations, and leadership roles throughout their lives.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Body Language Mastery</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Acting teaches children to use their bodies expressively. From hand gestures to facial expressions, they learn to communicate without words—a skill that enhances all human interactions.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Empathy and Emotional Intelligence</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To play a character, actors must understand emotions deeply. This practice of putting oneself in another&apos;s shoes develops remarkable empathy and emotional intelligence in young learners.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Creative Problem Solving</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Theatre presents constant challenges—memorizing lines, adapting to unexpected situations, collaborating with cast members. These experiences build creative problem-solving skills that serve children in every area of life.
            </p>

            <div className="bg-primary/5 rounded-[2rem] p-8 mt-12">
              <h3 className="text-xl font-bold text-primary mb-4">Build Your Child&apos;s Confidence</h3>
              <p className="text-gray-600 mb-6">
                At Sri Kalavedika, our theatre and acting program is designed to bring out the best in every child. Whether your child dreams of the stage or simply needs to be more confident, our expert coaches provide a supportive environment.
              </p>
              <Link href="/services/theatre">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Explore Theatre Classes
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
