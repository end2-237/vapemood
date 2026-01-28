export const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " FCFA";
};

export const WHATSAPP_NUMBER = "237696995879";

export const generateWhatsAppMessage = (cart) => {
  let message = "Bonjour Vapemood, je souhaite commander :\n\n";
  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name} (${item.flavor}) : ${formatPrice(item.price)}\n`;
    total += item.price;
  });

  message += `\n*TOTAL : ${formatPrice(total)}*`;
  message += "\n\nPaiement : Orange/MTN Money à la livraison.";

  return message;
};

export const openWhatsApp = (message) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
