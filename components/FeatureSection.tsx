'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Timer, ShieldCheck, ArrowRight } from 'lucide-react';

const differentiators = [
  {
    icon: BadgeCheck,
    title: 'Detail-Obsessed Crews',
    description:
      'Every technician is trained to treat your yard like their own. No shortcuts. No overlooked edges. Every visit leaves a flawless result.',
  },
  {
    icon: Timer,
    title: 'On-Time, Every Time',
    description:
      'We show up when we say we will. Our scheduling system is built around your life, not the other way around.',
  },
  {
    icon: ShieldCheck,
    title: 'Satisfaction Guaranteed',
    description:
      'Not happy with the results? We come back and make it right, no questions asked. That is our promise to every Austin homeowner.',
  },
];

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: '-60px' });

  return (
    <section id="feature" className="py-24 bg-brand-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block font-body text-brand-accent text-sm font-medium tracking-widest uppercase mb-4"
            >
              Why Evergreen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6"
            >
              A Yard You Are Proud
              <br />
              <span className="text-brand-accent italic">To Come Home To</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-white/70 text-lg mb-10 leading-relaxed"
            >
              Austin homeowners trust Evergreen because we combine craftsmanship with
              accountability. We are not the largest company in town. We are the most
              dependable one.
            </motion.p>

            <div className="flex flex-col gap-7">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -25 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + 0.15 * index }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 bg-brand-accent/15 rounded-xl mt-0.5">
                      <Icon size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-white text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-white/65 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10"
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

          <div ref={imageRef} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/gallery-1.jpg"
                alt="Evergreen Lawn and Landscape crew at work in Austin TX"
                width={700}
                height={520}
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-brand-accent rounded-2xl px-6 py-5 shadow-2xl"
            >
              <p className="font-heading text-white text-3xl font-bold">10+</p>
              <p className="font-body text-white/85 text-sm mt-0.5">Years Serving Austin</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl px-6 py-5 shadow-2xl"
            >
              <p className="font-heading text-brand-primary text-3xl font-bold">500+</p>
              <p className="font-body text-brand-secondary text-sm mt-0.5">Happy Homeowners</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
