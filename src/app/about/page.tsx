import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AZTEK's vision, mission, and the Aztec legacy that inspires our engineering, agriculture, and manufacturing.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-onyx-black)]">
      {/* Header */}
      <ParallaxSection className="py-24 md:py-40 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-white via-white/80 dark:from-black dark:via-black/80 to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-black dark:to-white uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              About AZTEK
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-silver-metal)] max-w-4xl mx-auto font-light leading-relaxed bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              To lead the industry in engineered aluminum and architectural fabrication by delivering end-to-end solutions combining precision engineering, master craftsmanship, and flawless installation.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* The Aztec Connection */}
      <section className="py-32 bg-[var(--color-onyx-black)] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(184,134,43,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground dark:text-white uppercase tracking-tighter">The Aztec Connection</h2>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-royal-gold)] to-transparent mb-8 mx-auto"></div>
              <p className="text-[var(--color-silver-metal)] text-xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                The name AZTEK binds our diverse sectors together under a single narrative of pioneer-level engineering, resourcefulness, and master craftsmanship. The Aztec civilization is renowned for three distinct pillars that map directly onto our business verticals:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-10 rounded-[2rem] h-full border border-[var(--color-silver-metal)]/20 hover:border-[var(--color-silver-metal)]/60 hover:-translate-y-3 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(166,168,173,0.2)] group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-silver-metal)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-[2] ease-out"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 text-foreground dark:text-white uppercase tracking-wider drop-shadow-[0_0_10px_rgba(166,168,173,0.5)]">Engineering & Fabrication</h3>
                  <p className="text-[var(--color-silver-metal)] leading-relaxed font-light">
                    The Aztecs were legendary master builders and stonemasons, famous for constructing complex architectural marvels, grand temples, and intricate decorative stonework without modern machinery. Our aluminium fabrication and decor mirror that same spirit of structural precision, durability, and functional aesthetics.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card p-10 rounded-[2rem] h-full border border-[var(--color-royal-gold)]/20 hover:border-[var(--color-royal-gold)]/60 hover:-translate-y-3 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(184,134,43,0.2)] group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-royal-gold)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-[2] ease-out"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 text-foreground dark:text-white uppercase tracking-wider drop-shadow-[0_0_10px_rgba(184,134,43,0.5)]">Agricultural Innovation</h3>
                  <p className="text-[var(--color-silver-metal)] leading-relaxed font-light">
                    Aztecs invented chinampas (floating gardens)—an advanced, highly efficient hydro-agricultural system that maximized crop yields in limited spaces. Using smart tech in agriculture aligns perfectly with their legacy of innovative, high-efficiency farming techniques.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="glass-card p-10 rounded-[2rem] h-full border border-[var(--color-copper)]/20 hover:border-[var(--color-copper)]/60 hover:-translate-y-3 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(194,106,46,0.2)] group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-copper)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-[2] ease-out"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 text-foreground dark:text-white uppercase tracking-wider drop-shadow-[0_0_10px_rgba(194,106,46,0.5)]">Toolmaking & Manufacturing</h3>
                  <p className="text-[var(--color-silver-metal)] leading-relaxed font-light">
                    Aztec craftsmen engineered sharp, highly durable obsidian tools, weapons, and specialized hardware essential for daily survival and mass construction. Manufacturing new tools pays homage to their inventive toolmaking tradition.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-background dark:bg-black border-t border-[var(--color-royal-gold)]/20 relative">
        <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.05]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white/60 dark:bg-[var(--color-onyx-black)]/60 backdrop-blur-md p-12 rounded-[2rem] h-full border border-[var(--color-royal-gold)]/30 shadow-[0_0_40px_rgba(184,134,43,0.15)] group hover:border-[var(--color-royal-gold)]/60 transition-colors duration-500">
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground dark:text-white uppercase tracking-tighter group-hover:drop-shadow-[0_0_15px_rgba(184,134,43,0.5)] transition-all">Our Vision</h2>
                <p className="text-[var(--color-silver-metal)] leading-relaxed text-xl mb-10 font-light">
                  To redefine modern architecture through precision-engineered aluminum solutions, transforming complex blueprints into durable, high-end interior and exterior spaces.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-royal-gold)] to-[var(--color-champagne)]"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/60 dark:bg-[var(--color-onyx-black)]/60 backdrop-blur-md p-12 rounded-[2rem] h-full border border-[var(--color-royal-gold)]/30 shadow-[0_0_40px_rgba(184,134,43,0.15)] group hover:border-[var(--color-royal-gold)]/60 transition-colors duration-500">
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground dark:text-white uppercase tracking-tighter group-hover:drop-shadow-[0_0_15px_rgba(184,134,43,0.5)] transition-all">Why Choose Us</h2>
                <ul className="space-y-8">
                  {[
                    "Uncompromising Quality: Zero-defect checks.",
                    "End-to-End Execution: From site visit to handover.",
                    "Advanced Technology: Integrating smart tech in all divisions.",
                    "Master Craftsmanship: Legacy of the Aztecs."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group/item">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-royal-gold)]/20 flex items-center justify-center mr-6 shrink-0 mt-1 border border-[var(--color-royal-gold)]/50 group-hover/item:scale-110 group-hover/item:bg-[var(--color-royal-gold)]/40 transition-all">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-champagne)]" />
                      </div>
                      <span className="text-[var(--color-silver-metal)] text-xl font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
