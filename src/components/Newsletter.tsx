"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Thank you for subscribing!");
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Mazaq Family</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Subscribe to get updates on new menu items, special offers, and fresh bakes delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/5 border-white/10 text-white h-14 rounded-full px-6 focus:ring-amber-600"
              required
            />
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-8 rounded-full flex items-center gap-2 transition-all hover:scale-105">
              Subscribe <Send size={18} />
            </Button>
          </form>
          <p className="text-slate-500 text-xs mt-6">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;