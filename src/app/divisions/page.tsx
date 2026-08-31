import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { Building2, Leaf, Wrench, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Divisions | AZTEK",
  description: "Explore the three pillars of AZTEK: Alucore (Engineering), Agrotec (Agriculture), and Lanka (Manufacturing).",
};

export default function DivisionsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[var(--color-onyx-black)]">
      
      {/* Page Header */}
      <ParallaxSection className="py-20 md:py-32 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-[var(--color-charcoal)] to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold">Our Divisions</h1>
            <p className="text-xl text-[var(--color-silver-metal)] max-w-3xl mx-auto">
              Three specialized branches operating under a single narrative of engineering, resourcefulness, and craftsmanship.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* AZTEK Alucore */}
      <section id="alucore" className="py-24 border-b border-[var(--color-steel-grey)]/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-silver-metal)]/20 relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] to-[var(--color-onyx-black)] flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-[var(--color-silver-metal)] opacity-50" />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center rounded-full bg-[var(--color-silver-metal)]/10 px-3 py-1 text-sm font-medium mb-6 text-[var(--color-aluminium)] border border-[var(--color-silver-metal)]/20">
                <span className="flex h-2 w-2 rounded-full bg-[var(--color-silver-metal)] mr-2"></span>
                Engineering & Fabrication
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-silver">AZTEK Alucore</h2>
              <p className="text-lg text-[var(--color-silver-metal)] mb-8 leading-relaxed">
                The flagship division managing all large-scale, high-end commercial aluminium and glass fabrication across the country. We mirror the Aztec spirit of structural precision and durability.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-white">Key Capabilities:</h3>
              <ul className="space-y-4">
                {[
                  "Architectural Glass & Aluminum shopfronts",
                  "I-Panels and structural ceilings",
                  "Frameless glass partitions and railings",
                  "Bespoke residential fixture design"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-silver-metal)] mr-3 shrink-0 mt-1" />
                    <span className="text-[var(--color-aluminium)]">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AZTEK Agrotec */}
      <section id="agrotec" className="py-24 bg-[var(--color-charcoal)] border-b border-[var(--color-steel-grey)]/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <AnimatedSection className="lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-royal-gold)]/20 relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-midnight-teal)] to-[var(--color-onyx-black)] flex items-center justify-center">
                  <Leaf className="w-32 h-32 text-[var(--color-royal-gold)] opacity-50" />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="lg:order-1">
              <div className="inline-flex items-center rounded-full bg-[var(--color-royal-gold)]/10 px-3 py-1 text-sm font-medium mb-6 text-[var(--color-champagne)] border border-[var(--color-royal-gold)]/20">
                <span className="flex h-2 w-2 rounded-full bg-[var(--color-royal-gold)] mr-2"></span>
                Smart Agriculture
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-gold">AZTEK Agrotec</h2>
              <p className="text-lg text-[var(--color-silver-metal)] mb-8 leading-relaxed">
                Inspired by the advanced chinampas of the Aztecs, Agrotec focuses on automated hydro-agricultural systems to maximize crop yields in limited spaces through technological innovation.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-white">Key Capabilities:</h3>
              <ul className="space-y-4">
                {[
                  "Automated hydroponic and aeroponic systems",
                  "Climate-controlled indoor farming",
                  "GMO applications and yield optimization",
                  "Sustainable water and resource management"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-royal-gold)] mr-3 shrink-0 mt-1" />
                    <span className="text-[var(--color-aluminium)]">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AZTEK Lanka */}
      <section id="lanka" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-copper)]/20 relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-deep-bronze)] to-[var(--color-onyx-black)] flex items-center justify-center">
                  <Wrench className="w-32 h-32 text-[var(--color-copper)] opacity-50" />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center rounded-full bg-[var(--color-copper)]/10 px-3 py-1 text-sm font-medium mb-6 text-[var(--color-copper)] border border-[var(--color-copper)]/20">
                <span className="flex h-2 w-2 rounded-full bg-[var(--color-copper)] mr-2"></span>
                Toolmaking & Manufacturing
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-bronze">AZTEK Lanka</h2>
              <p className="text-lg text-[var(--color-silver-metal)] mb-8 leading-relaxed">
                Paying homage to Aztec toolmaking traditions, this division manufactures custom hardware accessories and fabrication tools locally to reduce reliance on imports and ensure quality.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-white">Key Capabilities:</h3>
              <ul className="space-y-4">
                {[
                  "Local manufacturing of specialized hardware",
                  "Custom tools and accessories for fabrication",
                  "Import substitution for the construction sector",
                  "Quality-controlled component production"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-copper)] mr-3 shrink-0 mt-1" />
                    <span className="text-[var(--color-aluminium)]">{item}</span>
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
