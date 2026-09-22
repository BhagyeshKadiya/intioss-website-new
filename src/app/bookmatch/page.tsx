import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BookMatchSlider } from "@/components/BookMatchSlider";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Bookmatching | INTIOSS Luxury Surfaces",
  description: "Experience the striking symmetrical perfection of our bookmatched luxury marble slabs.",
};

export default function BookmatchPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-intioss-charcoal text-intioss-ivory min-h-screen pt-32 pb-20">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20 text-center">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-3 border border-intioss-gold/40 px-5 py-2 mb-8">
              <span className="w-2 h-2 bg-intioss-gold rounded-full"></span>
              <span className="font-jost text-xs uppercase tracking-widest text-intioss-gold font-semibold">Signature Feature</span>
            </div>
            <h1 className="font-marcellus text-5xl md:text-7xl text-intioss-white mb-8">Symmetrical Perfection</h1>
            <div className="w-24 h-px bg-intioss-gold mx-auto mb-10"></div>
            <p className="font-eb-garamond text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-intioss-stone">
              Bookmatching is the ultimate expression of natural artistry. By extracting two consecutive slabs from the same stone block and polishing their opposing faces, we create a breathtaking, perfect mirror image—transforming raw geology into a massive masterpiece.
            </p>
            <p className="font-jost text-sm text-intioss-gold/70 uppercase tracking-widest mb-4">Drag the slider to reveal the bookmatched reflection</p>
          </AnimatedSection>
        </div>

        {/* Sliders Section */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 flex flex-col gap-32">
          
          <AnimatedSection direction="up" delay={0.1}>
            <div className="mb-6 flex justify-between items-end border-b border-intioss-stone/20 pb-4">
              <div>
                <h2 className="font-marcellus text-3xl text-intioss-white mb-2">Calacatta Oro</h2>
                <p className="font-jost text-intioss-stone">Carrara, Italy</p>
              </div>
              <span className="font-jost text-xs text-intioss-gold border border-intioss-gold/30 px-3 py-1 uppercase tracking-widest">Available</span>
            </div>
            <BookMatchSlider imageSrc="/images/calacatta_gold.jpg" stoneName="Calacatta Oro" />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <div className="mb-6 flex justify-between items-end border-b border-intioss-stone/20 pb-4">
              <div>
                <h2 className="font-marcellus text-3xl text-intioss-white mb-2">Nero Marquina</h2>
                <p className="font-jost text-intioss-stone">Markina, Spain</p>
              </div>
              <span className="font-jost text-xs text-intioss-gold border border-intioss-gold/30 px-3 py-1 uppercase tracking-widest">Available</span>
            </div>
            <BookMatchSlider imageSrc="/images/nero_marquina.jpg" stoneName="Nero Marquina" />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <div className="mb-6 flex justify-between items-end border-b border-intioss-stone/20 pb-4">
              <div>
                <h2 className="font-marcellus text-3xl text-intioss-white mb-2">Verde Alpi</h2>
                <p className="font-jost text-intioss-stone">Aosta Valley, Italy</p>
              </div>
              <span className="font-jost text-xs text-intioss-gold border border-intioss-gold/30 px-3 py-1 uppercase tracking-widest">Available</span>
            </div>
            <BookMatchSlider imageSrc="/images/verde_alpi.jpg" stoneName="Verde Alpi" />
          </AnimatedSection>

        </div>

        {/* Collection Section */}
        <section className="mt-32 py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-intioss-stone/20">
          <AnimatedSection direction="up" className="flex flex-col items-center mb-20">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-intioss-white mb-6">Explore the Collection</h2>
            <div className="w-16 h-px bg-intioss-gold mx-auto"></div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0} className="group border border-intioss-stone/30 bg-intioss-charcoal-light block hover:border-intioss-gold transition-colors duration-500 relative overflow-hidden">
              <div className="aspect-[3/4] bg-intioss-stone relative flex items-center justify-center text-intioss-grey font-jost text-xs">
                <Image src="/images/calacatta_gold.jpg" alt="Calacatta Oro Marble" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-intioss-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-intioss-charcoal-light border-t border-intioss-stone/30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-marcellus text-2xl text-intioss-white mb-3">Calacatta Oro</h3>
                <div className="flex items-center justify-between">
                  <span className="font-eb-garamond text-intioss-stone italic">Carrara, Italy</span>
                  <Link href="/collections" className="font-jost text-xs text-intioss-gold uppercase tracking-widest font-semibold hover:text-intioss-white transition-colors">
                    View details
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15} className="group border border-intioss-stone/30 bg-intioss-charcoal-light block hover:border-intioss-gold transition-colors duration-500 relative overflow-hidden">
              <div className="aspect-[3/4] bg-intioss-stone relative flex items-center justify-center text-intioss-grey font-jost text-xs">
                <Image src="/images/nero_marquina.jpg" alt="Nero Marquina Marble" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-intioss-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-intioss-charcoal-light border-t border-intioss-stone/30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-marcellus text-2xl text-intioss-white mb-3">Nero Marquina</h3>
                <div className="flex items-center justify-between">
                  <span className="font-eb-garamond text-intioss-stone italic">Markina, Spain</span>
                  <Link href="/collections" className="font-jost text-xs text-intioss-gold uppercase tracking-widest font-semibold hover:text-intioss-white transition-colors">
                    View details
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3} className="group border border-intioss-stone/30 bg-intioss-charcoal-light block hover:border-intioss-gold transition-colors duration-500 relative overflow-hidden">
              <div className="aspect-[3/4] bg-intioss-stone relative flex items-center justify-center text-intioss-grey font-jost text-xs">
                <Image src="/images/verde_alpi.jpg" alt="Verde Alpi Marble" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-intioss-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-intioss-charcoal-light border-t border-intioss-stone/30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-marcellus text-2xl text-intioss-white mb-3">Verde Alpi</h3>
                <div className="flex items-center justify-between">
                  <span className="font-eb-garamond text-intioss-stone italic">Aosta Valley, Italy</span>
                  <Link href="/collections" className="font-jost text-xs text-intioss-gold uppercase tracking-widest font-semibold hover:text-intioss-white transition-colors">
                    View details
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
