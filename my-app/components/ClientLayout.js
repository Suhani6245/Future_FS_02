'use client';

import { CartProvider } from '@/context/CartContext';
import Navbar from './Navbar';
import Footer from './Footer';
import SpecialRequirementForm from './SpecialRequirementForm';

export default function ClientLayout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      {children}
      <SpecialRequirementForm />
      <Footer />
    </CartProvider>
  );
}
