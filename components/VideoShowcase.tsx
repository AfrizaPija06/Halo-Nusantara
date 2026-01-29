
import React, { useState } from 'react';

const VideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative group">
        {!isPlaying ? (
          <div className="relative h-[300px] md:h-[600px] flex items-center justify-center">
            {/* Thumbnail Overlay */}
            <img 
              src="https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&q=80&w=2000" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" 
              alt="Promo Thumbnail"
            />
            
            {/* Content Overlay */}
            <div className="relative z-10 text-center px-6">
              <button 
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 md:w-28 md:h-28 bg-red-600 hover:bg-red-500 text-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl transition-all transform hover:scale-110 active:scale-95 group/btn"
              >
                <svg className="w-10 h-10 md:w-14 md:h-14 fill-current ml-2" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">Lihat Keseruan Bersama Kami</h2>
              <p className="text-white/70 text-sm md:text-lg max-w-xl mx-auto">
                Tonton cuplikan singkat pengalaman tak terlupakan menjelajahi keindahan tersembunyi Indonesia.
              </p>
            </div>
          </div>
        ) : (
          <div className="relative pt-[56.25%] bg-black">
             <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Halo Nusantara Promotion Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold transition-all z-20"
              >
                ✕ Tutup Video
              </button>
          </div>
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: '🎬', label: 'Vlog Perjalanan', desc: 'Cuplikan nyata dari kamera pemandu kami.' },
          { icon: '🚁', label: 'Drone Footage', desc: 'Sudut pandang sinematik keindahan alam nusantara.' },
          { icon: '💬', label: 'Interaksi Lokal', desc: 'Melihat kedekatan kami dengan budaya setempat.' },
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4 items-start p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <span className="text-3xl">{item.icon}</span>
            <div>
              <h4 className="font-bold text-slate-900">{item.label}</h4>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoShowcase;
