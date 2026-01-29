
import React, { useState } from 'react';
import { DESTINATIONS } from '../constants';

const Categories = [
  { id: 'all', label: 'Semua' },
  { id: 'family', label: 'Keluarga' },
  { id: 'adventure', label: 'Petualangan' },
  { id: 'halal', label: 'Halal Travel' },
  { id: 'budget', label: 'Hemat' },
];

const Destinations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDestinations = activeFilter === 'all' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === activeFilter);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Destinasi Pilihan Terbaik</h2>
        <p className="text-slate-600 text-lg">
          Dari puncak gunung berapi hingga kedalaman laut biru, temukan sudut Nusantara yang paling cocok dengan jiwa petualanganmu.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border ${
              activeFilter === cat.id 
                ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-200' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-red-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((dest) => (
          <div key={dest.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={dest.image} 
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                ⭐ {dest.rating}
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-emerald-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                  {dest.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-red-500 text-xs font-bold uppercase mb-1">{dest.region}</p>
                <h3 className="text-2xl font-bold text-slate-900">{dest.name}</h3>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <p className="text-slate-400 text-xs">Mulai Dari</p>
                  <p className="text-emerald-600 font-bold text-xl">{dest.price}</p>
                </div>
                <button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
