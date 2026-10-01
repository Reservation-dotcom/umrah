"use client";

import React from "react";
import PackageCard from "../ui/PackageCard";
import { packages3Star, packages4Star, packages5Star } from "@/data/packages";

export default function PackagesSection() {
  const scrollToHero = () => {
    const hero = document.getElementById("hero-section");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-15 bg-[#fbf8f1] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-left mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#c9a24b] block mb-2">
            FEATURED UMRAH PACKAGES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-[#1c2520] tracking-tight">
            Pick a Tier. We <span className="italic font-normal text-[#c9a24b]">Handle Everything.</span>
          </h2>
          <p className="text-stone-600 text-sm mt-2 max-w-3xl">
            All packages include return flights, hotels near the Haram, Umrah visa, and full transport — no add-ons later.
          </p>
        </div>

        {/* --- 3 STAR PACKAGES --- */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#1c2520]">
            3 Star Umrah <span className="italic font-normal text-[#0e5c4a]">Packages</span>
          </h3>

          {/* Grid layout: 3 cards at xl & lg, 2 cards at md & sm, 1 card at xsm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {packages3Star.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* --- 4 STAR PACKAGES --- */}
        <div className="space-y-6 pt-7">
          <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#1c2520]">
            4 Star Umrah <span className="italic font-normal text-[#0e5c4a]">Packages</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {packages4Star.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* --- 5 STAR PACKAGES --- */}
        <div className="space-y-6 pt-7">
          <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#1c2520]">
            5 Star Umrah <span className="italic font-normal text-[#0e5c4a]">Packages</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {packages5Star.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* Get Free Quote CTA Button */}
        <div className="pt-10 text-center">
          <button
            onClick={scrollToHero}
            className="bg-[#0e5c4a] hover:bg-[#07382b] active:bg-[#05281e] text-white font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2 group cursor-pointer text-base"
          >
            <span>Get Free Quote</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
