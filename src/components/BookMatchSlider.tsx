"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BookMatchSliderProps {
  imageSrc: string;
  stoneName: string;
}

export function BookMatchSlider({ imageSrc, stoneName }: BookMatchSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const onMouseUp = () => setIsDragging(false);
  const onTouchEnd = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className="w-full flex flex-col items-center">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-intioss-stone overflow-hidden cursor-ew-resize select-none touch-none group"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* BEFORE STATE (Bottom Layer) - Unmatched Slabs */}
        <div className="absolute inset-0 flex w-full h-full">
          <div className="w-1/2 h-full relative">
            <Image src={imageSrc} alt={`${stoneName} Slab 1`} fill className="object-cover" />
          </div>
          <div className="w-1/2 h-full relative border-l-2 border-intioss-charcoal/20">
            <Image src={imageSrc} alt={`${stoneName} Slab 2`} fill className="object-cover" />
          </div>
        </div>

        {/* AFTER STATE (Top Layer) - Bookmatched Slabs */}
        <div 
          className="absolute inset-0 flex w-full h-full"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <div className="w-1/2 h-full relative">
            <Image src={imageSrc} alt={`${stoneName} Slab 1`} fill className="object-cover" />
          </div>
          <div className="w-1/2 h-full relative border-l-2 border-intioss-gold/40">
            {/* The right slab is flipped horizontally to create the bookmatch effect */}
            <Image src={imageSrc} alt={`${stoneName} Slab 2 Mirrored`} fill className="object-cover scale-x-[-1]" />
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-intioss-gold z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-intioss-charcoal border-2 border-intioss-gold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(200,169,110,0.5)] transition-transform group-hover:scale-110">
            <div className="flex gap-1">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L2 6L7 11" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L6 6L1 1" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-intioss-charcoal/80 backdrop-blur-sm border border-intioss-gold/30 px-4 py-2 pointer-events-none z-20">
          <span className="font-jost text-xs uppercase tracking-widest text-intioss-gold font-semibold">Standard Placement</span>
        </div>
        <div 
          className="absolute bottom-4 right-4 bg-intioss-burgundy-deep/90 backdrop-blur-sm border border-intioss-gold/50 px-4 py-2 pointer-events-none z-20 transition-opacity"
          style={{ opacity: sliderPosition < 90 ? 1 : 0 }}
        >
          <span className="font-jost text-xs uppercase tracking-widest text-intioss-white font-semibold">Bookmatched Perfection</span>
        </div>
      </div>
    </div>
  );
}
