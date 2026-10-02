import React from "react";
import CityCard from "../ui/CityCard";
import { ukCities } from "@/data/cities";

export default function CitiesSection() {
  return (
    <section className="py-13 md:py-15 bg-[#f1f5f9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-2">
            TRAVEL FROM YOUR CITY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Departing From Major <span className="italic font-normal text-[#D4AF37]">UK Locations</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Non-stop & connecting routes with Saudia, Emirates, Qatar, Turkish & British Airways.
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
