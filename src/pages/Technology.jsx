import React from 'react';

const Technology = () => {
  const features = [
    {
      icon: 'fa-microchip',
      title: 'Écran Intelligent',
      description: 'Surveillez votre niveau de batterie et d\'e-liquide en temps réel grâce à l\'affichage LED latéral intégré.',
      color: 'text-brand-purple',
      bgColor: 'bg-brand-purple/20'
    },
    {
      icon: 'fa-infinity',
      title: '30,000 Puffs',
      description: 'Capacité monstrueuse. Le réservoir optimisé offre 10% de liquide en plus que les modèles standards.',
      color: 'text-brand-gold',
      bgColor: 'bg-brand-gold/20'
    },
    {
      icon: 'fa-wind',
      title: 'Saveur Explosive',
      description: 'Dual Mesh Coil. La technologie de résistance garantit une saveur intense de la première à la dernière bouffée.',
      color: 'text-brand-purple',
      bgColor: 'bg-brand-purple/20'
    },
    {
      icon: 'fa-battery-full',
      title: 'Batterie Longue Durée',
      description: 'Batterie rechargeable haute capacité pour profiter de tous vos puffs sans interruption.',
      color: 'text-green-400',
      bgColor: 'bg-green-400/20'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Sécurité Avancée',
      description: 'Protection contre la surchauffe, les courts-circuits et la surcharge pour une utilisation en toute sérénité.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    {
      icon: 'fa-leaf',
      title: 'E-liquide Premium',
      description: 'Formules haut de gamme avec des arômes naturels et une concentration nicotine précise.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/20'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-3 py-1 mb-4 border border-brand-gold/30 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-tech tracking-widest uppercase">
            Innovation
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            TECHNOLOGIE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-gold">
              BLACK GOLD
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Conçu pour durer. Conçu pour impressionner. Découvrez les innovations qui font de nos produits les meilleurs du marché.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-2xl hover:bg-white/5 transition duration-300 border-t border-white/5"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center mb-6 ${feature.color}`}>
                <i className={`fa-solid ${feature.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="glass rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            VAPEMOOD vs <span className="text-gray-600">Autres marques</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-gray-400 font-tech text-sm">Caractéristique</th>
                  <th className="py-4 px-6 text-brand-purple font-bold">VAPEMOOD</th>
                  <th className="py-4 px-6 text-gray-500">Concurrents</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 text-gray-400">Nombre de puffs</td>
                  <td className="py-4 px-6 font-bold text-white">Jusqu'à 30,000</td>
                  <td className="py-4 px-6 text-gray-500">5,000 - 15,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 text-gray-400">Écran LED</td>
                  <td className="py-4 px-6">
                    <i className="fa-solid fa-check text-green-500"></i>
                  </td>
                  <td className="py-4 px-6">
                    <i className="fa-solid fa-xmark text-red-500"></i>
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 text-gray-400">Batterie rechargeable</td>
                  <td className="py-4 px-6">
                    <i className="fa-solid fa-check text-green-500"></i>
                  </td>
                  <td className="py-4 px-6 text-gray-500">Variable</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-6 text-gray-400">Dual Mesh Coil</td>
                  <td className="py-4 px-6">
                    <i className="fa-solid fa-check text-green-500"></i>
                  </td>
                  <td className="py-4 px-6">
                    <i className="fa-solid fa-xmark text-red-500"></i>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-400">Garantie</td>
                  <td className="py-4 px-6 font-bold text-white">Produits authentiques</td>
                  <td className="py-4 px-6 text-gray-500">Non garanti</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-gold/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Prêt à découvrir la différence ?</h3>
            <p className="text-gray-400 mb-8">Commandez maintenant et profitez de la technologie de pointe</p>
            <a 
              href="/explorer" 
              className="inline-flex items-center gap-2 bg-brand-purple text-white font-bold px-8 py-4 rounded-xl hover:bg-purple-600 transition"
            >
              Voir les produits
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;