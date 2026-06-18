'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#feature' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-primary shadow-xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Evergreen Lawn & Landscape Logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-heading text-white font-semibold text-lg leading-tight">
                Evergreen
              </span>
              <span className="font-body text-white/70 text-xs tracking-widest uppercase">
                Lawn &amp; Landscape
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/85 hover:text-white font-body text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5125550147"
              className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-brand-accent/30"
            >
              <Phone size={15} />
              (512) 555-0147
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-white/10 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/85 hover:text-white font-body text-base py-3 px-2 border-b border-white/10 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5125550147"
              className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-body font-medium text-sm px-5 py-3 rounded-full mt-4 transition-all duration-200"
            >
              <Phone size={15} />
              (512) 555-0147
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
