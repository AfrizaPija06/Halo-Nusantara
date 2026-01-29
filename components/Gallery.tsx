
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Galeri Petualangan Nusantara</h2>
        <p className="text-slate-600 max-w-2xl mx-auto italic">
          Setiap foto menyimpan cerita. Lihat cuplikan momen indah yang telah kami lalui bersama para traveler.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((img, idx) => (
          <div 
            key={idx} 
            className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-red-200/50 ${
              img.size === 'large' ? 'col-span-2 row-span-2' : ''
            } ${img.size === 'medium' ? 'md:col-span-2' : ''}`}
          >
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h4>
              <p className="text-red-400 text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">#HaloNusantaraExperience</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
