import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { WHATSAPP_NUMBER } from '../utils/helpers';

/**
 * Fonctions utilitaires intégrées pour éviter les erreurs d'importation
 */
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
  }).format(price);
};

const generateWhatsAppMessage = (cart) => {
  const itemsList = cart.map(item => `- ${item.name} (${item.flavor || 'Original'})`).join('\n');
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const message = `Bonjour VAPEMOOD, je souhaite commander :\n\n${itemsList}\n\nTotal: ${formatPrice(total)}\n\nMerci de me recontacter pour la livraison.`;
  return encodeURIComponent(message);
};

const openWhatsApp = (message) => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank'); // Remplacez par votre numéro
};

const CartDrawer = ({ isOpen, onClose, cart, onRemoveItem }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const message = generateWhatsAppMessage(cart);
    openWhatsApp(message);
  };

  return (
    <>
      {/* Overlay - Z-index augmenté à 120 pour être au-dessus de la Nav (100) */}
      <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[120] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      {/* Drawer - Z-index augmenté à 130 pour être au-dessus de l'Overlay */}
      <div 
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-[130] p-6 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Mon Panier</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <i className="fa-solid fa-cart-shopping text-4xl text-white/10 mb-4"></i>
              <p className="text-gray-500 text-sm">Votre panier est vide.</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <CartItem 
                key={index} 
                item={item} 
                index={index} 
                onRemove={onRemoveItem}
              />
            ))
          )}
        </div>

        <div className="border-t border-white/10 pt-6 mt-6 bg-[#0a0a0a]">
          <div className="flex justify-between text-white text-xl font-black mb-2">
            <span>Total</span>
            <span className="text-brand-gold">{formatPrice(total)}</span>
          </div>
          <p className="text-[10px] text-gray-500 mb-6 text-center uppercase tracking-widest">
            Paiement à la livraison ou Orange/MTN Money
          </p>
          
          <button 
            onClick={handleCheckout}
            className="w-full bg-[#25D366] text-black font-black py-4 rounded-xl hover:bg-[#128C7E] hover:text-white transition-all duration-300 flex justify-center items-center gap-2 shadow-[0_10px_20px_rgba(37,211,102,0.15)]"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i> COMMANDER SUR WHATSAPP
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;