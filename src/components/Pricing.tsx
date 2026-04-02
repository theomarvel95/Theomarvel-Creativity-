import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const tiers = [
  {
    tier: "Starter",
    name: "Brand Essentials",
    price: "800",
    period: "Per Project",
    features: [
      { text: "Logo Design (3 Concepts)", included: true },
      { text: "Typography System", included: true },
      { text: "Color Palette", included: true },
      { text: "Social Media Kit", included: false },
      { text: "Web Development", included: false },
    ],
    featured: false
  },
  {
    tier: "Professional",
    name: "Digital Growth",
    price: "2,500",
    period: "Per Project",
    features: [
      { text: "Full Brand Identity", included: true },
      { text: "Custom 5-Page Website", included: true },
      { text: "SEO Optimization", included: true },
      { text: "Social Media Kit", included: true },
      { text: "1 Month Support", included: true },
    ],
    featured: true
  },
  {
    tier: "Enterprise",
    name: "Complete Marvel",
    price: "5,000",
    period: "Per Project",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "E-commerce Integration", included: true },
      { text: "Motion Graphics", included: true },
      { text: "Content Strategy", included: true },
      { text: "Priority Support", included: true },
    ],
    featured: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-8 md:px-16 py-32 bg-gray-dark">
      <div className="max-w-[1300px] mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-syne text-[0.72rem] font-bold tracking-[0.2em] uppercase text-orange mb-4 block"
        >
          Investment
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-4"
        >
          Pricing Tiers
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 border relative transition-all group bg-[#0a0a0a] hover:-translate-y-2 ${tier.featured ? 'border-gold bg-linear-to-br from-[#151505] to-[#0a0a0a]' : 'border-gold/15 hover:border-gold/50'}`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-[#0a0a0a] font-syne font-extrabold text-[0.62rem] tracking-[0.2em] px-4 py-1.5 whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <div className="font-syne font-extrabold text-[0.78rem] tracking-[0.18em] uppercase text-orange mb-3">{tier.tier}</div>
              <h3 className="font-display text-3xl mb-1">{tier.name}</h3>
              <div className="font-display text-[3.8rem] text-gold leading-none mb-1">
                <sup className="text-2xl align-top mt-2 inline-block">$</sup>{tier.price}
              </div>
              <div className="text-[0.78rem] text-[#f5f0e8]/40 mb-8">{tier.period}</div>
              
              <div className="h-px bg-gold/12 mb-7" />
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className={`text-[0.85rem] flex items-center gap-3 pb-4 border-b border-white/5 last:border-none ${feature.included ? 'text-[#f5f0e8]/70' : 'text-[#f5f0e8]/30'}`}>
                    {feature.included ? <Check className="w-4 h-4 text-accent" /> : <X className="w-4 h-4 text-[#f5f0e8]/20" />}
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#" 
                className={`block text-center font-syne font-extrabold text-[0.8rem] tracking-widest uppercase py-3.5 rounded-[2px] transition-all ${tier.featured ? 'bg-gold text-[#0a0a0a] hover:bg-orange hover:text-white' : 'border-1.5 border-gold/40 text-gold hover:bg-gold/10'}`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center p-8 border border-dashed border-gold/20">
          <p className="text-[0.9rem] text-[#f5f0e8]/55 mb-4">Need a custom solution for your specific needs?</p>
          <a href="#cta" className="text-gold font-syne font-bold text-sm tracking-widest uppercase hover:text-orange transition-colors">Contact for Custom Quote ⟶</a>
        </div>
      </div>
    </section>
  );
}
