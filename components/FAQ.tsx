
import React, { useState } from 'react';

const FAQS = [
  {
    q: 'Bagaimana cara melakukan pemesanan paket wisata?',
    a: 'Anda bisa memilih paket yang tersedia di website kami, isi formulir inquiry, atau langsung chat WhatsApp admin kami untuk konsultasi gratis.'
  },
  {
    q: 'Apakah harga paket sudah termasuk tiket pesawat?',
    a: 'Beberapa paket kami menyediakan opsi include tiket pesawat (Land Tour + Flight) dan beberapa hanya Land Tour saja. Detail tersedia di setiap deskripsi paket.'
  },
  {
    q: 'Bisakah saya melakukan kustomisasi jadwal perjalanan (Custom Trip)?',
    a: 'Tentu saja! Kami sangat spesialis dalam pembuatan itinerary custom untuk keluarga, grup kantor, hingga komunitas sesuai dengan budget Anda.'
  },
  {
    q: 'Apa kebijakan pembatalan atau reschedule?',
    a: 'Kebijakan pembatalan bervariasi tergantung paket. Umumnya reschedule dapat dilakukan maksimal H-14 sebelum keberangkatan dengan syarat dan ketentuan berlaku.'
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Populer (FAQ)</h2>
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
            >
              <span className="font-bold text-slate-800">{faq.q}</span>
              <span className={`transform transition-transform duration-300 text-emerald-600 ${openIdx === idx ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div className={`px-6 overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
