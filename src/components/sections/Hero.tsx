'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center overflow-hidden bg-dark px-6 text-white pt-40 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <span className="mb-4 block text-sm font-semibold tracking-widest text-primary uppercase">
          {PORTFOLIO_DATA.personal.role}
        </span>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
          {PORTFOLIO_DATA.personal.name}
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
          Transformando ideas complejas en experiencias web limpias, escalables y eficientes. Especializado en ecosistemas modernos y arquitecturas sólidas.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          
          <a 
            href="/Alberto_Garcia_CV.pdf" 
            download="Alberto_Garcia_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3 font-semibold text-dark transition-all hover:bg-white hover:text-primary"
          >
            <span>Descargar CV</span>
            <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
          </a>

          <a 
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-transparent p-3 font-semibold text-white transition-all hover:border-primary hover:text-primary"
            aria-label="Perfil de LinkedIn"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

        </div>
      </motion.div>
    </section>
  );
}