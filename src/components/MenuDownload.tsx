"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MenuDownload = () => {
  const menuPdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  return (
    <section className="py-20 bg-amber-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-amber-900/5 border border-amber-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-amber-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-amber-600/20 shrink-0">
              <FileText size={40} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Full Menu</h2>
              <p className="text-slate-600 max-w-md">
                Want to see everything we offer? Download our complete artisanal menu to browse at your convenience.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button 
              asChild
              variant="outline"
              className="rounded-2xl h-14 px-8 border-slate-200 hover:bg-slate-50 text-slate-700 font-bold flex items-center gap-2"
            >
              <a href={menuPdfUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} /> View Online
              </a>
            </Button>
            <Button 
              asChild
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-2xl h-14 px-8 font-bold flex items-center gap-2 shadow-lg shadow-amber-600/20 transition-all hover:scale-105"
            >
              <a href={menuPdfUrl} download="Mazaq-Al-Reef-Menu.pdf">
                <Download size={18} /> Download PDF
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuDownload;