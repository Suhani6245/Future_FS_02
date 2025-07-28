'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => {
    const numericPrice = parseInt(item.price.replace('₹', '').replace(',', ''));
    return acc + numericPrice;
  }, 0);

  return (
    <div className="pt-24 px-6 pb-12">
      <h2 className="text-4xl font-bold text-[#54946C] text-center mb-8">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="text-lg font-semibold text-[#54946C]">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-semibold text-[#417655]">Total: ₹{totalPrice}</p>
            <div className="space-x-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>
              <Link href="/checkout">
                <button className="px-4 py-2 bg-[#54946C] text-white rounded hover:bg-[#417655]">
                  Proceed to Checkout →
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
