import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function StockyardPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-intioss-charcoal text-intioss-ivory pt-32 pb-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-intioss-gold/50 px-4 py-1.5 rounded-full mb-6 bg-black/20">
              <span className="w-2 h-2 rounded-full bg-intioss-gold animate-pulse"></span>
              <span className="text-xs font-jost uppercase tracking-widest text-intioss-gold">Live Feed</span>
            </div>
            <h1 className="font-marcellus text-4xl md:text-5xl text-intioss-white mb-4">Live Stockyard</h1>
            <div className="w-16 h-px bg-intioss-gold mx-auto mb-6"></div>
            <p className="font-eb-garamond text-lg text-intioss-stone max-w-2xl mx-auto">
              Real-time inventory from our central facility. View available lots, book-matched sets, and exact slab dimensions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((lot) => (
              <div key={lot} className="border border-intioss-stone/30 bg-[#1A1512] p-6 hover:border-intioss-gold/50 transition-colors group">
                <div className="aspect-video bg-black/50 mb-4 flex items-center justify-center text-intioss-grey font-jost text-xs">
                  [TO CONFIRM: Lot {lot} Image]
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-marcellus text-xl text-intioss-white group-hover:text-intioss-gold transition-colors">Statuario Lot #{1000 + lot}</h3>
                    <p className="font-jost text-sm text-intioss-stone mt-1">Thickness: 20mm | Finish: Polished</p>
                  </div>
                  <div className="text-right">
                    <span className="block font-jost text-xs text-intioss-gold uppercase tracking-wider">Available</span>
                    <span className="font-jost text-sm text-intioss-white">12 Slabs</span>
                  </div>
                </div>
                <button className="w-full py-3 border border-intioss-gold text-intioss-gold font-jost hover:bg-intioss-gold hover:text-intioss-charcoal transition-colors">
                  Enquire About Lot
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
