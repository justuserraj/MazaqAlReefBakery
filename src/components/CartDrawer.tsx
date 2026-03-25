"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: any[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  total: number;
}

const CartDrawer = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove, total }: CartDrawerProps) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l-0">
        <SheetHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2 text-2xl font-bold">
              <ShoppingBag className="text-amber-600" /> Your Basket
            </SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6">
          {cart.length === 0 ? (
            <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
                <ShoppingBag className="text-slate-300" size={40} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Your basket is empty</h3>
                <p className="text-slate-500">Looks like you haven't added any fresh bakes yet.</p>
              </div>
              <Button onClick={onClose} variant="outline" className="rounded-full">
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-full px-2 py-1">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 hover:text-amber-600 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 hover:text-amber-600 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-bold text-amber-600">{item.priceNumber * item.quantity} AED</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cart.length > 0 && (
          <SheetFooter className="p-6 border-t bg-slate-50/50 flex-col sm:flex-col space-y-4">
            <div className="w-full space-y-2">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>{total} AED</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between text-xl font-bold text-slate-900">
                <span>Total</span>
                <span>{total} AED</span>
              </div>
            </div>
            <Button 
              onClick={handleCheckout}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-7 rounded-2xl text-lg font-bold shadow-lg shadow-amber-600/20"
            >
              Checkout Now
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;