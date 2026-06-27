import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react";

export default function Guitar() {
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
              Music
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Guitar Mastery: From Basics to Brilliance
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">Guitar Teacher</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>June 15, 2026</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src="/b3.jpeg" 
              alt="Guitar playing" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The guitar is one of the most popular and versatile instruments in the world. From classical to rock, it opens doors to endless musical possibilities. At Sri Kalavedika, we teach guitar to students of all skill levels.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Getting Started</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every great guitarist started with the basics: holding the guitar, learning chords, and practicing simple melodies. Our structured approach ensures a solid foundation.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Building Technique</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              From strumming patterns to fingerpicking, we focus on proper technique to prevent injury and ensure smooth progress.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Playing Your Favorite Songs</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              What keeps students motivated? Playing the songs they love! We incorporate popular music into our lessons while teaching music theory.
            </p>

            <div className="bg-primary/5 rounded-[2rem] p-8 mt-12">
              <h3 className="text-xl font-bold text-primary mb-4">Start Playing Today</h3>
              <p className="text-gray-600 mb-6">
                Join our guitar classes at Sri Kalavedika and begin your musical journey with expert guidance.
              </p>
              <Link href="/services/guitar">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Explore Guitar Classes
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
