'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-dark/80 py-4 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-primary">
          {PORTFOLIO_DATA.personal.name.split(' ')[0]}<span className="text-white">.dev</span>
        </a>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-dark/95 backdrop-blur-md md:hidden overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 px-6 py-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-primary">
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}