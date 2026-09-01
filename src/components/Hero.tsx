"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ShieldCheck, Target, Leaf, Building2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/images/image-1.jpeg",
  "/images/image-5.jpeg",
  "/images/image-8.jpeg",
  "/images/image-12.jpeg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full lg:h-screen min-h-[100dvh] overflow-hidden bg-black flex items-center justify-center pt-24 pb-20 lg:py-0">
      {/* Background Image Slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.7, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={HERO_IMAGES[currentImageIndex]} 
            alt="Hero Background" 
            fill 
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/30 to-[var(--color-background)]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center lg:mt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start w-full lg:w-3/5"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-[var(--color-royal-gold)] to-transparent"></div>
              <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-[var(--color-royal-gold)] uppercase py-1 px-4 border border-[var(--color-royal-gold)]/30 rounded-full bg-black/40 backdrop-blur-md">
                Built with precision
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-4 lg:mb-6 text-white uppercase leading-[1.1] md:leading-[0.9] break-words hyphens-auto">
              Architectural <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-white filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                Excellence
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-[var(--color-silver-metal)] mb-8 max-w-2xl leading-relaxed font-light backdrop-blur-sm bg-black/10 p-2 rounded-lg -ml-2">
              We push the boundaries of aluminium fabrication and smart agriculture, delivering visionary solutions that redefine the modern landscape.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link 
                href="/projects" 
                className="relative inline-flex justify-center items-center px-8 py-4 bg-[var(--color-royal-gold)] text-black rounded-full font-bold overflow-hidden group w-full sm:w-auto shadow-[0_0_20px_rgba(184,134,43,0.3)]"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 flex items-center uppercase tracking-wider text-sm">
                  Explore Projects
                  <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/contact" 
                className="relative inline-flex justify-center items-center px-8 py-4 bg-black/40 border border-white/20 hover:border-[var(--color-royal-gold)] hover:bg-black/60 text-white rounded-full font-bold backdrop-blur-md transition-all duration-300 w-full sm:w-auto group uppercase tracking-wider text-sm"
              >
                <span className="relative z-10 flex items-center">
                  Get in Touch
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Feature Glass Cards */}
          <motion.div 
            className="grid grid-cols-2 gap-3 sm:gap-4 w-full lg:w-2/5 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            {[
              { icon: ShieldCheck, title: "Durable By Design", desc: "Built to withstand the test of time." },
              { icon: Target, title: "Precision Engineered", desc: "Exact tolerances for perfect execution." },
              { icon: Leaf, title: "Sustainable Tech", desc: "Eco-friendly modern solutions." },
              { icon: Building2, title: "Future Ready", desc: "Setting the standard for tomorrow." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-start justify-center p-4 sm:p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:bg-white/15 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-[var(--color-royal-gold)]/20 to-transparent rounded-bl-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10 transition-transform duration-700 group-hover:scale-150"></div>
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-royal-gold)] mb-3 sm:mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-white font-bold uppercase tracking-wide text-xs sm:text-sm mb-1 sm:mb-2 relative z-10">{feature.title}</h3>
                <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed relative z-10 font-light hidden sm:block">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
      
      {/* Navigation Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
        {HERO_IMAGES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`transition-all duration-500 rounded-full ${idx === currentImageIndex ? "w-10 h-2 bg-[var(--color-royal-gold)] shadow-[0_0_10px_rgba(184,134,43,0.8)]" : "w-2 h-2 bg-white/40 hover:bg-white/80"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
