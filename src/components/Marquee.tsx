export default function Marquee() {
  const items = [
    "UI/UX DESIGN", "BRAND IDENTITY", "WEB DEVELOPMENT", "MOTION GRAPHICS", "DIGITAL STRATEGY"
  ];

  return (
    <div className="bg-gold py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {[...Array(4)].map((_, i) => (
          <span key={i}>
            {items.map((item, j) => (
              <span key={j} className="font-display text-lg tracking-widest text-[#0a0a0a] px-8">
                {item} <span className="text-orange ml-8">•</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
