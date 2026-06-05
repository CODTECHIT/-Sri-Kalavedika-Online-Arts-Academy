import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react";

export default function BenefitsClassicalMusic() {
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
              Music
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Benefits of Classical Music for Child Development
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">Music Department</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>June 05, 2026</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=1200" 
              alt="Child learning music" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Classical music has been proven to have profound effects on the cognitive, emotional, and social development of children. At Sri Kalavedika, we witness these transformations daily as young learners begin their journey with Carnatic and other classical traditions.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Cognitive Enhancement</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Research consistently shows that children who learn classical music develop enhanced memory, improved concentration, and better mathematical abilities. The discipline required to master ragas and talas translates into academic excellence and sharp analytical skills.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Emotional Intelligence</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Music is a language of emotions. Through classical training, children learn to express complex feelings and develop empathy. The nuanced understanding of emotional tones in different ragas helps them connect with others on a deeper level.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Discipline & Patience</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlike instant gratification activities, music learning requires consistent practice and patience. Children who study classical arts develop remarkable self-discipline that serves them throughout their lives.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Cultural Connection</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Sri Kalavedika, our classical music programs connect children with India&apos;s rich cultural heritage. They learn about mythology through bhajans, understand mathematics through rhythm, and develop appreciation for centuries-old traditions.
            </p>

            <div className="bg-primary/5 rounded-[2rem] p-8 mt-12">
              <h3 className="text-xl font-bold text-primary mb-4">Start Your Child&apos;s Musical Journey</h3>
              <p className="text-gray-600 mb-6">
                At Sri Kalavedika, we offer structured Carnatic vocal programs designed specifically for young learners. Our expert teachers create a nurturing environment where children can discover the joy of music.
              </p>
              <Link href="/services/carnatic-vocal">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Explore Carnatic Vocal Classes
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
