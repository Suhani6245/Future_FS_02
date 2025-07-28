'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Classic Rose Bouquet', price: '₹799', image: '/bouquets/rose.jpg' },
    { id: 2, name: 'Spring Tulip Mix', price: '₹999', image: '/bouquets/tulipmix.jpg' },
    { id: 3, name: 'Sunflower Delight', price: '₹899', image: '/bouquets/sunflower.jpg' },
    { id: 4, name: 'Lily Love', price: '₹1099', image: '/bouquets/lily.png' },
    { id: 5, name: 'Lavender Whisper', price: '₹849', image: '/bouquets/lavendar.png' },
    { id: 6, name: 'Orchid Elegance', price: '₹1299', image: '/bouquets/orchid.png' },
    { id: 7, name: 'Mixed Blossoms', price: '₹899', image: '/bouquets/mixed.jpg' },
    { id: 8, name: 'Daisy Daydream', price: '₹1399', image: '/bouquets/daisy.png' },
    { id: 9, name: 'Sunset Bloom', price: '₹699', image: '/bouquets/sunset_bloom.jpg' },
    { id: 10, name: 'Elegant Roses', price: '₹1699', image: '/bouquets/elegant_roses.jpg' },
    { id: 11, name: 'Tulip Treasures', price: '₹699', image: '/bouquets/tulip.jpg' },
    { id: 12, name: 'Bouquet Bonanza', price: '₹999', image: '/bouquets/bonanza.jpg' }
  ];

  const crochetBouquets = [
    { id: 13, name: 'Crochet Rose', price: '₹599', image: '/crochet/rose.jpg' },
    { id: 14, name: 'Crochet Tulip', price: '₹649', image: '/crochet/tulip.jpg' },
    { id: 15, name: 'Crochet Sunflower', price: '₹699', image: '/crochet/sunflower.jpg' },
    { id: 16, name: 'Crochet Mixed', price: '₹749', image: '/crochet/mixed.jpg' }
  ];

  // filter logic (case-insensitive)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCrochet = crochetBouquets.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 px-6 pb-12 space-y-16">
      
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search bouquets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#54946C]"
        />
      </div>
      {/* Poster below search bar */}
<div className="w-full mt-6 mb-10">
  <img src="/fresh.jpg" alt="Shop Promo" className="w-full rounded-2xl shadow-md" />
</div>

      {/* Fresh Bouquets Section */}
      <section>
        <h2 className="text-4xl font-bold text-center text-[#54946C] mb-10">Fresh Bouquets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#54946C]">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 px-4 py-2 bg-[#54946C] text-white rounded hover:bg-[#417655] transition text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Poster above Crochet Bouquets */}
<div className="w-full mt-16 mb-10">
  <img src="/crochet.jpg" alt="Crochet Promo" className="w-full rounded-2xl shadow-md" />
</div>


      {/* Crochet Bouquets Section */}
      <section>
        <h2 className="text-4xl font-bold text-center text-[#9C322D] mb-10">Crochet Bouquets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCrochet.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#9C322D]">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 px-4 py-2 bg-[#9C322D] text-white rounded hover:bg-[#7c2823] transition text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
