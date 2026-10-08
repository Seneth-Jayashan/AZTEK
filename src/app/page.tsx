import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { ShieldCheck, Layers, Award, Leaf, Cpu, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to CAC. We specialize in Aluminum Fabrication and Purchasing items.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Intro Parallax Section */}
      <ParallaxSection 
        backgroundImage="/images/image-2.jpeg"
        overlayClass="bg-white/80 dark:bg-black/80 backdrop-blur-sm"
        className="py-32 border-y border-[var(--color-royal-gold)]/30"
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-black dark:to-white tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              Built With Precision. <br className="md:hidden" /> Inspired by innovation.
            </h2>
            <p className="text-foreground dark:text-white max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light backdrop-blur-sm bg-white/40 dark:bg-black/10 p-4 rounded-xl">
              We draw inspiration from modern engineering, resourcefulness, and master craftsmanship to construct complex architectural marvels and innovative purchasing solutions.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Core Pillars Section */}
      <section className="py-32 bg-background dark:bg-black relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(184,134,43,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase text-foreground dark:text-white">Our Core Pillars</h2>
              <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[var(--color-royal-gold)] to-transparent mx-auto mb-8"></div>
              <p className="text-[var(--color-silver-metal)] max-w-2xl mx-auto text-lg md:text-xl font-light">
                The foundation of CAC is built upon uncompromising quality, comprehensive solutions, and industry-leading standards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="glass-card p-10 rounded-2xl relative overflow-hidden group hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_0_30px_rgba(184,134,43,0.2)] border border-[var(--color-royal-gold)]/20 hover:border-[var(--color-royal-gold)]/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-royal-gold)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-[2] ease-out"></div>
              <div className="relative z-10">
                <ShieldCheck className="w-16 h-16 text-[var(--color-royal-gold)] mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_15px_rgba(184,134,43,0.5)]" />
                <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white uppercase tracking-wider">Precision & Durability</h3>
                <p className="text-[var(--color-silver-metal)] leading-relaxed font-light">
                  Engineered to exact tolerances for long-term structural performance. We guarantee zero-defect checks for standard, export-ready products.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="glass-card p-10 rounded-2xl relative overflow-hidden group hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_0_30px_rgba(166,168,173,0.2)] border border-[var(--color-silver-metal)]/20 hover:border-[var(--color-silver-metal)]/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brushed-silver)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-[2] ease-out"></div>
              <div className="relative z-10">
                <Layers className="w-16 h-16 text-[var(--color-silver-metal)] mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 drop-shadow-[0_0_15px_rgba(166,168,173,0.5)]" />
                <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white uppercase tracking-wider">End-to-End Scope</h3>
                <p className="text-[var(--color-silver-metal)] leading-relaxed font-light">
                  Single-source delivery covering ceilings, i-panels, shopfronts, glass railings, and custom fixtures from site visit to final handover.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="glass-card p-10 rounded-2xl relative overflow-hidden group hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_0_30px_rgba(194,106,46,0.2)] border border-[var(--color-copper)]/20 hover:border-[var(--color-copper)]/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-copper)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-[2] ease-out"></div>
              <div className="relative z-10">
                <Award className="w-16 h-16 text-[var(--color-copper)] mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_15px_rgba(194,106,46,0.5)]" />
                <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white uppercase tracking-wider">Architectural Standard</h3>
                <p className="text-[var(--color-silver-metal)] leading-relaxed font-light">
                  Setting the industry benchmark for quality across commercial and residential projects, trusted by corporate leaders like Pyramid Lanka.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-32 bg-background dark:bg-black relative border-y border-[var(--color-royal-gold)]/20">
        <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.05]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase text-foreground dark:text-white">Two Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] to-[var(--color-champagne)]">Growth</span></h2>
                <div className="h-[2px] w-24 bg-[var(--color-royal-gold)] mb-8"></div>
                <p className="text-[var(--color-silver-metal)] text-xl font-light">
                  Expanding our horizons from specialized fabrication into localized purchasing.
                </p>
              </div>
              <Link href="/divisions" className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[var(--color-royal-gold)] text-[var(--color-royal-gold)] rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-royal-gold)] hover:text-black transition-all duration-300 shrink-0">
                Explore Divisions
                <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedSection delay={0.1} className="flex flex-col rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-white/10 group relative h-[550px]">
              <Image src="/images/image-6.jpeg" alt="CAC Alucore" fill className="object-cover group-hover:scale-105 group-hover:opacity-60 opacity-80 transition-all duration-[1.5s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/80 to-transparent"></div>
              
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/60 dark:bg-black/60 backdrop-blur-xl flex items-center justify-center border border-[var(--color-silver-metal)]/40 shadow-[0_0_20px_rgba(166,168,173,0.3)]">
                <Wrench className="w-8 h-8 text-[var(--color-brushed-silver)]" />
              </div>

              <div className="relative z-10 p-10 flex-grow flex flex-col justify-end h-full">
                <h3 className="text-3xl font-black mb-4 text-foreground dark:text-white uppercase tracking-wider">CAC Alucore</h3>
                <p className="text-[var(--color-silver-metal)] mb-10 font-light text-lg">
                  Managing all large-scale, high-end commercial aluminium and glass fabrication across the country.
                </p>
                <Link href="/divisions#alucore" className="relative overflow-hidden group/btn inline-flex justify-center items-center px-8 py-4 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-[var(--color-silver-metal)]/30 hover:border-transparent text-foreground dark:text-white rounded-full font-bold text-sm text-center w-full uppercase tracking-widest transition-all">
                  <span className="absolute inset-0 bg-[var(--color-silver-metal)] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">Learn More</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex flex-col rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-white/10 group relative h-[550px]">
              <Image src="/images/image-14.jpeg" alt="CAC Lanka" fill className="object-cover group-hover:scale-105 group-hover:opacity-60 opacity-80 transition-all duration-[1.5s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/80 to-transparent"></div>
              
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/60 dark:bg-black/60 backdrop-blur-xl flex items-center justify-center border border-[var(--color-copper)]/40 shadow-[0_0_20px_rgba(194,106,46,0.3)]">
                <Cpu className="w-8 h-8 text-[var(--color-copper)]" />
              </div>

              <div className="relative z-10 p-10 flex-grow flex flex-col justify-end h-full">
                <h3 className="text-3xl font-black mb-4 text-foreground dark:text-white uppercase tracking-wider">CAC Lanka</h3>
                <p className="text-[var(--color-silver-metal)] mb-10 font-light text-lg">
                  Purchasing custom hardware accessories and items locally to reduce reliance on costly imports.
                </p>
                <Link href="/divisions#lanka" className="relative overflow-hidden group/btn inline-flex justify-center items-center px-8 py-4 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-[var(--color-copper)]/30 hover:border-transparent text-foreground dark:text-white rounded-full font-bold text-sm text-center w-full uppercase tracking-widest transition-all">
                  <span className="absolute inset-0 bg-[var(--color-copper)] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Learn More</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection 
        backgroundImage="/images/image-10.jpeg"
        overlayClass="bg-white/80 dark:bg-black/80 backdrop-blur-md"
        className="py-40 border-t border-[var(--color-royal-gold)]/30"
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-block mb-8 px-6 py-2 border border-[var(--color-royal-gold)]/50 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md text-[var(--color-royal-gold)] uppercase tracking-[0.3em] text-sm font-bold shadow-[0_0_20px_rgba(184,134,43,0.2)]">
              Start Your Journey
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-8 text-foreground dark:text-white uppercase tracking-tighter leading-[0.9]">
              Ready to Build the <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-black dark:to-white drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">Future?</span>
            </h2>
            <p className="text-[var(--color-silver-metal)] text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              Partner with CAC for your next architectural, fabrication, or purchasing project. Let's create something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex justify-center items-center px-12 py-6 bg-[var(--color-royal-gold)] text-black rounded-full font-black text-xl uppercase tracking-widest overflow-hidden group shadow-[0_0_40px_rgba(184,134,43,0.4)]"
            >
              <span className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 flex items-center">
                Get in Touch Today
                <ArrowRight size={24} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </ParallaxSection>
    </div>
  );
}
