
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000" 
          alt="Indonesian Paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left text-white max-w-5xl">
        <div className="inline-block px-4 py-1.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-full text-emerald-300 font-medium mb-6 animate-fade-in">
          🌟 Pilihan Utama Wisata Domestik Indonesia
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Jelajahi <span className="text-emerald-400">Keindahan</span> <br /> 
          Nusantara Yang Tak Terlupakan
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
          Halo Nusantara menghadirkan pengalaman perjalanan eksklusif, aman, dan berkesan untuk keluarga, komunitas, hingga kebutuhan korporasi Anda.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a 
            href="#packages"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-red-500/20 text-center"
          >
            Lihat Paket Wisata
          </a>
          <a 
            href="#destinations"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
          >
            Eksplor Destinasi
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center md:justify-start gap-8 opacity-70">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="text-sm font-medium">10+ Penghargaan Travel</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            <span className="text-sm font-medium">50,000+ Traveler Puas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            <span className="text-sm font-medium">Terpercaya & Berizin Resmi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
