import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'About',      href: '#about' },
  { name: 'Test Ride',  href: '#test-drive' },
  { name: 'Why Orbit',  href: '#why-orbit' },
  { name: 'Products',     href: '#lineup' },
  { name: 'Gallery',    href: '/gallery' },
  { name: 'Feedback',   href: '#feedback' },
  { name: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const [scrolled, setScrolled]   = useState(false);
  const [visible, setVisible]     = useState(true);
  const lastScrollY               = useRef(0);
  const navigate                  = useNavigate();
  const location                  = useLocation();

  /* ── scroll visibility + backdrop ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y < lastScrollY.current || y < 80);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close menu on escape ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  /* ── lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── close mobile menu on route change ── */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  /* ── smooth-scroll helper (works from any page) ── */
  const scrollToHash = useCallback((hash) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for React to render the home page then scroll
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 180);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname, navigate]);

  const handleNav = (e, href) => {
    if (href.startsWith('/')) return;          // Let <Link> handle it
    e.preventDefault();
    closeMenu();
    setActiveHash(href);
    scrollToHash(href);
  };

  /* ── Logo click: always go to home top ── */
  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // else: Link's default navigation to "/" will handle it
  };

  const isActive = (href) => {
    if (href.startsWith('/')) return location.pathname === href;
    return activeHash === href;
  };

  const linkCls = (href) =>
    `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive(href)
        ? 'bg-[rgba(110,220,140,0.14)] text-[var(--color-brand)]'
        : 'text-slate-300 hover:bg-white/5 hover:text-white'
    }`;

  const mobileLinkCls = (href) =>
    `flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
      isActive(href)
        ? 'bg-[rgba(110,220,140,0.14)] text-[var(--color-brand)]'
        : 'text-slate-200 hover:bg-white/5 hover:text-white'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 px-4 py-3 sm:px-8 transition-all duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          className={`mx-auto max-w-6xl rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
            scrolled
              ? 'border-white/12 bg-[#09120ef0] shadow-[0_20px_60px_rgba(2,8,5,0.45)] backdrop-blur-2xl'
              : 'border-white/8 bg-[#09120e99] shadow-[0_8px_32px_rgba(2,8,5,0.2)] backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Brand / Logo */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3 group"
              aria-label="Orbit – go to homepage"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-brand)]/30 bg-[rgba(110,220,140,0.12)] text-xs font-black uppercase tracking-widest text-[var(--color-brand-warm)] transition-all duration-300 group-hover:bg-[rgba(110,220,140,0.22)] group-hover:scale-105">
                OR
              </span>
              <span>
                <span className="block font-['Space_Grotesk'] text-[17px] font-bold tracking-[0.22em] text-white leading-none">
                  ORBIT
                </span>
                <span className="block text-[10px] uppercase tracking-[0.32em] text-slate-400 mt-0.5">
                  Electric mobility
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.href.startsWith('/') ? (
                  <Link key={link.name} to={link.href} className={linkCls(link.href)}>
                    {link.name}
                    {isActive(link.href) && (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-[var(--color-brand)]" />
                    )}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className={linkCls(link.href)}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-[var(--color-brand)]" />
                    )}
                  </a>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => {
                  setActiveHash('#test-drive');
                  scrollToHash('#test-drive');
                }}
                className="orbit-button-primary"
              >
                Book a ride
                <FiArrowRight />
              </button>
            </div>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu – full-screen overlay outside header so it doesn't expand the pill */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col lg:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#07100cee] backdrop-blur-2xl"
            onClick={closeMenu}
          />

          {/* Drawer */}
          <div className="relative mt-20 mx-4 rounded-3xl border border-white/10 bg-[#0f1e17] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) =>
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMenu}
                    className={mobileLinkCls(link.href)}
                  >
                    <span>{link.name}</span>
                    <FiArrowRight size={14} className="opacity-40" />
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className={mobileLinkCls(link.href)}
                  >
                    <span>{link.name}</span>
                    <FiArrowRight size={14} className="opacity-40" />
                  </a>
                )
              )}
            </nav>

            <div className="mt-5 border-t border-white/10 pt-5">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  setActiveHash('#test-drive');
                  scrollToHash('#test-drive');
                }}
                className="orbit-button-primary w-full"
              >
                Book a ride
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
