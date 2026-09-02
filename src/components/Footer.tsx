import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-onyx-black)] border-t border-[var(--color-steel-grey)]/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/Logo_light.png"
                alt="AZTEK Logo"
                width={150}
                height={50}
                className="hidden dark:block object-contain"
              />
              <Image
                src="/Logo_dark.png"
                alt="AZTEK Logo"
                width={150}
                height={50}
                className="block dark:hidden object-contain"
              />
            </Link>
            <p className="text-[var(--color-silver-metal)] mt-4 max-w-xs leading-relaxed">
              Bold like a lion. Built in aluminium. Designed to last. Engineering, Agriculture, and Manufacturing excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] flex items-center justify-center text-[var(--color-silver-metal)] hover:bg-[var(--color-royal-gold)] hover:text-black hover:border-[var(--color-champagne)] transition-colors">
                <FaFacebookF size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] flex items-center justify-center text-[var(--color-silver-metal)] hover:bg-[var(--color-royal-gold)] hover:text-black hover:border-[var(--color-champagne)] transition-colors">
                <FaTwitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] flex items-center justify-center text-[var(--color-silver-metal)] hover:bg-[var(--color-royal-gold)] hover:text-black hover:border-[var(--color-champagne)] transition-colors">
                <FaInstagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-charcoal)] border border-[var(--color-steel-grey)] flex items-center justify-center text-[var(--color-silver-metal)] hover:bg-[var(--color-royal-gold)] hover:text-black hover:border-[var(--color-champagne)] transition-colors">
                <FaLinkedinIn size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Divisions', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-') === 'home' ? '' : link.toLowerCase().replace(' ', '-')}`} className="text-[var(--color-silver-metal)] hover:text-[var(--color-royal-gold)] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-royal-gold)]/50"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground uppercase tracking-wider">Divisions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/divisions#alucore" className="text-[var(--color-silver-metal)] hover:text-[var(--color-aluminium)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-silver-metal)]/50"></span>
                  AZTEK Alucore
                </Link>
              </li>
              <li>
                <Link href="/divisions#agrotec" className="text-[var(--color-silver-metal)] hover:text-[var(--color-champagne)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-royal-gold)]/50"></span>
                  AZTEK Agrotec
                </Link>
              </li>
              <li>
                <Link href="/divisions#lanka" className="text-[var(--color-silver-metal)] hover:text-[var(--color-copper)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-copper)]/50"></span>
                  AZTEK Lanka
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[var(--color-silver-metal)]">
                <MapPin className="text-[var(--color-royal-gold)] shrink-0 mt-1" size={18} />
                <span>82/4 Salawawaththa Road,<br />Makuluduwa, Piliyandala</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-silver-metal)]">
                <Phone className="text-[var(--color-royal-gold)] shrink-0" size={18} />
                <span>0772 960 591 / 077 1375 422</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-silver-metal)]">
                <Mail className="text-[var(--color-royal-gold)] shrink-0" size={18} />
                <span>azteklanka@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[var(--color-steel-grey)]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-steel-grey)]">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>&copy; {currentYear} AZTEK Group. All rights reserved.</p>
            <p>Developed by <a href="https://onexuniverse.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-royal-gold)] transition-colors">One X Universe (Pvt) Ltd</a></p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-royal-gold)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-royal-gold)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
