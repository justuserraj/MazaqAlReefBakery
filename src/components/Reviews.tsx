"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Local Guide",
    content: "The best manakish in Dubai! The cheese is always perfectly melted and the dough is so soft. Highly recommend the Zaatar with vegetables.",
    rating: 5
  },
  {
    name: "Ahmed Al-Farsi",
    role: "Food Blogger",
    content: "Authentic taste that reminds me of Lebanon. Their 24-hour service is a lifesaver for late-night cravings. The staff is always friendly.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Regular Customer",
    content: "I come here every morning for fresh pita. You can really taste the difference that stone-baking makes. Simply delicious!",
    rating: 4
  }
];

const Reviews = () => {
  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          <p className="text-slate-600">Rated 4.8/5 based on 1,200+ Google reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <Quote className="absolute top-6 right-8 text-amber-100 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">
                "{review.content}"
              </p>
              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;