
import React, { useState, useMemo } from 'react';
import { DESTINATIONS } from '../constants';

const PriceEstimator: React.FC = () => {
  const [selectedDestId, setSelectedDestId] = useState(DESTINATIONS[0].id);
  const [personCount, setPersonCount] = useState(1);

  const selectedDest = useMemo(() => 
    DESTINATIONS.find(d => d.id === selectedDestId) || DESTINATIONS[0]
  , [selectedDestId]);

  const totalPrice = useMemo(() => 
    selectedDest.basePrice * personCount
  , [selectedDest, personCount]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppClick = () => {
    const message = `Halo Halo Nusantara, saya ingin bertanya tentang paket wisata ke ${selectedDest.name} untuk ${personCount} orang. Estimasi harga yang saya dapatkan adalah ${formatPrice(totalPrice)}. Mohon info jadwal dan detail lebih lanjut ya.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628123456789?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
      {/* Left: Interactive Controls */}
      <div className="flex-1 p-8 md:p-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Calculator
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Hitung Estimasi Biaya</h2>
        </div>
        <p className="text-slate-500 mb-10">
          Pilih destinasi impianmu dan tentukan jumlah peserta untuk melihat gambaran awal biaya perjalanan.
        </p>

        <div className="space-y-8">
          {/* Destination Selection */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">Mau Wisata Kemana?</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DESTINATIONS.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestId(dest.id)}
                  className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all text-center ${
                    selectedDestId === dest.id 
                      ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-100' 
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-red-300'
                  }`}
                >
                  {dest.name}
                </button>
              ))}
            </div>
          </div>

          {/* Person Count */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">Untuk Berapa Orang?</label>
            <div className="flex items-center gap-6 bg-slate-50 p-2 rounded-2xl border border-slate-200 w-fit">
              <button 
                onClick={() => setPersonCount(Math.max(1, personCount - 1))}
                className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-xl font-bold text-slate-600 hover:text-red-600 transition-colors"
              >
                −
              </button>
              <span className="text-2xl font-bold text-slate-900 w-12 text-center">{personCount}</span>
              <button 
                onClick={() => setPersonCount(personCount + 1)}
                className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-xl font-bold text-slate-600 hover:text-red-600 transition-colors"
              >
                +
              </button>
              <span className="text-sm font-medium text-slate-400 pr-4 italic">Peserta</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Price Display & CTA */}
      <div className="md:w-96 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-center">
        <div className="mb-10 text-center md:text-left">
          <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-widest">Total Estimasi</p>
          <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">
            {formatPrice(totalPrice)}
          </h3>
          <p className="text-slate-500 text-xs mt-4 leading-relaxed italic">
            *Harga estimasi dasar per pax. Biaya final dapat berubah tergantung pada musim liburan (High Season) dan permintaan kustom.
          </p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={handleWhatsAppClick}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-emerald-500/20"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Nego via WhatsApp
          </button>
          <p className="text-[10px] text-center text-slate-500 font-medium">
            Tanya Jadwal • Konsultasi Gratis • Diskon Grup
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceEstimator;
