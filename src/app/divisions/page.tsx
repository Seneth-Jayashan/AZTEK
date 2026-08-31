import AnimatedSection from "@/components/AnimatedSection";
import { Wrench, Leaf, Cpu, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Divisions | AZTEK",
  description: "Explore the three pillars of AZTEK: Alucore (Fabrication), Agrotec (Agriculture), and Lanka (Manufacturing).",
};

export default function DivisionsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Divisions</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Three specialized branches working in synergy to deliver comprehensive solutions across industries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Alucore */}
      <section id="alucore" className="py-20 md:py-32 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <AnimatedSection className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative group flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-slate-400 to-slate-200 dark:from-slate-800 dark:to-slate-600 opacity-60"></div>
                 <Wrench className="w-32 h-32 text-slate-500/50 dark:text-slate-400/50 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium mb-6 border border-slate-200 dark:border-slate-700">
                <Wrench size={16} /> Division 01
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AZTEK Alucore</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Managing all large-scale, high-end commercial aluminium and glass fabrication across the country. Our foundation is built on precision engineering and architectural standards.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Architectural Aluminium Fabrication",
                  "Glassware Installations & C-Groove Systems",
                  "Custom Pantry Cupboards & Cladding",
                  "Gypsum Ceilings & I-Panels"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-slate-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/projects" className="font-medium text-foreground underline underline-offset-4 hover:text-slate-500 transition-colors">
                View Alucore Projects
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Agrotec */}
      <section id="agrotec" className="py-20 md:py-32 bg-emerald-50 dark:bg-emerald-950/20 scroll-mt-24 border-y border-emerald-100 dark:border-emerald-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
            <AnimatedSection className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-emerald-200 dark:bg-emerald-900/50 relative group flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                 <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-emerald-200 dark:from-emerald-900 dark:to-emerald-700 opacity-60"></div>
                 <Leaf className="w-32 h-32 text-emerald-600/50 dark:text-emerald-500/50 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6 border border-emerald-200 dark:border-emerald-800">
                <Leaf size={16} /> Division 02
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AZTEK Agrotec</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                A smart agriculture division focusing on Research & Development in automated hydroponics, aeroponics, and GMO applications to maximize crop yields with sustainable practices.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Automated Hydroponics & Aeroponics",
                  "Smart Drip Irrigation Systems (e.g., Capsicum chinense)",
                  "GMO Applications & Crop Yield Optimization",
                  "Future Algae Production (Spirulina & Chlorella)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Lanka */}
      <section id="lanka" className="py-20 md:py-32 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <AnimatedSection className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-blue-100 dark:bg-blue-900/30 relative group flex items-center justify-center border border-blue-200 dark:border-blue-800">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-blue-100 dark:from-blue-800 dark:to-blue-900 opacity-60"></div>
                 <Cpu className="w-32 h-32 text-blue-500/50 dark:text-blue-400/50 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
                <Cpu size={16} /> Division 03
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AZTEK Lanka</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                A long-term project focused on manufacturing our own custom hardware accessories and fabrication tools locally to reduce reliance on costly imports and boost the local economy.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Local Custom Hardware Manufacturing",
                  "Fabrication Tool Production",
                  "Reducing Import Reliance",
                  "Exporting Local Solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span>{item}</span>
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
