import AnimatedSection from "@/components/AnimatedSection";
import { Users, Sprout, Building2, Sun } from "lucide-react";

export const metadata = {
  title: "About Us | AZTEK",
  description: "Learn about the history, rebranding, and mission of AZTEK - formerly Chamathkara Alu Creations.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Story</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              From a trusted family business to a forward-thinking corporate enterprise spanning fabrication, agriculture, and manufacturing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* History & Rebranding */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">The Evolution to AZTEK</h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Established over two decades ago, <strong>Chamathkara Alu Creations</strong> built a strong foundation as a renowned family business, providing countless services to society and clients across multiple districts in Sri Lanka.
                </p>
                <p>
                  To scale our operations and emerge into new sub-fields, we are transitioning our partnership into a registered Private Limited Company: <strong>AZTEK (PVT) LTD</strong>.
                </p>
                <p>
                  This corporate umbrella drives our growth across three distinct branches, allowing us to leverage our knowledge into smart agriculture, business process outsourcing, and high-nutrient algae production, while continuing to dominate the architectural aluminum sector.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative h-[400px] rounded-2xl overflow-hidden glass border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-50"></div>
              <div className="relative z-10 text-center">
                <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Formerly</p>
                <h3 className="text-2xl font-semibold text-slate-400 mb-8">Chamathkara Alu Creations</h3>
                <div className="w-px h-12 bg-slate-300 dark:bg-slate-700 mx-auto my-4"></div>
                <p className="text-sm uppercase tracking-widest text-primary mb-2 mt-8">Now</p>
                <h3 className="text-4xl font-bold text-foreground">AZTEK</h3>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mission & Values</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our business is built on strong social values, environmental sustainability, and technological advancement.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1} className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <Sun className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Green Sustainability</h3>
              <p className="text-slate-500 leading-relaxed">
                We recycle 100% of our aluminum scrap and metal off-cuts. We utilize solar panels to operate machinery and minimize material waste with smart layouts, attracting eco-conscious clients.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <Users className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Job Creation & Training</h3>
              <p className="text-slate-500 leading-relaxed">
                We employ direct workshop workers and create numerous indirect jobs. We host free fabrication and decor workshops led by industry experts to teach local youth practical technical skills.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <Building2 className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Quality Optimization</h3>
              <p className="text-slate-500 leading-relaxed">
                Maintaining strict ISO-grade inspection standards and zero-defect checks to ensure standard, export-ready aluminum and structural products.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <Sprout className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Tech-Driven Future</h3>
              <p className="text-slate-500 leading-relaxed">
                Adopting 3D CAD modeling and CNC automation to speed up production, eliminate manual errors, and lay the digital foundation for future expansion.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
    </div>
  );
}
