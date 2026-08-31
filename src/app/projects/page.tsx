import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Projects Portfolio | AZTEK",
  description: "Explore AZTEK's portfolio of completed architectural fabrication, interior decor, and smart agriculture projects.",
};

const alucoreProjects = [
  {
    title: "Boralesgamuwa Site - Glassware Installation",
    category: "Alucore",
    description: "High-end glass railing and staircase installation with precision aluminum fittings.",
  },
  {
    title: "Island Pantry and Ceiling",
    category: "Interior Decor",
    description: "Custom-built modern island pantry combined with seamless gypsum ceiling work.",
  },
  {
    title: "C-Groove Railing Windows",
    category: "Alucore",
    description: "Advanced C-Groove systems and precision profile cutting for an aesthetic residential exterior.",
  },
];

const agrotecProjects = [
  {
    title: "Smart Drip Irrigation - Capsicum chinense",
    category: "Agrotec",
    description: "Outdoors growing of Nai miris using grow bags with well-drained topsoil and soil-moisture sensors managing a smart drip irrigation system under a shade net.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Work</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of our precision engineering, architectural fabrication, and innovative agricultural projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Alucore Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 inline-block">AZTEK Alucore & Decor</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alucoreProjects.map((project, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="group cursor-pointer">
                <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-slate-400 dark:text-slate-500 font-medium tracking-widest uppercase text-sm">Image Placeholder</span>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Agrotec Projects */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 inline-block">AZTEK Agrotec</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agrotecProjects.map((project, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="group cursor-pointer">
                <div className="aspect-video bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-4 overflow-hidden relative border border-emerald-200 dark:border-emerald-800/50">
                  <div className="absolute inset-0 bg-emerald-200/50 dark:bg-emerald-800/50 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-600/70 dark:text-emerald-500/50 font-medium tracking-widest uppercase text-sm">Agrotec Project Image</span>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
