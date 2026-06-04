"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, MessageSquare, Send, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      {/* Background Decorative Waves */}
      <div className="absolute top-20 left-[-5%] w-[30%] opacity-10 pointer-events-none animate-float">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="150" stroke="#FF9933" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="100" stroke="#002366" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our courses or want to book a free demo? We&apos;re here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-1">Phone Number</h3>
                      <p className="text-gray-600">+91 63027 49027</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquare className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-1">WhatsApp</h3>
                      <p className="text-gray-600">+91 63027 49027</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-1">Email Address</h3>
                      <p className="text-gray-600">skvonlinearts@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-1">Our Location</h3>
                      <p className="text-gray-600">Delhi, India (Online Academy Serving Students Worldwide)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links placeholder */}
              <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                    Follow us on social media to stay updated with upcoming events, competitions, and student performances.
                  </p>
                  <div className="flex gap-4">
                    {/* Add social links if needed */}
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                      <Globe size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Interested Course</label>
                  <select className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white appearance-none">
                    <option>Classical Vocal Music</option>
                    <option>Chess Coaching</option>
                    <option>Vedic Mathematics</option>
                    <option>Dance Classes</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-secondary text-white font-bold py-5 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 group">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
