"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FloatingCartProps {
  itemCount: number;
  onClick: () => void;
}

const FloatingCart = ({ itemCount, onClick }: FloatingCartProps) => {
  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          className="fixed bottom-8 right-8 z-40 md:hidden bg-amber-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        >
          <ShoppingBag size={28} />
          <Badge className="absolute -top-2 -right-2 bg-slate-900 text-white border-2 border-white w-6 h-6 flex items-center justify-center p-0 text-xs font-bold">
            {itemCount}
          </Badge>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCart;