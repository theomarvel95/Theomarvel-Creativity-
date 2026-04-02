export default function Footer() {
  return (
    <footer className="border-t border-gold/12 px-8 md:px-16 py-10 flex items-center justify-between flex-wrap gap-4">
      <div className="font-display text-2xl tracking-wider text-[#f5f0e8]">
        THEOMARVEL<span className="text-gold">.</span>
      </div>
      <div className="text-[0.75rem] text-[#f5f0e8]/40 tracking-wider uppercase">
        © 2026 THEOMARVEL CREATIVITY. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-[#f5f0e8]/60 hover:text-gold text-[0.75rem] transition-colors">Instagram</a>
        <a href="#" className="text-[#f5f0e8]/60 hover:text-gold text-[0.75rem] transition-colors">Behance</a>
        <a href="#" className="text-[#f5f0e8]/60 hover:text-gold text-[0.75rem] transition-colors">Dribbble</a>
      </div>
    </footer>
  );
}
