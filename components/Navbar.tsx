
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Custom Logo SVG based on brand */}
          <div className="w-10 h-10 relative flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-sm">
              <path d="M12 2C7.58 2 4 5.58 4 10C4 14.5 12 22 12 22C12 22 20 14.5 20 10C20 5.58 16.42 2 12 2Z" fill="#DC2626" />
              <circle cx="12" cy="10" r="3.5" fill="white" />
              <path d="M7.5 16.5L12 22L16.5 16.5" fill="#059669" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-red-600' : 'text-white'}`}>
              HALO NUSANTARA
            </span>
            <span className={`text-[10px] font-bold tracking-wider uppercase ${isScrolled ? 'text-emerald-600' : 'text-white/80'}`}>
              Travel and Outdoor
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Destinasi', 'Paket Wisata', 'Tentang Kami', 'Testimoni'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-red-600' : 'text-white/90 hover:text-white'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <a 
          href="#contact"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-red-200"
        >
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
