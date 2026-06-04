"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform group-hover:scale-105">
                <img 
                  src="/logo/logo.jpeg" 
                  alt="Sri Kalavedika Logo" 
                  className="w-full h-full object-contain rounded-full shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-extrabold text-primary tracking-tight leading-none">
                  Sri Kalavedika
                </span>
                <span className="text-[8px] md:text-[10px] font-semibold text-secondary uppercase tracking-widest mt-0.5 md:mt-1">
                  Online Arts Academy
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 hover:text-primary font-semibold transition-colors text-sm xl:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/admissions">
              <button className="bg-secondary text-white px-6 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md text-sm">
                Free Demo Class
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[100] flex flex-col h-screen w-screen">
          {/* Menu Header */}
          <div className="flex justify-between items-center h-20 px-4 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/logo/logo.jpeg" 
                  alt="Sri Kalavedika Logo" 
                  className="w-full h-full object-contain rounded-full shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-primary leading-none">
                  Sri Kalavedika
                </span>
                <span className="text-[8px] font-semibold text-secondary uppercase mt-0.5">
                  Online Arts Academy
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-primary p-2 focus:outline-none bg-gray-50 rounded-full"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-grow overflow-y-auto bg-white flex flex-col p-6">
            <div className="flex flex-col gap-2 mb-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-primary py-4 border-b border-gray-50 flex justify-between items-center group"
                >
                  {link.name}
                  <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-secondary transition-colors" size={20} />
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-auto pb-10">
              <Link href="/admissions" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-secondary text-white py-5 rounded-2xl font-extrabold shadow-xl text-lg active:scale-95 transition-transform">
                  Book Free Demo Class
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
