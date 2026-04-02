import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ["All", "Branding", "Web", "Motion"];

const projects = [
  { id: 1, title: "Neon Future", cat: "Branding", size: "wide", color: "bg-linear-to-br from-[#1a0a2e] via-[#3d1a6b] to-[#e8184b]" },
  { id: 2, title: "Eco Flow", cat: "Web", size: "normal", color: "bg-linear-to-br from-[#0a1a2e] to-[#1a6b3d]" },
  { id: 3, title: "Vibe Check", cat: "Motion", size: "normal", color: "bg-linear-to-br from-[#2e1a0a] to-[#6b3d1a]" },
  { id: 4, title: "Cyber Pulse", cat: "Web", size: "normal", color: "bg-linear-to-br from-[#0a2e1a] to-[#1a4b6b]" },
  { id: 5, title: "Retro Wave", cat: "Branding", size: "normal", color: "bg-linear-to-br from-[#2e0a1a] to-[#6b1a4b]" },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.cat === activeTab);

  return (
    <section id="work" className="px-8 md:px-16 py-32 bg-gray-dark">
      <div className="max-w-[1300px] mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-syne text-[0.72rem] font-bold tracking-[0.2em] uppercase text-orange mb-4 block"
        >
          Portfolio
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-4"
        >
          Selected Works
        </motion.h2>
        
        <div className="flex gap-2 flex-wrap mt-10 mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`font-syne font-bold text-[0.72rem] tracking-[0.15em] uppercase px-5 py-2 border rounded-[2px] transition-all cursor-none ${activeTab === cat ? 'bg-gold text-[#0a0a0a] border-gold' : 'border-gold/20 text-[#f5f0e8]/50 hover:border-gold hover:text-gold'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5px] bg-gold/10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden group cursor-pointer h-[280px] ${project.size === 'wide' ? 'lg:col-span-2 lg:row-span-2 lg:h-[561.5px]' : ''}`}
              >
                <div className={`absolute inset-0 transition-transform duration-500 group-hover:scale-110 ${project.color}`} />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-6">
                  <div className="text-[0.7rem] font-syne tracking-[0.15em] uppercase text-gold mb-1">{project.cat}</div>
                  <h3 className="font-syne font-extrabold text-lg text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
