import React from "react";
import CityCard from "../ui/CityCard";
import { ukCities } from "@/data/cities";

export default function CitiesSection() {
  return (
    <section className="py-13 md:py-15 bg-[#f7f3ea] border-t border-amber-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#c9a24b] block mb-2">
            DEPART FROM YOUR CITY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#1c2520] tracking-tight">
            Flying From All Major <span className="italic font-normal text-[#c9a24b]">UK Cities.</span>
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Direct & connecting flights via Saudia, Emirates, Qatar, Turkish & British Airways.
          </p>
        </div>

        {/* 8 Cities Grid (4 per row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ukCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}
