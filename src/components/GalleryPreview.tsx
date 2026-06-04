import Link from "next/link";
import { Camera, Play } from "lucide-react";

const previewImages = [
  "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80&w=400",
];

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Our Gallery
            </h2>
            <p className="text-gray-600 max-w-xl">
              A glimpse into the vibrant life at Sri Kalavedika. Explore our workshops, classes, and student performances.
            </p>
          </div>
          <Link href="/gallery" className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors group">
            View Full Gallery <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {previewImages.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-md group cursor-pointer">
              <img src={img} alt="Gallery Preview" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 {i % 2 === 0 ? <Camera className="text-white" /> : <Play fill="white" color="white" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
