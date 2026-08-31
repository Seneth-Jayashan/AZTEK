"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Leaf, Building2, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden bg-[var(--color-background)] flex items-center">
      {/* Background for mobile */}
      <div className="absolute inset-0 z-0 lg:hidden opacity-10 dark:opacity-20">
        <Image 
          src="/hero-bg.jpg" 
          alt="Modern Architecture" 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-12 lg:gap-8">
          
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-[55%] flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[var(--color-royal-gold)]"></div>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[var(--color-silver-metal)] uppercase">
                Built with precision. Inspired by innovation.
              </span>
              <div className="h-[2px] w-12 bg-[var(--color-royal-gold)] hidden sm:block"></div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 text-foreground leading-[1.1] uppercase">
              Premium Aluminium <br/>
              Solutions <br/>
              <span className="text-[var(--color-silver-metal)]">Built to Last.</span><br/>
              <span className="text-gradient-gold">Designed to Inspire.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-[var(--color-silver-metal)] mb-10 max-w-xl leading-relaxed">
              From concept to completion, we deliver high-performance aluminium fabrication and décor solutions with unmatched quality, precision and elegance.
            </motion.p>

            {/* Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="flex flex-col items-start md:items-center text-left md:text-center border-l-2 md:border-l-0 md:border-r-2 border-[var(--color-charcoal)] pl-4 md:pl-0 md:pr-4 group">
                <ShieldCheck className="w-8 h-8 text-[var(--color-royal-gold)] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">Durable <br/>By Design</span>
              </div>
              <div className="flex flex-col items-start md:items-center text-left md:text-center border-l-2 md:border-l-0 md:border-r-2 md:border-transparent lg:border-r-2 border-[var(--color-charcoal)] pl-4 md:pl-0 md:pr-4 group">
                <Target className="w-8 h-8 text-[var(--color-royal-gold)] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">Precision <br/>Engineered</span>
              </div>
              <div className="flex flex-col items-start md:items-center text-left md:text-center border-l-2 md:border-l-0 md:border-r-2 border-[var(--color-charcoal)] pl-4 md:pl-0 md:pr-4 group">
                <Leaf className="w-8 h-8 text-[var(--color-royal-gold)] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">Sustainable <br/>Solutions</span>
              </div>
              <div className="flex flex-col items-start md:items-center text-left md:text-center pl-4 md:pl-0 group">
                <Building2 className="w-8 h-8 text-[var(--color-royal-gold)] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">Built For <br/>Tomorrow</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/projects" 
                className="inline-flex justify-center items-center px-8 py-4 bg-[var(--color-royal-gold)] hover:bg-[var(--color-champagne)] text-black rounded-md font-bold transition-colors shadow-[0_0_15px_rgba(184,134,43,0.4)] group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative z-10 flex items-center">
                  View Our Work
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-[var(--color-royal-gold)] hover:bg-[var(--color-royal-gold)]/10 text-foreground rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image (Desktop) */}
          <motion.div 
            className="hidden lg:block w-[45%] h-[80vh] relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-charcoal)]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Image 
              src="/hero-bg.jpg" 
              alt="Modern Architecture Building" 
              fill 
              className="object-cover object-center hover:scale-105 transition-transform duration-[10s]"
              priority
            />
            {/* Subtle inner shadow/gradient */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
