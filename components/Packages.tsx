
import React from 'react';
import { PACKAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Paket Wisata Terpopuler</h2>
          <p className="text-slate-600">
            Pilihan paket yang telah kami rancang khusus untuk memberikan kenyamanan maksimal bagi setiap jenis traveler.
          </p>
        </div>
        <a href="#" className="text-red-600 font-bold flex items-center gap-2 group border-b-2 border-red-600 pb-1">
          Lihat Semua Paket 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PACKAGES.map((pkg) => (
          <div key={pkg.id} className="relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl flex flex-col">
            <div className="h-56">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{pkg.type}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{pkg.title}</h3>
                </div>
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-lg shrink-0">
                  {pkg.duration}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {inc}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-xs font-medium">Investasi Liburan</p>
                  <p className="text-2xl font-bold text-slate-900">{pkg.price.split('/')[0]}</p>
                </div>
                <a 
                  href="#contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all"
                >
                  Booking
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
