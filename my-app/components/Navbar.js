'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cartItems } = useCart(); // ✅ Now inside the component
  const cartCount = cartItems.length;

  return (
    <nav className="bg-white w-full fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between shadow-md">
      <h1 className="text-white text-3xl font-bold font-serif" style={{ color: '#54946C' }}>
        💐the<i style={{color:'#9C322D'}}>BOUQUET</i>store
      </h1>

      <ul className="flex space-x-6 text-white font-medium" style={{ color: '#54946C' }}>
        <li className="text-2xl font-serif">
          <Link href="/" className="text-[#54946C] hover:text-[#9C322D] transition duration-200">Home</Link>
        </li>
        <li className="text-2xl font-serif">
          <Link href="/shop" className="text-[#54946C] hover:text-[#9C322D] transition duration-200">Shop</Link>
        </li>
        <li className="text-2xl font-serif">
          <Link href="/contact" className="text-[#54946C] hover:text-[#9C322D] transition duration-200">Contact</Link>
        </li>
        <li className="relative">
  <Link href="/cart">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="#54946C" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.5l1.406 8.437a2.25 2.25 0 002.219 1.813h9.75a2.25 2.25 0 002.219-1.813L20.25 6H6.136M9 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
        {cartCount}
      </span>
    )}
  </Link>
</li>

      </ul>
    </nav>
  );
}
