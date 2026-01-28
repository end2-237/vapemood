import React from 'react';

/**
 * Fonction de formatage locale pour éviter les erreurs d'importation
 * Formate un nombre en devise Euro (€)
 */
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
};

const CartItem = ({ item, index, onRemove }) => {
  return (
    <div className="flex gap-4 bg-white/5 p-3 rounded-xl border border-white/5 items-center overflow-hidden w-full group">
      {/* Conteneur d'image fixe pour éviter les déformations et débordements */}
      <div className="w-14 h-14 flex-shrink-0 bg-black rounded-lg overflow-hidden border border-white/10">
        <img 
          src={item.image || 'https://via.placeholder.com/150'} 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
          alt={item.name}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
        />
      </div>

      {/* Conteneur texte - le min-w-0 est CRUCIAL pour que le line-clamp fonctionne dans un parent flex */}
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-bold text-sm line-clamp-1 break-words">
          {item.name}
        </h4>
        <p className="text-gray-500 text-[10px] truncate uppercase tracking-wider">
          {item.flavor || 'Original'}
        </p>
        <p className="text-[#8b5cf6] font-bold text-sm mt-1">
          {formatPrice(item.price)}
        </p>
      </div>

      {/* Bouton d'action */}
      <button 
        onClick={() => onRemove(index)} 
        className="text-gray-600 hover:text-red-500 p-2 transition-colors flex-shrink-0"
        aria-label="Supprimer l'article"
      >
        <i className="fa-solid fa-trash-can text-xs"></i>
      </button>
    </div>
  );
};

export default CartItem;