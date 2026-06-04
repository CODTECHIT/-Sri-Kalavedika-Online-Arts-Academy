import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Music, Trophy, Star } from "lucide-react";

const upcomingEvents = [
  {
    title: "Global Summer Arts Camp 2026",
    date: "June 15 - July 15, 2026",
    location: "Online (Global)",
    category: "Summer Camp",
    description: "An intensive month-long journey exploring Music, Dance, and Vedic Maths. Perfect for students wanting to learn multiple skills.",
    icon: <Star className="text-secondary" />,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "International Music Festival",
    date: "August 20, 2026",
    location: "Live Streaming",
    category: "Music Festival",
    description: "A grand celebration of classical and light music featuring performances by our expert faculty and star students.",
    icon: <Music className="text-primary" />,
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Grand Chess Tournament",
    date: "September 10, 2026",
    location: "Online Arena",
    category: "Chess Tournaments",
    description: "Compete with students worldwide in our annual chess championship. Prizes for winners in different age groups.",
    icon: <Trophy className="text-secondary" />,
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Classical Dance Workshop",
    date: "October 05, 2026",
    location: "Interactive Zoom",
    category: "Dance Workshops",
    description: "Focus on expressions and rhythm in this specialized workshop led by renowned classical dancers.",
    icon: <Users className="text-primary" />,
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Theatre & Acting Intensive",
    date: "November 12, 2026",
    location: "Online Studio",
    category: "Theatre Workshops",
    description: "Learn stage presence, voice modulation, and character building from industry professionals.",
    icon: <Star className="text-secondary" />,
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800",
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Events & Workshops
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our upcoming summer camps, cultural festivals, and skill-building workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-lg">
                    {event.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                      <Calendar size={18} className="text-secondary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                      <MapPin size={18} className="text-secondary" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {event.description}
                  </p>
                  <button className="mt-auto w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all shadow-md">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
