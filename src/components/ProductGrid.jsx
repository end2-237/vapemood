import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div className="text-gray-500 col-span-4 text-center py-20">
        Aucun produit trouvé.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
