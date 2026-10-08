import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CAC Group.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-onyx-black)]">
      {/* Header */}
      <ParallaxSection className="py-24 md:py-32 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-white via-white/80 dark:from-black dark:via-black/80 to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-black dark:to-white uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-silver-metal)] max-w-3xl mx-auto font-light leading-relaxed bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              How we collect, use, and protect your information.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Content */}
      <section className="py-20 bg-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="bg-white/5 dark:bg-black/20 border border-[var(--color-royal-gold)]/10 rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">1. Introduction</h2>
              <p className="text-[var(--color-silver-metal)] text-lg mb-10 leading-relaxed font-light">
                Welcome to CAC Group. This Privacy Policy outlines how we handle your personal data when you interact with our website or services. Your privacy is critically important to us.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">2. Information We Collect</h2>
              <p className="text-[var(--color-silver-metal)] text-lg mb-10 leading-relaxed font-light">
                We may collect personal information such as your name, email address, phone number, and any other details you provide when using our contact forms or communicating with our divisions (CAC Alucore and CAC Lanka).
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">3. How We Use Your Information</h2>
              <p className="text-[var(--color-silver-metal)] text-lg mb-6 leading-relaxed font-light">
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-6 mb-10 text-[var(--color-silver-metal)] text-lg font-light space-y-3">
                <li>Provide, operate, and maintain our services.</li>
                <li>Improve, personalize, and expand our website offerings.</li>
                <li>Communicate with you, either directly or through our partners, including for customer service.</li>
                <li>Send you emails relating to your inquiries or business transactions.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">4. Data Security</h2>
              <p className="text-[var(--color-silver-metal)] text-lg mb-10 leading-relaxed font-light">
                We prioritize the security of your data and use standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white uppercase tracking-wider">5. Contact Us</h2>
              <p className="text-[var(--color-silver-metal)] text-lg leading-relaxed font-light">
                If you have any questions about this Privacy Policy, please contact us at: <br/><br/>
                <strong className="text-foreground dark:text-white">Email:</strong> info@caclanka.com <br/>
                <strong className="text-foreground dark:text-white">Phone:</strong> 0772 960 591 / 077 1375 422
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
