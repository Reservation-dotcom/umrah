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
      <h3 className="font-serif text-2xl font-extrabold text-[#0f172a]">Relevant Packages</h3>
      {packages.map((pkg) => (
        <RelevantPackageCard key={pkg.id} pkg={pkg} />
      ))}
      <button
        onClick={scrollToHero}
        className="w-full mt-2 bg-[#06142e] hover:bg-[#0b2545] active:bg-[#030d1b] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer text-sm"
      >
        <span>Request Quote</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </aside>
  );
}
