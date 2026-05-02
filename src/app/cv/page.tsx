import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-dark py-8 print:py-0 flex justify-center print:bg-[#252A2E]">
      
      {/* Etiqueta mágica mejorada: Fuerza el color en TODAS las páginas de impresión sin cortes */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { margin: 0; size: A4; }
          html, body { 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
            background-color: #252A2E !important; 
            height: auto !important;
          }
          header.fixed { display: none !important; }
        }
      `}} />

      {/* Contenedor A4 (Dark Theme) - Eliminamos las restricciones de altura para que fluya */}
      <div className="w-[210mm] min-h-[297mm] bg-dark-card text-white p-12 shadow-2xl print:shadow-none border border-white/5 print:border-none">
        
        {/* Cabecera */}
        <header className="border-b border-white/10 pb-6 mb-6 print:break-inside-avoid">
          <h1 className="text-4xl font-black uppercase tracking-tight text-white">
            {PORTFOLIO_DATA.personal.name}
          </h1>
          <h2 className="text-xl font-medium text-primary mt-1 uppercase tracking-widest">
            {PORTFOLIO_DATA.personal.role}
          </h2>
          
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-1"><Mail size={14} className="text-primary" /> {PORTFOLIO_DATA.personal.email}</span>
            <span className="flex items-center gap-1"><Phone size={14} className="text-primary" /> {PORTFOLIO_DATA.personal.phone}</span>
            <span className="flex items-center gap-1"><MapPin size={14} className="text-primary" /> {PORTFOLIO_DATA.personal.location}</span>
            <span className="flex items-center gap-1"><Globe size={14} className="text-primary" /> www.linkedin.com/in/alberto-miguel-garcia-simo</span>
          </div>
        </header>

        {/* Resumen */}
        <section className="mb-6 print:break-inside-avoid">
          <p className="text-sm leading-relaxed text-gray-300 font-medium">
            {PORTFOLIO_DATA.about}
          </p>
        </section>

        <div className="grid grid-cols-3 gap-8">
          
          {/* Columna Principal (Experiencia y Proyectos) */}
          <div className="col-span-2 space-y-6">
            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-primary/30 pb-1 mb-4 text-primary print:break-after-avoid">
                Experiencia Profesional
              </h3>
              <div className="space-y-4">
                {PORTFOLIO_DATA.experience.map((job) => (
                  <div key={job.id} className="print:break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-base font-bold text-white">{job.title}</h4>
                      <span className="text-xs font-bold text-primary whitespace-nowrap ml-2 bg-primary/10 px-2 py-0.5 rounded">{job.date}</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-400 mb-1">{job.company}</div>
                    <p className="text-xs leading-relaxed text-gray-400">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-primary/30 pb-1 mb-4 text-primary print:break-after-avoid">
                Proyectos Destacados
              </h3>
              <div className="space-y-4">
                {PORTFOLIO_DATA.projects.map((project) => (
                  <div key={project.id} className="print:break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-base font-bold text-white">{project.title}</h4>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{project.category}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-400 mb-1">{project.description}</p>
                    <p className="text-xs font-semibold text-gray-500">Stack: <span className="text-gray-300">{project.tags.join(', ')}</span></p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Columna Secundaria (Skills, Educación, Certificaciones) */}
          <div className="col-span-1 space-y-6">
            <section className="print:break-inside-avoid">
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-primary/30 pb-1 mb-4 text-primary">
                Tech Stack
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-bold text-white block text-xs uppercase mb-1">Frontend</span>
                  <p className="text-xs text-gray-400 leading-snug">{PORTFOLIO_DATA.skills.frontend.join(', ')}</p>
                </div>
                <div>
                  <span className="font-bold text-white block text-xs uppercase mb-1">Backend & DB</span>
                  <p className="text-xs text-gray-400 leading-snug">{PORTFOLIO_DATA.skills.backend.join(', ')}, {PORTFOLIO_DATA.skills.database.join(', ')}</p>
                </div>
                <div>
                  <span className="font-bold text-white block text-xs uppercase mb-1">DevOps & Tools</span>
                  <p className="text-xs text-gray-400 leading-snug">{PORTFOLIO_DATA.skills.tools.join(', ')}</p>
                </div>
              </div>
            </section>

            <section className="print:break-inside-avoid">
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-primary/30 pb-1 mb-4 text-primary">
                Educación
              </h3>
              <div className="space-y-3">
                {PORTFOLIO_DATA.education.map((edu) => (
                  <div key={edu.id} className="print:break-inside-avoid border-l-2 border-primary/30 pl-3">
                    <h4 className="text-sm font-bold text-white leading-tight">{edu.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{edu.institution}</p>
                    <p className="text-xs font-semibold text-primary mt-0.5">{edu.date}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="print:break-inside-avoid">
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-primary/30 pb-1 mb-4 text-primary">
                Certificaciones
              </h3>
              <div className="space-y-3">
                {PORTFOLIO_DATA.certifications.map((cert) => (
                  <div key={cert.id} className="print:break-inside-avoid mb-2 border-l-2 border-primary/30 pl-3">
                    <h4 className="text-xs font-bold text-white leading-tight">{cert.title}</h4>
                    <p className="text-[11px] text-gray-400 mt-1">{cert.issuer} | <span className="text-primary">{cert.date}</span></p>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}