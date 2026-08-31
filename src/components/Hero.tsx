"use client";

import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--color-onyx-black)] to-[var(--color-charcoal)]"
        style={{ y }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-royal-gold)] via-[var(--color-onyx-black)] to-transparent"></div>
        {/* Subtle grid pattern for engineering feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C5C8CC_1px,transparent_1px),linear-gradient(to_bottom,#C5C8CC_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div style={{ opacity }}>
            <AnimatedSection>
              <div className="inline-flex items-center rounded-full border border-[var(--color-royal-gold)]/30 bg-[var(--color-royal-gold)]/10 px-3 py-1 text-sm text-[var(--color-champagne)] mb-6 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[var(--color-royal-gold)] mr-2 animate-pulse"></span>
                Pioneer-level Engineering
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
                Master Craftsmanship.<br />
                <span className="text-gradient-gold">End-to-End Solutions.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[var(--color-silver-metal)] mb-10 max-w-2xl mx-auto leading-relaxed">
                Setting the industry benchmark for structural durability and modern design across commercial and residential projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/projects" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-[var(--color-royal-gold)] hover:bg-[var(--color-champagne)] text-[var(--color-onyx-black)] rounded-md font-bold transition-colors shadow-[0_0_15px_rgba(184,134,43,0.4)] group"
                >
                  View Our Work
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-[var(--color-silver-metal)]/30 hover:border-[var(--color-silver-metal)] text-[var(--color-aluminium)] rounded-md font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
