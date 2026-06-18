'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const highlights = [
    'Licensed & Insured',
    'On-Time Guarantee',
    'Satisfaction Guaranteed',
  ];

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[680px] max-h-[1000px] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imageY }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block font-body text-brand-accent text-sm font-medium tracking-widest uppercase mb-4 border border-brand-accent/50 px-4 py-1.5 rounded-full">
            Austin, TX and the Hill Country
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
        >
          Yards the Whole
          <br />
          <span className="text-brand-accent italic">Street Notices</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-body text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Evergreen Lawn &amp; Landscape designs, builds, and maintains stunning
          outdoor spaces for Austin homeowners. Meticulous crews. Dependable
          scheduling. Results you can be proud of.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-semibold text-base px-8 py-4 rounded-full shadow-2xl hover:shadow-brand-accent/40 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            Contact Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="tel:5125550147"
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-body font-medium text-base px-8 py-4 rounded-full border border-white/30 transition-all duration-300"
          >
            (512) 555-0147
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8"
        >
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/80">
              <CheckCircle size={16} className="text-brand-accent flex-shrink-0" />
              <span className="font-body text-sm">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-background to-transparent" />
    </section>
  );
}
