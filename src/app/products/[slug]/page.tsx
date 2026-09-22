import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories } from "@/data/products";

export function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = productCategories.find(c => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-intioss-ivory pb-32">
        
        {/* Breadcrumb & Hero */}
        <section className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <AnimatedSection direction="up" className="mb-16">
            <div className="flex items-center gap-3 font-jost text-xs uppercase tracking-widest text-intioss-charcoal/50 font-semibold mb-8">
              <Link href="/products" className="hover:text-intioss-burgundy transition-colors">Products</Link>
              <span className="text-intioss-gold">/</span>
              <span className="text-intioss-charcoal">{category.title}</span>
            </div>
            
            <h1 className="font-marcellus text-5xl md:text-7xl text-intioss-burgundy-deep mb-6 leading-tight">
              {category.title}
            </h1>
            <div className="w-16 h-px bg-intioss-gold mb-8"></div>
            <p className="font-eb-garamond text-2xl text-intioss-charcoal italic max-w-3xl leading-relaxed">
              {category.description}
            </p>
          </AnimatedSection>
        </section>

        {/* Products Grid by Subcategory */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full pb-32 space-y-32">
          {category.subcategories && category.subcategories.length > 0 ? (
            category.subcategories.map((subcat) => {
              const subProducts = category.demoProducts.filter((p: any) => p.subcategory === subcat);
              if (subProducts.length === 0) return null;
              
              return (
                <div key={subcat} className="w-full">
                  <AnimatedSection direction="up" className="mb-12 flex items-center gap-6">
                    <h2 className="font-marcellus text-4xl text-intioss-charcoal">{subcat}</h2>
                    <div className="flex-grow h-px bg-intioss-stone/30"></div>
                  </AnimatedSection>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {subProducts.map((product, index) => (
                      <AnimatedSection 
                        key={product.name} 
                        direction="up" 
                        delay={0.1 + (index * 0.1)} 
                        className={subProducts.length > 3 && (index === 0 || index === 3) ? "lg:col-span-2" : "col-span-1"}
                      >
                        <div className="group block bg-intioss-white border border-intioss-stone/20 hover:border-intioss-gold/40 transition-all duration-700 overflow-hidden h-full flex flex-col relative cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]">
                          
                          <div className={`relative w-full ${subProducts.length > 3 && (index === 0 || index === 3) ? 'aspect-[21/9]' : 'aspect-[4/3]'} bg-intioss-stone overflow-hidden`}>
                            <Image 
                              src={product.image} 
                              alt={product.name} 
                              fill 
                              className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"
                            />
                            <div className="absolute inset-0 bg-intioss-charcoal/20 group-hover:bg-transparent transition-colors duration-1000 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"></div>
                          </div>
                          
                          <div className="p-10 flex flex-col flex-grow justify-between">
                            <div>
                              <h3 className="font-marcellus text-3xl text-intioss-charcoal mb-4 group-hover:text-intioss-burgundy transition-colors duration-500">{product.name}</h3>
                              <p className="font-eb-garamond text-xl text-intioss-charcoal/60 italic mb-8">{product.origin}</p>
                            </div>
                            <div className="flex items-center justify-between border-t border-intioss-stone/20 pt-6 mt-4 overflow-hidden">
                              <span className="font-jost text-xs uppercase tracking-widest text-intioss-gold font-semibold transform translate-y-0 group-hover:-translate-y-10 transition-transform duration-500 block">Inquire</span>
                              <span className="absolute left-10 font-jost text-xs uppercase tracking-widest text-intioss-burgundy font-semibold transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Inquire</span>
                              <span className="text-intioss-gold transform translate-x-0 group-hover:translate-x-3 transition-transform duration-700 ease-out text-lg">→</span>
                            </div>
                          </div>

                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {category.demoProducts.map((product, index) => (
                <AnimatedSection 
                  key={product.name} 
                  direction="up" 
                  delay={0.2 + (index * 0.15)} 
                  className={category.demoProducts.length > 3 && (index === 0 || index === 3) ? "lg:col-span-2" : "col-span-1"}
                >
                  <div className="group block bg-intioss-white border border-intioss-stone/20 hover:border-intioss-gold/40 transition-all duration-700 overflow-hidden h-full flex flex-col relative cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]">
                    
                    <div className={`relative w-full ${category.demoProducts.length > 3 && (index === 0 || index === 3) ? 'aspect-[21/9]' : 'aspect-[4/3]'} bg-intioss-stone overflow-hidden`}>
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"
                      />
                      <div className="absolute inset-0 bg-intioss-charcoal/20 group-hover:bg-transparent transition-colors duration-1000 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"></div>
                    </div>
                    
                    <div className="p-10 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-marcellus text-3xl text-intioss-charcoal mb-4 group-hover:text-intioss-burgundy transition-colors duration-500">{product.name}</h3>
                        <p className="font-eb-garamond text-xl text-intioss-charcoal/60 italic mb-8">{product.origin}</p>
                      </div>
                      <div className="flex items-center justify-between border-t border-intioss-stone/20 pt-6 mt-4 overflow-hidden">
                        <span className="font-jost text-xs uppercase tracking-widest text-intioss-gold font-semibold transform translate-y-0 group-hover:-translate-y-10 transition-transform duration-500 block">Inquire</span>
                        <span className="absolute left-10 font-jost text-xs uppercase tracking-widest text-intioss-burgundy font-semibold transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Inquire</span>
                        <span className="text-intioss-gold transform translate-x-0 group-hover:translate-x-3 transition-transform duration-700 ease-out text-lg">→</span>
                      </div>
                    </div>

                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
          
          <AnimatedSection direction="up" delay={0.8} className="mt-32 text-center border-t border-intioss-stone/30 pt-16">
             <h2 className="font-marcellus text-4xl text-intioss-burgundy-deep mb-8">Ready to explore the full inventory?</h2>
             <Link href="/contact" className="inline-block bg-intioss-charcoal text-intioss-white font-jost font-semibold uppercase tracking-widest text-sm py-5 px-12 hover:bg-intioss-burgundy transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1">
               Contact Our Curators
             </Link>
          </AnimatedSection>
        </section>

      </main>
      <Footer />
    </>
  );
}
