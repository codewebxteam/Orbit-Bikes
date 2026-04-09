import React from 'react';
import { FiClock, FiCpu, FiDollarSign, FiMap, FiShield } from 'react-icons/fi';

const reasons = [
  {
    icon: <FiCpu size={19} />,
    title: 'Engineering-led confidence',
    desc: 'Sharper messaging now reflects the manufacturing rigor already behind the brand.',
  },
  {
    icon: <FiMap size={19} />,
    title: 'Built for Indian conditions',
    desc: 'The content now speaks directly to real commuting patterns and road realities.',
  },
  {
    icon: <FiDollarSign size={19} />,
    title: 'Value without looking entry-level',
    desc: 'We balance affordability with a more premium visual language and tighter layouts.',
  },
  {
    icon: <FiShield size={19} />,
    title: 'Trust at first glance',
    desc: 'Better hierarchy and proof points create stronger credibility before the first click.',
  },
  {
    icon: <FiClock size={19} />,
    title: 'Faster comprehension',
    desc: 'Visitors can now understand why Orbit matters without reading long, repetitive paragraphs.',
  },
];

export default function WhyOrbit() {
  return (
    <section id="why-orbit" className="section-shell-light flex min-h-screen items-center bg-[#f4f8f3]">
      <div className="content-wrap">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow border-emerald-100 bg-emerald-50 text-emerald-700">Why Orbit works</span>
            <h2 className="section-title text-slate-950 sm:text-3xl">
              The redesign gives the brand a more composed and modern decision-making journey.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Instead of flat cards and generic headings, we explain Orbit with clearer
            value framing and a visual style that feels premium.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="panel-surface-light flex h-full flex-col p-5 sm:p-4"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  {reason.icon}
                </span>
                <span className="text-xs font-bold text-emerald-700/40 tracking-widest uppercase">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-[15px] font-bold text-slate-900 sm:text-base">{reason.title}</h3>
              <p className="mt-2 text-[11px] leading-5 text-slate-600 sm:text-[12px] sm:leading-6">{reason.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
