import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col py-16 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="font-marcellus text-4xl md:text-5xl text-intioss-burgundy-deep mb-4 text-center">Architectural Gallery</h1>
        <div className="w-16 h-px bg-intioss-gold mx-auto mb-6"></div>
        <p className="text-center font-eb-garamond text-lg text-intioss-charcoal max-w-2xl mx-auto mb-16">
          A visual chronicle of spaces defined by INTIOSS surfaces.
        </p>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="break-inside-avoid relative group overflow-hidden bg-intioss-stone border border-intioss-stone/50">
              <div 
                className="w-full flex items-center justify-center text-intioss-grey font-jost text-xs transition-transform duration-700 group-hover:scale-105" 
                style={{ height: `${200 + (item % 3) * 100}px` }}
              >
                [Gallery Image {item}]
              </div>
              <div className="absolute inset-0 bg-intioss-burgundy-deep/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="font-marcellus text-intioss-white text-xl mb-1">Project Name</h3>
                <p className="font-jost text-intioss-gold text-sm">Location</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
