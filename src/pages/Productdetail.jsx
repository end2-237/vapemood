import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { formatPrice } from '../utils/helpers';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Produit non trouvé</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-brand-purple text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product.id);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section avec produit */}
      <header className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Informations produit */}
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 mb-4 border border-brand-gold/30 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-tech tracking-widest uppercase animate-pulse">
              {product.category}
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              {product.name.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500">
                {product.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Découvrez le {product.name}. <strong className="text-white">{product.puffs.toLocaleString()} Puffs</strong>. 
              L'expérience de vapotage ultime saveur {product.flavor}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="bg-brand-purple hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                Commander • {formatPrice(product.price)}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-6">
              <div>
                <p className="text-3xl font-bold text-white font-tech">{(product.puffs / 1000).toFixed(0)}K</p>
                <p className="text-xs text-gray-500 uppercase">Puffs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-tech">HD</p>
                <p className="text-xs text-gray-500 uppercase">Écran</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-gold font-tech">{product.brand}</p>
                <p className="text-xs text-gray-500 uppercase">Marque</p>
              </div>
            </div>
          </div>

          {/* Image produit */}
          <div className="order-1 md:order-2 relative flex justify-center items-center h-full">
            <div className="absolute w-[300px] h-[300px] bg-brand-purple/20 rounded-full blur-[80px] animate-pulse"></div>
            
            <img 
              src={product.image} 
              alt={product.name}
              className="relative w-3/4 md:w-[80%] z-20 animate-float drop-shadow-2xl filter contrast-125"
            />
                 
            <div className="absolute top-10 right-10 glass px-4 py-2 rounded-lg text-xs font-tech text-brand-gold animate-bounce">
              <i className="fa-solid fa-bolt mr-2"></i>Turbo Mode
            </div>
            <div className="absolute bottom-20 left-0 glass px-4 py-2 rounded-lg text-xs font-tech text-brand-purple">
              <i className="fa-solid fa-droplet mr-2"></i>{product.flavor}
            </div>
          </div>
        </div>
      </header>

      {/* Section d'achat détaillée */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-purple/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image zoom */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-purple/10 rounded-3xl transform rotate-3 z-0"></div>
            <div className="glass rounded-3xl p-8 relative z-10 border border-gray-800">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto rounded-xl"
              />
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-xs font-tech text-gray-400">
                  <span className="w-20">INTENSITÉ</span>
                  <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-purple w-[85%]"></div>
                  </div>
                </div>
                <div className="flex items-center text-xs font-tech text-gray-400">
                  <span className="w-20">FRAÎCHEUR</span>
                  <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[60%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Détails d'achat */}
          <div>
            <h2 className="text-4xl font-bold mb-2">{product.flavor.toUpperCase()}</h2>
            <p className="text-brand-purple font-tech text-sm mb-6">{product.name} • {product.brand}</p>
            
            <div className="text-3xl font-bold text-white mb-8">
              {formatPrice(product.price)}
            </div>

            <div className="space-y-4 mb-8">
              <div className="border border-brand-purple bg-brand-purple/10 p-4 rounded-lg flex justify-between items-center ring-1 ring-brand-purple">
                <div>
                  <span className="font-bold text-white">1x Unité</span>
                  <p className="text-xs text-gray-400">Livraison Standard</p>
                </div>
                <span className="font-bold">{formatPrice(product.price)}</span>
              </div>
              <div className="border border-gray-700 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:border-gray-500 opacity-60 hover:opacity-100 transition">
                <div>
                  <span className="font-bold text-white">Pack Duo (x2)</span>
                  <span className="bg-brand-gold text-black text-[10px] font-bold px-2 py-0.5 rounded ml-2">-15% OFF</span>
                </div>
                <span className="font-bold">{formatPrice(Math.floor(product.price * 2 * 0.85))}</span>
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/3">
                <div className="flex items-center justify-between border border-gray-700 rounded-lg p-4 h-full">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-400 hover:text-white"
                  >
                    -
                  </button>
                  <span className="font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-400 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>
              <button 
                onClick={handleAddToCart}
                className="w-2/3 bg-white text-black font-bold rounded-lg p-4 hover:bg-gray-200 transition flex justify-center items-center gap-2 group"
              >
                <span>AJOUTER AU PANIER</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center">
              <i className="fa-solid fa-check text-green-500 mr-1"></i> En stock - Expédié sous 24h
            </p>
          </div>
        </div>
      </section>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-brand-dark border border-brand-purple p-4 rounded-lg shadow-2xl z-50 flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <img src={product.image} className="w-10 h-10 rounded object-cover" alt="" />
          <div>
            <h4 className="font-bold text-sm">Ajouté au panier !</h4>
            <p className="text-xs text-gray-400">{product.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;