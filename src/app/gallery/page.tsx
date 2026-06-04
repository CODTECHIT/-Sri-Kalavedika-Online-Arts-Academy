import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, Image as ImageIcon, Video, Camera } from "lucide-react";

const galleryItems = [
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
    title: "Classical Dance Workshop",
    category: "Events",
  },
  {
    type: "video",
    url: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=800",
    title: "Keyboard Performance",
    category: "Performances",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
    title: "Vedic Maths Class",
    category: "Classes",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80&w=800",
    title: "Annual Talent Show",
    category: "Events",
  },
  {
    type: "video",
    url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    title: "Contemporary Dance",
    category: "Performances",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800",
    title: "Chess Tournament",
    category: "Competitions",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      {/* Background Decorative Waves */}
      <div className="absolute top-20 left-[-5%] w-[30%] opacity-10 pointer-events-none animate-float">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="150" stroke="#FF9933" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="100" stroke="#002366" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the vibrant world of Sri Kalavedika through photos and videos of our classes, events, and performances.
            </p>
          </div>

          {/* Filter placeholder */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Classes", "Workshops", "Events", "Performances"].map((filter) => (
              <button key={filter} className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === "All" ? "bg-primary text-white shadow-lg" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}>
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, i) => (
              <div key={i} className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-square cursor-pointer">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 block">{item.category}</span>
                      <h4 className="text-white font-bold text-xl">{item.title}</h4>
                    </div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                      {item.type === "video" ? <Play fill="white" color="white" size={20} /> : <ImageIcon className="text-white" size={20} />}
                    </div>
                  </div>
                </div>
                {/* Media icon in normal state */}
                <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 group-hover:opacity-0 transition-opacity">
                   {item.type === "video" ? <Video className="text-white" size={18} /> : <Camera className="text-white" size={18} />}
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-16 text-center">
             <button className="border-2 border-primary text-primary font-bold px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm">
                View More Media
             </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
