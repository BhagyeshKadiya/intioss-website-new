import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata = {
  title: "Services & Capabilities | INTIOSS Luxury Surfaces",
  description: "Explore our capabilities in luxury civil contracting, block processing, stone facades, and CNC waterjet precision.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-intioss-charcoal text-intioss-ivory pb-32">
        
        {/* 1. Hero Section */}
        <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden pt-20 border-b border-intioss-gold/20">
          <div className="absolute inset-0 bg-[url('/images/gallery_lobby_floor.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          
          <AnimatedSection direction="up" className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-intioss-gold/40 bg-black/40 px-5 py-2 text-intioss-gold font-jost text-[10px] uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-intioss-gold"></span>
              Expertise
            </span>
            <h1 className="font-marcellus text-5xl sm:text-6xl text-intioss-white mb-6 tracking-wide leading-tight">
              CAPABILITY & EXECUTION
            </h1>
            <div className="w-16 h-px bg-intioss-gold mx-auto"></div>
          </AnimatedSection>
        </section>

        {/* 2. Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full -mt-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            
            {services.map((service, index) => (
              <AnimatedSection 
                key={service.slug} 
                direction="up" 
                delay={index * 0.2}
                className={index % 2 === 1 ? "md:mt-32" : ""} // Extreme staggering for editorial feel
              >
                <Link href={`/services/${service.slug}`} className="group block bg-intioss-charcoal-light border border-intioss-stone/20 p-16 hover:border-intioss-gold/40 hover:bg-[#1a1716] hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] h-full flex flex-col relative overflow-hidden shadow-2xl">
                  
                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-intioss-gold/0 to-intioss-gold/0 group-hover:from-intioss-gold/5 group-hover:to-transparent transition-all duration-1000 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] pointer-events-none"></div>

                  <span className="font-marcellus text-[100px] leading-none text-intioss-gold/5 group-hover:text-intioss-gold/20 transition-colors duration-700 mb-8 block relative z-10 -ml-4">
                    0{index + 1}
                  </span>
                  
                  <h2 className="font-marcellus text-3xl text-intioss-white mb-6 relative z-10 group-hover:text-intioss-gold transition-colors duration-700">
                    {service.title}
                  </h2>
                  
                  <div className="w-12 h-px bg-intioss-burgundy mb-8 relative z-10 group-hover:w-24 transition-all duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"></div>
                  
                  <p className="font-jost text-intioss-stone uppercase tracking-widest text-sm leading-relaxed relative z-10 flex-grow">
                    {service.subtitle}
                  </p>

                  <div className="mt-12 pt-6 border-t border-intioss-stone/10 flex items-center justify-between text-intioss-stone group-hover:text-intioss-white text-xs font-jost uppercase tracking-widest font-semibold relative z-10 transition-colors duration-700 overflow-hidden">
                    <span className="transform translate-y-0 group-hover:-translate-y-10 transition-transform duration-500">View Capability</span>
                    <span className="absolute left-0 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 text-intioss-gold">View Capability</span>
                    <span className="transform translate-x-0 group-hover:translate-x-4 transition-transform duration-700 ease-out text-intioss-gold">→</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
