import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, Target, Heart, Award, Shield, Users, History, Sparkles, Star } from "lucide-react";

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
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Sri Kalavedika — Connoting to SARWA KALA — is a platform for ALL the performing arts with the blessings of Devi Saraswati.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed italic">
                "A platform to learn.. to perform.. and to get recognised all by only the 'Art'."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Known for its excellence with renowned, highly talented, passionate and dedicated Gurus, Sri Kala Vedika stands tall in today's digital lives! We conduct quality online classes for various branches of arts by the best professionals with a minimum of a decade of experience in their respective branches, belonging to the roots of the places where the art originated.
              </p>
            </div>
          </div>

          {/* Special Guru Section - Chembai Srinivas */}
          <div className="bg-primary/5 rounded-[4rem] p-10 md:p-16 mb-20 border border-primary/10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-widest">
                  <Award size={16} />
                  <span>Our Maestro</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Pujya Guru Shri Chembai Srinivas</h2>
                <p className="text-xl text-secondary font-bold">Global Artist & Grandson of Padma Vibhushan Shri Chembai Vaidyavnath Bhagavathar</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  For Carnatic Vocal and Violin, our guru is a Maestro from the village Chembai and has unparalleled experience of more than 25 years in teaching. As a global artist and carrying the legacy of his grandfather, he brings the authentic roots of Carnatic music to our shishyas.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-secondary shadow-sm">
                  <p className="text-primary font-bold italic">
                    "Quality never compromised — as we believe only with a strong foundation, can be built a Condominium."
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="/atrist.jpeg" 
                    alt="Pujya Guru Shri Chembai Srinivas" 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Artist Section - Rahul Sukun */}
          <div className="bg-secondary/5 rounded-[4rem] p-10 md:p-16 mb-32 border border-secondary/10">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-full text-sm font-bold uppercase tracking-widest">
                  <Star size={16} />
                  <span>Featured Artist</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Rahul Sukun</h2>
                <p className="text-xl text-secondary font-bold">Singer • Performer • Guitarist • India’s Got Talent Season 11</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Rahul Sukun is a soulful Indian singer, guitarist, and dynamic live performer who gained nationwide recognition through <strong>India’s Got Talent Season 11</strong>. Known for crafting "melodies that touch the soul," Rahul brings a warm, expressive, and emotionally rich style to our academy.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                  <p className="text-gray-600 text-base leading-relaxed">
                    Whether he is singing romantic Bollywood classics, heartfelt indie tracks, or soulful unplugged covers, Rahul connects instantly with the audience through his sincerity and musical honesty.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="/WhatsApp Image 2026-06-05 at 3.33.01 PM.jpeg" 
                    alt="Rahul Sukun - India's Got Talent Artist" 
                    className="w-full h-full object-cover object-top aspect-[4/5]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Heritage Section */}
          <div className="text-center mb-32">
            <div className="max-w-3xl mx-auto bg-orange-50 p-12 rounded-[3rem] border border-orange-100">
              <div className="flex justify-center mb-6 text-secondary">
                <Heart size={48} />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">The Patriotic Nerve</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Here, there are no teachers but only <span className="text-secondary font-bold">"Gurus"</span>, as per our Indian Culture to impart their skills to the shishyas, resembling our own heritage irrespective of Nation, creed or community.
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
