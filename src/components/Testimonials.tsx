import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom Digital",
    text: "Theomarvel completely transformed our brand identity. Their attention to detail and creative vision is unmatched in the industry.",
    initials: "SJ"
  },
  {
    name: "Marcus Thorne",
    role: "CEO, TechVibe",
    text: "Working with them was a seamless experience. Our new website is not only beautiful but has seen a 40% increase in conversions.",
    initials: "MT"
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director, Aura",
    text: "They don't just design; they build experiences. The motion graphics they created for our launch were the highlight of the campaign.",
    initials: "ER"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-8 md:px-16 py-32">
      <div className="max-w-[1300px] mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-syne text-[0.72rem] font-bold tracking-[0.2em] uppercase text-orange mb-4 block"
        >
          Wall of Love
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-4"
        >
          Client Stories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-gold/12 p-8 hover:border-gold/40 transition-colors"
            >
              <div className="font-display text-8xl text-gold opacity-20 leading-[0.7] mb-4">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-gold text-gold" />)}
              </div>
              <p className="text-[0.9rem] leading-relaxed text-[#f5f0e8]/75 mb-6 italic">
                {testi.text}
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-display text-lg text-[#0a0a0a]">
                  {testi.initials}
                </div>
                <div>
                  <div className="font-syne font-extrabold text-[0.88rem]">{testi.name}</div>
                  <div className="text-[0.75rem] text-[#f5f0e8]/40">{testi.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
