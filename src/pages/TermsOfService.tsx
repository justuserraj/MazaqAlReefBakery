"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors mb-10">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Mazaq Al Reef's website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Ordering & Delivery</h2>
            <p>All orders placed through our website are subject to availability and acceptance. We reserve the right to refuse any order. Delivery times are estimates and may vary based on location and traffic conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and you irrevocably submit to the exclusive jurisdiction of the courts in Dubai.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;