# 🛍️ VAPEMOOD - E-commerce React + Vite + Tailwind (Version 2.0)

Site e-commerce moderne pour la vente de vapes au Cameroun, construit avec React, Vite, Tailwind CSS et React Router.

## ✨ NOUVEAUTÉS Version 2.0

- ✅ **Navigation multi-pages** avec React Router
- ✅ **Page de détails produit** inspirée de la version Black Gold
- ✅ **Page Explorer** avec filtres et tri avancés
- ✅ **Page Technologie** présentant les innovations
- ✅ **Page Community** avec avis clients et réseaux sociaux
- ✅ **Footer complet** avec liens et informations
- ✅ **Navbar améliorée** avec navigation transparente
- ✅ **Animations fluides** entre les pages

## 🎯 Fonctionnalités

- ✅ Interface moderne et responsive
- ✅ Navigation multi-pages fluide
- ✅ Pages de détails produits détaillées
- ✅ Filtrage et tri de produits
- ✅ Panier d'achat interactif
- ✅ Animations de flottement et transitions
- ✅ Commande directe via WhatsApp
- ✅ Design glassmorphism et dégradés
- ✅ Architecture modulaire avec composants réutilisables

## 📁 Structure du projet

```
vapemood-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation avec liens et scroll effect
│   │   ├── Footer.jsx           # Footer complet
│   │   ├── Hero.jsx             # Section hero avec produit phare
│   │   ├── CategoryFilter.jsx   # Filtres de catégories
│   │   ├── ProductCard.jsx      # Carte produit avec lien détail
│   │   ├── ProductGrid.jsx      # Grille de produits
│   │   ├── CartItem.jsx         # Item dans le panier
│   │   └── CartDrawer.jsx       # Tiroir du panier
│   ├── pages/
│   │   ├── Home.jsx             # Page d'accueil
│   │   ├── ProductDetail.jsx    # Page détails produit (Black Gold style)
│   │   ├── Explorer.jsx         # Page catalogue avec filtres avancés
│   │   ├── Technology.jsx       # Page technologie et innovations
│   │   └── Community.jsx        # Page avis clients et social
│   ├── data/
│   │   └── products.js          # Base de données des produits
│   ├── utils/
│   │   └── helpers.js           # Fonctions utilitaires
│   ├── App.jsx                  # Composant principal avec Router
│   ├── main.jsx                 # Point d'entrée
│   └── index.css                # Styles globaux et animations
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Installation et lancement

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### 3. Build pour la production

```bash
npm run build
```

## 📄 Pages disponibles

### 🏠 Accueil (/)
- Hero section avec produit phare animé
- Filtres par catégorie
- Grille de produits

### 🔍 Explorer (/explorer)
- Tous les produits en un seul endroit
- Filtrage par catégorie
- Tri par prix et nombre de puffs
- Bannière de contact WhatsApp

### 📦 Détails Produit (/product/:id)
- Design inspiré Black Gold Edition
- Image produit en grand format avec animation
- Barres d'intensité de saveur
- Sélecteur de quantité
- Options de pack (duo avec réduction)
- Toast de confirmation d'ajout

### 🔬 Technologie (/technology)
- Présentation des innovations
- Tableau comparatif vs concurrents
- Descriptions des technologies

### 👥 Community (/community)
- Statistiques de satisfaction
- Avis clients authentiques
- Galerie Instagram
- Appels à l'action social

## 🎨 Composants principaux

### Navbar
- Navigation transparente devenant opaque au scroll
- Liens vers toutes les pages
- Badge panier animé

### Footer
- Logo et description
- Liens de navigation
- Réseaux sociaux
- Informations légales

### ProductCard
- Clic sur l'image/titre → Page détails
- Bouton "+" rapide pour ajouter au panier
- Badges "New" pour nouveautés

### ProductDetail
- Hero section avec le produit
- Stats du produit (puffs, écran, marque)
- Section d'achat détaillée
- Sélecteur de quantité
- Options de pack

## 🛠️ Personnalisation

### Ajouter une nouvelle page

1. Créer le composant dans `src/pages/`
2. Ajouter la route dans `App.jsx`
3. Ajouter le lien dans `Navbar.jsx` et `Footer.jsx`

```jsx
// Dans App.jsx
<Route path="/nouvelle-page" element={<NouvellePage />} />
```

### Modifier les produits
Fichier : `src/data/products.js`

### Changer le numéro WhatsApp
Fichier : `src/utils/helpers.js`
```javascript
export const WHATSAPP_NUMBER = "237XXXXXXXXX";
```

## 🌐 Technologies utilisées

- ⚛️ **React 18** - Framework UI
- 🔀 **React Router v6** - Navigation multi-pages
- ⚡ **Vite** - Build tool ultra-rapide
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 📦 **Font Awesome** - Icônes
- 🔤 **Google Fonts** - Typographies (Outfit, Space Grotesk)

## 📱 Responsive

Le site s'adapte parfaitement à tous les écrans :
- 📱 **Mobile** : Navigation simplifiée, design vertical
- 💻 **Tablet** : Grilles 2 colonnes
- 🖥️ **Desktop** : Grilles 4 colonnes, effets hover avancés

## 🎭 Animations

- **Float** : Lévitation du produit hero
- **Slide** : Transitions entre pages
- **Fade** : Apparition des éléments
- **Hover** : Zoom et bordures sur les cartes
- **Scroll** : Navbar devient opaque

## 🚀 Déploiement

### Vercel
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
# Drag & drop le dossier dist/
```

## 📄 License

© 2024 Vapemood - Tous droits réservés

## 🤝 Support

WhatsApp : +237 696 995 879

---

**Version 2.0 - Janvier 2026** 🚀