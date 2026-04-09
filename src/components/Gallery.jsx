import React, { useState, useEffect, useCallback } from 'react';
import {
  FiChevronLeft, FiChevronRight, FiX,
  FiGrid, FiList, FiZoomIn,
} from 'react-icons/fi';

const base = 'https://www.orbitebikes.in/auth/upload/Orbit%20Electric/';

const photos = [
  { file: 'b60c6853-e26a-4716-8513-1d7bf6caa010.jpeg', label: 'Street ready', tag: 'Urban' },
  { file: '7dc06685-2d46-47a0-888c-a8b44b777422.jpeg', label: 'Clean lines', tag: 'Design' },
  { file: 'b1adef08-b81e-4b1f-a8f9-fab4ed7b85af.jpeg', label: 'Night mode', tag: 'Lifestyle' },
  { file: 'bdc41ada-808a-42e1-9e8f-65bbe2fd49b9.jpeg', label: 'Detail shot', tag: 'Design' },
  { file: '26dedc2a-2b1a-47ee-875a-c12b24a96f00.jpeg', label: 'City commute', tag: 'Urban' },
  { file: 'cc2614cd-29ce-43c3-bb5a-77d3bf739b59.jpeg', label: 'Power on', tag: 'Lifestyle' },
  { file: 'ad358691-1164-46be-a893-0d0b9dabde7b.jpeg', label: 'Studio frame', tag: 'Design' },
  { file: 'aeb7edd0-ddde-49ce-95a7-8f2af9cd179f.jpeg', label: 'Motion blur', tag: 'Urban' },
  { file: '9701b527-09d4-43ad-8cd5-24dacf6d95de.jpeg', label: 'Prime angle', tag: 'Design' },
  { file: 'bd48fb67-208e-47f4-a419-ba4a10cfbfe2.jpeg', label: 'Green energy', tag: 'Lifestyle' },
  { file: 'ac70ae3b-cd43-4882-b24b-f5e980556473.jpeg', label: 'Side profile', tag: 'Design' },
  { file: 'aa0904a6-dc53-40b4-aa44-fb96df0a43c5.jpeg', label: 'City glow', tag: 'Urban' },
  { file: 'c58c45a1-dd70-4d98-a4f0-beeea33d1abe.jpeg', label: 'Full throttle', tag: 'Lifestyle' },
  { file: 'be74fb44-0efe-4dd2-acbf-a46cbdd414be.jpeg', label: 'Future forward', tag: 'Design' },
  { file: '6d3ba3e1-525b-41d3-ab4b-ac6f5c09a954.jpeg', label: 'Orbit iconic', tag: 'Urban' },
];

const TAGS = ['All', 'Urban', 'Design', 'Lifestyle'];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTag, setActiveTag] = useState('All');
  const [layout, setLayout] = useState('grid'); // 'grid' | 'masonry'
  const [loaded, setLoaded] = useState({});

  const filtered = activeTag === 'All'
    ? photos
    : photos.filter((p) => p.tag === activeTag);

  /* ── lightbox keyboard nav ── */
  const handleKey = useCallback((e) => {
    if (activeIndex === null) return;
    if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % filtered.length);
    if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
    if (e.key === 'Escape') setActiveIndex(null);
  }, [activeIndex, filtered.length]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  /* ── lock scroll when lightbox open ── */
  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeIndex]);

  const markLoaded = (idx) => setLoaded((prev) => ({ ...prev, [idx]: true }));

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  };
  const showNext = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i + 1) % filtered.length);
  };

  return (
    <section id="gallery" className="section-shell gallery-bg">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[10%] h-64 w-64 rounded-full bg-[rgba(110,220,140,0.08)] blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-[-4%] bottom-[15%] h-64 w-64 rounded-full bg-[rgba(217,255,122,0.06)] blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="content-wrap">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] inline-block" />
              Gallery
            </span>
            <h2 className="section-title">
              Orbit in every frame.
            </h2>
            <p className="section-copy">
              A visual journey through design, motion, and urban energy.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mr-1 hidden sm:inline">Layout</span>
            {[
              { id: 'grid', Icon: FiGrid },
              { id: 'masonry', Icon: FiList },
            ].map(({ id, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLayout(id)}
                aria-label={`${id} view`}
                className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-300 ${layout === id
                    ? 'border-[var(--color-brand)] bg-[rgba(110,220,140,0.12)] text-[var(--color-brand)]'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:text-white sm:h-9 sm:w-9'
                  }`}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => { setActiveTag(tag); setActiveIndex(null); }}
              className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-xs ${activeTag === tag
                  ? 'border-[var(--color-brand)] bg-[rgba(110,220,140,0.16)] text-[var(--color-brand)] shadow-[0_4px_16px_rgba(110,220,140,0.15)]'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/30 hover:text-white'
                }`}
            >
              {tag}
              {tag !== 'All' && (
                <span className="ml-2 font-medium opacity-30">
                  {photos.filter((p) => p.tag === tag).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div
          className={`mt-8 gap-4 sm:mt-10 ${layout === 'masonry'
              ? 'columns-1 sm:columns-2 xl:columns-3'
              : 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
            }`}
        >
          {filtered.map((photo, idx) => (
            <GalleryCard
              key={photo.file}
              photo={photo}
              idx={idx}
              isLoaded={!!loaded[idx]}
              onLoad={() => markLoaded(idx)}
              onClick={() => setActiveIndex(idx)}
              layout={layout}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-20 flex flex-col items-center gap-4 text-center">
            <div className="h-14 w-14 rounded-[2rem] border border-white/10 bg-white/5 flex items-center justify-center text-slate-500">
              <FiX size={24} />
            </div>
            <p className="text-[13px] text-slate-500 uppercase tracking-widest">No photos found</p>
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <Lightbox
          photos={filtered}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
}

/* ─── Gallery card ───────────────────────────────────────── */
function GalleryCard({ photo, idx, isLoaded, onLoad, onClick, layout }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`gallery-card group relative overflow-hidden rounded-3xl border border-white/8 bg-white/5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_24px_56px_rgba(0,0,0,0.5)] ${layout === 'masonry' ? 'mb-4 block w-full' : ''
        }`}
    >
      {/* Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-[rgba(255,255,255,0.04)]" />
      )}

      <img
        src={`${base}${photo.file}`}
        alt={`${photo.label} – Orbit gallery`}
        loading="lazy"
        onLoad={onLoad}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${layout === 'masonry' ? 'h-auto' : 'h-60 sm:h-64'
          }`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06100c]/90 via-[#06100c]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-block rounded-full border border-[var(--color-brand)]/40 bg-[rgba(110,220,140,0.12)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.28em] text-[var(--color-brand)]">
          {photo.tag}
        </span>
        <p className="mt-1.5 text-sm font-bold text-white">{photo.label}</p>
      </div>

      {/* Zoom icon */}
      <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <FiZoomIn size={13} />
      </div>

      {/* Frame number badge */}
      <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] text-slate-300 backdrop-blur-sm">
        {String(idx + 1).padStart(2, '0')}
      </div>
    </button>
  );
}

/* ─── Lightbox ──────────────────────────────────────────── */
function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#03080599]/95 backdrop-blur-xl" />

      {/* Panel */}
      <div
        className="relative mx-4 w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm transition hover:bg-white/10"
        >
          <FiX size={18} />
        </button>

        {/* Counter */}
        <div className="absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm">
          {index + 1} / {photos.length}
        </div>

        {/* Image */}
        <img
          key={photo.file}
          src={`${base}${photo.file}`}
          alt={`${photo.label} – Orbit`}
          className="max-h-[80vh] w-full rounded-3xl object-contain"
          style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}
        />

        {/* Caption bar */}
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 backdrop-blur-sm">
          <div>
            <p className="text-sm font-semibold text-white">{photo.label}</p>
            <p className="mt-0.5 text-xs uppercase tracking-[0.24em] text-[var(--color-brand)]">
              {photo.tag}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <NavBtn onClick={onPrev} aria-label="Previous photo">
              <FiChevronLeft size={16} />
            </NavBtn>
            <NavBtn onClick={onNext} aria-label="Next photo">
              <FiChevronRight size={16} />
            </NavBtn>
          </div>
        </div>

        {/* Keyboard hint */}
        <p className="mt-3 text-center text-[11px] text-slate-500">
          Use ← → keys to navigate · Esc to close
        </p>
      </div>

      {/* Side arrows (desktop) */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 md:flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-sm transition hover:bg-white/10 hover:scale-110"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-sm transition hover:bg-white/10 hover:scale-110"
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
}

function NavBtn({ children, ...props }) {
  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 hover:border-[var(--color-brand)]"
      {...props}
    >
      {children}
    </button>
  );
}
