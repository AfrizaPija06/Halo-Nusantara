
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Traveler Kami?</h2>
        <p className="text-slate-600">Lebih dari 50.000+ orang telah mempercayakan perjalanan mereka bersama Halo Nusantara.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testi) => (
          <div key={testi.id} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 relative">
            <div className="text-red-500 text-4xl mb-6 opacity-30">❝</div>
            <p className="text-slate-700 italic mb-8 leading-relaxed">
              "{testi.text}"
            </p>
            <div className="flex items-center gap-4">
              <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full border-2 border-red-100" />
              <div>
                <h4 className="font-bold text-slate-900">{testi.name}</h4>
                <p className="text-slate-500 text-sm">{testi.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-8 bg-white py-4 px-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\"G\"_Logo.svg" className="w-5 h-5" alt="Google" />
             <div className="text-left">
               <div className="flex text-yellow-400">★★★★★</div>
               <p className="text-[10px] font-bold text-slate-400 uppercase">4.9/5 Google Reviews</p>
             </div>
          </div>
          <div className="w-px h-8 bg-slate-200"></div>
          <div className="flex items-center gap-3">
             <span className="text-xl">⭐</span>
             <div className="text-left">
               <div className="flex text-yellow-400">★★★★★</div>
               <p className="text-[10px] font-bold text-slate-400 uppercase">Traveler's Choice 2024</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
