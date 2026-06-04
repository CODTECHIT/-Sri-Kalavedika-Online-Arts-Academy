import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Trophy, Star, TrendingUp, Users } from "lucide-react";

const achievements = [
  {
    title: "Global Talent Contest 2023",
    category: "Competition Win",
    description: "Our student Sanya won the first prize in the international keyboard competition held online.",
    icon: <Trophy className="text-secondary" size={32} />,
    year: "2023",
  },
  {
    title: "ISO 9001:2015 Certified",
    category: "Certification",
    description: "Sri Kalavedika is now an ISO certified online arts academy for quality education standards.",
    icon: <Award className="text-primary" size={32} />,
    year: "2022",
  },
  {
    title: "10,000+ Students Worldwide",
    category: "Growth Milestone",
    description: "Successfully reached the milestone of teaching 10,000 students across 50 different countries.",
    icon: <Users className="text-secondary" size={32} />,
    year: "2023",
  },
  {
    title: "National Cultural Excellence Award",
    category: "Honor",
    description: "Recognized for our contribution to preserving and promoting Indian classical arts globally.",
    icon: <Star className="text-primary" size={32} />,
    year: "2021",
  },
];

const stories = [
  {
    name: "Rahul M.",
    skill: "Vedic Maths",
    text: "Rahul could barely solve basic multiplication, but after 6 months at Sri Kalavedika, he can solve complex equations in seconds!",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ananya S.",
    skill: "Classical Dance",
    text: "Ananya transformed from a shy child to a confident stage performer. She recently performed at a state-level cultural event.",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=400",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      {/* Background Decorative Waves */}
      <div className="absolute top-40 right-[-10%] w-[40%] opacity-10 pointer-events-none animate-wave">
        <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C100 20 200 180 300 100C400 20 500 180 600 100C700 20 800 180 900 100" stroke="#002366" strokeWidth="40" strokeLinecap="round"/>
        </svg>
      </div>

      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Student Achievements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the milestones, wins, and transformations of our students at Sri Kalavedika.
            </p>
          </div>

          {/* Achievement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {achievements.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:scale-[1.02] transition-transform">
                <div className="w-20 h-20 bg-gray-50 rounded-[1.5rem] flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">{item.category}</span>
                    <span className="text-xs font-bold text-gray-400">• {item.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <section className="bg-gray-50 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-secondary" />
                <h2 className="text-3xl font-bold text-primary">Success Stories</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                {stories.map((story, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-8 items-center">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-lg shrink-0">
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-bold text-primary mb-1">{story.name}</h4>
                      <p className="text-secondary font-bold text-sm mb-4 uppercase tracking-widest">{story.skill}</p>
                      <p className="text-gray-600 italic leading-relaxed text-sm">"{story.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-32 text-center bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Be Our Next Success Story?</h2>
              <p className="text-blue-100 mb-10 max-w-xl mx-auto">
                Join our academy and start your journey towards excellence in arts and skills today.
              </p>
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
                Register for a Free Demo
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
