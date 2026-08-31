import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects | AZTEK",
  description: "View our portfolio of precision-engineered projects across Alucore and Agrotec divisions.",
};

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Pyramid Lanka Interior Fit-out",
      division: "Alucore",
      description: "Comprehensive interior fabrication including frameless glass partitions and custom aluminum fixtures for their corporate headquarters.",
      imageColor: "from-[var(--color-charcoal)] to-[var(--color-onyx-black)]",
      borderColor: "border-[var(--color-silver-metal)]/30",
      textColor: "text-gradient-silver"
    },
    {
      id: 2,
      title: "Commercial Shopfronts - Colombo 03",
      division: "Alucore",
      description: "Design and installation of highly durable, aesthetically pleasing aluminum and glass shopfronts for a premium retail complex.",
      imageColor: "from-[var(--color-steel-grey)] to-[var(--color-onyx-black)]",
      borderColor: "border-[var(--color-silver-metal)]/30",
      textColor: "text-gradient-silver"
    },
    {
      id: 3,
      title: "Automated Hydroponics Facility",
      division: "Agrotec",
      description: "Setup of a large-scale indoor farming facility with climate control and automated nutrient delivery systems.",
      imageColor: "from-[var(--color-midnight-teal)] to-[var(--color-onyx-black)]",
      borderColor: "border-[var(--color-royal-gold)]/30",
      textColor: "text-gradient-gold"
    },
    {
      id: 4,
      title: "Luxury Residential Railings",
      division: "Alucore",
      description: "Custom-designed structural glass railings and i-panel ceilings for a high-end villa.",
      imageColor: "from-[var(--color-charcoal)] to-[var(--color-onyx-black)]",
      borderColor: "border-[var(--color-silver-metal)]/30",
      textColor: "text-gradient-silver"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[var(--color-onyx-black)]">
      
      {/* Page Header */}
      <ParallaxSection className="py-20 md:py-32 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-[var(--color-charcoal)]/80">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold">Featured Projects</h1>
            <p className="text-xl text-[var(--color-silver-metal)] max-w-3xl mx-auto">
              A showcase of our master craftsmanship, precision engineering, and technological integration.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <div className={`group glass-card rounded-2xl overflow-hidden border ${project.borderColor} transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,134,43,0.15)] hover:-translate-y-2`}>
                  {/* Image Placeholder with Gradient */}
                  <div className={`h-64 w-full bg-gradient-to-br ${project.imageColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold mb-3 border ${
                          project.division === 'Agrotec' 
                            ? 'bg-[var(--color-royal-gold)]/10 text-[var(--color-champagne)] border-[var(--color-royal-gold)]/20' 
                            : 'bg-[var(--color-silver-metal)]/10 text-[var(--color-aluminium)] border-[var(--color-silver-metal)]/20'
                        }`}>
                          {project.division}
                        </span>
                        <h2 className={`text-2xl font-bold ${project.textColor}`}>{project.title}</h2>
                      </div>
                      <Link href="#" className="p-2 bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] rounded-full text-[var(--color-silver-metal)] hover:bg-[var(--color-royal-gold)] hover:text-black hover:border-[var(--color-champagne)] transition-all">
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>
                    <p className="text-[var(--color-silver-metal)] leading-relaxed">
                      {project.description}
                    </p>
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
