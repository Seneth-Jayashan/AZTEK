import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for CAC Group.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-onyx-black)]">
      {/* Header */}
      <ParallaxSection className="py-24 md:py-32 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-white via-white/80 dark:from-black dark:via-black/80 to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-black dark:to-white uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-silver-metal)] max-w-3xl mx-auto font-light leading-relaxed bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              The rules and regulations for the use of CAC's Website and Services.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Content */}
      <section className="py-20 bg-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="bg-white/5 dark:bg-black/20 border border-[var(--color-royal-gold)]/10 rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">1. Terms</h2>
              <p className="text-[var(--color-silver-metal)] text-lg mb-10 leading-relaxed font-light">
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">2. Use License</h2>
              <p className="text-[var(--color-silver-metal)] text-lg mb-6 leading-relaxed font-light">
                Permission is granted to temporarily download one copy of the materials (information or software) on CAC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-10 text-[var(--color-silver-metal)] text-lg font-light space-y-3">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on CAC's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">3. Disclaimer</h2>
              <p className="text-[var(--color-silver-metal)] text-lg mb-10 leading-relaxed font-light">
                The materials on CAC's website are provided "as is". CAC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">4. Limitations</h2>
              <p className="text-[var(--color-silver-metal)] text-lg mb-10 leading-relaxed font-light">
                In no event shall CAC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on CAC's Internet site, even if CAC or an CAC authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">5. Revisions and Errata</h2>
              <p className="text-[var(--color-silver-metal)] text-lg leading-relaxed font-light">
                The materials appearing on CAC's website could include technical, typographical, or photographic errors. CAC does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
