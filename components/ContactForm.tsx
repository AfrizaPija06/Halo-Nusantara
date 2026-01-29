
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      console.log('Submitted:', formState);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-emerald-900 mb-2">Pesan Terkirim!</h3>
        <p className="text-emerald-700">Terima kasih telah menghubungi kami. Konsultan travel kami akan menghubungi Anda sebentar lagi.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-emerald-600 font-bold underline"
        >
          Kirim form lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
          <input 
            type="text" 
            required
            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder="Contoh: Budi Santoso"
            value={formState.name}
            onChange={(e) => setFormState({...formState, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
          <input 
            type="email" 
            required
            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder="email@anda.com"
            value={formState.email}
            onChange={(e) => setFormState({...formState, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">No. WhatsApp</label>
          <input 
            type="tel" 
            required
            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder="0812xxxxxxx"
            value={formState.phone}
            onChange={(e) => setFormState({...formState, phone: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Destinasi Impian</label>
          <select 
            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            value={formState.destination}
            onChange={(e) => setFormState({...formState, destination: e.target.value})}
          >
            <option value="">Pilih Destinasi</option>
            <option value="bali">Bali</option>
            <option value="labuan-bajo">Labuan Bajo</option>
            <option value="raja-ampat">Raja Ampat</option>
            <option value="bromo">Bromo / Malang</option>
            <option value="jogja">Yogyakarta</option>
          </select>
        </div>
      </div>
      <div className="mb-8">
        <label className="block text-sm font-bold text-slate-700 mb-2">Catatan Tambahan (Opsi)</label>
        <textarea 
          rows={4}
          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          placeholder="Beri tahu kami kebutuhan khusus Anda (Contoh: Butuh guide bahasa Jepang, travel bersama balita, dll)"
          value={formState.message}
          onChange={(e) => setFormState({...formState, message: e.target.value})}
        ></textarea>
      </div>
      <button 
        type="submit"
        className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:shadow-red-200 transform hover:-translate-y-1"
      >
        Dapatkan Penawaran Sekarang
      </button>
      <p className="text-center text-xs text-slate-400 mt-4 italic">
        * Kami menjamin privasi data Anda. Tidak ada spam.
      </p>
    </form>
  );
};

export default ContactForm;
