import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Story | INTIOSS Luxury Surfaces",
  description: "Since 1997, Intioss Luxury Surfaces has curated and crafted the world's finest stone, from rare marbles and semi-precious inlays to façades and fine interiors. Every surface is made to be lived with.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-intioss-ivory">
        
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[80vh] bg-intioss-charcoal flex flex-col justify-center overflow-hidden pt-20">
          <Image 
            src="/images/provenance.jpg" 
            alt="Intioss stone quarry" 
            fill 
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-intioss-charcoal via-intioss-charcoal/60 to-transparent z-0"></div>
          
          <AnimatedSection direction="up" className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full mt-20">
            <h1 className="font-marcellus text-5xl sm:text-7xl md:text-8xl text-intioss-white mb-6 tracking-wide drop-shadow-2xl leading-tight max-w-4xl">
              STONE REMEMBERS EVERYTHING.
            </h1>
            <div className="w-24 h-px bg-intioss-gold mb-8"></div>
            <p className="font-jost text-xl sm:text-2xl text-intioss-gold tracking-widest uppercase font-light">
              Since 1997, we have been the ones who listen.
            </p>
          </AnimatedSection>
        </section>

        {/* 2. Our Story */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-intioss-stone/30">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <AnimatedSection direction="right" className="md:w-1/3">
              <h2 className="font-marcellus text-4xl text-intioss-burgundy-deep mb-6">Our Story</h2>
              <div className="w-16 h-px bg-intioss-gold"></div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" className="md:w-2/3 space-y-8">
              <p className="font-eb-garamond text-2xl text-intioss-charcoal leading-relaxed italic">
                Before it becomes a floor, a wall, or the table your family gathers around, stone spends millions of years becoming itself. Its veins, its silences, and its sudden flashes of colour are all formed long before anyone sees it.
              </p>
              <p className="font-jost text-lg text-intioss-charcoal/80 font-light leading-relaxed">
                We began in 1997 with a simple conviction: that this kind of patience deserves an equal patience from the people who shape it.
              </p>
              <p className="font-jost text-lg text-intioss-charcoal/80 font-light leading-relaxed">
                Almost three decades on, that conviction still guides every slab we select and every edge we finish. We are not here to sell stone. We are here to help you find the one piece that feels like it was always meant for your space.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 3. What We Believe */}
        <section className="py-32 bg-intioss-white border-b border-intioss-stone/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatedSection direction="up" className="mb-20 text-center">
              <h2 className="font-marcellus text-4xl text-intioss-burgundy-deep mb-6">What We Believe</h2>
              <div className="w-16 h-px bg-intioss-gold mx-auto"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <AnimatedSection direction="up" delay={0.1}>
                <h3 className="font-marcellus text-2xl text-intioss-charcoal mb-6">No two stones are alike, so no two spaces should be either.</h3>
                <p className="font-jost text-intioss-charcoal/80 leading-relaxed font-light">
                  We don't chase trends. We look for character: the marble with a quiet, cloud-like movement, the onyx that glows when light passes through it, the travertine that carries the warmth of an old courtyard.
                </p>
              </AnimatedSection>
              
              <AnimatedSection direction="up" delay={0.2}>
                <h3 className="font-marcellus text-2xl text-intioss-charcoal mb-6">Luxury is what you feel, not what you announce.</h3>
                <p className="font-jost text-intioss-charcoal/80 leading-relaxed font-light">
                  The best interiors don't shout. They hold you. We work toward that feeling of arriving somewhere and instinctively slowing down.
                </p>
              </AnimatedSection>
              
              <AnimatedSection direction="up" delay={0.3}>
                <h3 className="font-marcellus text-2xl text-intioss-charcoal mb-6">Craft is a relationship.</h3>
                <p className="font-jost text-intioss-charcoal/80 leading-relaxed font-light">
                  Behind every finished surface are people who have spent years learning how a stone behaves, where it will yield and where it will resist. We trust their hands, and we hope you will too.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 4. Material & Object */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <AnimatedSection direction="up" className="mb-16">
            <h2 className="font-marcellus text-4xl text-intioss-burgundy-deep mb-6">Material & Object</h2>
            <div className="w-16 h-px bg-intioss-gold mb-8"></div>
            <p className="font-eb-garamond text-2xl text-intioss-charcoal italic max-w-3xl">
              Our collection begins where the earth is most generous.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
            {[
              { title: "Natural Stones", desc: "Marble, travertine, quartzite, limestone, onyx, and exotic granites, chosen one slab at a time, along with rarer stones for those who want something no one else has." },
              { title: "Semi-Precious Stones", desc: "Slabs, inlays, and custom tops and furniture, where stone stops being a surface and becomes a work of art." },
              { title: "Exclusive Stone Table Tops", desc: "Pieces made to be the centre of a room, and eventually the centre of its stories." },
              { title: "Mosaics", desc: "In marble, in semi-precious gemstone, and in hand-cut glass. Small fragments, patiently assembled into something far larger than their parts." },
              { title: "Stone Veneers", desc: "The depth and texture of solid stone, carried gracefully across walls and feature surfaces." },
              { title: "Artefacts", desc: "Objects made to be kept and looked at again and again, long after the room around them has changed." }
            ].map((item, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                <h3 className="font-marcellus text-xl text-intioss-charcoal mb-4 border-b border-intioss-stone/50 pb-2">{item.title}</h3>
                <p className="font-jost text-intioss-charcoal/70 font-light leading-relaxed text-sm">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* 5. Capability & Execution */}
        <section className="py-32 bg-intioss-charcoal text-intioss-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatedSection direction="up" className="mb-20 text-center max-w-4xl mx-auto">
              <h2 className="font-marcellus text-4xl text-intioss-white mb-6">Capability & Execution</h2>
              <div className="w-16 h-px bg-intioss-gold mx-auto mb-8"></div>
              <p className="font-eb-garamond text-2xl text-intioss-stone italic leading-relaxed">
                A beautiful stone is only half the story. What matters just as much is how it arrives, how it is shaped, and how it is set into your space.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Luxury Civil Contracting", desc: "Interior spaces, built with the same care we give the stone that goes into them." },
                { title: "Marble Block Processing", desc: "We take a raw block and see it through to a finished slab, so the story of your stone is one we know from its very beginning." },
                { title: "Stone Façades", desc: "Exteriors that age with grace and carry a sense of permanence from the street." },
                { title: "CNC & Waterjet", desc: "Precision that lets us realise intricate patterns, curves, and inlays exactly as they were imagined." },
                { title: "International Stone Sourcing", desc: "When the right stone is not on your doorstep, we go looking for it across the world." },
                { title: "AMC Services", desc: "Stone is meant to last generations. Our maintenance care keeps it looking the way it did on the day you first fell for it." }
              ].map((item, i) => (
                <AnimatedSection key={i} direction="up" delay={i * 0.1} className="bg-intioss-charcoal-light border border-intioss-gold/20 p-8 hover:border-intioss-gold/60 transition-colors">
                  <h3 className="font-marcellus text-xl text-intioss-white mb-4">{item.title}</h3>
                  <p className="font-jost text-intioss-stone text-sm leading-relaxed font-light">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 6. How We Work */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="font-marcellus text-4xl text-intioss-burgundy-deep mb-6">How We Work</h2>
            <div className="w-16 h-px bg-intioss-gold mx-auto"></div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              "We start by listening, to your space, the way you live in it, and the feeling you want it to hold.",
              "Then we go looking, choosing stone with you rather than for you.",
              "We shape it, install it, and see it through.",
              "And we stay close, because a surface like this should be cared for long after it has been admired."
            ].map((text, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.15} className="flex gap-8 items-start">
                <span className="font-marcellus text-3xl text-intioss-gold/50">0{i + 1}</span>
                <p className="font-eb-garamond text-2xl text-intioss-charcoal leading-relaxed">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* 7. CTA */}
        <section className="py-40 bg-intioss-white border-t border-intioss-stone/30 text-center px-4">
          <AnimatedSection direction="up" className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-marcellus text-4xl sm:text-5xl md:text-6xl text-intioss-burgundy-deep mb-8 leading-tight">
              COME AND STAND IN FRONT OF A SLAB THAT SPEAKS TO YOU.
            </h2>
            <p className="font-jost text-xl text-intioss-charcoal/70 mb-12 uppercase tracking-widest">
              We would love to hear what it says.
            </p>
            <Link 
              href="/#consultation" 
              className="inline-block bg-intioss-burgundy-deep text-intioss-white font-jost font-semibold uppercase tracking-widest text-sm py-5 px-12 hover:bg-intioss-burgundy transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Begin a Conversation
            </Link>
          </AnimatedSection>
        </section>

      </main>
      
      <Footer showGandhiCivil={true} />
    </>
  );
}
