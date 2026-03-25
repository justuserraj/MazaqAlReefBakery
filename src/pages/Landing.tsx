"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Menu from '@/components/Menu';
import MenuDownload from '@/components/MenuDownload';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductDetail from '@/components/ProductDetail';
import FloatingCart from '@/components/FloatingCart';
import { useCart } from '@/hooks/use-cart';

const Landing = () => {
  const { 
    cart, 
    isOpen: isCartOpen, 
    setIsOpen: setIsCartOpen, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    total, 
    itemCount 
  } = useCart();

  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-amber-100 selection:text-amber-900">
      <Navbar cartItemCount={itemCount} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Features />
        <Menu onAddToCart={addToCart} onViewProduct={handleViewProduct} />
        <MenuDownload />
        <Gallery />
        <Reviews />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={total}
      />

      <ProductDetail 
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={addToCart}
      />

      <FloatingCart itemCount={itemCount} onClick={() => setIsCartOpen(true)} />
    </div>
  );
};

export default Landing;