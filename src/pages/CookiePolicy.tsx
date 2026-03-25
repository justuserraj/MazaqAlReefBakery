"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors mb-10">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What are cookies?</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How we use cookies</h2>
            <p>We use cookies for several reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function, such as keeping track of your shopping basket.</li>
              <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Functionality Cookies:</strong> These allow the website to remember choices you make (such as your user name or language).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Managing Cookies</h2>
            <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;