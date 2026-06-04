"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Logo & Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 mb-6 md:mb-8 group">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                <img 
                  src="/logo/logo.jpeg" 
                  alt="Sri Kalavedika Logo" 
                  className="w-full h-full object-contain rounded-full shadow-sm"
                />
              </div>
              <span className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
                Sri <span className="text-secondary">Kalavedika</span>
              </span>
            </Link>
            
            <div className="space-y-3 md:space-y-4 w-full">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm text-gray-600">
                <MapPin size={18} className="text-secondary shrink-0" />
                <p>Delhi, India (Serving Students Worldwide)</p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm text-gray-600">
                <Mail size={18} className="text-secondary shrink-0" />
                <p>skvonlinearts@gmail.com</p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm text-gray-600">
                <Phone size={18} className="text-secondary shrink-0" />
                <p>+91 63027 49027</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-4 md:mb-6">Quick Links</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-3 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-4 md:mb-6">Connect With Us</h4>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-xs">
              Join our community and stay updated with our cultural events and programs.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors p-2 bg-gray-50 rounded-full"><FacebookIcon size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-secondary transition-colors p-2 bg-gray-50 rounded-full"><InstagramIcon size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors p-2 bg-gray-50 rounded-full"><YoutubeIcon size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-blue-700 transition-colors p-2 bg-gray-50 rounded-full"><LinkedinIcon size={20} /></Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 Sri Kalavedika Online Arts Academy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
