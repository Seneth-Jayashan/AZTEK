"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  overlayClass?: string;
  className?: string;
  speed?: number; // 0 to 1, higher is slower (more parallax)
}

export default function ParallaxSection({
  children,
  backgroundImage,
  overlayClass = "bg-onyx-black/80",
  className = "",
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 z-0 w-full h-[140%]"
          style={{ y, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
      {/* Background Gradient Fallback if no image, or Overlay if image exists */}
      <div className={`absolute inset-0 z-0 ${overlayClass}`}></div>

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}
