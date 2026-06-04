import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Benefits of Classical Music for Child Development",
    excerpt: "Discover how learning classical music enhances cognitive skills, discipline, and emotional intelligence in children.",
    author: "Music Dept",
    date: "June 05, 2026",
    category: "Music",
    image: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "How Chess Improves IQ and Strategic Thinking",
    excerpt: "Exploring the scientific link between chess and improved problem-solving, focus, and intellectual growth.",
    author: "Chess Master",
    date: "June 02, 2026",
    category: "Intellectual",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Importance of Theatre for Children's Confidence",
    excerpt: "Acting and theatre aren't just for performers—they build essential life skills like public speaking and empathy.",
    author: "Theatre Coach",
    date: "May 28, 2026",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "5 Tips for Learning Vedic Maths Effectively",
    excerpt: "Master mental calculations with these simple and effective techniques from our Vedic Maths experts.",
    author: "Maths Expert",
    date: "May 20, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800",
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Academy Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and articles on arts, skills, and children's growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post, i) => (
              <article key={i} className="flex flex-col md:flex-row gap-8 items-center md:items-start group cursor-pointer">
                <div className="w-full md:w-64 h-64 rounded-[2rem] overflow-hidden shadow-lg shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">{post.category}</span>
                    <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Read Full Article <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
