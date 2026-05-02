'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Briefcase, GraduationCap, Award } from 'lucide-react'; // <-- Hemos añadido Award

export default function Experience() {
  return (
    <section id="experience" className="bg-dark-card py-24 px-6 border-y border-white/5">
      <div className="mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          Trayectoria <span className="text-primary">Profesional</span>
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          
          {/* COLUMNA IZQUIERDA: Experiencia */}
          <div>
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
              <Briefcase className="text-primary" /> Experiencia
            </h3>
            <div className="relative border-l border-white/10 ml-3">
              {PORTFOLIO_DATA.experience.map((job, index) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-10 ml-8 relative"
                >
                  <span className="absolute -left-[41px] top-1 flex h-4 w-4 rounded-full bg-primary ring-4 ring-dark-card"></span>
                  <span className="text-sm font-medium text-primary mb-1 block">{job.date}</span>
                  <h4 className="text-lg font-bold text-white">{job.title}</h4>
                  <span className="text-sm font-medium text-gray-400 mb-2 block">{job.company}</span>
                  <p className="text-sm text-gray-500 leading-relaxed">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: Educación y Certificaciones */}
          <div className="flex flex-col gap-12">
            
            {/* Sección: Educación */}
            <div>
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
                <GraduationCap className="text-primary" /> Educación
              </h3>
              <div className="relative border-l border-white/10 ml-3">
                {PORTFOLIO_DATA.education.map((edu, index) => (
                  <motion.div 
                    key={edu.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-8 ml-8 relative"
                  >
                    <span className="absolute -left-[41px] top-1 flex h-4 w-4 rounded-full bg-primary ring-4 ring-dark-card"></span>
                    <span className="text-sm font-medium text-primary mb-1 block">{edu.date}</span>
                    <h4 className="text-lg font-bold text-white">{edu.title}</h4>
                    <span className="text-sm font-medium text-gray-400 mb-2 block">{edu.institution}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sección: Certificaciones */}
            <div>
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
                <Award className="text-primary" /> Certificaciones Destacadas
              </h3>
              <div className="relative border-l border-white/10 ml-3">
                {PORTFOLIO_DATA.certifications.map((cert, index) => (
                  <motion.div 
                    key={cert.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-8 ml-8 relative"
                  >
                    <span className="absolute -left-[41px] top-1 flex h-4 w-4 rounded-full bg-primary ring-4 ring-dark-card"></span>
                    <span className="text-sm font-medium text-primary mb-1 block">{cert.date}</span>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <span className="text-sm font-medium text-gray-400 block">{cert.issuer}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}