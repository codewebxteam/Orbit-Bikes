import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919458502838';
const WHATSAPP_MSG = encodeURIComponent('Hi Orbit eBikes! I am interested in learning more about your electric scooters.');

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sharedStyle = {
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? 'auto' : 'none',
    transform: visible ? 'translateY(0)' : 'translateY(12px)',
  };

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        style={{ ...sharedStyle, bottom: 'calc(5rem + var(--safe-bottom, 0px))' }}
        className="fixed right-[max(1.5rem,_var(--safe-right,_0px))] z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#25d366]/40 bg-[#25d366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(37,211,102,0.5)]"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Scroll-to-top button */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="scroll-top-btn"
        style={sharedStyle}
      >
        <FiArrowUp size={18} />
      </button>
    </>
  );
}
