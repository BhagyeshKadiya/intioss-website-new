import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Get index for the large aesthetic number
  const serviceIndex = services.findIndex(s => s.slug === params.slug) + 1;

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-intioss-charcoal text-intioss-ivory min-h-screen">
        
        <section className="pt-40 pb-40 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative z-10">
          
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex items-center gap-4 font-jost text-xs uppercase tracking-widest text-intioss-stone/50 font-semibold mb-16">
              <Link href="/services" className="hover:text-intioss-gold transition-colors duration-300">Services</Link>
              <span className="text-intioss-burgundy w-8 h-px bg-intioss-burgundy inline-block"></span>
              <span className="text-intioss-white tracking-[0.3em]">{service.title}</span>
            </div>

            <div className="relative mb-24">
              <span className="absolute -top-32 -left-10 md:-left-32 font-marcellus text-[180px] md:text-[250px] text-intioss-gold/5 leading-none pointer-events-none select-none">
                0{serviceIndex}
              </span>
              
              <h1 className="font-marcellus text-6xl md:text-8xl text-intioss-white mb-8 leading-tight relative z-10">
                {service.title}
              </h1>
              <div className="w-24 h-px bg-intioss-gold mb-10 relative z-10"></div>
              
              <p className="font-jost text-2xl text-intioss-gold/80 uppercase tracking-widest font-light relative z-10 max-w-3xl leading-relaxed">
                {service.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12 relative z-10 pl-0 md:pl-12 border-l-0 md:border-l border-intioss-stone/10">
            {service.content.map((paragraph, index) => (
              <AnimatedSection key={index} direction="up" delay={0.3 + (index * 0.15)}>
                <p className={`font-eb-garamond text-3xl leading-[1.8] text-intioss-stone ${index === 0 ? 'italic text-intioss-white/90 border-l-4 border-intioss-burgundy pl-8 -ml-8 md:-ml-[52px]' : ''}`}>
                  {paragraph}
                </p>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection direction="up" delay={0.8} className="mt-32 pt-20 border-t border-intioss-stone/20 text-center">
             <h3 className="font-jost text-sm uppercase tracking-widest text-intioss-gold font-semibold mb-8">Next Steps</h3>
             <Link href="/#consultation" className="inline-flex items-center gap-6 bg-intioss-white text-intioss-charcoal font-jost font-semibold uppercase tracking-widest text-sm py-5 px-12 hover:bg-intioss-gold hover:text-intioss-white transition-all duration-500 hover:-translate-y-1 shadow-2xl">
               Commission this Service <span className="text-xl leading-none">→</span>
             </Link>
          </AnimatedSection>

        </section>

      </main>
      <Footer />
    </>
  );
}
