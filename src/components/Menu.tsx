"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Search, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';

const menuCategories = [
  { id: 'all', name: 'All Items' },
  { id: 'bread', name: 'Breads' },
  { id: 'pastries', name: 'Pastries' },
  { id: 'manakish', name: 'Manakish' },
  { id: 'sweets', name: 'Sweets' },
];

const menuItems = [
  {
    id: 1,
    name: "Zaatar Manakish",
    description: "Traditional Lebanese flatbread topped with wild thyme, sumac, and olive oil.",
    price: "12 AED",
    category: "manakish",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Cheese Manakish",
    description: "Melted Akkawi cheese on our signature stone-baked dough.",
    price: "15 AED",
    category: "manakish",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Fresh Pita Bread",
    description: "Puffy, warm pita bread baked fresh every hour.",
    price: "5 AED",
    category: "bread",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Spinach Fatayer",
    description: "Triangular pastries filled with seasoned spinach, onions, and lemon.",
    price: "8 AED",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Baklava Selection",
    description: "Assorted layers of filo pastry filled with nuts and sweetened with syrup.",
    price: "25 AED",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Meat Sambousek",
    description: "Crispy fried pastries filled with spiced minced meat and pine nuts.",
    price: "10 AED",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop"
  }
];

interface MenuProps {
  onAddToCart: (item: any) => void;
  onViewProduct: (item: any) => void;
}

const Menu = ({ onAddToCart, onViewProduct }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Delicious Menu</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our wide range of authentic Lebanese delights, from savory manakish to sweet baklava.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <Tabs defaultValue="all" className="w-full max-w-2xl">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 h-auto p-1 bg-slate-100 rounded-full">
              {menuCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="rounded-full py-2 data-[state=active]:bg-white data-[state=active]:text-amber-600 data-[state=active]:shadow-sm"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              placeholder="Search menu..." 
              className="pl-10 rounded-full border-slate-200 focus:ring-amber-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group rounded-3xl">
                  <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => onViewProduct(item)}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-slate-900">
                        <Eye size={24} />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full font-bold text-amber-600 shadow-sm">
                      {item.price}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-slate-900 cursor-pointer hover:text-amber-600 transition-colors" onClick={() => onViewProduct(item)}>
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.description}
                    </p>
                    <Button 
                      onClick={() => onAddToCart(item)}
                      className="w-full bg-slate-900 hover:bg-amber-600 text-white rounded-2xl py-6 flex items-center gap-2 transition-all"
                    >
                      <Plus size={18} /> Add to Basket
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No items found matching your search.</p>
            <Button 
              variant="link" 
              onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
              className="text-amber-600"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;