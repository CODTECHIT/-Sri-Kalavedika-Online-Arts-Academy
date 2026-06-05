import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react";

export default function VedicMathsTips() {
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
              Education
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              5 Tips for Learning Vedic Maths Effectively
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">Maths Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>May 20, 2026</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1200" 
              alt="Mathematics learning" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Vedic Mathematics, with its 16 powerful sutras, can transform the way students approach calculations. At Sri Kalavedika, we&apos;ve helped thousands of students discover the joy of mental math. Here are our expert tips for mastering this ancient system.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">1. Start with Basics</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Before diving into complex calculations, ensure you have a solid foundation. Master basic addition, subtraction, and multiplication using Vedic methods. Speed comes naturally once fundamentals are clear.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">2. Practice Mental Math Daily</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlike traditional methods, Vedic Maths truly shines when practiced mentally. Start with simple calculations in your head—while walking, waiting, or during daily chores. This builds the neural pathways for fast calculation.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">3. Understand the Logic, Don&apos;t Memorize</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Each sutra has logical reasoning behind it. Understanding why a method works makes it easier to apply in different scenarios. At Sri Kalavedika, we emphasize conceptual understanding over rote learning.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">4. Apply to Real Problems</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Use Vedic techniques in everyday situations—splitting bills, calculating discounts, or solving homework problems. Real-world application reinforces learning and builds confidence.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">5. Be Patient with Progress</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Initially, Vedic methods may seem slower than traditional approaches. Stick with it! Once familiar, these techniques become 10-15 times faster than conventional calculations.
            </p>

            <div className="bg-primary/5 rounded-[2rem] p-8 mt-12">
              <h3 className="text-xl font-bold text-primary mb-4">Learn Vedic Maths the Right Way</h3>
              <p className="text-gray-600 mb-6">
                At Sri Kalavedika, our structured Vedic Mathematics program guides students from basics to advanced techniques. Our expert instructors ensure you understand the logic and apply it effectively.
              </p>
              <Link href="/services/vedic-maths">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Explore Vedic Maths Classes
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
