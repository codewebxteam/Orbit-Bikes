import React, { useState } from 'react';
import {
  FiArrowRight,
  FiCheckCircle,
  FiTruck,
  FiTool,
  FiZap,
  FiUsers,
  FiBarChart2,
  FiShield,
  FiSend,
} from 'react-icons/fi';

/* ── Partnership types ─────────────────────────────────── */
const partnerTypes = [
  {
    icon: <FiTruck size={24} />,
    title: "Fleet Rental Partner",
    desc: "Team up with Orbit to offer electric scooters on rent to your customers, employees, or fleet networks. We provide the vehicles, you grow the business.",
  },
  {
    icon: <FiTool size={24} />,
    title: "Authorised Dealer",
    desc: "Become an official Orbit dealer and sell our manufactured EV lineup. Get exclusive territory rights, margins, and full brand support.",
  },
  {
    icon: <FiZap size={24} />,
    title: "Charging Network Partner",
    desc: "Set up EV charging stations powered by Orbit partnership program at your premises — malls, offices, parking lots, and more.",
  },
  {
    icon: <FiUsers size={24} />,
    title: "Corporate Mobility Partner",
    desc: "Integrate Orbit electric scooters into your employee transport or last-mile delivery operations with customised leasing agreements.",
  },
];

/* ── Why partner benefits ──────────────────────────────── */
const benefits = [
  { icon: <FiBarChart2 size={18} />, text: "High-margin revenue model with recurring rental income" },
  { icon: <FiShield size={18} />, text: "End-to-end support — marketing, training & after-sales" },
  { icon: <FiCheckCircle size={18} />, text: "Exclusive territory rights for dealers and rental partners" },
  { icon: <FiZap size={18} />, text: "Access to Orbit's full EV product range and spare-parts ecosystem" },
  { icon: <FiUsers size={18} />, text: "Co-branding opportunities and joint go-to-market campaigns" },
  { icon: <FiTruck size={18} />, text: "Flexible fleet plans tailored to your business size and model" },
];

/* ── Stats ─────────────────────────────────────────────── */
const stats = [
  { value: "10+", label: "EV Models in Lineup" },
  { value: "5K+", label: "Scooters on Road" },
  { value: "50+", label: "Dealer Networks" },
  { value: "3+", label: "Years Manufacturing" },
];

/* ── Form default ──────────────────────────────────────── */
const defaultForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  partnerType: "",
  city: "",
  message: "",
};

export default function PartnerWithUs() {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(defaultForm);
    }, 4000);
  };

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="section-shell relative flex min-h-[50vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--color-brand)]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[350px] w-[450px] rounded-full bg-[var(--color-brand-warm)]/6 blur-[80px]" />
        </div>
        <div className="content-wrap py-10">
          <span className="eyebrow">Partnership Programme</span>
          <h1 className="section-title mt-4 max-w-3xl">
            Grow with Orbit.{' '}
            <span className="text-[var(--color-brand)]">Scale the EV revolution together.</span>
          </h1>
          <p className="section-copy max-w-2xl">
            Orbit eBikes is a leading electric vehicle manufacturer and rental company based in
            Rajasthan. We are looking for passionate partners — dealers, fleet operators, corporates,
            and entrepreneurs — to expand India's green mobility network.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#partner-form" className="orbit-button-primary">
              Apply to Partner <FiArrowRight />
            </a>
            <a href="#partner-types" className="orbit-button-secondary">
              Explore Opportunities <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────── */}
      <section className="section-shell-light border-y border-slate-100 bg-white py-10">
        <div className="content-wrap">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-black text-slate-950 sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the company ─────────────────────────────── */}
      <section className="section-shell">
        <div className="content-wrap">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="eyebrow">About Orbit eBikes</span>
              <h2 className="section-title mt-4 max-w-xl">
                A manufacturer and rental brand powering India's EV future.
              </h2>
              <p className="section-copy">
                Founded in Bhiwadi, Rajasthan, Orbit eBikes designs, manufactures, and distributes
                high-quality electric scooters built for Indian roads. We also operate a growing
                vehicle rental business — giving businesses and individuals access to clean mobility
                without the upfront cost of ownership.
              </p>
              <p className="section-copy">
                Our dual model — manufacturing and rentals — means our partners benefit from two
                revenue streams: selling Orbit EVs and renting them. Whether you are looking to set
                up a dealership, integrate EVs into your fleet, or simply expand into the growing
                EV rental space, Orbit gives you the vehicles, support, and brand to succeed.
              </p>
            </div>

            {/* Benefit chips */}
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.text}
                  className="group flex items-start gap-4 rounded-[20px] border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-[var(--color-brand)]/30 hover:bg-white/[0.08]"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[rgba(110,220,140,0.12)] text-[var(--color-brand)]">
                    {b.icon}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Partnership types ──────────────────────────────── */}
      <section id="partner-types" className="section-shell-light bg-[#f4f8f3] py-16">
        <div className="content-wrap">
          <div className="max-w-3xl">
            <span className="eyebrow border-emerald-100 bg-emerald-50 text-emerald-700">
              Partnership Opportunities
            </span>
            <h2 className="section-title mt-4 text-2xl text-slate-950 sm:text-3xl">
              Multiple ways to partner with Orbit.
            </h2>
            <p className="section-copy-light">
              Whether you want to rent, sell, or integrate Orbit EVs — we have a partnership model
              built for your business.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {partnerTypes.map((pt) => (
              <article
                key={pt.title}
                className="panel-surface-light group p-6 transition-all duration-300 hover:shadow-[0_28px_60px_rgba(15,35,22,0.14)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                  {pt.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{pt.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{pt.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner form ──────────────────────────────────── */}
      <section id="partner-form" className="section-shell py-20">
        <div className="content-wrap">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left: CTA text */}
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">Apply Now</span>
              <h2 className="section-title mt-4 max-w-md">
                Ready to partner? Let us start a conversation.
              </h2>
              <p className="section-copy">
                Fill in the form and our partnership team will reach out within 2 business days.
                No commitment required — just a conversation.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(110,220,140,0.12)] text-[var(--color-brand)]">
                    <FiSend size={16} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email us</p>
                    <a href="mailto:support@orbitebikes.in" className="text-sm text-white hover:text-[var(--color-brand)] transition-colors">
                      support@orbitebikes.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(110,220,140,0.12)] text-[var(--color-brand)]">
                    <FiUsers size={16} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Call us</p>
                    <a href="tel:9458502838" className="text-sm text-white hover:text-[var(--color-brand)] transition-colors">
                      +91 94585 02838
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="panel-surface p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand)]">
                Partnership Enquiry
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">Tell us about yourself</h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-400">Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="orbit-input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-400">Company / Business *</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="Company or business name"
                    className="orbit-input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-400">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="orbit-input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-400">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="orbit-input"
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-slate-400">City / Location *</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Your city or region"
                    className="orbit-input"
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-slate-400">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your business or what you are looking for..."
                    className="orbit-input resize-none"
                  />
                </div>
              </div>

              <button type="submit" className="orbit-button-primary mt-6 w-full">
                {submitted ? (
                  <>
                    <FiCheckCircle size={16} /> Enquiry Sent! We will reach out soon.
                  </>
                ) : (
                  <>
                    Submit Partnership Enquiry <FiArrowRight />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-[11px] text-slate-500">
                By submitting, you agree to be contacted by our partnership team. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
