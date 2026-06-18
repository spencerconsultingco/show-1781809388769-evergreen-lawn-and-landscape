import Image from 'next/image';
import { Phone, Mail, Clock, TreePine } from 'lucide-react';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#feature' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Lawn Care & Mowing',
  'Landscape Design & Installation',
  'Hardscaping & Patios',
  'Irrigation & Sprinkler Systems',
  'Tree & Shrub Care',
  'Seasonal Cleanups',
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Evergreen Lawn & Landscape Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-white font-semibold text-base leading-tight">
                  Evergreen
                </span>
                <span className="font-body text-white/60 text-xs tracking-widest uppercase">
                  Lawn &amp; Landscape
                </span>
              </div>
            </a>
            <p className="font-body text-white/65 text-sm leading-relaxed mb-6">
              Full-service lawn care and landscape design for Austin homeowners.
              Meticulous crews, dependable scheduling, guaranteed results.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:5125550147"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 font-body text-sm"
              >
                <Phone size={14} className="text-brand-accent" />
                (512) 555-0147
              </a>
              <div className="flex items-center gap-2 text-white/70 font-body text-sm">
                <Clock size={14} className="text-brand-accent" />
                Mon to Sat, 8am to 6pm
              </div>
              <div className="flex items-center gap-2 text-white/70 font-body text-sm">
                <TreePine size={14} className="text-brand-accent" />
                Austin and the Hill Country
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/65 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-5">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-body text-white/65 hover:text-white text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-5">Start Your Project</h4>
            <p className="font-body text-white/65 text-sm leading-relaxed mb-5">
              Ready for a yard you are proud to come home to? Reach out today for a free on-site consultation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-semibold text-sm px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/45 text-xs">
            &copy; {new Date().getFullYear()} Evergreen Lawn &amp; Landscape. All rights reserved. Austin, TX.
          </p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-white/45 hover:text-white/70 text-xs transition-colors duration-200"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
