// app/(store)/layout.js
'use client';

import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpecialRequirementForm from '@/components/SpecialRequirementForm';

export default function StoreLayout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      {children}
      <SpecialRequirementForm />
      <Footer />
    </CartProvider>
  );
}
