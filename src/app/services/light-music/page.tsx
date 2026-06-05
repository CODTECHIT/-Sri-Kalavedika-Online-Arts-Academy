import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Music, Star, BookOpen, Clock, Users, CheckCircle2, Mic2 } from "lucide-react";

export default function LightMusicPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Mic2 className="text-secondary" size={24} />
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">Vocal & Performance</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Light Music & <br />
                <span className="text-secondary">Soulful Bhajans</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Connect with your emotions through melodies that touch the soul. Our light music program blends classical foundations with contemporary expression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/admissions">
                  <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl w-full sm:w-auto">
                    Book a Session
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-light-blue transition-all w-full sm:w-auto">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white animate-float">
                <img 
                  src="/WhatsApp Image 2026-06-05 at 3.33.01 PM.jpeg" 
                  alt="Light Music and Performance" 
                  className="w-full h-full object-cover object-top aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 opacity-30 blur-2xl"></div>
            </div>
          </div>

          {/* Featured Artist Section */}
          <section className="bg-secondary/5 rounded-[4rem] p-12 md:p-20 mb-32 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-full text-sm font-bold uppercase tracking-widest">
                  <Star size={16} />
                  <span>Our Featured Artist</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Rahul Sukun</h2>
                <p className="text-xl text-secondary font-bold italic">India’s Got Talent Season 11</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Rahul Sukun is a soulful Indian singer, guitarist, and dynamic live performer known for crafting <strong>"melodies that touch the soul."</strong> His voice carries a soothing charm, blending depth and clarity with effortless control.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                  <p className="text-gray-600 italic">
                    "Whether he is singing romantic Bollywood classics, heartfelt indie tracks, or soulful unplugged covers, Rahul connects instantly through his sincerity and musical honesty."
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Soulful Identity", desc: "Blending depth and clarity with effortless vocal control." },
                  { title: "Performance Expert", desc: "Recognized nationwide through India’s Got Talent Season 11." },
                  { title: "Versatile Style", desc: "From Bollywood classics to heartfelt indie and Sufi tracks." },
                  { title: "Emotional Depth", desc: "Music crafted with warmth and authenticity in its purest form." },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-primary mb-2">{stat.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Program Highlights */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">What We Offer</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Explore the diverse world of non-classical music with a focus on expression, performance, and emotional connection.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Bollywood Unplugged", desc: "Reimagining romantic classics with a soulful, acoustic touch." },
                { title: "Indie & Folk", desc: "Heartfelt storytelling through modern acoustic and folk melodies." },
                { title: "Soulful Bhajans", desc: "Devotional songs that bring peace and spiritual connection." },
                { title: "Performance Coaching", desc: "Learn stage presence, audience connection, and vocal dynamics." },
                { title: "Sufi Elements", desc: "Exploring the mystical and spiritual side of contemporary music." },
                { title: "Modern Storytelling", desc: "Crafting melodies that resonate with today's listeners." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { icon: <Users />, label: "Target Audience", value: "All Age Groups" },
              { icon: <Clock />, label: "Focus", value: "Vocal & Performance" },
              { icon: <BookOpen />, label: "Format", value: "Interactive Sessions" },
            ].map((detail, i) => (
              <div key={i} className="flex flex-col items-center p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {detail.icon}
                </div>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">{detail.label}</span>
                <h4 className="text-xl font-bold text-primary">{detail.value}</h4>
              </div>
            ))}
          </div>

          {/* Curriculum */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">Curriculum Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Vocal Texture & Clarity",
                "Emotional Expression in Singing",
                "Stage Presence & Confidence",
                "Acoustic Guitar Arrangements",
                "Mic Technique & Sound Dynamics",
                "Genre Blending & Versatility",
                "Audience Connection Skills",
                "Storytelling through Music",
                "Contemporary Pop & Indie styles"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white border border-gray-50 rounded-2xl shadow-sm text-left">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span className="font-bold text-primary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
