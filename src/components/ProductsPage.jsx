import React from 'react';
import ProductFeatures from './ProductFeatures';
import EScooters from './EScooters';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function ProductsPage() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Page Hero */}
      <section className="section-shell relative flex min-h-[42vh] items-center overflow-hidden">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--color-brand)]/10 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-[var(--color-brand-warm)]/6 blur-[80px]" />
        </div>

        <div className="content-wrap py-8">
          <span className="eyebrow">Our Lineup</span>
          <h1 className="section-title mt-4 max-w-3xl">
            Engineered for the Indian road.{' '}
            <span className="text-[var(--color-brand)]">Built for tomorrow.</span>
          </h1>
          <p className="section-copy max-w-2xl">
            Explore the full range of Orbit electric scooters — from compact daily commuters to bold
            flagship models. Every vehicle is designed to deliver a smarter, greener ride.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/#test-drive')}
              className="orbit-button-primary"
            >
              Book a Test Ride <FiArrowRight />
            </button>
            <button
              onClick={() => navigate('/#contact')}
              className="orbit-button-secondary"
            >
              Contact Us <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Reuse existing sections */}
      <ProductFeatures />
      <EScooters />
    </div>
  );
}
