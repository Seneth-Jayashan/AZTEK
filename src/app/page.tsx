import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { ShieldCheck, Layers, Award, Leaf, Cpu, Wrench } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Intro Parallax Section */}
      <ParallaxSection className="py-32 border-y border-[var(--color-royal-gold)]/20">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-gold">Bold like a lion. Built in aluminium.</h2>
            <p className="text-[var(--color-silver-metal)] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              We draw inspiration from the Aztec civilization—pioneer-level engineering, resourcefulness, and master craftsmanship—to construct complex architectural marvels and innovative agricultural solutions.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Core Pillars Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Core Pillars</h2>
              <p className="text-[var(--color-silver-metal)] max-w-2xl mx-auto text-lg">
                The foundation of AZTEK is built upon uncompromising quality, comprehensive solutions, and industry-leading standards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-royal-gold)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150"></div>
              <ShieldCheck className="w-12 h-12 text-[var(--color-royal-gold)] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Precision & Durability</h3>
              <p className="text-[var(--color-silver-metal)] leading-relaxed">
                Engineered to exact tolerances for long-term structural performance. We guarantee zero-defect checks for standard, export-ready products.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brushed-silver)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150"></div>
              <Layers className="w-12 h-12 text-[var(--color-silver-metal)] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">End-to-End Scope</h3>
              <p className="text-[var(--color-silver-metal)] leading-relaxed">
                Single-source delivery covering ceilings, i-panels, shopfronts, glass railings, and custom fixtures from site visit to final handover.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-copper)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150"></div>
              <Award className="w-12 h-12 text-[var(--color-copper)] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Architectural Standard</h3>
              <p className="text-[var(--color-silver-metal)] leading-relaxed">
                Setting the industry benchmark for quality across commercial and residential projects, trusted by corporate leaders like Pyramid Lanka.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 bg-[var(--color-charcoal)] border-y border-[var(--color-steel-grey)]/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Three Pillars of Growth</h2>
                <p className="text-[var(--color-silver-metal)] text-lg">
                  Expanding our horizons from specialized fabrication into smart agriculture and localized manufacturing.
                </p>
              </div>
              <Link href="/divisions" className="text-[var(--color-royal-gold)] font-medium hover:text-[var(--color-champagne)] inline-flex items-center gap-1 shrink-0 transition-colors">
                Explore Divisions <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="flex flex-col bg-[var(--color-onyx-black)] rounded-2xl overflow-hidden shadow-xl border border-[var(--color-royal-gold)]/20 group">
              <div className="h-48 bg-gradient-to-br from-[var(--color-steel-grey)] to-[var(--color-onyx-black)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <Wrench className="w-16 h-16 text-[var(--color-brushed-silver)] relative z-10" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-gradient-silver">AZTEK Alucore</h3>
                <p className="text-[var(--color-silver-metal)] mb-6 flex-grow">
                  Managing all large-scale, high-end commercial aluminium and glass fabrication across the country.
                </p>
                <Link href="/divisions#alucore" className="inline-block px-4 py-3 border border-[var(--color-brushed-silver)]/30 hover:border-[var(--color-brushed-silver)] text-[var(--color-aluminium)] rounded-md font-medium text-sm text-center transition-all">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex flex-col bg-[var(--color-onyx-black)] rounded-2xl overflow-hidden shadow-xl border border-[var(--color-royal-gold)]/20 group">
              <div className="h-48 bg-gradient-to-br from-[var(--color-midnight-teal)] to-[var(--color-onyx-black)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <Leaf className="w-16 h-16 text-[var(--color-primary)] relative z-10" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-gradient-gold">AZTEK Agrotec</h3>
                <p className="text-[var(--color-silver-metal)] mb-6 flex-grow">
                  Smart agriculture division focusing on automated hydroponics, aeroponics, and GMO applications to maximize yield.
                </p>
                <Link href="/divisions#agrotec" className="inline-block px-4 py-3 border border-[var(--color-royal-gold)]/30 hover:border-[var(--color-royal-gold)] text-[var(--color-royal-gold)] rounded-md font-medium text-sm text-center transition-all">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex flex-col bg-[var(--color-onyx-black)] rounded-2xl overflow-hidden shadow-xl border border-[var(--color-royal-gold)]/20 group">
              <div className="h-48 bg-gradient-to-br from-[var(--color-deep-bronze)] to-[var(--color-onyx-black)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <Cpu className="w-16 h-16 text-[var(--color-copper)] relative z-10" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-gradient-bronze">AZTEK Lanka</h3>
                <p className="text-[var(--color-silver-metal)] mb-6 flex-grow">
                  Manufacturing custom hardware accessories and fabrication tools locally to reduce reliance on costly imports.
                </p>
                <Link href="/divisions#lanka" className="inline-block px-4 py-3 border border-[var(--color-copper)]/30 hover:border-[var(--color-copper)] text-[var(--color-copper)] rounded-md font-medium text-sm text-center transition-all">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <ParallaxSection className="py-32 border-t border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-[var(--color-charcoal)] to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Build the <span className="text-gradient-gold">Future?</span></h2>
            <p className="text-[var(--color-silver-metal)] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Partner with AZTEK for your next architectural, fabrication, or smart agriculture project. Let's create something extraordinary together.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex px-10 py-5 bg-[var(--color-royal-gold)] hover:bg-[var(--color-champagne)] text-[var(--color-onyx-black)] rounded-md font-bold text-lg transition-colors shadow-[0_0_20px_rgba(184,134,43,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              Get in Touch Today
            </Link>
          </AnimatedSection>
        </div>
      </ParallaxSection>
    </div>
  );
}
