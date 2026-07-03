"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        isScrolled
          ? {
              background: "rgba(26, 10, 46, 0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
              padding: "0.75rem 0",
            }
          : {
              background: "transparent",
              padding: "1.25rem 0",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "rgba(196,136,42,0.15)",
                  border: "2px solid rgba(196,136,42,0.4)",
                }}
              />
              <Image
                src="/logo/logo.jpeg"
                alt="Sri Kalavedika Logo"
                fill
                sizes="(max-width: 768px) 48px, 56px"
                style={{ objectFit: "contain" }}
                className="rounded-full relative z-10"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-lg md:text-xl font-bold leading-none"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: isScrolled ? "#f5c842" : "#1a0a2e",
                  textShadow: isScrolled
                    ? "0 0 20px rgba(245,200,66,0.3)"
                    : "none",
                  transition: "color 0.5s ease",
                }}
              >
                Sri Kalavedika
              </span>
              <span
                className="text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.2em] mt-0.5"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  color: isScrolled
                    ? "rgba(245,200,66,0.7)"
                    : "rgba(26,10,46,0.7)",
                  transition: "color 0.5s ease",
                }}
              >
                Online Arts Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-semibold transition-all duration-300 text-sm xl:text-base group"
                style={{ color: isScrolled ? "#fdf6e3" : "#1a0a2e" }}
              >
                {link.name}
                <span
                  className="absolute bottom-[-4px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                  style={{ background: "#c4882a" }}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/admissions">
              <button className="btn-shimmer text-sm px-6 py-2.5">
                Book Free Demo
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none transition-transform active:scale-90"
              style={{ color: isScrolled ? "#f5c842" : "#1a0a2e" }}
              aria-label="Toggle menu"
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
            className="lg:hidden fixed inset-0 z-[100] flex flex-col h-screen w-screen"
            style={{
              background: "rgba(26, 10, 46, 0.98)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Menu Header */}
            <div
              className="flex justify-between items-center h-20 px-4 shrink-0"
              style={{ borderBottom: "1px solid rgba(196,136,42,0.2)" }}
            >
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/logo/logo.jpeg"
                    alt="Sri Kalavedika Logo"
                    fill
                    sizes="40px"
                    style={{
                      objectFit: "contain",
                      border: "2px solid rgba(196,136,42,0.5)",
                    }}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-base font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "#f5c842",
                    }}
                  >
                    Sri Kalavedika
                  </span>
                  <span
                    className="text-[8px] font-semibold uppercase mt-0.5 tracking-widest"
                    style={{
                      fontFamily: "var(--font-cinzel)",
                      color: "rgba(245,200,66,0.6)",
                    }}
                  >
                    Online Arts Academy
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 focus:outline-none rounded-full"
                style={{
                  background: "rgba(196,136,42,0.15)",
                  border: "1px solid rgba(196,136,42,0.3)",
                }}
              >
                <X size={24} color="#f5c842" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-grow overflow-y-auto flex flex-col p-6">
              <div className="flex flex-col gap-2 mb-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07 }}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-bold py-4 flex justify-between items-center group"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        color: "#fdf6e3",
                        borderBottom: "1px solid rgba(196,136,42,0.15)",
                      }}
                    >
                      {link.name}
                      <ChevronDown
                        className="-rotate-90 transition-colors"
                        size={20}
                        color="rgba(196,136,42,0.5)"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4 mt-auto pb-10">
                <Link
                  href="/admissions"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <button className="btn-shimmer w-full text-lg py-4">
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
