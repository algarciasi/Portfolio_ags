'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Gamepad2, Headphones, Plane, Apple, Activity, Book, Car, Camera } from 'lucide-react';

const interests = [
  { name: 'Juegos', icon: Gamepad2 },
  { name: 'Música', icon: Headphones },
  { name: 'Viajar', icon: Plane },
  { name: 'Mac OS', icon: Apple },
  { name: 'Deporte', icon: Activity },
  { name: 'Libros', icon: Book },
  { name: 'Autos', icon: Car },
  { name: 'Fotos', icon: Camera },
];

export default function About() {
  return (
    <section id="about" className="bg-dark py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          Sobre <span className="text-primary">Mí</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 md:row-span-2 rounded-3xl bg-dark-card p-8 border border-white/5"
          >
            <h3 className="mb-4 text-2xl font-semibold text-white">¿Quién soy?</h3>
            <p className="text-lg leading-relaxed text-gray-400">
              {PORTFOLIO_DATA.about}
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-sm text-gray-500">Edad</p>
                <p className="font-medium text-white">39 Años</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Ubicación</p>
                <p className="font-medium text-white">Almenara, ES</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Perfil</p>
                <p className="font-medium text-primary">FullStack & Observability Engineer</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 rounded-3xl bg-gradient-to-br from-primary/20 to-dark-card p-8 border border-primary/20 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">Rol Actual</h3>
            <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-dark">
              OBSERVABILITY ENGINEER
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 rounded-3xl bg-dark-card p-6 border border-white/5"
          >
            <h3 className="mb-4 text-sm font-semibold text-gray-400 uppercase tracking-wider text-center">Intereses</h3>
            <div className="grid grid-cols-4 gap-3">
              {interests.map((Item, i) => (
                <div key={i} title={Item.name} className="flex flex-col items-center justify-center rounded-xl bg-dark p-2 text-gray-400 transition-colors hover:bg-primary hover:text-dark">
                  <Item.icon size={20} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}