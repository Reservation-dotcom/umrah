"use client";

import React from "react";
import RelevantPackageCard from "../ui/RelevantPackageCard";

export default function RelevantPackagesSidebar({ packages }) {
  const scrollToHero = () => {
    const hero = document.getElementById("hero-section");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <aside className="space-y-4">
      <h3 className="font-serif text-2xl font-extrabold text-[#1c2520]">Relevant Packages</h3>
      {packages.map((pkg) => (
        <RelevantPackageCard key={pkg.id} pkg={pkg} />
      ))}
      <button
        onClick={scrollToHero}
        className="w-full mt-2 bg-[#0e5c4a] hover:bg-[#07382b] active:bg-[#05281e] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer text-sm"
      >
        <span>Get Free Quote</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </aside>
  );
}
