import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your brand's DNA, goals, and target audience to build a solid strategic foundation."
  },
  {
    num: "02",
    title: "Concept",
    desc: "Our creative team explores bold visual directions and innovative concepts that set you apart."
  },
  {
    num: "03",
    title: "Refinement",
    desc: "We polish every detail, ensuring the aesthetics and functionality are perfectly aligned with your vision."
  },
  {
    num: "04",
    title: "Launch",
    desc: "The final masterpiece is deployed, ready to dominate the digital landscape and drive results."
  }
];

export default function Process() {
  return (
    <section id="process" className="px-8 md:px-16 py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22vw] text-gold/[0.03] whitespace-nowrap pointer-events-none">
        HOW
      </div>
      <div className="max-w-[1300px] mx-auto relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-syne text-[0.72rem] font-bold tracking-[0.2em] uppercase text-orange mb-4 block"
        >
          Workflow
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-4"
        >
          The Process
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-gold/12 hover:border-gold hover:-translate-y-1.5 transition-all group"
            >
              <div className="font-display text-6xl text-gold/18 leading-none mb-2 group-hover:text-gold/30 transition-colors">{step.num}</div>
              <h3 className="font-syne font-extrabold text-lg mb-2">{step.title}</h3>
              <p className="text-[0.83rem] text-[#f5f0e8]/50 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
