"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          {/* We'll use a CSS gradient as a placeholder for an architectural image or abstract geometry */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-6 tracking-wider">
            ENGINEERED EXCELLENCE
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Redefining Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-slate-200">Architecture</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transforming complex blueprints into durable, high-end interior and exterior spaces through precision-engineered aluminum solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/projects" 
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-md font-medium transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              View Our Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-md font-medium transition-all w-full sm:w-auto justify-center flex"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-slate-400 mb-2 uppercase tracking-widest">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}
