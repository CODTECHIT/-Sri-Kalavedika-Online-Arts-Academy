"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-white pt-20 pb-10 overflow-hidden border-t border-primary/5">
      {/* Background soft blob */}
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute top-1/2 left-0 w-[20vw] h-[20vw] bg-primary/5 rounded-full blur-[80px] -z-10 animate-blob" style={{ animationDelay: "3s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Mission */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/logo/logo.jpeg" 
                  alt="Sri Kalavedika Logo" 
                  className="w-full h-full object-contain rounded-full shadow-sm border-2 border-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-primary leading-none">
                  Sri Kalavedika
                </span>
                <span className="text-[8px] font-semibold text-secondary uppercase mt-0.5 tracking-wider">
                  Online Arts Academy
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Nurturing talent, preserving tradition, and inspiring artistic excellence across the globe through structured online academy tracks.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1"><FacebookIcon size={18} /></Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 hover:bg-secondary hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1"><InstagramIcon size={18} /></Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 hover:bg-red-600 hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1"><YoutubeIcon size={18} /></Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 hover:bg-blue-600 hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1"><LinkedinIcon size={18} /></Link>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="font-outfit font-extrabold text-primary text-sm uppercase tracking-widest mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-600 group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={16} />
                </div>
                <p className="mt-1.5">Delhi, India (Serving Students Worldwide)</p>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600 group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={16} />
                </div>
                <p className="mt-1.5 break-all">skvonlinearts@gmail.com</p>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600 group">
                <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={16} />
                </div>
                <p className="mt-1.5">+91 63027 49027</p>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-outfit font-extrabold text-primary text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  <ArrowRight size={12} className="text-secondary/55 group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  <ArrowRight size={12} className="text-secondary/55 group-hover:translate-x-1 transition-transform" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  <ArrowRight size={12} className="text-secondary/55 group-hover:translate-x-1 transition-transform" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  <ArrowRight size={12} className="text-secondary/55 group-hover:translate-x-1 transition-transform" />
                  <span>Admissions</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-1 group">
                  <ArrowRight size={12} className="text-secondary/55 group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-outfit font-extrabold text-primary text-sm uppercase tracking-widest mb-6">Stay Connected</h4>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Join our newsletter to receive cultural event invitations, notifications, and art updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative w-full">
              <div className="relative flex items-center bg-gray-50 border border-primary/5 focus-within:border-primary/25 rounded-full overflow-hidden transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="w-full pl-5 pr-12 py-3.5 bg-transparent text-sm outline-none text-primary"
                />
                <button
                  type="submit"
                  className={cn(
                    "absolute right-1.5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer",
                    isSubscribed ? "bg-emerald-500 text-white" : "bg-primary text-white hover:bg-secondary"
                  )}
                >
                  {isSubscribed ? <Check size={16} /> : <Send size={16} />}
                </button>
              </div>
            </form>
            {isSubscribed && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-emerald-600 font-semibold mt-3 flex items-center gap-1"
              >
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Subscription successful! Thank you.</span>
              </motion.p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Sri Kalavedika Online Arts Academy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
