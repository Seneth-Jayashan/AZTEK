import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { Building2, Leaf, Wrench, CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divisions",
  description: "Explore the three pillars of AZTEK: Alucore (Engineering), Agrotec (Agriculture), and Lanka (Manufacturing).",
};

export default function DivisionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-onyx-black)]">

      {/* Page Header */}
      <ParallaxSection className="py-24 md:py-40 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-white via-white/80 dark:from-black dark:via-black/80 to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-black dark:to-white uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Our Divisions
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-silver-metal)] max-w-3xl mx-auto font-light leading-relaxed bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              Three specialized branches operating under a single narrative of engineering, resourcefulness, and craftsmanship.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* AZTEK Alucore */}
      <section id="alucore" className="py-32 border-b border-[var(--color-royal-gold)]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_left,rgba(166,168,173,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(166,168,173,0.15)] border border-[var(--color-silver-metal)]/30 relative h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] to-[var(--color-onyx-black)] flex items-center justify-center transition-transform duration-1000 group-hover:scale-105">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,168,173,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <Building2 className="w-40 h-40 text-[var(--color-silver-metal)] opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(166,168,173,0.3)]" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center rounded-full bg-[var(--color-silver-metal)]/10 px-4 py-2 text-sm font-bold mb-8 text-[var(--color-aluminium)] border border-[var(--color-silver-metal)]/30 shadow-[0_0_15px_rgba(166,168,173,0.2)] uppercase tracking-wider">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--color-silver-metal)] mr-3 shadow-[0_0_10px_rgba(166,168,173,0.8)] animate-pulse"></span>
                Engineering & Fabrication
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground dark:text-white uppercase tracking-tighter">AZTEK Alucore</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-silver-metal)] to-[var(--color-aluminium)] mb-8"></div>
              <p className="text-xl text-[var(--color-silver-metal)] mb-10 leading-relaxed font-light">
                The flagship division managing all large-scale, high-end commercial aluminium and glass fabrication across the country. We mirror the Aztec spirit of structural precision and durability.
              </p>

              <h3 className="text-2xl font-black mb-6 text-foreground dark:text-white uppercase tracking-wider">Key Capabilities</h3>
              <ul className="space-y-6">
                {[
                  "Architectural Glass & Aluminum shopfronts",
                  "I-Panels and structural ceilings",
                  "Frameless glass partitions and railings",
                  "Bespoke residential fixture design"
                ].map((item, i) => (
                  <li key={i} className="flex items-start group/item">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-silver-metal)]/10 flex items-center justify-center mr-4 shrink-0 mt-0.5 border border-[var(--color-silver-metal)]/30 group-hover/item:bg-[var(--color-silver-metal)]/30 group-hover/item:scale-110 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-silver-metal)]" />
                    </div>
                    <span className="text-[var(--color-silver-metal)] text-lg font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AZTEK Agrotec */}
      <section id="agrotec" className="py-32 bg-background dark:bg-black border-b border-[var(--color-royal-gold)]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_right,rgba(76,175,80,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <AnimatedSection className="lg:order-2">
              <div className="rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(76,175,80,0.15)] border border-[#4CAF50]/30 relative h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F1D20] to-[#0D0D0F] flex items-center justify-center transition-transform duration-1000 group-hover:scale-105">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,175,80,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <Leaf className="w-40 h-40 text-[#4CAF50] opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(76,175,80,0.3)]" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:order-1">
              <div className="inline-flex items-center rounded-full bg-[#4CAF50]/10 px-4 py-2 text-sm font-bold mb-8 text-[#4CAF50] border border-[#4CAF50]/30 shadow-[0_0_15px_rgba(76,175,80,0.2)] uppercase tracking-wider">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#4CAF50] mr-3 shadow-[0_0_10px_rgba(76,175,80,0.8)] animate-pulse"></span>
                Smart Agriculture
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground dark:text-white uppercase tracking-tighter">AZTEK Agrotec</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4CAF50] to-[var(--color-champagne)] mb-8"></div>
              <p className="text-xl text-[var(--color-silver-metal)] mb-10 leading-relaxed font-light">
                Inspired by the advanced chinampas of the Aztecs, Agrotec focuses on automated hydro-agricultural systems to maximize crop yields in limited spaces through technological innovation.
              </p>

              <h3 className="text-2xl font-black mb-6 text-foreground dark:text-white uppercase tracking-wider">Key Capabilities</h3>
              <ul className="space-y-6">
                {[
                  "Automated hydroponic and aeroponic systems",
                  "Climate-controlled indoor farming",
                  "GMO applications and yield optimization",
                  "Sustainable water and resource management"
                ].map((item, i) => (
                  <li key={i} className="flex items-start group/item">
                    <div className="w-8 h-8 rounded-full bg-[#4CAF50]/10 flex items-center justify-center mr-4 shrink-0 mt-0.5 border border-[#4CAF50]/30 group-hover/item:bg-[#4CAF50]/30 group-hover/item:scale-110 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                    </div>
                    <span className="text-[var(--color-silver-metal)] text-lg font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AZTEK Lanka */}
      <section id="lanka" className="py-32 relative overflow-hidden bg-[var(--color-onyx-black)]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_left,rgba(194,106,46,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(194,106,46,0.15)] border border-[var(--color-copper)]/30 relative h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-deep-bronze)] to-[var(--color-onyx-black)] flex items-center justify-center transition-transform duration-1000 group-hover:scale-105">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,106,46,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <Wrench className="w-40 h-40 text-[var(--color-copper)] opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(194,106,46,0.3)]" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center rounded-full bg-[var(--color-copper)]/10 px-4 py-2 text-sm font-bold mb-8 text-[var(--color-copper)] border border-[var(--color-copper)]/30 shadow-[0_0_15px_rgba(194,106,46,0.2)] uppercase tracking-wider">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--color-copper)] mr-3 shadow-[0_0_10px_rgba(194,106,46,0.8)] animate-pulse"></span>
                Toolmaking & Manufacturing
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground dark:text-white uppercase tracking-tighter">AZTEK Lanka</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-copper)] to-[var(--color-royal-gold)] mb-8"></div>
              <p className="text-xl text-[var(--color-silver-metal)] mb-10 leading-relaxed font-light">
                Paying homage to Aztec toolmaking traditions, this division manufactures custom hardware accessories and fabrication tools locally to reduce reliance on imports and ensure quality.
              </p>

              <h3 className="text-2xl font-black mb-6 text-foreground dark:text-white uppercase tracking-wider">Key Capabilities</h3>
              <ul className="space-y-6">
                {[
                  "Local manufacturing of specialized hardware",
                  "Custom tools and accessories for fabrication",
                  "Import substitution for the construction sector",
                  "Quality-controlled component production"
                ].map((item, i) => (
                  <li key={i} className="flex items-start group/item">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-copper)]/10 flex items-center justify-center mr-4 shrink-0 mt-0.5 border border-[var(--color-copper)]/30 group-hover/item:bg-[var(--color-copper)]/30 group-hover/item:scale-110 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-copper)]" />
                    </div>
                    <span className="text-[var(--color-silver-metal)] text-lg font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
