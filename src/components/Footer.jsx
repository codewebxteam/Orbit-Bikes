import React from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

// ── EmailJS config ──────────────────────────────────────────
const EJS_SERVICE = 'YOUR_SERVICE_ID';      // replace
const EJS_ADMIN_TPL = 'YOUR_ADMIN_TEMPLATE';  // replace
const EJS_USER_TPL = 'YOUR_USER_TEMPLATE';   // replace
const EJS_PUBLIC = 'YOUR_PUBLIC_KEY';       // replace
const ADMIN_EMAIL = 'YOUR_ADMIN_EMAIL';
// ────────────────────────────────────────────────────────────

const links = [
  { name: 'About',           href: '#about',       isHash: true },
  { name: 'Test Ride',       href: '#test-drive',  isHash: true },
  { name: 'Features',        href: '#features',    isHash: true },
  { name: 'Products',        href: '/products',    isHash: false },
  { name: 'Partner With Us', href: '/partner',     isHash: false },
  { name: 'Gallery',         href: '/gallery',     isHash: false },
];

const socialLinks = [
  {
    icon: <FaFacebookF size={14} />,
    href: "https://www.facebook.com/orbitelectricbikes",
  },
  {
    icon: <FaInstagram size={14} />,
    href: "https://www.instagram.com/orbitelectricbikes",
  },
];

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | sending | done | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // 1. Notify admin
      await emailjs.send(EJS_SERVICE, EJS_ADMIN_TPL, {
        subscriber_email: email,
        to_email: ADMIN_EMAIL,
      }, EJS_PUBLIC);

      // 2. Congratulation mail to subscriber
      await emailjs.send(EJS_SERVICE, EJS_USER_TPL, {
        to_email: email,
        to_name: email.split('@')[0],
      }, EJS_PUBLIC);

      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };
  return (
    <footer
      id="contact"
      className="section-shell border-t border-white/10 bg-[#07100c] pb-10"
    >
      <div className="content-wrap">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.8fr_1.1fr]">
          <div className="panel-surface flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-brand)] sm:text-xs">
                Orbit electric mobility
              </p>
              <h2 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
                A stronger digital storefront for a brand that deserves a
                sharper first impression.
              </h2>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                This refresh gives Orbit a more premium tone, better structure,
                and a clearer path from first visit to test ride.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-[var(--color-brand)] hover:bg-[rgba(110,220,140,0.1)] hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="panel-surface flex-1 p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 sm:text-xs">
                Navigation
              </p>
              <div className="mt-6 grid gap-2.5">
                {links.map((link) =>
                  link.isHash ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-5 py-3 text-sm text-slate-400 transition-all duration-300 hover:border-[var(--color-brand)]/30 hover:bg-white/[0.06] hover:text-white"
                    >
                      {link.name}
                      <FiArrowRight
                        className="opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--color-brand)]"
                        size={14}
                      />
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-5 py-3 text-sm text-slate-400 transition-all duration-300 hover:border-[var(--color-brand)]/30 hover:bg-white/[0.06] hover:text-white"
                    >
                      {link.name}
                      <FiArrowRight
                        className="opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--color-brand)]"
                        size={14}
                      />
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="panel-surface p-6 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 sm:text-xs">
              Get in touch
            </p>
            <div className="mt-6 grid gap-5 text-sm">
              <div className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[var(--color-brand)] transition-colors group-hover:bg-[rgba(110,220,140,0.15)]">
                  <FiPhone size={16} />
                </div>
                <a
                  href="tel:9458502838"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  +91 94585 02838 / 9151770133 / 8182002200
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[var(--color-brand)] transition-colors group-hover:bg-[rgba(110,220,140,0.15)]">
                  <FiMail size={16} />
                </div>
                <a
                  href="mailto:support@orbitebikes.in"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  support@orbitebikes.in
                </a>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[var(--color-brand)] transition-colors group-hover:bg-[rgba(110,220,140,0.15)]">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <p className="font-bold text-slate-200">Orbit eBikes</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-400 line-clamp-2">
                    G-1/700–701, Road No. 22, Phase II, RIICO Industrial Area,
                    Bhiwadi, Rajasthan – 301001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/5 bg-white/[0.03] p-5">
              <p className="text-sm font-bold text-white">
                Subscribe to updates
              </p>
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="orbit-input border-white/5 bg-white/5 focus:bg-white/10"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="orbit-button-primary h-[44px] px-6 font-bold uppercase tracking-wider text-[11px]"
                >
                  {status === "sending" ? "..." : "Join"}
                </button>
              </form>
              {status === "done" && (
                <p className="mt-3 text-[11px] text-emerald-400 flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-current" /> Success!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 sm:flex-row">
          <div className="flex items-center gap-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
              © 2026 Orbit Electric Mobility
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Bhiwadi, Rajasthan
            </p>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 hidden sm:block">
              Made With ❤️ by{" "}
              <a href="https://codewebx.in" target="_blank" rel="noreferrer">
                CodeWebX
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
