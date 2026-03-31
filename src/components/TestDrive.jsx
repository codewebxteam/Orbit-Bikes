import React, { useState } from 'react';
import { FiCalendar, FiCheckCircle, FiMapPin, FiPhoneCall } from 'react-icons/fi';

const benefits = [
  {
    icon: <FiMapPin size={18} />,
    title: 'Dealer-matched scheduling',
    desc: 'Visitors can request a ride near their city without leaving the page.',
  },
  {
    icon: <FiPhoneCall size={18} />,
    title: 'Quick call-back expectation',
    desc: 'The layout makes the next step feel immediate and trustworthy.',
  },
  {
    icon: <FiCalendar size={18} />,
    title: 'Cleaner capture flow',
    desc: 'A tighter form and better spacing remove friction from the conversion moment.',
  },
];

export default function TestDrive() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', phone: '', city: '', date: '' });
  };

  return (
    <section id="test-drive" className="section-shell">
      <div className="content-wrap">
        <div className="panel-surface overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="eyebrow">
                <FiCalendar />
                Test ride conversion
              </span>
              <h2 className="section-title max-w-2xl">
                Make the booking experience feel premium, simple, and ready to convert.
              </h2>
              <p className="section-copy">
                This section now works like a proper sales assist: strong reasons to book, polished
                form styling, and a clearer promise of what happens next once someone shows intent.
              </p>

              <div className="mt-8 grid gap-4">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(110,220,140,0.14)] text-[var(--color-brand)]">
                      {item.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Reserve your experience</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Book a test ride</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Share your details and preferred date. This demo keeps the interaction local while
                showing the final UX direction.
              </p>

              <div className="mt-8 grid gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                  placeholder="Full name"
                  required
                  className="orbit-input"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                  placeholder="Phone number"
                  required
                  className="orbit-input"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="city"
                    value={form.city}
                    onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                    placeholder="City"
                    required
                    className="orbit-input"
                  />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                    required
                    className="orbit-input [color-scheme:dark]"
                  />
                </div>
              </div>

              <button type="submit" className="orbit-button-primary mt-6 w-full">
                {submitted ? 'Request received' : 'Confirm test ride'}
              </button>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-slate-300">
                <FiCheckCircle className="text-[var(--color-brand)]" />
                <span>Designed to feel lightweight on mobile and strong on trust.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
