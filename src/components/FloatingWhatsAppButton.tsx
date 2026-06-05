"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  const whatsappNumber = "916302749027";
  const message = "Hello! I'm interested in learning at Sri Kalavedika Online Arts Academy.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Animation Ring */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      
      {/* Main Button */}
      <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 group-hover:shadow-green-500/50">
        <MessageCircle className="text-white" size={28} />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </a>
  );
}
