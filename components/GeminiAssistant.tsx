
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askAssistant = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResponse('');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: 'Anda adalah asisten travel profesional dari Halo Nusantara. Berikan rekomendasi destinasi wisata di Indonesia dalam Bahasa Indonesia yang ramah, informatif, dan persuasif. Singkat saja namun menarik. Selalu sebutkan bahwa "Halo Nusantara siap mengatur segalanya untuk Anda".',
          temperature: 0.7,
        }
      });
      setResponse(result.text || 'Maaf, saya sedang beristirahat. Coba tanya lagi ya!');
    } catch (err) {
      console.error(err);
      setResponse('Waduh, koneksi sedang bermasalah. Silakan hubungi admin kami via WhatsApp ya!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col z-50 animate-fade-in-up">
          <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-xs">AI</div>
              <div>
                <h4 className="text-sm font-bold">Halo Assistant</h4>
                <p className="text-[10px] text-red-400">Online & Siap Membantu</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">✕</button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto bg-slate-50 text-sm">
            {!response && !loading && (
              <p className="text-slate-500 italic">"Mau liburan ke mana tahun ini? Tanya saya untuk rekomendasi!"</p>
            )}
            {loading && (
              <div className="flex gap-2 items-center text-red-600">
                <div className="animate-bounce">●</div>
                <div className="animate-bounce delay-100">●</div>
                <div className="animate-bounce delay-200">●</div>
                <span className="text-xs">Berpikir...</span>
              </div>
            )}
            {response && (
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-slate-700 leading-relaxed shadow-sm">
                {response}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                className="flex-1 bg-slate-100 border-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
                placeholder="Tanya rekomendasi..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && askAssistant()}
              />
              <button 
                onClick={askAssistant}
                disabled={loading}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 group relative"
      >
        <span className="text-2xl">🤖</span>
      </button>
    </div>
  );
};

export default GeminiAssistant;
