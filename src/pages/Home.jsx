import React from 'react';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import { categories } from '../data/products';

const Home = ({ 
  activeCategory, 
  onCategoryChange, 
  filteredProducts, 
  onAddToCart 
}) => {
  return (
    <>
      <Hero />

      <main id="shop" className="container mx-auto px-6 pb-24">
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />

        <ProductGrid 
          products={filteredProducts.slice(0, 8)}
          onAddToCart={onAddToCart}
        />
      </main>
    </>
  );
};

export default Home;