import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const collections = [
  { name: "Italian & Exotic Marble", slug: "marble", count: 24 },
  { name: "Translucent Quartzite", slug: "quartzite", count: 18 },
  { name: "Semi-Precious Gemstone", slug: "semi-precious", count: 12 },
  { name: "Persian Onyx", slug: "onyx", count: 9 },
  { name: "Travertine & Limestone", slug: "travertine", count: 15 },
  { name: "Rare Granite", slug: "granite", count: 21 },
];

export default function CollectionsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="font-marcellus text-4xl md:text-5xl text-intioss-burgundy-deep mb-4 text-center">Our Collections</h1>
        <div className="w-16 h-px bg-intioss-gold mx-auto mb-6"></div>
        <p className="text-center font-eb-garamond text-lg text-intioss-charcoal max-w-2xl mx-auto mb-16">
          Explore our curated selection of the world's most exceptional natural stones, sourced directly from historical quarries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item) => (
            <Link 
              key={item.slug} 
              href={`/collections/${item.slug}`}
              className="group border border-intioss-stone bg-intioss-white block hover:border-intioss-gold transition-colors relative overflow-hidden"
            >
              <div className="aspect-[4/3] bg-intioss-charcoal relative flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-intioss-grey text-xs font-jost">[Collection Image: {item.name}]</span>
              </div>
              <div className="absolute top-4 right-4 bg-intioss-ivory px-3 py-1 text-xs font-jost font-medium text-intioss-burgundy border border-intioss-stone shadow-sm">
                {item.count} Slabs
              </div>
              <div className="p-6 text-center bg-intioss-white">
                <h2 className="font-marcellus text-xl text-intioss-charcoal group-hover:text-intioss-burgundy transition-colors">{item.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
