"use client";

import Link from "next/link";
import Image from "next/image";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const MapPin = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const Mail = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);
const Phone = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const ArrowRight = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function Footer() {
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
          imageRendering: "crisp-edges"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

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
                { Icon: FacebookIcon, hover: "#c4882a", href: "https://www.facebook.com/share/1Cc9XxUdVx/" },
                { Icon: InstagramIcon, hover: "#e8a020", href: "https://www.instagram.com/srikalavedika?utm_source=qr&igsh=ZGJ5Y2VkdHR2a3Bp" },
              ].map(({ Icon, hover, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                { Icon: MapPin, text: "Delhi, India" },
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
                { label: "Gallery", href: "/gallery" },
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
