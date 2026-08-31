"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Divisions", href: "/divisions" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[var(--color-onyx-black)]/90 backdrop-blur-md border-b border-[var(--color-royal-gold)]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-extrabold tracking-widest text-gradient-gold">
              AZTEK
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[var(--color-royal-gold)] relative ${
                  pathname === link.href 
                    ? "text-[var(--color-champagne)] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--color-royal-gold)]" 
                    : "text-[var(--color-silver-metal)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-onyx-black)] border-b border-[var(--color-royal-gold)]/20 shadow-xl py-4 flex flex-col px-4 gap-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`p-3 rounded-md text-sm font-medium uppercase tracking-wider ${
                pathname === link.href 
                  ? "bg-[var(--color-royal-gold)]/10 text-[var(--color-champagne)] border-l-4 border-[var(--color-royal-gold)]" 
                  : "text-[var(--color-silver-metal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-aluminium)]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
