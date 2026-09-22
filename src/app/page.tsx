import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedHeroBackground } from "@/components/AnimatedHeroBackground";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-intioss-ivory">
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-screen bg-intioss-white flex items-center justify-center overflow-hidden pt-20">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-white/30 z-0"></div>
          
          <AnimatedSection direction="up" className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-intioss-burgundy/20 bg-white/60 px-5 py-2 text-intioss-burgundy-deep font-jost text-[10px] uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-intioss-burgundy-deep"></span>
              The INTIOSS Standard
            </span>
            <h1 className="font-marcellus text-5xl sm:text-7xl md:text-8xl text-intioss-charcoal mb-8 tracking-wide leading-tight">
              Geological Purity<br />Architectural Scale
            </h1>
            <p className="font-jost text-lg md:text-xl text-intioss-charcoal/80 mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Curating rare natural stone directly from historically significant mountain quarries for monumental residential and commercial design.
            </p>
            <Link 
              href="/products" 
              className="inline-flex items-center gap-4 bg-intioss-burgundy-deep text-intioss-white px-10 py-5 font-jost font-medium text-xs uppercase tracking-[0.25em] hover:bg-intioss-burgundy transition-all duration-500 shadow-xl"
            >
              <span>Explore Collection</span>
              <span className="text-lg leading-none">&rarr;</span>
            </Link>
          </AnimatedSection>
        </section>

        {/* 2. Provenance */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <AnimatedSection direction="right" className="md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-intioss-gold"></span>
              <span className="font-jost text-xs uppercase tracking-widest text-intioss-burgundy">Origin</span>
            </div>
            <h2 className="font-marcellus text-4xl sm:text-5xl text-intioss-burgundy-deep mb-8 leading-tight">
              Our Origins
            </h2>
            <p className="font-eb-garamond text-xl text-intioss-charcoal leading-relaxed mb-6">
              Sourced from the most inaccessible, historic mountain quarries globally, our massive stone slabs carry a history written in time. Each piece is an expression of heritage, revealing a strong material essence tailored for the highest level of architectural design.
            </p>
            <p className="font-jost text-intioss-charcoal font-light leading-relaxed">
              We go beyond the ordinary to discover the finest natural stone. A combination of pressure and time creates stones that are more than just surfaces—they bring gravity, grand presence, and true rarity to the visions of top designers.
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={0.2} className="md:w-1/2 relative w-full aspect-[4/5] bg-intioss-stone overflow-hidden group">
            <Image 
              src="/images/provenance.jpg"
              alt="High-end marble extraction quarry"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-intioss-charcoal/10 group-hover:bg-transparent transition-colors duration-700"></div>
            <div className="absolute inset-0 border border-intioss-gold/60 m-6 opacity-70 scale-105 group-hover:scale-100 transition-transform duration-700 pointer-events-none"></div>
          </AnimatedSection>
        </section>

        {/* 3. Process Journey */}
        <section className="py-32 bg-intioss-white border-y border-intioss-stone/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <AnimatedSection direction="up">
              <h2 className="font-marcellus text-4xl sm:text-5xl text-intioss-burgundy-deep mb-6">The Creation Process</h2>
              <div className="w-16 h-px bg-intioss-gold mx-auto mb-20"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-intioss-stone"></div>
              
              <AnimatedSection direction="up" delay={0} className="flex flex-col items-center relative z-10 group">
                <div className="w-24 h-24 rounded-full bg-intioss-white border border-intioss-gold flex items-center justify-center mb-8 shadow-sm group-hover:bg-intioss-ivory transition-colors">
                  <span className="font-marcellus text-3xl text-intioss-burgundy">01</span>
                </div>
                <h3 className="font-marcellus text-2xl text-intioss-charcoal mb-4">Careful Selection</h3>
                <p className="font-jost text-sm text-intioss-charcoal/80 text-center leading-relaxed">
                  Rigorous geological surveying identifies the best seams. We examine the mountain closely, ensuring only blocks of absolute aesthetic beauty are chosen for harvest.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.15} className="flex flex-col items-center relative z-10 group">
                <div className="w-24 h-24 rounded-full bg-intioss-white border border-intioss-gold flex items-center justify-center mb-8 shadow-sm group-hover:bg-intioss-ivory transition-colors">
                  <span className="font-marcellus text-3xl text-intioss-burgundy">02</span>
                </div>
                <h3 className="font-marcellus text-2xl text-intioss-charcoal mb-4">Precision Cutting</h3>
                <p className="font-jost text-sm text-intioss-charcoal/80 text-center leading-relaxed">
                  Using diamond-wire technology, the stone is carefully removed with incredible precision, preserving its natural structure and honoring its ancient origins.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3} className="flex flex-col items-center relative z-10 group">
                <div className="w-24 h-24 rounded-full bg-intioss-white border border-intioss-gold flex items-center justify-center mb-8 shadow-sm group-hover:bg-intioss-ivory transition-colors">
                  <span className="font-marcellus text-3xl text-intioss-burgundy">03</span>
                </div>
                <h3 className="font-marcellus text-2xl text-intioss-charcoal mb-4">Masterful Refinement</h3>
                <p className="font-jost text-sm text-intioss-charcoal/80 text-center leading-relaxed">
                  The raw block undergoes exact measurement. Artisans guide the finishing stages to reveal deep, beautiful veining without losing the material's strong character.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.45} className="flex flex-col items-center relative z-10 group">
                <div className="w-24 h-24 rounded-full bg-intioss-white border border-intioss-gold flex items-center justify-center mb-8 shadow-sm group-hover:bg-intioss-ivory transition-colors">
                  <span className="font-marcellus text-3xl text-intioss-burgundy">04</span>
                </div>
                <h3 className="font-marcellus text-2xl text-intioss-charcoal mb-4">Final Collection</h3>
                <p className="font-jost text-sm text-intioss-charcoal/80 text-center leading-relaxed">
                  Final slabs are cataloged into an exclusive collection of stone, ready to be used in incredible masterpieces by the world's best design professionals.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 4. Collection */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <AnimatedSection direction="up" className="flex flex-col items-center mb-20">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-intioss-burgundy-deep mb-6">Curated Collection</h2>
            <div className="w-16 h-px bg-intioss-gold mx-auto"></div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0} className="group border border-intioss-stone/50 bg-intioss-white block hover:border-intioss-gold transition-colors duration-500 relative overflow-hidden">
              <div className="aspect-[3/4] bg-intioss-stone relative flex items-center justify-center text-intioss-grey font-jost text-xs">
                <Image src="/images/calacatta_gold.jpg" alt="Calacatta Oro Marble" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-intioss-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-intioss-white border-t border-intioss-stone/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-marcellus text-2xl text-intioss-burgundy mb-3">Calacatta Oro</h3>
                <div className="flex items-center justify-between">
                  <span className="font-eb-garamond text-intioss-charcoal/70 italic">Carrara, Italy</span>
                  <Link href="/collections" className="font-jost text-xs text-intioss-gold uppercase tracking-widest font-semibold hover:text-intioss-burgundy-deep transition-colors">
                    View details
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15} className="group border border-intioss-stone/50 bg-intioss-white block hover:border-intioss-gold transition-colors duration-500 relative overflow-hidden">
              <div className="aspect-[3/4] bg-intioss-stone relative flex items-center justify-center text-intioss-grey font-jost text-xs">
                <Image src="/images/nero_marquina.jpg" alt="Nero Marquina Marble" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-intioss-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-intioss-white border-t border-intioss-stone/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-marcellus text-2xl text-intioss-burgundy mb-3">Nero Marquina</h3>
                <div className="flex items-center justify-between">
                  <span className="font-eb-garamond text-intioss-charcoal/70 italic">Markina, Spain</span>
                  <Link href="/collections" className="font-jost text-xs text-intioss-gold uppercase tracking-widest font-semibold hover:text-intioss-burgundy-deep transition-colors">
                    View details
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3} className="group border border-intioss-stone/50 bg-intioss-white block hover:border-intioss-gold transition-colors duration-500 relative overflow-hidden">
              <div className="aspect-[3/4] bg-intioss-stone relative flex items-center justify-center text-intioss-grey font-jost text-xs">
                <Image src="/images/verde_alpi.jpg" alt="Verde Alpi Marble" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-intioss-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-intioss-white border-t border-intioss-stone/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-marcellus text-2xl text-intioss-burgundy mb-3">Verde Alpi</h3>
                <div className="flex items-center justify-between">
                  <span className="font-eb-garamond text-intioss-charcoal/70 italic">Aosta Valley, Italy</span>
                  <Link href="/collections" className="font-jost text-xs text-intioss-gold uppercase tracking-widest font-semibold hover:text-intioss-burgundy-deep transition-colors">
                    View details
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 5. Live Inventory */}
        <section className="py-32 bg-intioss-charcoal text-intioss-ivory px-4 relative overflow-hidden border-y border-intioss-gold/20">
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection direction="up" className="text-center mb-16">
              <div className="inline-flex items-center gap-3 border border-intioss-gold/40 px-5 py-2 mb-10">
                <span className="w-2 h-2 bg-intioss-gold rounded-full animate-pulse"></span>
                <span className="font-jost text-xs uppercase tracking-widest text-intioss-gold font-semibold">Live Stockyard</span>
              </div>
              
              <h2 className="font-marcellus text-5xl md:text-6xl text-intioss-white mb-8">Current Extractions</h2>
              <p className="font-eb-garamond text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-intioss-stone">
                Direct access to our most recent harvests. Each block is cataloged with absolute precision, awaiting transformation into architectural monoliths.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <AnimatedSection direction="up" delay={0.1} className="bg-intioss-charcoal/50 border border-intioss-stone/20 group hover:border-intioss-gold/50 transition-colors duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/block_arabescato.jpg" alt="Arabescato Corchia Block" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-marcellus text-2xl text-intioss-white">Arabescato Corchia</h3>
                    <span className="font-jost text-xs text-intioss-gold border border-intioss-gold/30 px-2 py-1">BLK-A92</span>
                  </div>
                  <div className="space-y-2 font-jost text-sm text-intioss-stone">
                    <div className="flex justify-between border-b border-intioss-stone/10 pb-1">
                      <span>Dimensions</span>
                      <span className="text-intioss-white">320 x 195 x 160 cm</span>
                    </div>
                    <div className="flex justify-between border-b border-intioss-stone/10 pb-1">
                      <span>Weight</span>
                      <span className="text-intioss-white">28,500 kg</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span>Origin</span>
                      <span className="text-intioss-white">Tuscany, Italy</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2} className="bg-intioss-charcoal/50 border border-intioss-stone/20 group hover:border-intioss-gold/50 transition-colors duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/block_travertine.jpg" alt="Silver Travertine Block" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-marcellus text-2xl text-intioss-white">Silver Travertine</h3>
                    <span className="font-jost text-xs text-intioss-gold border border-intioss-gold/30 px-2 py-1">BLK-T44</span>
                  </div>
                  <div className="space-y-2 font-jost text-sm text-intioss-stone">
                    <div className="flex justify-between border-b border-intioss-stone/10 pb-1">
                      <span>Dimensions</span>
                      <span className="text-intioss-white">290 x 180 x 150 cm</span>
                    </div>
                    <div className="flex justify-between border-b border-intioss-stone/10 pb-1">
                      <span>Weight</span>
                      <span className="text-intioss-white">21,400 kg</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span>Origin</span>
                      <span className="text-intioss-white">Tivoli, Italy</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3} className="bg-intioss-charcoal/50 border border-intioss-stone/20 group hover:border-intioss-gold/50 transition-colors duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/block_rosso.jpg" alt="Rosso Levanto Block" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-marcellus text-2xl text-intioss-white">Rosso Levanto</h3>
                    <span className="font-jost text-xs text-intioss-gold border border-intioss-gold/30 px-2 py-1">BLK-R18</span>
                  </div>
                  <div className="space-y-2 font-jost text-sm text-intioss-stone">
                    <div className="flex justify-between border-b border-intioss-stone/10 pb-1">
                      <span>Dimensions</span>
                      <span className="text-intioss-white">310 x 175 x 165 cm</span>
                    </div>
                    <div className="flex justify-between border-b border-intioss-stone/10 pb-1">
                      <span>Weight</span>
                      <span className="text-intioss-white">25,800 kg</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span>Origin</span>
                      <span className="text-intioss-white">Liguria, Italy</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="text-center">
              <Link href="/stockyard" className="inline-block bg-intioss-gold text-intioss-charcoal px-10 py-4 font-jost text-sm uppercase tracking-widest font-semibold hover:bg-intioss-white transition-colors duration-300">
                Enter Stockyard
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Gallery */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <AnimatedSection direction="up" className="text-center mb-20">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-intioss-burgundy-deep mb-6">Architectural Applications</h2>
            <div className="w-16 h-px bg-intioss-gold mx-auto"></div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedSection direction="up" delay={0.05} className="md:col-span-2 md:row-span-2 aspect-square md:aspect-[4/3] bg-intioss-stone relative overflow-hidden group">
              <Image src="/images/gallery_kitchen_island.jpg" alt="Calacatta Macchia Vecchia Kitchen Island" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-intioss-charcoal/90 via-intioss-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8">
                <h4 className="font-marcellus text-2xl text-intioss-white mb-2">Monolithic Island</h4>
                <p className="font-jost text-intioss-gold text-sm tracking-widest uppercase font-semibold">Calacatta Macchia Vecchia</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1} className="aspect-square bg-intioss-stone relative overflow-hidden group">
              <Image src="/images/gallery_bathroom_vanity.jpg" alt="Onyx Vanity" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-intioss-charcoal/90 via-intioss-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                <h4 className="font-marcellus text-lg text-intioss-white mb-1">Bespoke Vanity</h4>
                <p className="font-jost text-intioss-gold text-xs tracking-widest uppercase font-semibold">Amber Onyx</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15} className="aspect-square bg-intioss-stone relative overflow-hidden group">
              <Image src="/images/gallery_lobby_floor.jpg" alt="Portoro Lobby Flooring" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-intioss-charcoal/90 via-intioss-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                <h4 className="font-marcellus text-lg text-intioss-white mb-1">Grand Flooring</h4>
                <p className="font-jost text-intioss-gold text-xs tracking-widest uppercase font-semibold">Nero Portoro</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2} className="aspect-square bg-intioss-stone relative overflow-hidden group">
              <Image src="/images/gallery_staircase.jpg" alt="Statuario Staircase" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-intioss-charcoal/90 via-intioss-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                <h4 className="font-marcellus text-lg text-intioss-white mb-1">Statement Staircase</h4>
                <p className="font-jost text-intioss-gold text-xs tracking-widest uppercase font-semibold">Statuario</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.25} className="md:col-span-2 aspect-[2/1] bg-intioss-stone relative overflow-hidden group">
              <Image src="/images/gallery_feature_wall.jpg" alt="Patagonia Feature Wall" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-intioss-charcoal/90 via-intioss-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8">
                <h4 className="font-marcellus text-2xl text-intioss-white mb-2">Backlit Feature Wall</h4>
                <p className="font-jost text-intioss-gold text-sm tracking-widest uppercase font-semibold">Patagonia Quartzite</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3} className="aspect-square bg-intioss-stone relative overflow-hidden group">
              <Image src="/images/gallery_fireplace.jpg" alt="Pietra Grey Fireplace" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-intioss-charcoal/90 via-intioss-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                <h4 className="font-marcellus text-lg text-intioss-white mb-1">Minimalist Fireplace</h4>
                <p className="font-jost text-intioss-gold text-xs tracking-widest uppercase font-semibold">Pietra Grey</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 7. Testimonials */}
        <section className="py-32 bg-intioss-charcoal border-y border-intioss-gold/20">
          <div className="w-full">
            <AnimatedSection direction="up" className="text-center mb-20 px-4">
              <h2 className="font-marcellus text-4xl sm:text-5xl text-intioss-white mb-6">Voices of Visionaries</h2>
              <div className="w-16 h-px bg-intioss-gold mx-auto"></div>
            </AnimatedSection>
            
            <div className="flex overflow-x-auto gap-8 px-4 sm:px-8 pb-12 snap-x snap-mandatory hide-scrollbar">
              {/* Added invisible spacer to align first item with the grid */}
              <div className="shrink-0 w-4 sm:w-auto sm:max-w-[calc((100vw-80rem)/2)]"></div>

              {[
                {
                  quote: "The sheer monolithic presence of their Statuario extraction transformed our penthouse project into a living architectural masterpiece. Uncompromising purity.",
                  author: "Elena Rossi",
                  role: "Principal Architect, Milan",
                  image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                },
                {
                  quote: "Sourcing from their private reserves allowed us to secure a continuous vein match across a three-story lobby. The precision in their calibration is without equal.",
                  author: "Marcus Chen",
                  role: "Director of Design, New York",
                  image: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
                },
                {
                  quote: "Their curation goes beyond mere stone; it is the acquisition of geological heritage. The Quartzite we obtained is the pulsating heart of our boutique hotel.",
                  author: "Sophia Al Fayed",
                  role: "Creative Director, Dubai",
                  image: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                },
                {
                  quote: "A relentless dedication to structural integrity and aesthetic gravity. They collaborate in the true orchestration of space, shadow, and light.",
                  author: "Henrik Vanger",
                  role: "Founder, Copenhagen",
                  image: "https://i.pravatar.cc/150?u=a048581f4e29026701d"
                },
                {
                  quote: "The depth and hypnotic veining of their Nero Portoro slabs are a testament to their rigorous extraction standards. Truly the vanguard of natural stone curation.",
                  author: "Isabella Costa",
                  role: "Lead Interior Architect, London",
                  image: "https://i.pravatar.cc/150?u=a042581f4e29026703d"
                }
              ].map((testimonial, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 0.1} className="shrink-0 snap-center bg-intioss-charcoal-light border border-intioss-stone/20 p-8 flex flex-col items-center text-center w-[85vw] sm:w-[400px] hover:border-intioss-gold/40 transition-colors duration-500">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-intioss-gold mb-6 relative bg-intioss-stone/20 flex items-center justify-center">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-intioss-gold mb-4 text-3xl font-marcellus leading-none">"</div>
                  <blockquote className="font-eb-garamond text-lg text-intioss-stone italic mb-8 leading-relaxed flex-grow">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-auto">
                    <p className="font-jost font-semibold text-intioss-white uppercase tracking-widest text-sm mb-1">
                      {testimonial.author}
                    </p>
                    <p className="font-jost text-intioss-gold/70 text-xs uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </AnimatedSection>
              ))}

              {/* Added invisible spacer for the end */}
              <div className="shrink-0 w-4 sm:w-auto sm:max-w-[calc((100vw-80rem)/2)]"></div>
            </div>
          </div>
        </section>

        {/* 8. Enquiry */}
        <section className="py-32 px-4 max-w-4xl mx-auto w-full text-center">
          <AnimatedSection direction="up">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-intioss-burgundy-deep mb-6">Private Consultation</h2>
            <div className="w-16 h-px bg-intioss-gold mx-auto mb-10"></div>
            <p className="font-jost text-lg text-intioss-charcoal mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Speak with our specialists to secure specific stone blocks or to plan custom architectural details. Our team works strictly for those with the highest standards in design.
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <form className="flex flex-col gap-8 text-left bg-intioss-white p-8 md:p-12 shadow-2xl border border-intioss-stone/30">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="name" placeholder=" " className="peer w-full border-b border-intioss-stone p-4 font-jost focus:outline-none focus:border-intioss-burgundy bg-transparent transition-colors" />
                  <label htmlFor="name" className="absolute left-4 top-4 text-intioss-charcoal/50 font-jost text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-intioss-burgundy peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Principal Name</label>
                </div>
                <div className="relative">
                  <input type="text" id="firm" placeholder=" " className="peer w-full border-b border-intioss-stone p-4 font-jost focus:outline-none focus:border-intioss-burgundy bg-transparent transition-colors" />
                  <label htmlFor="firm" className="absolute left-4 top-4 text-intioss-charcoal/50 font-jost text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-intioss-burgundy peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Architecture Firm / Organization</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="email" id="email" placeholder=" " className="peer w-full border-b border-intioss-stone p-4 font-jost focus:outline-none focus:border-intioss-burgundy bg-transparent transition-colors" />
                  <label htmlFor="email" className="absolute left-4 top-4 text-intioss-charcoal/50 font-jost text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-intioss-burgundy peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Secure Email Address</label>
                </div>
                <div className="relative">
                  <input type="tel" id="phone" placeholder=" " className="peer w-full border-b border-intioss-stone p-4 font-jost focus:outline-none focus:border-intioss-burgundy bg-transparent transition-colors" />
                  <label htmlFor="phone" className="absolute left-4 top-4 text-intioss-charcoal/50 font-jost text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-intioss-burgundy peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Direct Contact Number</label>
                </div>
              </div>

              <div className="relative w-full border-b border-intioss-stone">
                <select id="project_type" className="peer w-full p-4 font-jost focus:outline-none focus:border-intioss-burgundy bg-transparent transition-colors appearance-none text-intioss-charcoal/80 cursor-pointer">
                  <option value="" disabled selected hidden>Select Commission Type...</option>
                  <option value="architecture">Architectural Commission</option>
                  <option value="interior_design">Interior Design Commission</option>
                  <option value="residential">Ultra-High-Net-Worth Residential</option>
                  <option value="commercial">Premium Commercial / Hospitality</option>
                  <option value="retail">Flagship Luxury Retail</option>
                  <option value="other">Custom Sculptures / Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-intioss-gold">
                  ▼
                </div>
              </div>

              <div className="relative mt-2">
                <textarea id="message" rows={5} placeholder=" " className="peer w-full border-b border-intioss-stone p-4 font-jost focus:outline-none focus:border-intioss-burgundy bg-transparent transition-colors resize-none"></textarea>
                <label htmlFor="message" className="absolute left-4 top-4 text-intioss-charcoal/50 font-jost text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-intioss-burgundy peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Commission Details / Architectural Vision</label>
              </div>
              
              <button type="button" className="mt-8 bg-intioss-burgundy-deep text-intioss-white font-jost font-semibold uppercase tracking-widest text-sm py-5 px-10 self-center hover:bg-intioss-burgundy transition-colors duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl">
                Submit Details
              </button>
            </form>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
