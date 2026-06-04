import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, Target, Heart, Award, Shield, Users, History, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      {/* Background Decorative Waves */}
      <div className="absolute top-40 left-[-10%] w-[40%] opacity-10 pointer-events-none animate-wave">
        <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C100 20 200 180 300 100C400 20 500 180 600 100C700 20 800 180 900 100" stroke="#FF9933" strokeWidth="40" strokeLinecap="round"/>
        </svg>
      </div>

      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              About Sri Kalavedika
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Established in 2020, Sri Kalavedika Online Arts Academy is more than just an educational platform. We are a global community dedicated to preserving Indian heritage while empowering the next generation with modern skills.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="bg-blue-50 p-12 rounded-[3rem] relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Eye className="text-primary mb-6" size={48} />
              <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To preserve, promote, and make Indian arts, culture, and skill-based learning accessible to students across the globe through quality online education. We envision a world where every child has the opportunity to connect with their roots while building a bright future.
              </p>
            </div>
            <div className="bg-orange-50 p-12 rounded-[3rem] relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Target className="text-secondary mb-6" size={48} />
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide expert-led online training in performing arts, creative arts, intellectual development, and personality-building skills while nurturing talent, confidence, and cultural values. We aim to inspire excellence in every student we touch.
              </p>
            </div>
          </div>

          {/* History & Story */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20 lg:mb-32">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-secondary font-bold uppercase tracking-widest mb-4">
                <History size={20} />
                <span className="text-sm">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Established in 2020</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Sri Kalavedika began its journey in 2020 (Registered in 2021) with a simple yet powerful goal: to bridge the gap between traditional Indian arts and the modern digital world.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Based in Delhi, India, we have grown from a small local initiative to a worldwide academy, serving thousands of students across 50+ countries. Our platform is designed to be much more than just a list of courses.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="border-l-4 border-secondary pl-4 md:pl-6 text-left">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary">50+</h4>
                  <p className="text-gray-500 text-xs md:text-sm font-medium">Countries Served</p>
                </div>
                <div className="border-l-4 border-primary pl-4 md:pl-6 text-left">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary">10k+</h4>
                  <p className="text-gray-500 text-xs md:text-sm font-medium">Happy Students</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-md lg:max-w-none">
               <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                 <img 
                   src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800" 
                   alt="Traditional arts performance" 
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-full -z-10 animate-float opacity-30"></div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { title: "Excellence", icon: <Award className="text-primary" />, desc: "Excellence in Education" },
                { title: "Preservation", icon: <Shield className="text-secondary" />, desc: "Cultural Preservation" },
                { title: "Innovation", icon: <Sparkles className="text-primary" />, desc: "Creativity & Innovation" },
                { title: "Discipline", icon: <Shield className="text-secondary" />, desc: "Discipline & Dedication" },
                { title: "Student-Centric", icon: <Users className="text-primary" />, desc: "Student-Centric Learning" },
              ].map((value, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-xs text-gray-500">{value.desc}</p>
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
