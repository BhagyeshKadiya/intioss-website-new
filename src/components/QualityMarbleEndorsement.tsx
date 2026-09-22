import Image from 'next/image';

export function QualityMarbleEndorsement() {
  return (
    <div className="inline-block mt-4">
      <p className="font-jost text-xs text-intioss-white uppercase tracking-widest mb-4">House of Quality Marble</p>
      <div className="flex items-center gap-6">
        <div className="relative w-16 h-16 overflow-hidden">
          <Image 
            src="/quality-marble-logo.jpg" 
            alt="Quality Marble Logo" 
            fill 
            className="object-contain"
          />
        </div>
        <div>
          <p className="font-marcellus text-lg text-intioss-white">Quality Marble</p>
          <p className="font-jost text-[10px] text-intioss-stone uppercase tracking-wider mt-1">Heritage Partner</p>
        </div>
      </div>
    </div>
  );
}
