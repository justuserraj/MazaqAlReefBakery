"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-amber-600" />,
    title: "24/7 Service",
    description: "Craving fresh bread at 3 AM? We're always open to serve you the warmest delights."
  },
  {
    icon: <Flame className="w-8 h-8 text-amber-600" />,
    title: "Stone Baked",
    description: "Our traditional stone ovens ensure the perfect crust and authentic flavor in every bite."
  },
  {
    icon: <Award className="w-8 h-8 text-amber-600" />,
    title: "Authentic Recipes",
    description: "Time-honored Lebanese recipes passed down through generations for a true taste of home."
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-600" />,
    title: "Made with Love",
    description: "Every pastry is handcrafted using the finest ingredients and a touch of artisanal passion."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Features = () => {
  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Why Choose Mazaq Al Reef?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            We take pride in our heritage and the quality of our products. Here's what makes us the favorite bakery in Dubai.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-8 inline-block p-4 bg-amber-50 rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(feature.icon as React.ReactElement, { 
                  className: "w-8 h-8 transition-colors duration-300 group-hover:text-white" 
                })}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;