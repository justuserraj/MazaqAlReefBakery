"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Clock, MapPin, ShieldCheck } from 'lucide-react';

const DeliveryInfo = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors mb-10">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Delivery Information</h1>
        
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl h-fit">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Delivery Hours</h3>
                <p className="text-slate-600 text-sm">We deliver 24 hours a day, 7 days a week. Freshness never sleeps!</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl h-fit">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Delivery Time</h3>
                <p className="text-slate-600 text-sm">Average delivery time is 30-45 minutes depending on your location in Dubai.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl h-fit">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Coverage Area</h3>
                <p className="text-slate-600 text-sm">We currently deliver to all major areas in Dubai, including Deira, Bur Dubai, Downtown, and Marina.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl h-fit">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Safe Handling</h3>
                <p className="text-slate-600 text-sm">All our bakes are handled with the highest hygiene standards and delivered in thermal bags.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">Delivery Fees</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex justify-between">
                <span>Orders above 50 AED</span>
                <span className="text-green-600 font-bold">FREE</span>
              </li>
              <li className="flex justify-between">
                <span>Orders below 50 AED</span>
                <span>10 AED</span>
              </li>
              <li className="flex justify-between">
                <span>Late Night (12 AM - 6 AM)</span>
                <span>FREE</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;