import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, Layers, Award, Leaf, Cpu, Wrench } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Core Pillars Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Core Pillars</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-slate-500">
                The foundation of AZTEK is built upon uncompromising quality, comprehensive solutions, and industry-leading standards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <ShieldCheck className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Precision & Durability</h3>
              <p className="text-slate-500 leading-relaxed">
                Engineered to exact tolerances for long-term structural performance. We guarantee zero-defect checks for standard, export-ready products.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <Layers className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">End-to-End Scope</h3>
              <p className="text-slate-500 leading-relaxed">
                Single-source delivery covering ceilings, i-panels, shopfronts, glass railings, and custom fixtures from site visit to final handover.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <Award className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Architectural Standard</h3>
              <p className="text-slate-500 leading-relaxed">
                Setting the industry benchmark for quality across commercial and residential projects, trusted by corporate leaders like Pyramid Lanka.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Three Pillars of Growth</h2>
                <p className="text-muted-foreground text-lg text-slate-500">
                  Expanding our horizons from specialized fabrication into smart agriculture and localized manufacturing.
                </p>
              </div>
              <Link href="/divisions" className="text-primary font-medium hover:underline inline-flex items-center gap-1 shrink-0">
                Explore Divisions <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="flex flex-col bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 group">
              <div className="h-48 bg-slate-200 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <Wrench className="w-16 h-16 text-slate-500 dark:text-slate-400 relative z-10" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2">AZTEK Alucore</h3>
                <p className="text-slate-500 mb-6 flex-grow">
                  Managing all large-scale, high-end commercial aluminium and glass fabrication across the country.
                </p>
                <Link href="/divisions#alucore" className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md font-medium text-sm text-center transition-colors">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex flex-col bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 group">
              <div className="h-48 bg-emerald-100 dark:bg-emerald-950/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-300 dark:from-emerald-900/50 dark:to-emerald-800/50 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <Leaf className="w-16 h-16 text-emerald-600 dark:text-emerald-500 relative z-10" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2">AZTEK Agrotec</h3>
                <p className="text-slate-500 mb-6 flex-grow">
                  Smart agriculture division focusing on automated hydroponics, aeroponics, and GMO applications to maximize yield.
                </p>
                <Link href="/divisions#agrotec" className="inline-block px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 rounded-md font-medium text-sm text-center transition-colors">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex flex-col bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 group">
              <div className="h-48 bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-900/50 dark:to-blue-800/50 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <Cpu className="w-16 h-16 text-blue-600 dark:text-blue-500 relative z-10" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2">AZTEK Lanka</h3>
                <p className="text-slate-500 mb-6 flex-grow">
                  Manufacturing custom hardware accessories and fabrication tools locally to reduce reliance on costly imports.
                </p>
                <Link href="/divisions#lanka" className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-400 rounded-md font-medium text-sm text-center transition-colors">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              Partner with AZTEK for your next architectural, fabrication, or smart agriculture project. Let's create something extraordinary together.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex px-8 py-4 bg-foreground text-background hover:bg-foreground/90 rounded-md font-medium transition-colors shadow-lg"
            >
              Get in Touch Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
