import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              VAPE<span className="text-brand-purple">MOOD</span>.
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Le shop N°1 au Cameroun pour vos puffs et vapes. 
              Produits authentiques, livraison rapide, paiement à la livraison.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/237696995879" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition">
                <i className="fa-brands fa-whatsapp text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <i className="fa-brands fa-tiktok text-white"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link to="/explorer" className="hover:text-white transition">Explorer</Link></li>
              <li><Link to="/technology" className="hover:text-white transition">Technologie</Link></li>
              <li><Link to="/community" className="hover:text-white transition">Community</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Informations</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Livraison</a></li>
              <li><a href="#" className="hover:text-white transition">Paiement</a></li>
              <li><a href="#" className="hover:text-white transition">Retours</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2024 Vapemood. Tous droits réservés. Interdit aux mineurs (-18 ans).
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-white transition">Conditions d'utilisation</a>
            <a href="#" className="hover:text-white transition">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;