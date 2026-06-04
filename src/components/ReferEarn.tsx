"use client";

import { Award, Shield, Users, Zap } from "lucide-react";

const benefits = [
  {
    title: "Expert-Led Training",
    description: "Learn from highly qualified instructors with years of professional experience.",
    icon: <Award className="text-primary" size={24} />,
  },
  {
    title: "Cultural Values",
    description: "Nurturing confidence and tradition while building modern skills.",
    icon: <Shield className="text-secondary" size={24} />,
  },
  {
    title: "Personalized Learning",
    description: "One-on-one and group sessions tailored to your pace and interests.",
    icon: <Users className="text-primary" size={24} />,
  },
  {
    title: "Global Reach",
    description: "Quality online education accessible to students worldwide from India.",
    icon: <Zap className="text-secondary" size={24} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Why Choose Sri Kalavedika?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a complete platform for nurturing talent, preserving tradition, and inspiring excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Join thousands of students worldwide and discover your hidden talent with Sri Kalavedika.
            </p>
            <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
              Book a Free Demo Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
