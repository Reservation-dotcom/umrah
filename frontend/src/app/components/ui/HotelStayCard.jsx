"use client";

import React, { useState } from "react";
import { getStarString } from "@/data/packages";

export default function HotelStayCard({ hotel }) {
  const [index, setIndex] = useState(0);
  const images = hotel.images?.length ? hotel.images : [];
  const current = images[index] || "";

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <article className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
        <div className="relative h-52 md:h-auto min-h-[220px] bg-slate-100">
          {current && (
            <img src={current} alt={hotel.name} className="w-full h-full object-cover" />
          )}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="bg-[#06142e]/95 text-[#D4AF37] text-[11px] font-bold px-2.5 py-1 rounded-full">
              {hotel.city} · {hotel.nights} Nights
            </span>
            <span className="bg-[#D4AF37] text-slate-950 text-[10px] font-bold px-2 py-1 rounded-full tracking-widest">
              {getStarString(hotel.starCount)}
            </span>
          </div>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-[#06142e] font-bold shadow-sm"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-[#06142e] font-bold shadow-sm"
              >
                ›
              </button>
            </>
          )}
        </div>

        <div className="p-5 sm:p-6 space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#0f172a]">
            {hotel.name}
          </h3>
          <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-[#1E3A8A] border border-blue-200/70 px-2.5 py-1 rounded-full">
              🚶 {hotel.distance}
            </span>
            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200/70 px-2.5 py-1 rounded-full">
              📍 {hotel.locationNote}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((amenity) => (
              <span
                key={amenity}
                className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg"
              >
                {amenity}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500 pt-1">
            {getStarString(hotel.starCount)} {hotel.reviewNote}
          </p>
        </div>
      </div>
    </article>
  );
}
