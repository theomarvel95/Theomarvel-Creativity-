import { motion } from 'motion/react';

const services = [
  {
    icon: "✦",
    name: "Visual Identity",
    desc: "Complete branding systems including logos, typography, and color psychology.",
    price: "$800",
  },
  {
    icon: "⚡",
    name: "Premium Web",
    desc: "Custom-coded, lightning-fast websites that prioritize user experience.",
    price: "$1,200",
  },
  {
    icon: "◈",
    name: "Social Design",
    desc: "High-conversion content blocks and templates for your social presence.",
    price: "$450",
  }
];

export default function Services() {
  return (
    <section id="services" className="px-8 md:px-16 py-32 max-w-[1300px] mx-auto">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-syne text-[0.72rem] font-bold tracking-[0.2em] uppercase text-orange mb-4 block"
      >
        Expertise
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-4"
      >
        Elite Solutions
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[0.95rem] text-[#f5f0e8]/50 max-w-[420px] leading-relaxed mb-16"
      >
        Tailored services designed to scale your presence and convert your audience.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] bg-gold/10 border border-gold/10">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#0a0a0a] p-10 relative overflow-hidden group cursor-pointer hover:bg-gray-dark transition-colors"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-350 ease-out" />
            <span className="text-3xl mb-5 block">{service.icon}</span>
            <h3 className="font-syne font-extrabold text-[1.05rem] mb-3">{service.name}</h3>
            <p className="text-[0.85rem] text-[#f5f0e8]/50 leading-relaxed mb-6">{service.desc}</p>
            <div className="font-display text-[1.6rem] text-gold">
              {service.price} <small className="font-sans text-[0.7rem] font-light text-[#f5f0e8]/40 uppercase">Starting</small>
            </div>
            <a href="#" className="mt-6 inline-flex items-center gap-2 font-syne font-bold text-[0.75rem] tracking-widest uppercase text-gold hover:gap-3.5 transition-all">
              Learn More ⟶
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
