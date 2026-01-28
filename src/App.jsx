import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductDetail from './pages/Productdetail';
import Explorer from './pages/Explorer';
import Technology from './pages/Technology';
import Community from './pages/Community';
import { products, categories } from './data/products';

// Composant wrapper pour gérer le scroll to top
function ScrollToTop() {
  const { pathname } = useLocation();

  useState(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filtrer les produits selon la catégorie active
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Tout') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  // Ajouter un produit au panier
  const handleAddToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setCart(prevCart => [...prevCart, product]);
      // Ouvrir le panier au premier ajout
      if (cart.length === 0) {
        setIsCartOpen(true);
      }
    }
  };

  // Retirer un produit du panier
  const handleRemoveFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  // Basculer l'ouverture/fermeture du panier
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased overflow-x-hidden">
        <Navbar 
          cartCount={cart.length} 
          onCartToggle={toggleCart}
        />

        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                filteredProducts={filteredProducts}
                onAddToCart={handleAddToCart}
              />
            } 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetail onAddToCart={handleAddToCart} />} 
          />
          <Route 
            path="/explorer" 
            element={<Explorer onAddToCart={handleAddToCart} />} 
          />
          <Route 
            path="/technology" 
            element={<Technology />} 
          />
          <Route 
            path="/community" 
            element={<Community />} 
          />
        </Routes>

        <Footer />

        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onRemoveItem={handleRemoveFromCart}
        />
      </div>
    </Router>
  );
}

export default App;