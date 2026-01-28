import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Fonction de formatage locale pour éviter les erreurs d'importation
 * Formate un nombre en devise Euro (€)
 */
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
  }).format(price);
};

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
      <Link to={`/product/${product.id}`}>
        {/* Conteneur image avec overflow-hidden pour éviter les débordements lors du zoom */}
        <div className="relative h-72 flex items-center justify-center bg-gradient-to-b from-[#111] to-[#0a0a0a] p-4 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full max-w-full object-contain z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
          />
          
          {/* Badge "New" avec un z-index (z-20) supérieur à l'image (z-10) */}
          {product.category === 'Nouveautés' && (
            <span className="absolute top-3 left-3 bg-brand-purple text-white text-[10px] px-2 py-1 rounded font-bold uppercase z-20 shadow-lg">
              New
            </span>
          )}
        </div>
      </Link>

      <button 
        onClick={() => onAddToCart(product.id)}
        className="absolute bottom-[140px] right-4 bg-brand-gold text-black w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white z-20 shadow-lg cursor-pointer"
      >
        <i className="fa-solid fa-plus"></i>
      </button>

      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">
              {product.brand}
            </p>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-white font-bold text-lg leading-tight mb-1 hover:text-brand-purple transition">
                {product.name}
              </h3>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <i className={`fa-solid fa-droplet text-xs ${product.color}`}></i>
          <p className="text-gray-400 text-xs">{product.flavor}</p>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <span className="text-brand-gold font-bold text-lg">
            {formatPrice(product.price)}
          </span>
          <span className="text-gray-500 text-xs bg-white/5 px-2 py-1 rounded border border-white/5">
            <i className="fa-solid fa-wind mr-1"></i>{product.puffs}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;