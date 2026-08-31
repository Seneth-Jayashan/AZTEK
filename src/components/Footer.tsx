import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tighter text-white">
                AZTEK
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              To redefine modern architecture through precision-engineered aluminum solutions, transforming complex blueprints into durable, high-end spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/divisions" className="text-sm hover:text-primary transition-colors">Our Divisions</Link></li>
              <li><Link href="/projects" className="text-sm hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Divisions</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400">AZTEK Alucore</li>
              <li className="text-sm text-slate-400">AZTEK Agrotec</li>
              <li className="text-sm text-slate-400">AZTEK Lanka</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  82/4, Salawawaththa Road,<br />
                  Makuluduwa, Piliyandala
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm text-slate-400">0772 960 591</span>
                  <span className="text-sm text-slate-400">077 1375 422</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:azteklanka@gmail.com" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  azteklanka@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} AZTEK (Pvt) Ltd. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Reg No: WP/COL/KB/2025/00278
          </p>
        </div>
      </div>
    </footer>
  );
}
