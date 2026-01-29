
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import GeminiAssistant from './components/GeminiAssistant';
import PriceEstimator from './components/PriceEstimator';
import Gallery from './components/Gallery';
import VideoShowcase from './components/VideoShowcase';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Interactive Price Estimator - Moved up after Hero */}
        <section id="cek-harga" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ingin Tahu Estimasi Biayanya?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Gunakan kalkulator kami untuk mendapatkan gambaran awal biaya perjalanan sesuai dengan jumlah anggota tim atau keluarga Anda.</p>
            </div>
            <PriceEstimator />
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] opacity-50 z-0"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[100px] opacity-50 z-0"></div>
        </section>

        {/* Gallery / Portfolio Section - Moved up after Price Estimator */}
        <section id="gallery" className="py-24 bg-white">
          <Gallery />
        </section>
        
        {/* Why Choose Us Section - Strategic Trust Building */}
        <section id="why-us" className="py-20 bg-slate-50">
          <WhyUs />
        </section>

        {/* Featured Destinations with Filter */}
        <section id="destinations" className="py-20 bg-white">
          <Destinations />
        </section>

        {/* Video Promotional Section */}
        <section id="video" className="py-24 bg-slate-50">
          <VideoShowcase />
        </section>

        {/* Popular Packages */}
        <section id="packages" className="py-20 bg-white">
          <Packages />
        </section>

        {/* Social Proof */}
        <section id="testimonials" className="py-20 bg-slate-50">
          <Testimonials />
        </section>

        {/* Inquiry Form */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mulai Rencanakan Perjalananmu</h2>
              <p className="text-slate-600">Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam waktu kurang dari 24 jam.</p>
            </div>
            <ContactForm />
          </div>
        </section>

        <section id="faq" className="py-20 bg-slate-50">
          <FAQ />
        </section>
      </main>

      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <GeminiAssistant />
        <WhatsAppCTA />
      </div>
    </div>
  );
};

export default App;
