import React from 'react';
import { FiArrowUpRight, FiAward, FiTool } from 'react-icons/fi';

const principles = [
  'Backed by Jindal Forgings manufacturing discipline since 1992',
  'Built for Indian commutes with practical comfort and serviceability',
  'Positioned as affordable electric mobility without a budget look',
];

export default function AboutUs() {
  return (
    <section id="about" className="section-shell-light flex min-h-screen items-center bg-[#f4f8f3]">
      <div className="content-wrap grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <div className="panel-surface-light overflow-hidden p-2.5">
            <img
              src={process.env.PUBLIC_URL + '/about.png'}
              alt="Orbit production and brand showcase"
              className="h-full min-h-[16rem] w-full rounded-[20px] object-cover sm:min-h-[18rem] sm:rounded-[24px]"
            />
          </div>
          <div className="absolute -bottom-5 right-2 max-w-[200px] rounded-2xl border border-emerald-100 bg-white p-3.5 shadow-[0_20px_48px_rgba(16,40,24,0.1)] sm:-bottom-6 sm:right-4 sm:max-w-xs sm:rounded-[28px] sm:p-4 sm:shadow-[0_24px_60px_rgba(16,40,24,0.12)]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-700 sm:text-xs">Brand foundation</p>
            <p className="mt-1.5 text-xs font-semibold text-slate-900 sm:mt-2 sm:text-sm">
              Industrial credibility meets a calmer, more premium story.
            </p>
          </div>
        </div>

        <div className="pt-4 lg:pt-0">
          <span className="eyebrow border-emerald-100 bg-emerald-50 text-emerald-700">About Orbit</span>
          <h2 className="section-title text-2xl text-slate-950 sm:text-4xl">
            A stronger story for a brand that already has the engineering depth.
          </h2>
          <p className="section-copy-light">
            Orbit Bikes already has the substance: manufacturing maturity, road-focused product
            decisions, and a value proposition that matters in India. The redesign sharpens how that
            story is told.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="panel-surface-light p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <FiAward size={18} />
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900">Manufacturing legacy</h3>
              <p className="mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-6">
                The site now highlights pedigree without feeling old-fashioned or overly technical.
              </p>
            </div>
            <div className="panel-surface-light p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <FiTool size={18} />
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900">Product trust</h3>
              <p className="mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-6">
                Better copy blocks and service signals make the brand feel dependable and modern.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-2.5">
            {principles.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[11px] leading-5 text-slate-700 sm:text-xs sm:leading-6"
              >
                <span className="mt-1 shrink-0 text-emerald-700">
                  <FiArrowUpRight size={14} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
