import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { productCategories } from "@/data/products";

export const metadata = {
  title: "Products & Collections | INTIOSS Luxury Surfaces",
  description: "Explore our collection of natural stones, semi-precious inlays, exclusive table tops, and architectural mosaics.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-intioss-ivory pb-32">
        
        {/* 1. Hero Section */}
        <section className="relative w-full h-[50vh] bg-intioss-charcoal flex items-center justify-center overflow-hidden pt-20 border-b border-intioss-gold/20">
          <div className="absolute inset-0 bg-[url('/images/provenance.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          
          <AnimatedSection direction="up" className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-intioss-gold/40 bg-black/40 px-5 py-2 text-intioss-gold font-jost text-[10px] uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-intioss-gold"></span>
              Collections
            </span>
            <h1 className="font-marcellus text-5xl sm:text-6xl text-intioss-white mb-6 tracking-wide leading-tight">
              MATERIAL & OBJECT
            </h1>
            <div className="w-16 h-px bg-intioss-gold mx-auto"></div>
          </AnimatedSection>
        </section>

        {/* 2. Product Categories */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full -mt-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            
            {productCategories.map((category, index) => (
              <AnimatedSection 
                key={category.slug} 
                direction="up" 
                delay={index * 0.15}
                className={index % 2 === 1 ? "md:mt-16" : ""} // Asymmetrical staggering
              >
                <Link href={`/products/${category.slug}`} className="group block bg-intioss-white border border-intioss-stone/20 p-12 hover:border-intioss-gold/60 hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] h-full flex flex-col relative overflow-hidden">
                  
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-intioss-gold/10 to-transparent rounded-bl-[100px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] pointer-events-none"></div>

                  <div className="flex items-end gap-6 mb-8 border-b border-intioss-stone/10 pb-6 relative z-10">
                    <span className="font-marcellus text-5xl text-intioss-gold/20 group-hover:text-intioss-gold transition-colors duration-700">
                      0{index + 1}
                    </span>
                    <h2 className="font-marcellus text-3xl text-intioss-charcoal">{category.title}</h2>
                  </div>
                  
                  {category.subcategories && category.subcategories.length > 0 ? (
                    <ul className="grid grid-cols-1 gap-4 font-jost text-intioss-charcoal/60 uppercase tracking-widest text-xs relative z-10 flex-grow">
                      {category.subcategories.map(sub => (
                        <li key={sub} className="flex items-center gap-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-intioss-burgundy-deep/20 group-hover:bg-intioss-burgundy transition-colors duration-700"></span>
                          {sub}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-eb-garamond text-xl text-intioss-charcoal/60 italic relative z-10 flex-grow leading-relaxed">
                      {category.description.split('.')[0]}.
                    </p>
                  )}

                  <div className="mt-12 pt-6 border-t border-intioss-stone/10 flex items-center justify-between text-intioss-gold text-xs font-jost uppercase tracking-widest font-semibold relative z-10 overflow-hidden">
                    <span className="transform translate-y-0 group-hover:-translate-y-10 transition-transform duration-500">Explore Collection</span>
                    <span className="absolute left-0 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 text-intioss-burgundy">Explore Collection</span>
                    <span className="transform translate-x-0 group-hover:translate-x-3 transition-transform duration-700 ease-out">→</span>
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
