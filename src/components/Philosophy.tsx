"use client";

import { Eye, Target, Heart, History, Globe, Users } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "SARWA KALA",
    description: "Sri Kalavedika — Connoting to SARWA KALA — is a platform for ALL the performing arts with the blessings of Devi Saraswati.",
    icon: <Eye className="text-primary" size={32} />,
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    title: "The Vision",
    description: "A platform to learn.. to perform.. and to get recognised all by only the 'Art'. Resembling our heritage irrespective of Nation, creed or community.",
    icon: <Target className="text-secondary" size={32} />,
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    title: "The Legacy",
    description: "Led by Maestro Guru Shri Chembai Srinivas, grandson of Padma Vibhushan Shri Chembai Vaidyavnath Bhagavathar.",
    icon: <Heart className="text-red-500" size={32} />,
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
  },
];

export default function Philosophy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            About Sri Kalavedika
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nurturing talent and preserving tradition since 2020 through a global platform for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.bgColor} p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className={`w-20 h-20 ${item.iconBg} rounded-full flex items-center justify-center mb-8 shadow-sm`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-6">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-[3rem] p-12 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <History size={20} className="text-secondary" />
              <span className="font-bold uppercase tracking-widest text-sm text-secondary">Heritage & Excellence</span>
            </div>
            <h3 className="text-3xl font-bold mb-6">Expertise Originating from the Roots</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              We stand tall with renowned, passionate Gurus who bring a minimum of a decade of experience. Our foundation is built on the belief that only with a strong foundation can a grand condominium of art be built.
            </p>
            <Link href="/about" className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-secondary hover:text-white transition-all shadow-xl">
              Discover Our Roots
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6 w-full">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10">
              <Globe className="text-secondary mb-4" />
              <h4 className="text-2xl font-bold">50+</h4>
              <p className="text-blue-100 text-sm">Countries Served</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10">
              <Users className="text-secondary mb-4" />
              <h4 className="text-2xl font-bold">10k+</h4>
              <p className="text-blue-100 text-sm">Happy Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
