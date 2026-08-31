import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | AZTEK",
  description: "Learn about AZTEK's vision, mission, and the Aztec legacy that inspires our engineering, agriculture, and manufacturing.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[var(--color-onyx-black)]">
      {/* Header */}
      <ParallaxSection className="py-20 md:py-32 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-[var(--color-charcoal)] to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold">About AZTEK</h1>
            <p className="text-xl text-[var(--color-silver-metal)] max-w-3xl mx-auto">
              To lead the industry in engineered aluminum and architectural fabrication by delivering end-to-end solutions combining precision engineering, master craftsmanship, and flawless installation.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* The Aztec Connection */}
      <section className="py-24 bg-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">The Aztec Connection</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-royal-gold)] to-[var(--color-copper)] mb-8 mx-auto md:mx-0"></div>
              <p className="text-[var(--color-silver-metal)] text-xl mb-8 max-w-4xl leading-relaxed">
                The name AZTEK binds our diverse sectors together under a single narrative of pioneer-level engineering, resourcefulness, and master craftsmanship. The Aztec civilization is renowned for three distinct pillars that map directly onto our business verticals:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-8 rounded-2xl h-full border-t-4 border-t-[var(--color-silver-metal)] hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gradient-silver">Engineering & Fabrication</h3>
                <p className="text-[var(--color-silver-metal)] leading-relaxed">
                  The Aztecs were legendary master builders and stonemasons, famous for constructing complex architectural marvels, grand temples, and intricate decorative stonework without modern machinery. Our aluminium fabrication and decor mirror that same spirit of structural precision, durability, and functional aesthetics.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 rounded-2xl h-full border-t-4 border-t-[var(--color-royal-gold)] hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gradient-gold">Agricultural Innovation</h3>
                <p className="text-[var(--color-silver-metal)] leading-relaxed">
                  Aztecs invented chinampas (floating gardens)—an advanced, highly efficient hydro-agricultural system that maximized crop yields in limited spaces. Using smart tech in agriculture aligns perfectly with their legacy of innovative, high-efficiency farming techniques.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="glass-card p-8 rounded-2xl h-full border-t-4 border-t-[var(--color-copper)] hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gradient-bronze">Toolmaking & Manufacturing</h3>
                <p className="text-[var(--color-silver-metal)] leading-relaxed">
                  Aztec craftsmen engineered sharp, highly durable obsidian tools, weapons, and specialized hardware essential for daily survival and mass construction. Manufacturing new tools pays homage to their inventive toolmaking tradition.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[var(--color-charcoal)] border-t border-[var(--color-steel-grey)]/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-[var(--color-onyx-black)] p-10 rounded-2xl h-full border border-[var(--color-royal-gold)]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Vision</h2>
                <p className="text-[var(--color-silver-metal)] leading-relaxed text-lg mb-6">
                  To redefine modern architecture through precision-engineered aluminum solutions, transforming complex blueprints into durable, high-end interior and exterior spaces.
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-silver-metal)] to-[var(--color-aluminium)]"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-[var(--color-onyx-black)] p-10 rounded-2xl h-full border border-[var(--color-royal-gold)]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Choose Us</h2>
                <ul className="space-y-6">
                  {[
                    "Uncompromising Quality: Zero-defect checks.",
                    "End-to-End Execution: From site visit to handover.",
                    "Advanced Technology: Integrating smart tech in all divisions.",
                    "Master Craftsmanship: Legacy of the Aztecs."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-royal-gold)] mr-4 shrink-0 mt-0.5" />
                      <span className="text-[var(--color-silver-metal)] text-lg">{item}</span>
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
