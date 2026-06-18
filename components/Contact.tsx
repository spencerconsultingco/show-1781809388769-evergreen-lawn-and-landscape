'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-body text-brand-accent text-sm font-medium tracking-widest uppercase mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-brand-primary text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
          >
            Request Your Free
            <br />
            <span className="text-brand-accent italic">Landscape Consultation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-brand-secondary text-lg max-w-xl mx-auto"
          >
            Tell us about your yard and we will be in touch within one business day to schedule your free on-site consultation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-brand-primary rounded-2xl p-7 text-white">
              <h3 className="font-heading text-xl font-semibold mb-5">Contact Information</h3>
              <div className="flex flex-col gap-5">
                <a href="tel:5125550147" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-brand-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/30 transition-colors">
                    <Phone size={17} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-white/60 text-xs mb-0.5">Call Us</p>
                    <p className="font-body text-white font-medium">(512) 555-0147</p>
                  </div>
                </a>
                <a href="mailto:todd@thesitesmith.co" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-brand-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/30 transition-colors">
                    <Mail size={17} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-white/60 text-xs mb-0.5">Email Us</p>
                    <p className="font-body text-white font-medium">Send a Message</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={17} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-white/60 text-xs mb-0.5">Business Hours</p>
                    <p className="font-body text-white font-medium">Mon to Sat, 8am to 6pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-body text-white/60 text-xs mb-0.5">Service Area</p>
                    <p className="font-body text-white font-medium">Austin and the Hill Country</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand-primary/8 rounded-2xl p-7">
              <h3 className="font-heading text-brand-primary text-lg font-semibold mb-3">Serving Austin and Beyond</h3>
              <p className="font-body text-brand-secondary text-sm leading-relaxed">
                We serve homeowners across Austin, Cedar Park, Round Rock, Georgetown, Lakeway, Dripping Springs, and the surrounding Hill Country.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3 bg-white border border-brand-primary/8 rounded-2xl p-8 shadow-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-brand-accent" />
                </div>
                <h3 className="font-heading text-brand-primary text-2xl font-semibold mb-3">
                  Message Received
                </h3>
                <p className="font-body text-brand-secondary text-base">
                  Thank you for reaching out. We will be in touch within one business day to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-heading text-brand-primary text-xl font-semibold">Request a Free Consultation</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-body text-brand-text text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="font-body text-brand-text text-sm border border-brand-primary/15 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 bg-brand-background"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-body text-brand-text text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="(512) 555-0000"
                      className="font-body text-brand-text text-sm border border-brand-primary/15 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 bg-brand-background"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-body text-brand-text text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="font-body text-brand-text text-sm border border-brand-primary/15 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 bg-brand-background"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="font-body text-brand-text text-sm font-medium">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="font-body text-brand-text text-sm border border-brand-primary/15 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 bg-brand-background"
                  >
                    <option value="">Select a service...</option>
                    <option value="lawn-care">Lawn Care &amp; Mowing</option>
                    <option value="landscape-design">Landscape Design &amp; Installation</option>
                    <option value="hardscaping">Hardscaping &amp; Patios</option>
                    <option value="irrigation">Irrigation &amp; Sprinkler Systems</option>
                    <option value="tree-shrub">Tree &amp; Shrub Care</option>
                    <option value="seasonal-cleanup">Seasonal Cleanups</option>
                    <option value="other">Not Sure Yet</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-body text-brand-text text-sm font-medium">
                    Tell Us About Your Yard
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your project, yard size, goals, or any questions you have..."
                    className="font-body text-brand-text text-sm border border-brand-primary/15 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 bg-brand-background resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 disabled:opacity-70 text-white font-body font-semibold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-brand-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={17} />
                      Contact Us
                    </>
                  )}
                </button>
                <p className="font-body text-brand-secondary text-xs text-center">
                  We respond within one business day. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
