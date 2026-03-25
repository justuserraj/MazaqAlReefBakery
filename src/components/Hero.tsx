"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ShoppingBag } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full">
            Authentic Lebanese Bakery
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            The Taste of <br />
            <span className="text-amber-500">Tradition</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Experience the finest Lebanese pastries and stone-baked breads in Dubai. 
            Crafted with passion, served with love, 24 hours a day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('menu')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-8 text-xl font-bold rounded-2xl w-full sm:w-auto transition-all hover:scale-105 shadow-2xl shadow-amber-500/20 flex items-center gap-3"
            >
              <ShoppingBag size={24} /> Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="text-white border-white/30 hover:bg-white hover:text-slate-900 px-10 py-8 text-xl rounded-2xl w-full sm:w-auto transition-all"
            >
              Visit Our Bakery
            </Button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;