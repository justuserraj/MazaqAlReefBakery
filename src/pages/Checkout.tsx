"use client";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Truck, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';
import { showSuccess, showError } from '@/utils/toast';

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    area: '',
    city: 'Dubai'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phone || !formData.address || !formData.area) {
      showError("Please fill in all delivery details");
      return;
    }

    if (cart.length === 0) {
      showError("Your basket is empty");
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsFinished(true);
      clearCart(); // Clear the cart after successful order
      showSuccess("Order placed successfully!");
    }, 2000);
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Order Confirmed!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for your order, {formData.fullName.split(' ')[0]}! We're preparing your fresh bakes and they'll be with you shortly at {formData.area}.
          </p>
          <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 py-6 rounded-xl">
            <Link to="/">Return to Home</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Bakery</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <Truck size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Delivery Details</h2>
              </div>
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <Input 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="rounded-xl" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971 50 000 0000" 
                    className="rounded-xl" 
                    required 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-slate-700">Delivery Address</label>
                  <Input 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street, Building, Apartment No." 
                    className="rounded-xl" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Area</label>
                  <Input 
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="e.g. Deira, Dubai Marina" 
                    className="rounded-xl" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">City</label>
                  <Input 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Dubai" 
                    className="rounded-xl" 
                    required 
                  />
                </div>
              </form>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <CreditCard size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Payment Method</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center justify-between p-4 border-2 border-amber-600 bg-amber-50 rounded-2xl text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-4 border-amber-600" />
                    <span className="font-bold text-slate-900">Cash on Delivery</span>
                  </div>
                </button>
                <button type="button" className="flex items-center justify-between p-4 border-2 border-slate-100 hover:border-amber-200 rounded-2xl text-left opacity-50 cursor-not-allowed">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200" />
                    <span className="font-bold text-slate-900">Credit Card (Coming Soon)</span>
                  </div>
                </button>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <ShoppingBag size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>
              </div>
              
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                {cart.length > 0 ? cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-amber-600">{item.quantity}x</span>
                      <span className="text-slate-700 font-medium">{item.name}</span>
                    </div>
                    <span className="text-slate-900 font-bold">{item.priceNumber * item.quantity} AED</span>
                  </div>
                )) : (
                  <p className="text-slate-500 italic">Your basket is empty</p>
                )}
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>{total} AED</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery Fee</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-slate-900 pt-2">
                  <span>Total</span>
                  <span>{total} AED</span>
                </div>
              </div>

              <Button 
                type="submit"
                form="checkout-form"
                disabled={isProcessing || cart.length === 0}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-7 rounded-2xl text-lg font-bold mt-8 shadow-lg shadow-amber-600/20"
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
              <p className="text-center text-xs text-slate-400 mt-4">
                By placing your order, you agree to our Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;