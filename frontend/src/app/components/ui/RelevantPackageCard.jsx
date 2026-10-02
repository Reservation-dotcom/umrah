"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getStarString } from "@/data/packages";

export default function RelevantPackageCard({ pkg }) {
  const [imgSrc, setImgSrc] = useState(pkg.image);
  const fallbackImage =
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80";

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs">
      <div className="relative h-40 w-full overflow-hidden bg-slate-100">
        <img
          src={imgSrc}
          alt={pkg.title}
          onError={() => setImgSrc(fallbackImage)}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-[#D4AF37] text-slate-950 font-bold text-[10px] px-2.5 py-1 rounded-full tracking-widest">
          {getStarString(pkg.starCount)}
        </span>
      </div>

      <div className="p-4 space-y-3">
        <h4 className="font-serif text-base font-bold text-[#0f172a] leading-snug">{pkg.title}</h4>
        <p className="text-[11px] text-slate-500">
          ★ {pkg.rating} ({pkg.reviewCount} Reviews) · {pkg.makkahNights} · {pkg.madinahNights}
        </p>
        <div className="flex items-end justify-between pt-1">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              STARTING FROM
            </span>
            <span className="font-serif text-xl font-extrabold text-[#06142e]">
              £{pkg.price}
              <span className="text-xs text-slate-500 font-medium ml-1">pp</span>
            </span>
          </div>
          <Link
            href={`/${pkg.slug}`}
            className="text-[#1E3A8A] font-bold text-sm hover:text-[#06142e]"
          >
            View →
          </Link>
        </div>
      </div>
    </article>
  );
}
