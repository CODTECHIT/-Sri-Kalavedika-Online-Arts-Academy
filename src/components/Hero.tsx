"use client";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-white">
      {/* Decorative Elements */}
      {/* Saffron slanted lines (Top Left) */}
      <div className="absolute top-24 left-4 md:top-32 md:left-8 opacity-40 animate-float hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-16 md:h-16">
          <path d="M10 20L20 10M25 20L35 10M40 20L50 10" stroke="#FF9933" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Royal Blue wave (Top Right) */}
      <div className="absolute top-10 right-[-10%] w-[60%] md:w-[50%] opacity-15 pointer-events-none animate-wave">
        <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C100 20 200 180 300 100C400 20 500 180 600 100C700 20 800 180 900 100" stroke="url(#blueGradient)" strokeWidth="30" strokeLinecap="round"/>
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#002366" />
              <stop offset="1" stopColor="#0046cc" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Saffron wave (Bottom) */}
      <div className="absolute bottom-4 md:bottom-10 left-[-5%] w-[110%] opacity-10 -z-10 pointer-events-none animate-wave" style={{ animationDelay: '-2s' }}>
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 100C100 160 300 40 500 100C700 160 900 40 1100 100C1300 160 1500 40 1700 100" stroke="#FF9933" strokeWidth="40" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              Nurturing Talent, <br className="hidden sm:block" />
              Preserving Tradition, <br className="hidden sm:block" />
              <span className="text-secondary">Inspiring Excellence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              Expert-led online training in Performing Arts, Intellectual Skills, and Personality Development for students worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg w-full sm:w-auto">
                Book a Free Demo
              </button>
              <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-light-blue transition-all w-full sm:w-auto">
                View All Courses
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <div className="bg-navy text-white px-4 py-2 rounded-lg flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider">
                <span className="text-secondary">Est. 2020</span>
                <span className="border-l border-white/30 pl-2">ISO Certified</span>
              </div>
              <p className="text-gray-500 text-xs md:text-sm font-medium">Serving Students Worldwide</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative order-1 lg:order-2 w-full max-w-md lg:max-w-none">
            <div className="relative z-10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800" 
                alt="Child learning arts" 
                className="w-full h-full object-cover aspect-video lg:aspect-square"
              />
            </div>
            {/* Decorative dots/circles */}
            <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-secondary rounded-full -z-10 opacity-30 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-32 md:h-32 bg-primary rounded-full -z-10 opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
