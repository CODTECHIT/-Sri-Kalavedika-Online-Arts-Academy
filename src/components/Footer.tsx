"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, Check, Send } from "lucide-react";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);
const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
);
const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
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
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{ background: "#0d0520" }}
    >
      {/* Top Decorative Border */}
      <div
        className="absolute top-0 left-0 w-full h-[18px] sm:h-[22px] md:h-[28px] z-20 animate-shimmer-gold"
        style={{
          backgroundImage: "url('/border.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "top left",
          imageRendering: "crisp-edges" // Increases sharpness for intricate jewelry/temple patterns
        }}
        aria-hidden="true"
      ></div>

      {/* Mandala tile background */}
      <div
        className="mandala-watermark inset-0 w-full h-full"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      >
        <Image
          src="/mandalas/tile-mandala.svg"
          alt=""
          fill
          style={{ filter: "sepia(1) saturate(2) hue-rotate(10deg)", objectFit: "cover" }}
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Logo & Mission */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 rounded-full"
                style={{ border: "2px solid rgba(196,136,42,0.4)", background: "rgba(196,136,42,0.1)" }}
              >
                <Image
                  src="/logo/logo.jpeg"
                  alt="Sri Kalavedika Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-lg font-bold leading-none"
                  style={{ fontFamily: "var(--font-playfair)", color: "#f5c842" }}
                >
                  Sri Kalavedika
                </span>
                <span
                  className="text-[8px] font-semibold uppercase mt-0.5 tracking-wider"
                  style={{ fontFamily: "var(--font-cinzel)", color: "rgba(245,200,66,0.5)" }}
                >
                  Online Arts Academy
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(253,246,227,0.5)" }}>
              Nurturing talent, preserving tradition, and inspiring artistic excellence across the globe through structured online academy tracks.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, hover: "#c4882a" },
                { Icon: InstagramIcon, hover: "#e8a020" },
                { Icon: YoutubeIcon, hover: "#c4882a" },
                { Icon: LinkedinIcon, hover: "#e8a020" },
              ].map(({ Icon, hover }, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(196,136,42,0.1)",
                    border: "1px solid rgba(196,136,42,0.2)",
                    color: "rgba(253,246,227,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${hover}22`;
                    (e.currentTarget as HTMLElement).style.borderColor = hover;
                    (e.currentTarget as HTMLElement).style.color = hover;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(196,136,42,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,136,42,0.2)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(253,246,227,0.5)";
                  }}
                >
                  <Icon size={17} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4
              className="text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-cinzel)", color: "#f5c842" }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              {[
                { Icon: MapPin, text: "Delhi, India (Serving Students Worldwide)" },
                { Icon: Mail, text: "skvonlinearts@gmail.com" },
                { Icon: Phone, text: "+91 63027 49027" },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3 text-sm group">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: "rgba(196,136,42,0.1)",
                      border: "1px solid rgba(196,136,42,0.2)",
                      color: "#c4882a",
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <p className="mt-1.5 break-all" style={{ color: "rgba(253,246,227,0.55)" }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4
              className="text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-cinzel)", color: "#f5c842" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Admissions", href: "/admissions" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 group transition-colors duration-300"
                    style={{ color: "rgba(253,246,227,0.5)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#f5c842";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(253,246,227,0.5)";
                    }}
                  >
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                      style={{ color: "rgba(196,136,42,0.5)" }}
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4
              className="text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-cinzel)", color: "#f5c842" }}
            >
              Stay Connected
            </h4>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(253,246,227,0.5)" }}>
              Join our newsletter to receive cultural event invitations, notifications, and art updates.
            </p>

            <form onSubmit={handleSubscribe} className="relative w-full">
              <div
                className="relative flex items-center overflow-hidden rounded-full transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(196,136,42,0.25)",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="w-full pl-5 pr-12 py-3.5 bg-transparent text-sm outline-none"
                  style={{ color: "#fdf6e3" }}
                />
                <button
                  type="submit"
                  className="absolute right-1.5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                  style={{
                    background: isSubscribed
                      ? "#16a34a"
                      : "linear-gradient(135deg, #c4882a, #e8a020)",
                    color: "#fff",
                  }}
                >
                  {isSubscribed ? <Check size={16} /> : <Send size={16} />}
                </button>
              </div>
            </form>
            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-semibold mt-3 flex items-center gap-1"
                style={{ color: "#4ade80" }}
              >
                <Check className="w-3.5 h-3.5" />
                <span>Subscription successful! Thank you.</span>
              </motion.p>
            )}
          </div>
        </div>

        {/* Gold Divider */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "linear-gradient(90deg, transparent, rgba(196,136,42,0.4), transparent)" }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" style={{ color: "rgba(253,246,227,0.35)" }}>
          <p>© {new Date().getFullYear()} Sri Kalavedika Online Arts Academy. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Designed by</span>
            <a href="https://codtechitsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5c842] transition-colors font-semibold">
              CODTECH IT SOLUTIONS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
