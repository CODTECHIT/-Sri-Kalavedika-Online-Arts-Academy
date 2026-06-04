"use client";

import { Play } from "lucide-react";

const videos = [
  {
    title: "Our student Keshav playing the ever-charming song 'Kesariya' on Keyboard!",
    thumbnail: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=800",
    student: "Keshav Pathak, 8 Years",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    title: "Our students find learning with dance floor on the beats of 'Gali Gali' Goodly!",
    thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    student: "Krishna Rao Devare, 6 Years",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
  {
    title: "Celebrating TalentGum's annual talent contest with students across the world!",
    thumbnail: "https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80&w=800",
    student: "Streaming Talent Contest",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
  },
];

export default function StudentVideos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Our Student Performances
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Witness the incredible talent and progress of our students from across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {videos.map((video, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-xl mb-6">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl group-hover:scale-110 transition-transform">
                    <Play fill="white" color="white" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-xs bg-secondary px-3 py-1.5 rounded-full shadow-lg">
                    {video.student}
                  </p>
                </div>
              </div>
              <h3 className="text-primary font-bold mb-3 line-clamp-2 text-lg group-hover:text-secondary transition-colors">
                {video.title}
              </h3>
              <div className="mt-auto">
                <button className="text-primary font-bold flex items-center gap-2 text-sm uppercase tracking-widest hover:text-secondary transition-colors">
                  Watch Video <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
