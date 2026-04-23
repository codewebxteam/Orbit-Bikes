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

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Hello Orbit eBikes! 🛵

I would like to book a test ride.

*Name:* ${form.name}
*Phone:* ${form.phone}
*City:* ${form.city}
*Date:* ${form.date}

Please confirm my test ride slot. Thank you!`;
    window.open(`https://wa.me/919458502838?text=${encodeURIComponent(message)}`, '_blank');
    setForm({ name: '', phone: '', city: '', date: '' });
  };

  return (
    <section id="test-drive" className="section-shell flex min-h-screen items-center">
      <div className="content-wrap">
        <div className="panel-surface overflow-hidden px-4 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="eyebrow">
                <FiCalendar />
                Test ride conversion
              </span>
              <h2 className="section-title">
                Make the booking experience feel premium and simple.
              </h2>
              <p className="section-copy">
                This section now works like a proper sales assist: polished form styling and a clearer promise of what happens next.
              </p>

              <div className="mt-8 grid gap-4">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 sm:p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(110,220,140,0.14)] text-[var(--color-brand)] sm:h-11 sm:w-11">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-white sm:text-base">{item.title}</h3>
                      <p className="mt-1 text-[11px] leading-5 text-slate-300 sm:text-xs sm:leading-6">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400 sm:text-xs">Reserve your experience</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Book a test ride</h3>
              <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                Share your details and preferred date. We'll reach out to confirm your slot.
              </p>

              <div className="mt-8 grid gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                  placeholder="Full name"
                  required
                  className="orbit-input py-4 text-[15px]"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                  placeholder="Phone number"
                  required
                  className="orbit-input py-4 text-[15px]"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="city"
                    value={form.city}
                    onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                    placeholder="City"
                    required
                    className="orbit-input py-4 text-[15px]"
                  />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
                    required
                    className="orbit-input py-4 text-[15px] [color-scheme:dark]"
                  />
                </div>
              </div>

              <button type="submit" className="orbit-button-primary mt-6 w-full py-4 text-base font-bold">
                Confirm test ride
              </button>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-[11px] text-slate-300 sm:text-xs">
                <FiCheckCircle className="shrink-0 text-[var(--color-brand)]" />
                <span>Designed for immediate trust and conversion.</span>
              </div>

              <div className="mt-6 grid gap-2">
                <a href="tel:9458502838" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300 transition hover:border-[var(--color-brand)] hover:text-white">
                  <FiPhoneCall className="shrink-0 text-[var(--color-brand)]" />
                  <span>+91 94585 02838 / 9151770133 / 8182002200</span>
                </a>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
                  <FiMapPin className="mt-0.5 shrink-0 text-[var(--color-brand)]" />
                  <span>G-1/700–701, Road No. 22, Phase II, RIICO Industrial Area, Bhiwadi, Rajasthan – 301001</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
