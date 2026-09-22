import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

const journals = [
  {
    title: "The Architecture of Light: Translucent Onyx",
    date: "October 12, 2026",
    category: "Design Trends",
    slug: "architecture-of-light-onyx",
    excerpt: "Exploring how luxury architecture leverages Persian Blue Onyx and backlighting to transform structural elements into ambient focal points.",
  },
  {
    title: "Understanding Book-Matched Veining",
    date: "September 28, 2026",
    category: "Technical Guide",
    slug: "understanding-book-matched-veining",
    excerpt: "The technical precision required to slice and align sequential marble slabs, creating perfect kaleidoscopic symmetry across large surfaces.",
  },
  {
    title: "Patagonia Quartzite: The Brazilian Enigma",
    date: "September 15, 2026",
    category: "Geological Profile",
    slug: "patagonia-quartzite-brazilian-enigma",
    excerpt: "An in-depth look at one of the world's most complex stones, where volcanic quartz and brecciated minerals collide.",
  },
  {
    title: "Maintaining Pristine White Marble",
    date: "August 30, 2026",
    category: "Care & Maintenance",
    slug: "maintaining-pristine-white-marble",
    excerpt: "Factual, expert-led protocols for sealing and protecting Statuario and Calacatta installations in high-traffic residential areas.",
  },
];

export default function JournalsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-intioss-ivory pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <AnimatedSection direction="up" className="text-center mb-24">
            <h1 className="font-marcellus text-5xl md:text-6xl text-intioss-burgundy-deep mb-6">Journals</h1>
            <div className="w-16 h-px bg-intioss-gold mx-auto mb-8"></div>
            <p className="font-eb-garamond text-xl text-intioss-charcoal max-w-2xl mx-auto leading-relaxed">
              Geological insights, technical guides, and architectural case studies curated by INTIOSS.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {journals.map((journal, index) => (
              <AnimatedSection key={journal.slug} direction="up" delay={index * 0.1} className="group border-b border-intioss-stone/50 pb-12 flex flex-col h-full">
                <div className="aspect-[16/9] bg-intioss-stone relative overflow-hidden mb-8 border border-intioss-stone/30">
                  <div className="absolute inset-0 bg-intioss-charcoal/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-intioss-grey font-jost text-xs group-hover:scale-105 transition-transform duration-700">
                    [TO CONFIRM: Cover Image]
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-jost text-xs uppercase tracking-widest text-intioss-gold font-semibold">{journal.category}</span>
                  <span className="w-4 h-px bg-intioss-stone"></span>
                  <span className="font-jost text-xs text-intioss-charcoal/60 uppercase tracking-widest">{journal.date}</span>
                </div>
                
                <h2 className="font-marcellus text-3xl text-intioss-burgundy-deep mb-4 group-hover:text-intioss-burgundy transition-colors">
                  <Link href={`/journals/${journal.slug}`}>{journal.title}</Link>
                </h2>
                
                <p className="font-eb-garamond text-lg text-intioss-charcoal leading-relaxed mb-8 flex-grow">
                  {journal.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link href={`/journals/${journal.slug}`} className="inline-flex items-center gap-2 font-jost text-xs uppercase tracking-widest text-intioss-charcoal font-semibold hover:text-intioss-burgundy-deep transition-colors group-hover:gap-4">
                    <span>Read Journal</span>
                    <span className="text-intioss-gold">&rarr;</span>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
