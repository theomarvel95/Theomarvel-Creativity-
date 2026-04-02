import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-8 md:px-16 py-5 bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-gold/15"
    >
      <div className="font-display text-2xl tracking-widest text-[#f5f0e8]">
        THEOMARVEL<span className="text-gold">.</span>
      </div>
      <ul className="hidden md:flex gap-10 items-center">
        <li><a href="#services" className="font-syne text-[0.78rem] font-bold tracking-widest uppercase text-[#f5f0e8]/60 hover:text-gold transition-colors">Services</a></li>
        <li><a href="#work" className="font-syne text-[0.78rem] font-bold tracking-widest uppercase text-[#f5f0e8]/60 hover:text-gold transition-colors">Portfolio</a></li>
        <li><a href="#pricing" className="font-syne text-[0.78rem] font-bold tracking-widest uppercase text-[#f5f0e8]/60 hover:text-gold transition-colors">Pricing</a></li>
        <li><a href="#testimonials" className="font-syne text-[0.78rem] font-bold tracking-widest uppercase text-[#f5f0e8]/60 hover:text-gold transition-colors">Reviews</a></li>
        <li>
          <a href="#cta" className="bg-gold text-[#0a0a0a] px-5 py-2 rounded-[2px] font-syne text-[0.78rem] font-extrabold tracking-widest uppercase hover:bg-orange hover:text-white transition-all">
            Start a Project
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}
