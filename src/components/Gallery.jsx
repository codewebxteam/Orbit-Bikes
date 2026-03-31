import React, { useState } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const base = 'https://www.orbitebikes.in/auth/upload/Orbit%20Electric/';
const photos = [
  'b60c6853-e26a-4716-8513-1d7bf6caa010.jpeg',
  '7dc06685-2d46-47a0-888c-a8b44b777422.jpeg',
  'b1adef08-b81e-4b1f-a8f9-fab4ed7b85af.jpeg',
  'bdc41ada-808a-42e1-9e8f-65bbe2fd49b9.jpeg',
  '26dedc2a-2b1a-47ee-875a-c12b24a96f00.jpeg',
  'cc2614cd-29ce-43c3-bb5a-77d3bf739b59.jpeg',
  'ad358691-1164-46be-a893-0d0b9dabde7b.jpeg',
  'aeb7edd0-ddde-49ce-95a7-8f2af9cd179f.jpeg',
  '9701b527-09d4-43ad-8cd5-24dacf6d95de.jpeg',
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const showPrevious = () => setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % photos.length);

  return (
    <section id="gallery" className="section-shell bg-[var(--color-surface-2)]">
      <div className="content-wrap">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Gallery</span>
            <h2 className="section-title">Brand imagery now sits inside a more cinematic and polished gallery flow.</h2>
          </div>
          <a
            href="https://www.orbitebikes.in/photo-gallery"
            target="_blank"
            rel="noreferrer"
            className="orbit-button-secondary w-fit"
          >
            Open full gallery
            <FiArrowRight />
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {photos.map((photo, index) => (
            <button
              key={photo}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 text-left"
            >
              <img
                src={`${base}${photo}`}
                alt={`Orbit gallery ${index + 1}`}
                loading="lazy"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06100c] via-[#06100c22] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Frame {index + 1}</p>
                <p className="mt-2 text-xl font-bold text-white">Orbit in motion</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(5,10,8,0.94)] p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white"
              aria-label="Close gallery"
            >
              <FiX size={20} />
            </button>

            <img
              src={`${base}${photos[activeIndex]}`}
              alt={`Orbit gallery preview ${activeIndex + 1}`}
              className="max-h-[82vh] w-full rounded-[30px] object-contain"
            />

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={showPrevious}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white"
              >
                <FiChevronLeft />
                Previous
              </button>
              <p className="text-sm text-slate-300">
                {activeIndex + 1} / {photos.length}
              </p>
              <button
                type="button"
                onClick={showNext}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white"
              >
                Next
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
