'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, TreePine, Hammer, Droplets, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Lawn Care & Mowing',
    description:
      'Crisp edges, consistent cuts, and a lush green lawn every week. We handle the work so you enjoy the results.',
  },
  {
    icon: TreePine,
    title: 'Landscape Design & Installation',
    description:
      'From concept to the final plant, we craft outdoor spaces that reflect your style and thrive in Austin\'s climate.',
  },
  {
    icon: Hammer,
    title: 'Hardscaping & Patios',
    description:
      'Stone patios, walkways, retaining walls, and outdoor living areas built to last and built to impress.',
  },
  {
    icon: Droplets,
    title: 'Irrigation & Sprinkler Systems',
    description:
      'Smart irrigation installed, adjusted, and maintained so your yard stays healthy without wasting water.',
  },
  {
    icon: Sparkles,
    title: 'Tree & Shrub Care',
    description:
      'Proper pruning, shaping, and health treatments that keep your trees and shrubs looking their absolute best.',
  },
  {
    icon: ArrowRight,
    title: 'Seasonal Cleanups',
    description:
      'Spring and fall cleanups that reset your yard, clear debris, and set the stage for the season ahead.',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-body text-brand-accent text-sm font-medium tracking-widest uppercase mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-brand-primary text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
          >
            Full-Service Care for Every
            <br />
            <span className="text-brand-accent italic">Corner of Your Yard</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-brand-secondary text-lg max-w-2xl mx-auto"
          >
            From weekly mowing to complete landscape transformations, Evergreen
            handles it all with the same standard: perfect, every time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-white border border-brand-primary/8 rounded-2xl p-7 hover:shadow-xl hover:border-brand-accent/20 transition-all duration-400 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/10 rounded-xl mb-5 group-hover:bg-brand-accent/20 transition-colors duration-300">
                  <Icon size={22} className="text-brand-accent" />
                </div>
                <h3 className="font-heading text-brand-primary text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-brand-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-brand-accent/30 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            Contact Us
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
