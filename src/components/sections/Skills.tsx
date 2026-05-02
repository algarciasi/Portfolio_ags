'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const categories = [
  { title: 'Frontend', icon: Code2, items: PORTFOLIO_DATA.skills.frontend },
  { title: 'Backend', icon: Server, items: PORTFOLIO_DATA.skills.backend },
  { title: 'Bases de Datos', icon: Database, items: PORTFOLIO_DATA.skills.database },
  { title: 'Herramientas', icon: Wrench, items: PORTFOLIO_DATA.skills.tools },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-dark py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Tech <span className="text-primary">Stack</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl bg-dark-card p-8 border border-white/5"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <span key={i} className="rounded-full bg-dark px-4 py-2 text-sm font-medium text-gray-300 border border-white/10 hover:border-primary transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}