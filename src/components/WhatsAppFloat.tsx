import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-[8000] flex flex-col items-end gap-3 group">
      <div className="bg-gray-dark text-[#f5f0e8] font-sans text-[0.75rem] px-3.5 py-2 rounded-md border border-gold/15 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
        Online: Chat with us now
      </div>
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25d366] text-white px-6 py-3.5 rounded-full font-syne font-bold text-[0.82rem] shadow-[0_6px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.5)] hover:-translate-y-1 hover:scale-105 transition-all animate-pulse"
      >
        <MessageSquare className="w-5 h-5" />
        <span>WhatsApp Me</span>
      </a>
    </div>
  );
}
