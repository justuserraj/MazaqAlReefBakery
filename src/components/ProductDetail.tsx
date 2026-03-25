"use client";

import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Info, Leaf, Flame } from 'lucide-react';

interface ProductDetailProps {
  product: any | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: any) => void;
}

const ProductDetail = ({ product, isOpen, onClose, onAddToCart }: ProductDetailProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-3xl border-none shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-full relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-amber-600 text-white border-none px-3 py-1">
                {product.category}
              </Badge>
            </div>
          </div>
          
          <div className="p-8 flex flex-col">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl font-bold text-slate-900 mb-2">
                {product.name}
              </DialogTitle>
              <DialogDescription className="text-slate-600 leading-relaxed">
                {product.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <Leaf size={16} />
                </div>
                <span>100% Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <Flame size={16} />
                </div>
                <span>Stone-baked Fresh Daily</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Info size={16} />
                </div>
                <span>Allergens: Gluten, Dairy</span>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between gap-4">
              <span className="text-2xl font-bold text-amber-600">
                {product.price}
              </span>
              <Button 
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="bg-slate-900 hover:bg-amber-600 text-white rounded-xl px-6 py-6 flex items-center gap-2 transition-all flex-1"
              >
                <ShoppingBag size={18} /> Add to Basket
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;