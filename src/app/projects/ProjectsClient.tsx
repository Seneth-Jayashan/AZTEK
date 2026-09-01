"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { ArrowUpRight, Building2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Pyramid Lanka Interior Fit-out",
      category: "Alucore",
      description: "Comprehensive interior fabrication including frameless glass partitions and custom aluminum fixtures for their corporate headquarters.",
      imageColor: "from-[var(--color-charcoal)] to-[var(--color-onyx-black)]",
      borderColor: "border-[var(--color-silver-metal)]/30",
      textColor: "text-gradient-silver"
    },
    {
      id: 2,
      title: "Commercial Shopfronts - Colombo 03",
      category: "Alucore",
      description: "Design and installation of highly durable, aesthetically pleasing aluminum and glass shopfronts for a premium retail complex.",
      imageColor: "from-[var(--color-steel-grey)] to-[var(--color-onyx-black)]",
      borderColor: "border-[var(--color-silver-metal)]/30",
      textColor: "text-gradient-silver"
    },
    {
      id: 3,
      title: "Automated Hydroponics Facility",
      category: "Agrotec",
      description: "Setup of a large-scale indoor farming facility with climate control and automated nutrient delivery systems.",
      imageColor: "from-[var(--color-midnight-teal)] to-[var(--color-onyx-black)]",
      borderColor: "border-[var(--color-royal-gold)]/30",
      textColor: "text-gradient-gold"
    },
    {
      id: 4,
      title: "Luxury Residential Railings",
      category: "Alucore",
      description: "Custom-designed structural glass railings and i-panel ceilings for a high-end villa.",
      imageColor: "from-[var(--color-charcoal)] to-[var(--color-onyx-black)]",
      borderColor: "border-[var(--color-silver-metal)]/30",
      textColor: "text-gradient-silver"
    }
  ];

  const categories = ["All", "Alucore", "Agrotec"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-onyx-black)]">

      {/* Header */}
      <ParallaxSection className="py-24 md:py-40 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-white via-white/80 dark:from-black dark:via-black/80 to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-black dark:to-white uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Featured Projects
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-silver-metal)] max-w-3xl mx-auto font-light leading-relaxed bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              Explore our portfolio of premium architectural and engineering solutions.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Projects Gallery */}
      <section className="py-32 bg-[var(--color-onyx-black)] relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(184,134,43,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Categories */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] border ${
                    activeCategory === category 
                    ? 'bg-gradient-to-r from-[var(--color-royal-gold)] to-[var(--color-champagne)] text-black border-transparent shadow-[0_0_20px_rgba(184,134,43,0.5)] scale-105' 
                    : 'bg-white/40 dark:bg-black/40 text-[var(--color-silver-metal)] border-[var(--color-silver-metal)]/20 hover:border-[var(--color-royal-gold)]/50 hover:text-black dark:hover:text-white backdrop-blur-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <div className="glass-card group rounded-[2rem] overflow-hidden border border-[var(--color-silver-metal)]/20 hover:border-[var(--color-royal-gold)]/50 transition-all duration-700 hover:-translate-y-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(184,134,43,0.2)] bg-white/40 dark:bg-black/40 h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-[var(--color-charcoal)] to-[var(--color-onyx-black)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Building2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-[var(--color-silver-metal)]/30 group-hover:scale-125 transition-transform duration-1000 ease-out" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-onyx-black)] to-transparent opacity-90 z-20"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 z-30">
                      <span className="px-4 py-1.5 bg-white/60 dark:bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-[var(--color-champagne)] border border-[var(--color-royal-gold)]/30 uppercase tracking-widest shadow-[0_0_10px_rgba(184,134,43,0.3)]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-30 flex-grow flex flex-col justify-between -mt-10 bg-[var(--color-onyx-black)]/80 backdrop-blur-md rounded-t-[2rem] border-t border-[var(--color-royal-gold)]/10">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-black text-foreground dark:text-white uppercase tracking-wider group-hover:text-[var(--color-royal-gold)] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <Link href="#" className="p-2 bg-white/50 dark:bg-black/50 border border-[var(--color-silver-metal)]/20 rounded-full text-[var(--color-silver-metal)] group-hover:bg-[var(--color-royal-gold)] group-hover:text-black group-hover:border-transparent transition-all shadow-md group-hover:shadow-[0_0_15px_rgba(184,134,43,0.5)]">
                          <ArrowUpRight size={20} />
                        </Link>
                      </div>
                      <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--color-royal-gold)] to-transparent mb-5 group-hover:w-full transition-all duration-700 ease-out"></div>
                      <p className="text-[var(--color-silver-metal)] mb-6 line-clamp-3 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection className="py-32 border-t border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-[var(--color-charcoal)] to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Have a project in mind?</h2>
            <p className="text-[var(--color-silver-metal)] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Let's discuss how we can bring precision engineering and master craftsmanship to your next endeavor.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-10 py-5 bg-[var(--color-royal-gold)] hover:bg-[var(--color-champagne)] text-black rounded-md font-bold text-lg transition-colors shadow-[0_0_20px_rgba(184,134,43,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </ParallaxSection>
    </div>
  );
}
