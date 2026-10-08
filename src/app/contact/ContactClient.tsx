"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactClient() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-onyx-black)]">

      {/* Page Header */}
      <ParallaxSection className="py-24 md:py-40 border-b border-[var(--color-royal-gold)]/20" overlayClass="bg-gradient-to-b from-white via-white/80 dark:from-black dark:via-black/80 to-[var(--color-onyx-black)]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-royal-gold)] via-[var(--color-champagne)] to-black dark:to-white uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Contact CAC
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-silver-metal)] max-w-3xl mx-auto font-light leading-relaxed bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              Reach out to discuss your next project, explore partnerships, or learn more about our divisions.
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Contact Content */}
      <section className="py-32 bg-[var(--color-onyx-black)] relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,rgba(184,134,43,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <AnimatedSection>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground dark:text-white uppercase tracking-tighter">Get in Touch</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-royal-gold)] to-transparent mb-8"></div>
                <p className="text-[var(--color-silver-metal)] text-lg mb-10 font-light leading-relaxed">
                  Whether you're looking for high-end aluminium fabrication or purchasing items, CAC is ready to deliver.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white/40 dark:bg-black/40 flex items-center justify-center mr-6 shrink-0 border border-[var(--color-royal-gold)]/20 group-hover:bg-[var(--color-royal-gold)]/20 group-hover:border-[var(--color-royal-gold)]/50 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <MapPin className="w-6 h-6 text-[var(--color-champagne)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white uppercase tracking-wider">Headquarters</h3>
                    <p className="text-[var(--color-silver-metal)] font-light leading-relaxed">
                      82/4 Salawawaththa Road<br />
                      Makuluduwa, Piliyandala
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white/40 dark:bg-black/40 flex items-center justify-center mr-6 shrink-0 border border-[var(--color-royal-gold)]/20 group-hover:bg-[var(--color-royal-gold)]/20 group-hover:border-[var(--color-royal-gold)]/50 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Phone className="w-6 h-6 text-[var(--color-champagne)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white uppercase tracking-wider">Phone</h3>
                    <p className="text-[var(--color-silver-metal)] font-light leading-relaxed">
                      0772 960 591<br />
                      077 1375 422
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white/40 dark:bg-black/40 flex items-center justify-center mr-6 shrink-0 border border-[var(--color-royal-gold)]/20 group-hover:bg-[var(--color-royal-gold)]/20 group-hover:border-[var(--color-royal-gold)]/50 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Mail className="w-6 h-6 text-[var(--color-champagne)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white uppercase tracking-wider">Email</h3>
                    <p className="text-[var(--color-silver-metal)] font-light leading-relaxed">
                      azteklanka@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-10 md:p-14 rounded-[2rem] border border-[var(--color-royal-gold)]/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative overflow-hidden bg-white/40 dark:bg-black/40">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,134,43,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
                <h3 className="text-3xl font-black mb-8 text-foreground dark:text-white uppercase tracking-wider relative z-10">Send a Message</h3>
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-[var(--color-silver-metal)] mb-2 uppercase tracking-wider">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full bg-white/50 dark:bg-black/50 border border-[var(--color-silver-metal)]/20 rounded-xl px-5 py-4 text-foreground dark:text-white focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-all font-light"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-[var(--color-silver-metal)] mb-2 uppercase tracking-wider">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full bg-white/50 dark:bg-black/50 border border-[var(--color-silver-metal)]/20 rounded-xl px-5 py-4 text-foreground dark:text-white focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-all font-light"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[var(--color-silver-metal)] mb-2 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white/50 dark:bg-black/50 border border-[var(--color-silver-metal)]/20 rounded-xl px-5 py-4 text-foreground dark:text-white focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-all font-light"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="division" className="block text-sm font-bold text-[var(--color-silver-metal)] mb-2 uppercase tracking-wider">Interested Division</label>
                    <select 
                      id="division" 
                      className="w-full bg-white/50 dark:bg-black/50 border border-[var(--color-silver-metal)]/20 rounded-xl px-5 py-4 text-foreground dark:text-white focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-all font-light appearance-none"
                    >
                      <option value="general" className="bg-background dark:bg-[var(--color-onyx-black)] text-foreground dark:text-white">General Inquiry</option>
                      <option value="alucore" className="bg-background dark:bg-[var(--color-onyx-black)] text-foreground dark:text-white">CAC Alucore (Engineering & Fab)</option>
                      <option value="lanka" className="bg-background dark:bg-[var(--color-onyx-black)] text-foreground dark:text-white">CAC Lanka (Purchasing Items)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-[var(--color-silver-metal)] mb-2 uppercase tracking-wider">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full bg-white/50 dark:bg-black/50 border border-[var(--color-silver-metal)]/20 rounded-xl px-5 py-4 text-foreground dark:text-white focus:outline-none focus:border-[var(--color-royal-gold)] focus:ring-1 focus:ring-[var(--color-royal-gold)] transition-all font-light resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-5 bg-[var(--color-royal-gold)] hover:bg-[var(--color-champagne)] text-black rounded-xl font-black text-lg uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(184,134,43,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
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
