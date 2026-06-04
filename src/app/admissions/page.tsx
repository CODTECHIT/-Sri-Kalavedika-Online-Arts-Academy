"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Classical Vocal Music",
    type: "Registration",
  });

  const courses = [
    "Classical Vocal Music",
    "Light Music & Bhajans",
    "Keyboard Classes",
    "Flute Classes",
    "Dance (Classical & Contemporary)",
    "Chess Coaching",
    "Vedic Mathematics",
    "Rubik's Cube Training",
    "Theatre & Acting",
    "Public Speaking",
  ];

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Admission Request*\n\n` +
      `*Type:* ${formData.type}\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Interested Course:* ${formData.course}\n\n` +
      `Please contact me for the next steps!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/916302749027?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                Online Admissions
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Start your artistic journey today. Fill out the form below to register or book a free demo class. Your request will be sent directly to our team via WhatsApp.
              </p>
              
              <div className="space-y-6">
                {[
                  "Expert-Led Live Online Classes",
                  "Structured Syllabus & Certification",
                  "Flexible Weekend & Weekday Batches",
                  "Personalized Attention for Every Student"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 justify-center lg:justify-start">
                    <CheckCircle2 className="text-secondary" size={24} />
                    <span className="font-bold text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="flex-1 w-full max-w-xl">
              <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50">
                <form className="space-y-6" onSubmit={handleWhatsAppRedirect}>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Inquiry Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      {["Registration", "Demo Class"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, type })}
                          className={`py-3 rounded-2xl font-bold text-sm transition-all border-2 ${formData.type === type ? "bg-primary text-white border-primary" : "bg-white text-gray-400 border-gray-100 hover:border-primary/30"}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Student Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary transition-all bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary transition-all bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Select Course</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary transition-all bg-white appearance-none cursor-pointer"
                    >
                      {courses.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-white font-bold py-5 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 group text-lg"
                  >
                    Submit via WhatsApp
                    <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
                    Safe & Secure Admission Process
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
