"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-[0_8px_32px_0_rgba(11,31,94,0.05)] py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/logo/logo.jpeg" 
                  alt="Sri Kalavedika Logo" 
                  className="w-full h-full object-contain rounded-full shadow-sm border-2 border-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-extrabold text-primary tracking-tight leading-none">
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
                className="relative text-gray-700 hover:text-primary font-semibold transition-colors text-sm xl:text-base group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/admissions">
              <button className="relative group px-6 py-2.5 bg-secondary text-white rounded-full font-bold hover:shadow-lg hover:shadow-secondary/20 transition-all text-sm overflow-hidden active:scale-95">
                <span className="relative z-10">Free Demo Class</span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary p-2 focus:outline-none transition-transform active:scale-90"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-[100] flex flex-col h-screen w-screen"
          >
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
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-grow overflow-y-auto flex flex-col p-6">
              <div className="flex flex-col gap-2 mb-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-bold text-primary py-4 border-b border-gray-50 flex justify-between items-center group"
                    >
                      {link.name}
                      <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-secondary transition-colors" size={20} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4 mt-auto pb-10">
                <Link href="/admissions" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-secondary text-white py-4 rounded-full font-extrabold shadow-xl shadow-secondary/20 text-lg active:scale-95 transition-transform">
                    Book Free Demo Class
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
