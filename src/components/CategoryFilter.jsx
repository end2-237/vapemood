import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 sticky top-20 z-30 bg-[#050505]/95 py-4 backdrop-blur border-b border-white/5">
      <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition whitespace-nowrap border ${
              activeCategory === category
                ? 'bg-white text-black font-bold border-transparent'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
