import React, { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Explorer = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [sortBy, setSortBy] = useState('featured');

  // Filtrer les produits
  let filteredProducts = activeCategory === 'Tout' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Trier les produits
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'puffs') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.puffs - a.puffs);
  }

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            EXPLORER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-gold">
              NOS PRODUITS
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez notre collection complète de puffs et vapes. 
            Des plus grandes marques aux dernières nouveautés.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Filtres et tri */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 sticky top-20 z-30 bg-[#050505]/95 py-4 backdrop-blur border-b border-white/5">
          {/* Catégories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition whitespace-nowrap border ${
                  activeCategory === category
                    ? 'bg-white text-black font-bold border-transparent'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tri */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 font-tech">Trier par:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white outline-none focus:border-brand-purple transition"
            >
              <option value="featured">Populaire</option>
              <option value="price-low">Prix croissant</option>
              <option value="price-high">Prix décroissant</option>
              <option value="puffs">Plus de puffs</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <p className="text-gray-400 text-sm">
            <span className="text-white font-bold">{filteredProducts.length}</span> produit(s) trouvé(s)
          </p>
        </div>

        {/* Grille de produits */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <i className="fa-solid fa-box-open text-6xl text-gray-700 mb-4"></i>
            <p className="text-gray-500 text-lg">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

        {/* Bannière promotionnelle */}
        <div className="mt-20 glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-gold/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Vous ne trouvez pas votre produit ?</h3>
            <p className="text-gray-400 mb-6">Contactez-nous sur WhatsApp pour des demandes spéciales</p>
            <a 
              href="https://wa.me/237696995879" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#128C7E] hover:text-white transition"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Contacter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;