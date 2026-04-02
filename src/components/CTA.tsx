import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="cta" className="px-8 md:px-16 py-32 text-center bg-gray-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(232,184,75,0.1),transparent)]" />
      <div className="relative z-10 max-w-[700px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.95] mb-6"
        >
          READY TO <span className="text-gold">EVOLVE?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#f5f0e8]/55 text-lg leading-relaxed mb-10"
        >
          Let's create something that leaves your competition in the dust. Our calendar fills up fast—secure your slot today.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a href="#" className="bg-gold text-[#0a0a0a] font-syne font-extrabold text-[0.82rem] tracking-widest uppercase px-9 py-4 rounded-[2px] hover:bg-orange hover:text-white hover:-translate-y-0.5 transition-all">
            Book a Discovery Call
          </a>
          <a href="#" className="border-1.5 border-[#f5f0e8]/30 text-white font-syne font-bold text-[0.82rem] tracking-widest uppercase px-9 py-4 rounded-[2px] hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
