import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import DecorativeDivider from "@/components/ui/DecorativeDivider";

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
    image: "/theaters.jpg",
  },
  {
    title: "5 Tips for Learning Vedic Maths Effectively",
    excerpt: "Master mental calculations with these simple and effective techniques from our Vedic Maths experts.",
    author: "Maths Expert",
    date: "May 20, 2026",
    category: "Education",
    image: "/Vedic Maths.jpg",
  },
  {
    title: "Exploring the World of Bharatanatyam",
    excerpt: "An introduction to one of India's most ancient and revered classical dance forms.",
    author: "Dance Guru",
    date: "June 10, 2026",
    category: "Dance",
    image: "/b1.jpeg",
  },
  {
    title: "The Joy of Painting: A Creative Journey",
    excerpt: "Discover how painting can unlock your child's imagination and artistic potential.",
    author: "Art Instructor",
    date: "June 12, 2026",
    category: "Arts",
    image: "/b2.jpeg",
  },
  {
    title: "Guitar Mastery: From Basics to Brilliance",
    excerpt: "Learn how to master the guitar with structured lessons and expert guidance.",
    author: "Guitar Teacher",
    date: "June 15, 2026",
    category: "Music",
    image: "/b3.jpeg",
  },
  {
    title: "The Magic of Kathak Dance",
    excerpt: "Experience the grace and storytelling through movement in this beautiful classical dance.",
    author: "Kathak Expert",
    date: "June 18, 2026",
    category: "Dance",
    image: "/b4.jpeg",
  },
  {
    title: "Developing Your Child's Creative Skills",
    excerpt: "Practical tips for nurturing creativity and artistic expression in young children.",
    author: "Creative Director",
    date: "June 20, 2026",
    category: "Education",
    image: "/b5.jpeg",
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
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
            {blogPosts.map((post, i) => {
              const blogUrls: Record<string, string> = {
                "Benefits of Classical Music for Child Development": "/blog/benefits-classical-music",
                "How Chess Improves IQ and Strategic Thinking": "/blog/chess-strategic-thinking",
                "The Importance of Theatre for Children's Confidence": "/blog/theatre-confidence",
                "5 Tips for Learning Vedic Maths Effectively": "/blog/vedic-maths-tips",
                "Exploring the World of Bharatanatyam": "/blog/bharatanatyam",
                "The Joy of Painting: A Creative Journey": "/blog/painting",
                "Guitar Mastery: From Basics to Brilliance": "/blog/guitar",
                "The Magic of Kathak Dance": "/blog/kathak",
                "Developing Your Child's Creative Skills": "/blog/creative-skills",
              };
              
              return (
                <Link key={i} href={blogUrls[post.title] || "#"} className="flex flex-col md:flex-row gap-8 items-center md:items-start group cursor-pointer">
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
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <DecorativeDivider />
      <Footer />
    </div>
  );
}
