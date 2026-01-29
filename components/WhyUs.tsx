
import React from 'react';

const FEATURE_CARDS = [
  {
    icon: '🏢',
    title: 'Legalitas Resmi',
    desc: 'Bekerja dengan tenang bersama agen travel berizin resmi dan terdaftar.'
  },
  {
    icon: '🗺️',
    title: 'Pemandu Lokal Berpengalaman',
    desc: 'Kami bekerjasama dengan warga lokal untuk pengalaman wisata yang otentik.'
  },
  {
    icon: '💰',
    title: 'Harga Jujur & Transparan',
    desc: 'Tidak ada biaya tersembunyi. Apa yang Anda lihat adalah apa yang Anda bayar.'
  },
  {
    icon: '🛡️',
    title: 'Asuransi Perjalanan',
    desc: 'Setiap paket kami sudah termasuk perlindungan asuransi untuk keamanan Anda.'
  }
];

const WhyUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Kenapa Memilih Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight">
            Lebih Dari Sekedar Liburan, Kami Membangun Kenangan
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Di Halo Nusantara, kami percaya bahwa setiap jengkal tanah Indonesia memiliki cerita unik. Kami berkomitmen memberikan layanan personal yang menyesuaikan kebutuhan spesifik Anda.
          </p>
          
          <div className="space-y-4">
            {['Pelayanan 24/7 Siaga', 'Custom Paket Sesuai Budget', 'Kemitraan Hotel Bintang 4 & 5'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURE_CARDS.map((card, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:shadow-xl hover:bg-white hover:-translate-y-1">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
