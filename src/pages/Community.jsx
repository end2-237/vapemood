import React from 'react';

const Community = () => {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Douala",
      rating: 5,
      comment: "Meilleure expérience de vapotage que j'ai eu ! Le Raya D3 Pro dure vraiment 30k puffs. Service client au top.",
      product: "Elfbar Raya D3 Pro",
      date: "Il y a 2 jours"
    },
    {
      name: "Michel K.",
      location: "Yaoundé",
      rating: 5,
      comment: "Livraison rapide, produit authentique. Le goût est incroyable et reste constant jusqu'à la fin.",
      product: "RandM Tornado 9000",
      date: "Il y a 1 semaine"
    },
    {
      name: "Anastasia L.",
      location: "Douala",
      rating: 5,
      comment: "Prix imbattables au Cameroun ! J'ai commandé 3 fois déjà. Toujours satisfaite.",
      product: "Geek Bar Pulse X",
      date: "Il y a 3 jours"
    },
    {
      name: "Junior B.",
      location: "Bafoussam",
      rating: 4,
      comment: "Très bon rapport qualité/prix. Le paiement à la livraison est un gros plus pour moi.",
      product: "Lost Mary MO5000",
      date: "Il y a 5 jours"
    }
  ];

  const stats = [
    { value: "5000+", label: "Clients Satisfaits" },
    { value: "98%", label: "Taux de Satisfaction" },
    { value: "24h", label: "Livraison Express" },
    { value: "100%", label: "Produits Authentiques" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            NOTRE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-gold">
              COMMUNAUTÉ
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Rejoignez des milliers de vapoteurs satisfaits à travers le Cameroun. 
            Découvrez leurs expériences avec nos produits.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-brand-purple mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 font-tech">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CE QUE DISENT <span className="text-brand-gold">NOS CLIENTS</span>
          </h2>
          <p className="text-gray-400">Des avis authentiques de vrais utilisateurs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover:bg-white/5 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location} • {review.date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-brand-gold text-xs"></i>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs text-gray-500">
                  <i className="fa-solid fa-box mr-2 text-brand-purple"></i>
                  Produit: <span className="text-white">{review.product}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="container mx-auto px-6 mb-20">
        <div className="glass rounded-3xl p-12 text-center">
          <div className="mb-8">
            <i className="fa-brands fa-instagram text-5xl text-brand-purple mb-4"></i>
            <h3 className="text-2xl font-bold mb-2">Suivez-nous sur Instagram</h3>
            <p className="text-gray-400">@vapemood_cm - Partagez vos moments avec #VAPEMOOD</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-brand-purple/20 to-brand-gold/20 rounded-lg"></div>
            ))}
          </div>
          
          <a 
            href="https://instagram.com/vapemood_cm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition"
          >
            <i className="fa-brands fa-instagram text-xl"></i>
            Suivre @vapemood_cm
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-gold/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Rejoignez la communauté VAPEMOOD</h3>
            <p className="text-gray-400 mb-8">
              Commandez maintenant et partagez votre expérience sur les réseaux sociaux
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/237696995879" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#128C7E] hover:text-white transition"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Contacter sur WhatsApp
              </a>
              <a 
                href="/explorer"
                className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition"
              >
                <i className="fa-solid fa-shopping-bag"></i>
                Voir les produits
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;