import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | AZTEK",
  description: "Get in touch with AZTEK for precision-engineered aluminum solutions and smart agriculture projects.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your architectural or agricultural vision to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
                Whether you need a consultation for a large-scale commercial fabrication, a residential decor project, or want to explore our smart agriculture solutions, our team is ready to assist you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      82/4, Salawawaththa Road,<br />
                      Makuluduwa, Piliyandala,<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone / WhatsApp</h3>
                    <div className="flex flex-col space-y-1">
                      <a href="tel:+94772960591" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">0772 960 591</a>
                      <a href="tel:+94771375422" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">077 1375 422</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Address</h3>
                    <a href="mailto:azteklanka@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                      azteklanka@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden bg-white/50 dark:bg-slate-900/50">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </AnimatedSection>
            
          </div>
        </div>
      </section>

    </div>
  );
}
