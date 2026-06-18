'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jenna P.',
    text: 'Marcus and his crew transformed our backyard into something out of a magazine. We could not be happier with how it turned out.',
  },
  {
    name: 'David L.',
    text: 'Reliable, tidy, and the design ideas were spot on. Best landscaper we have used. They came in, listened, and delivered exactly what we wanted.',
  },
  {
    name: 'Priya S.',
    text: 'Our lawn has never looked better and they always show up when they say they will. That kind of dependability is rare. Highly recommend.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-body text-brand-accent text-sm font-medium tracking-widest uppercase mb-3"
          >
            Real Homeowners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-brand-primary text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
          >
            Austin Homeowners
            <br />
            <span className="text-brand-accent italic">Love Their Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-brand-secondary text-lg max-w-xl mx-auto"
          >
            Do not take our word for it. See what your neighbors are saying about Evergreen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="bg-brand-background border border-brand-primary/8 rounded-2xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-brand-accent fill-brand-accent"
                  />
                ))}
              </div>
              <p className="font-body text-brand-text text-base leading-relaxed flex-grow mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-brand-primary text-sm font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-brand-primary text-sm font-semibold">
                    {review.name}
                  </p>
                  <p className="font-body text-brand-secondary text-xs">Austin, TX</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-3xl overflow-hidden relative"
        >
          <Image
            src="/images/gallery-2.jpg"
            alt="Beautiful Austin landscape project by Evergreen"
            width={1400}
            height={400}
            className="w-full h-56 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-transparent flex items-center">
            <div className="px-10 sm:px-16 max-w-xl">
              <h3 className="font-heading text-white text-2xl sm:text-3xl font-semibold mb-3">
                Ready for a yard your whole street talks about?
              </h3>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
