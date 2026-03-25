"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { showSuccess } from '@/utils/toast';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      showSuccess("Message sent! We'll get back to you shortly.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Find Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Visit Our Bakery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Come experience the aroma of fresh bread and the warmth of our traditional stone ovens.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Cards */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="border-none shadow-lg shadow-slate-200/50 rounded-[2rem] overflow-hidden bg-slate-50">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-amber-600 text-white rounded-2xl shadow-lg shadow-amber-600/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600 leading-relaxed">Al Reef Mall, Deira,<br />Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-amber-600 text-white rounded-2xl shadow-lg shadow-amber-600/20">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-1">Opening Hours</h4>
                    <p className="text-slate-600 leading-relaxed">Open 24 Hours<br />7 Days a Week</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-amber-600 text-white rounded-2xl shadow-lg shadow-amber-600/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-1">Contact</h4>
                    <p className="text-slate-600 leading-relaxed">+971 4 123 4567<br />hello@mazaqalreef.com</p>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-xl w-12 h-12 border-slate-200 hover:bg-amber-600 hover:text-white transition-all" asChild>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram size={20} />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl w-12 h-12 border-slate-200 hover:bg-amber-600 hover:text-white transition-all" asChild>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook size={20} />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl w-12 h-12 border-slate-200 hover:bg-amber-600 hover:text-white transition-all" asChild>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter size={20} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-amber-600 rounded-[2rem] p-8 text-white shadow-xl shadow-amber-600/20">
              <h4 className="text-2xl font-bold mb-4">Large Orders?</h4>
              <p className="text-amber-50/80 mb-6">Planning an event or need a bulk delivery? We've got you covered with special rates.</p>
              <Button className="w-full bg-white text-amber-600 hover:bg-amber-50 rounded-xl font-bold py-6">
                Inquire Now
              </Button>
            </div>
          </div>

          {/* Map and Form */}
          <div className="lg:col-span-8 space-y-12">
            <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.347447447447!2d55.32!3d25.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc000000001%3A0x7c00000000000000!2sAl%20Reef%20Mall!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 hidden md:block">
                <p className="text-sm font-bold text-slate-900">Interactive Map</p>
                <p className="text-xs text-slate-500">Zoom and navigate to find us</p>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                    <Input placeholder="Your name" className="bg-white border-slate-200 h-14 rounded-xl px-5" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                    <Input type="email" placeholder="Your email" className="bg-white border-slate-200 h-14 rounded-xl px-5" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <Textarea placeholder="How can we help you today?" className="bg-white border-slate-200 min-h-[150px] rounded-xl p-5" required />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-amber-600 text-white py-7 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : (
                    <>Send Message <Send size={18} /></>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;