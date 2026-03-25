"use client";

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBasket, Instagram, Facebook, Twitter } from 'lucide-react';
import { MadeWithVizoxStudio } from './made-with-dyad';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <ShoppingBasket className="text-white" size={22} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Mazaq Al Reef
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Bringing the authentic taste of Lebanese tradition to the heart of Dubai. 
              Freshly baked, stone-oven delights available 24/7.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-amber-500 transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className="hover:text-amber-500 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="hover:text-amber-500 transition-colors">Our Menu</button></li>
              <li><button onClick={() => handleNavClick('gallery')} className="hover:text-amber-500 transition-colors">Gallery</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-amber-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-amber-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-amber-500 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/delivery-info" className="hover:text-amber-500 transition-colors">Delivery Info</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Mazaq Al Reef Bakery. All rights reserved.
          </p>
          <MadeWithVizoxStudio />
        </div>
      </div>
    </footer>
  );
};

export default Footer;