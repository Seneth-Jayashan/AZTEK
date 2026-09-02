import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { Building, LayoutDashboard, Component, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our premium services including Commercial Frontages, Interior Solutions, and Windows & Doors.",
};

const servicesList = [
  {
    title: "Commercial Frontages & Building Envelopes",
    icon: <Building className="w-12 h-12 text-[var(--color-royal-gold)] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(184,134,43,0.5)]" />,
    items: [
      "Shopfront systems",
      "Curtain wall facades",
      "Spider glazing structures",
      "Structural glazing"
    ],
    borderColor: "border-[var(--color-royal-gold)]",
    glowColor: "rgba(184,134,43,0.15)",
    gradient: "from-[var(--color-royal-gold)]"
  },
  {
    title: "Interior",
    icon: <LayoutDashboard className="w-12 h-12 text-[var(--color-silver-metal)] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(166,168,173,0.5)]" />,
    items: [
      "Pantry cupboards & modular kitchens",
      "Island pantries",
      "Partition systems",
      "Skirting profiles"
    ],
    borderColor: "border-[var(--color-silver-metal)]",
    glowColor: "rgba(166,168,173,0.15)",
    gradient: "from-[var(--color-silver-metal)]"
  },
  {
    title: "Windows, Doors & Glass Integration",
    icon: <Component className="w-12 h-12 text-[var(--color-copper)] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(194,106,46,0.5)]" />,
    items: [
      "Casement frameworks",
      "Sliding tracks",
      "Louvers and sunshades",
      "Glassware accommodations (tempered, laminated, double glazed, annealed)"
    ],
    borderColor: "border-[var(--color-copper)]",
    glowColor: "rgba(194,106,46,0.15)",
    gradient: "from-[var(--color-copper)]"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-onyx-black)]">
      {/* Header */}
      <ParallaxSection className="py-24 md:py-40 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-white via-white/80 dark:from-black dark:via-black/80 to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-black dark:to-white uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-silver-metal)] max-w-4xl mx-auto font-light leading-relaxed bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              Delivering premium architectural solutions with uncompromising quality. Explore our comprehensive range of specialized services tailored for modern aesthetics and structural durability.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section className="py-32 bg-background dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(184,134,43,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className={`glass-card p-10 rounded-2xl relative overflow-hidden group hover:-translate-y-3 transition-all duration-500 border ${service.borderColor}/30 hover:${service.borderColor}/70 h-full flex flex-col`} style={{ boxShadow: `0 0 30px ${service.glowColor}` }}>
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-[2] ease-out bg-gradient-to-bl ${service.gradient} to-transparent opacity-10`}></div>
                  
                  <div className="relative z-10 mb-8">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-8 text-foreground dark:text-white uppercase tracking-wider h-auto min-h-[64px]">{service.title}</h3>
                  
                  <ul className="space-y-4 flex-grow relative z-10">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start group/item">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 shrink-0 mt-0.5 border ${service.borderColor}/50 group-hover/item:scale-110 transition-all bg-black/20 dark:bg-white/10`}>
                          <CheckCircle2 className="w-4 h-4 text-foreground dark:text-white" />
                        </div>
                        <span className="text-[var(--color-silver-metal)] text-lg font-light leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
