"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PackageCard({ pkg }) {
  const {
    title,
    tag,
    rating,
    reviewCount,
    price,
    makkahNights,
    madinahNights,
    image,
    slug,
  } = pkg;

  const [imgSrc, setImgSrc] = useState(image);

  // Star string generator
  const getStars = (categoryTag) => {
    if (categoryTag?.includes("3-Star")) return "★★★";
    if (categoryTag?.includes("4-Star")) return "★★★★";
    return "★★★★★";
  };

  const fallbackImage =
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/80 transition-all duration-300 flex flex-col justify-between group">
      {/* Top Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-stone-100">
        <img
          src={imgSrc}
          alt={title}
          onError={() => setImgSrc(fallbackImage)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <span className="bg-white/95 backdrop-blur-md text-[#0e5c4a] font-bold text-xs px-3 py-1 rounded-full shadow-sm">
            {tag}
          </span>
          <span className="bg-[#c9a24b] text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm tracking-widest">
            {getStars(tag)}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title */}
          <h4 className="font-serif text-xl font-bold text-[#1c2520] mb-3 group-hover:text-[#0e5c4a] transition-colors">
            {title}
          </h4>

          {/* Nights Badges */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-emerald-50 text-[#0e5c4a] border border-emerald-200/60 font-semibold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="text-sm">🕋</span> {makkahNights}
            </span>
            <span className="bg-emerald-50 text-[#0e5c4a] border border-emerald-200/60 font-semibold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="text-sm">🕌</span> {madinahNights}
            </span>
          </div>

          {/* Included Services Row */}
          <div className="grid grid-cols-4 gap-1.5 text-center">
            <span className="bg-sky-50 text-sky-800 text-[11px] font-medium py-1 px-1 rounded-md border border-sky-100">
              ✈️ Flights
            </span>
            <span className="bg-purple-50 text-purple-800 text-[11px] font-medium py-1 px-1 rounded-md border border-purple-100">
              🛂 Visa
            </span>
            <span className="bg-amber-50 text-amber-800 text-[11px] font-medium py-1 px-1 rounded-md border border-amber-100">
              🏨 Hotel
            </span>
            <span className="bg-teal-50 text-teal-800 text-[11px] font-medium py-1 px-1 rounded-md border border-teal-100">
              🚐 Transfers
            </span>
          </div>
        </div>

        {/* Price & Rating */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-bold">
              STARTING FROM
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-extrabold text-[#0e5c4a]">
                £{price}
              </span>
              <span className="text-xs text-stone-500 font-medium">pp</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-lg">
            <span>★</span>
            <span>{rating}</span>
            <span className="text-stone-400 font-normal">({reviewCount} Reviews)</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <a
            href="https://api.whatsapp.com/send?phone=442039700100"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#07382b] hover:bg-[#0e5c4a] text-white font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs"
          >
            <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.086z" />
            </svg>
            WhatsApp
          </a>

          <Link
            href={`/${slug}`}
            className="bg-[#00c853] hover:bg-[#00b048] text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center transition-all shadow-xs"
          >
            View Details
          </Link>
          <a
            href="tel:02039700100"
            className="col-span-2 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-[#0e5c4a] font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all"
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
