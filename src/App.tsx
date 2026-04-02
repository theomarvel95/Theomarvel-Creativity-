import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
