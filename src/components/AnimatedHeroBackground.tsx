"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AnimatedHeroBackground() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      className="absolute inset-0 z-0"
    >
      <Image 
        src="/hero-marble-light.jpg" 
        alt="Italian designer marble with model" 
        fill 
        className="object-cover opacity-90"
        priority
      />
    </motion.div>
  );
}
