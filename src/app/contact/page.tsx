import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | AZTEK",
  description: "Get in touch with AZTEK for engineering, agriculture, and manufacturing inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[var(--color-onyx-black)]">
      
      {/* Page Header */}
      <ParallaxSection className="py-20 md:py-32 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-[var(--color-charcoal)]/80">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold">Contact AZTEK</h1>
            <p className="text-xl text-[var(--color-silver-metal)] max-w-3xl mx-auto">
              Reach out to discuss your next project, explore partnerships, or learn more about our divisions.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Get In Touch</h2>
              <p className="text-[var(--color-silver-metal)] mb-10 leading-relaxed text-lg">
                Whether you need precision engineering, smart agricultural setups, or custom hardware, our team is ready to deliver master craftsmanship.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-royal-gold)]/10 border border-[var(--color-royal-gold)]/30 flex items-center justify-center text-[var(--color-champagne)] mr-6 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Phone</h3>
                    <p className="text-[var(--color-silver-metal)]">0772 960 591</p>
                    <p className="text-[var(--color-silver-metal)]">077 1375 422</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-silver-metal)]/10 border border-[var(--color-silver-metal)]/30 flex items-center justify-center text-[var(--color-aluminium)] mr-6 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Email</h3>
                    <p className="text-[var(--color-silver-metal)]">azteklanka@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-copper)]/10 border border-[var(--color-copper)]/30 flex items-center justify-center text-[var(--color-copper)] mr-6 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Location</h3>
                    <p className="text-[var(--color-silver-metal)]">
                      82/4 Salawawaththa Road<br />
                      Makuluduwa, Piliyandala
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 md:p-10 rounded-2xl border border-[var(--color-royal-gold)]/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gradient-gold">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-[var(--color-silver-metal)]">First name</label>
                      <input 
                        id="firstName" 
                        className="w-full bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-[var(--color-silver-metal)]">Last name</label>
                      <input 
                        id="lastName" 
                        className="w-full bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--color-silver-metal)]">Email</label>
                    <input 
                      id="email" 
                      type="email"
                      className="w-full bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="division" className="text-sm font-medium text-[var(--color-silver-metal)]">Inquiry For</label>
                    <select 
                      id="division"
                      className="w-full bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-colors appearance-none"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="alucore">AZTEK Alucore (Engineering)</option>
                      <option value="agrotec">AZTEK Agrotec (Agriculture)</option>
                      <option value="lanka">AZTEK Lanka (Manufacturing)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[var(--color-silver-metal)]">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button type="button" className="w-full py-4 bg-[var(--color-royal-gold)] hover:bg-[var(--color-champagne)] text-black rounded-md font-bold transition-colors flex items-center justify-center shadow-[0_0_15px_rgba(184,134,43,0.3)]">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
