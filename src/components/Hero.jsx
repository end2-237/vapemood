import React from 'react';

const Hero = () => {
  return (
    <header className="relative pt-32 pb-12 px-6 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-block px-3 py-1 mb-4 border border-brand-gold/30 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-tech tracking-widest uppercase animate-pulse">
            ★ Arrivage Douala
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            ELFBAR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-gold">
              RAYA D3 PRO.
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto md:mx-0">
            La première puff 30,000 tafes au monde avec écran HD. Disponible maintenant en FCFA.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a 
              href="#shop" 
              className="bg-brand-purple text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-600 transition shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Commander • 18 000 FCFA
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center order-1 md:order-2">
          <img 
            src="https://www.elfbar.com/assets/images/product/raya-d3/raya-d3-kv-m.png" 
            onError={(e) => {
              e.target.src = 'https://www.vapehongkong.com/wp-content/uploads/2024/04/ELFBAR-RAYA-D3-25000-Puffs-Disposable-Vape.jpg';
            }}
            className="relative z-10 w-2/3 md:w-[80%] drop-shadow-2xl animate-float" 
            alt="Elfbar Raya D3"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
