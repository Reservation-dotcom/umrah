"use client";

import React, { useState } from "react";
import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";

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
          <span className="bg-[#06142e]/95 backdrop-blur-md text-[#D4AF37] font-bold text-xs px-3 py-1 rounded-full shadow-sm">
            {tag}
          </span>
          <span className="bg-[#D4AF37] text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-sm tracking-widest">
            {getStars(tag)}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title */}
          <h4 className="font-serif text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#1E3A8A] transition-colors">
            {title}
          </h4>

          {/* Nights Badges */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-50 text-[#0f172a] border border-blue-200/70 font-semibold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="text-sm">🕋</span> {makkahNights}
            </span>
            <span className="bg-blue-50 text-[#0f172a] border border-blue-200/70 font-semibold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="text-sm">🕌</span> {madinahNights}
            </span>
          </div>

          {/* Included Services Row */}
          <div className="grid grid-cols-4 gap-1.5 text-center">
            <span className="bg-sky-50 text-sky-900 text-[11px] font-medium py-1 px-1 rounded-md border border-sky-100">
              ✈️ Flights
            </span>
            <span className="bg-purple-50 text-purple-900 text-[11px] font-medium py-1 px-1 rounded-md border border-purple-100">
              🛂 Visa
            </span>
            <span className="bg-amber-50 text-amber-900 text-[11px] font-medium py-1 px-1 rounded-md border border-amber-100">
              🏨 Hotel
            </span>
            <span className="bg-blue-50 text-blue-900 text-[11px] font-medium py-1 px-1 rounded-md border border-blue-100">
              🚐 Transfers
            </span>
          </div>
        </div>

        {/* Price & Rating */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              STARTING FROM
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-extrabold text-[#06142e]">
                £{price}
              </span>
              <span className="text-xs text-slate-500 font-medium">pp</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-amber-700 font-semibold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
            <span>★</span>
            <span>{rating}</span>
            <span className="text-slate-400 font-normal">({reviewCount} Reviews)</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <a
            href="https://api.whatsapp.com/send?phone=447883408637"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            WhatsApp
          </a>

          <a
            href="tel:02039700013"
            className="border border-blue-200 bg-blue-50/60 hover:bg-blue-100/80 text-[#06142e] font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all"
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

          <Link
            href={`/${slug}#hero-section`}
            className="md:order-last bg-[#D4AF37] hover:bg-[#c59b27] text-slate-950 font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center transition-all shadow-xs"
          >
            Enquire
          </Link>

          <Link
            href={`/${slug}`}
            className="bg-[#06142e] hover:bg-[#0b2545] text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center transition-all shadow-xs"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
