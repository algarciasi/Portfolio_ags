'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="bg-dark-card py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          Proyectos <span className="text-primary">Destacados</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-dark border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100 z-10" />
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">{project.category}</span>
                <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mb-6 text-sm text-gray-400 flex-1">{project.description}</p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} /> Visitar Proyecto
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}