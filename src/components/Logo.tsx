import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center justify-start py-2">
      <div className="relative w-[180px] h-[60px]">
        <Image 
          src="/logo.png" 
          alt="INTIOSS Luxury Surfaces Logo" 
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
}
