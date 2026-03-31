import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Test Ride', href: '#test-drive' },
  { name: 'Features', href: '#features' },
  { name: 'Lineup', href: '#lineup' },
];

const socialLinks = [
  { icon: <FaFacebookF size={14} />, href: 'https://www.facebook.com/' },
  { icon: <FaInstagram size={14} />, href: 'https://www.instagram.com/' },
  { icon: <FaYoutube size={14} />, href: 'https://www.youtube.com/' },
  { icon: <FaLinkedinIn size={14} />, href: 'https://www.linkedin.com/' },
];

export default function Footer() {
  return (
    <footer id="contact" className="section-shell border-t border-white/10 bg-[#07100c] pt-16">
      <div className="content-wrap">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="panel-surface p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand)]">Orbit electric mobility</p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold text-white">
              A stronger digital storefront for a brand that deserves a sharper first impression.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              This refresh gives Orbit a more premium tone, better structure, and a clearer path from
              first visit to test ride.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-200 hover:border-[var(--color-brand)] hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Quick links</p>
            <div className="mt-5 grid gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-200 transition duration-200 hover:border-[var(--color-brand)] hover:text-white"
                >
                  {link.name}
                  <FiArrowRight />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Contact</p>
            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 text-[var(--color-brand)]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="mt-1 text-[var(--color-brand)]" />
                <span>support@orbitebikes.in</span>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-[var(--color-brand)]" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-black/10 p-4">
              <p className="text-sm font-semibold text-white">Subscribe for launches and dealer updates</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input type="email" placeholder="Email address" className="orbit-input flex-1" />
                <button type="button" className="orbit-button-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Orbit eBikes. All rights reserved.</p>
          <p>Designed in React for a cleaner brand experience.</p>
        </div>
      </div>
    </footer>
  );
}
