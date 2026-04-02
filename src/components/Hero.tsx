import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen grid place-items-center relative overflow-hidden px-8 md:px-16 pt-32 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(232,184,75,0.12)_0%,transparent_70%),radial-gradient(ellipse_40%_60%_at_20%_70%,rgba(255,92,26,0.08)_0%,transparent_70%),#0a0a0a]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,184,75,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(232,184,75,0.04)_1px,transparent_1px)] bg-[length:60px_60px]" />
      
      {/* Floating Shapes */}
      <motion.div 
        animate={{ y: [0, -18, 0], rotate: [25, 30, 25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[120px] h-[120px] top-[20%] right-[15%] border border-gold/15"
      />
      <motion.div 
        animate={{ y: [0, -18, 0], rotate: [20, 30, 20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-[60px] h-[60px] top-[60%] right-[30%] border border-gold/15"
      />
      <motion.div 
        animate={{ y: [0, -18, 0], rotate: [20, 30, 20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[80px] h-[80px] bottom-[25%] left-[8%] border border-gold/15 rounded-full"
      />

      <div className="relative z-10 max-w-[1200px] w-full">
        <motion.span 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-block font-syne text-[0.72rem] font-bold tracking-[0.2em] uppercase text-accent border border-accent px-3.5 py-1.5 mb-6"
        >
          Creative Design Studio
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-wider mb-6"
        >
          WE BUILD<br />
          <em className="text-stroke">DIGITAL</em> <span className="text-gold">MARVELS</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-[1.05rem] font-light text-[#f5f0e8]/60 max-w-[520px] leading-relaxed mb-10"
        >
          Merging high-end aesthetics with functional strategy. We help visionaries dominate their niche through elite branding and web experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex gap-4 flex-wrap"
        >
          <a href="#work" className="bg-gold text-[#0a0a0a] font-syne font-extrabold text-[0.82rem] tracking-widest uppercase px-9 py-4 rounded-[2px] inline-flex items-center gap-2 hover:bg-orange hover:text-white hover:-translate-y-0.5 transition-all">
            View Portfolio
          </a>
          <a href="#cta" className="border-1.5 border-[#f5f0e8]/30 text-white font-syne font-bold text-[0.82rem] tracking-widest uppercase px-9 py-4 rounded-[2px] inline-flex items-center gap-2 hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all">
            Get a Quote
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute right-8 md:right-16 bottom-16 flex gap-12"
      >
        <div className="text-center">
          <div className="font-display text-[2.8rem] text-gold leading-none">120+</div>
          <div className="text-[0.7rem] tracking-[0.15em] uppercase text-[#f5f0e8]/40">Projects Done</div>
        </div>
        <div className="text-center">
          <div className="font-display text-[2.8rem] text-gold leading-none">98%</div>
          <div className="text-[0.7rem] tracking-[0.15em] uppercase text-[#f5f0e8]/40">Client Joy</div>
        </div>
      </motion.div>
    </section>
  );
}
