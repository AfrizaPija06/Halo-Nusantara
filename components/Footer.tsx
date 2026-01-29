
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2C7.58 2 4 5.58 4 10C4 14.5 12 22 12 22C12 22 20 14.5 20 10C20 5.58 16.42 2 12 2Z" fill="#DC2626" />
                  <circle cx="12" cy="10" r="3.5" fill="white" />
                  <path d="M7.5 16.5L12 22L16.5 16.5" fill="#059669" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-white">
                  HALO NUSANTARA
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-500">
                  Travel and Outdoor
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Halo Nusantara adalah partner perjalanan domestik terpercaya Anda di Indonesia. Kami berdedikasi memperkenalkan kekayaan alam nusantara kepada dunia.
            </p>
            <div className="flex gap-4">
              {['fb', 'ig', 'yt', 'tt'].map(s => (
                <div key={s} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold uppercase">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Beranda</a></li>
              <li><a href="#destinations" className="hover:text-red-400 transition-colors">Destinasi Populer</a></li>
              <li><a href="#packages" className="hover:text-red-400 transition-colors">Paket Wisata</a></li>
              <li><a href="#why-us" className="hover:text-red-400 transition-colors">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Informasi</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Partner Kerja Kami</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Blog Travel</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Kantor Pusat</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>Jl. Nusantara Raya No. 45, Kebayoran Baru, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>+62 21 555 1234</span>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <span>halo@halonusantara.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span>⏰</span>
                <span>Setiap Hari (08:00 - 20:00 WIB)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Halo Nusantara Travel. All rights reserved.</p>
          <div className="flex gap-4">
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 opacity-40 grayscale hover:grayscale-0 transition-all" alt="Mastercard" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 opacity-40 grayscale hover:grayscale-0 transition-all mt-1" alt="Visa" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Mandiri.svg" className="h-6 opacity-40 grayscale hover:grayscale-0 transition-all" alt="Mandiri" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
