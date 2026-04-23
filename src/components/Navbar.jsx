import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Test Ride", href: "#test-drive" },
  { name: "Why Orbit", href: "#why-orbit" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Partner", href: "/partner" },
  { name: "Feedback", href: "#feedback" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  /* ── Scroll visibility + Backdrop logic ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y < lastScrollY.current || y < 80);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Accessibility & UI Helpers ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  /* ── Navigation Logic ── */
  const scrollToHash = useCallback(
    (hash) => {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 180);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [location.pathname, navigate],
  );

  const handleNav = (e, href) => {
    if (href.startsWith("/")) return;
    e.preventDefault();
    closeMenu();
    setActiveHash(href);
    scrollToHash(href);
  };

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (href) => {
    if (href.startsWith("/")) return location.pathname === href;
    return activeHash === href;
  };

  /* ── Dynamic Classes ── */
  const linkCls = (href) =>
    `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive(href)
        ? "bg-[rgba(110,220,140,0.14)] text-[var(--color-brand)]"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`;

  const mobileLinkCls = (href) =>
    `flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
      isActive(href)
        ? "bg-[rgba(110,220,140,0.14)] text-[var(--color-brand)]"
        : "text-slate-200 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 px-4 py-3 sm:px-8 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "border-white/12 bg-[#09120ef0] shadow-[0_20px_60px_rgba(2,8,5,0.45)] backdrop-blur-2xl"
              : "border-white/8 bg-[#09120e99] shadow-[0_8px_32px_rgba(2,8,5,0.2)] backdrop-blur-xl"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* ── Updated Logo Section ── */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3 group"
              aria-label="Orbit – go to homepage"
            >
              <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--color-brand)]/30">
                <img
                  src="/OrbitLogo.png"
                  alt="Orbit Logo"
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
              <div className="hidden xsm:block">
                <span className="block font-['Space_Grotesk'] text-[15px] sm:text-[17px] font-bold tracking-[0.22em] text-white leading-none uppercase">
                  ORBIT
                </span>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-slate-400 mt-1">
                  Electric mobility
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-0.5 lg:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={linkCls(link.href)}
                  >
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
                ),
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => {
                  setActiveHash("#test-drive");
                  scrollToHash("#test-drive");
                }}
                className="orbit-button-primary"
              >
                Book a ride
                <FiArrowRight className="ml-2" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col lg:hidden"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-[#07100cee] backdrop-blur-2xl"
            onClick={closeMenu}
          />

          <div className="relative mt-[88px] mx-4 rounded-[2rem] border border-white/10 bg-[#0f1e17] p-4 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
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
                ),
              )}
            </nav>

            <div className="mt-5 border-t border-white/10 pt-5">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  setActiveHash("#test-drive");
                  scrollToHash("#test-drive");
                }}
                className="orbit-button-primary w-full py-4 justify-center"
              >
                Book a ride
                <FiArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
