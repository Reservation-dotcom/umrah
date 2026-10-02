import React from "react";
import Link from "next/link";

export default function CityCard({ city }) {
  const { name, airports, price, slug } = city;

  return (
    <Link
      href={`/${slug}`}
      className="bg-white rounded-2xl p-4 border border-slate-200/70 shadow-xs hover:shadow-md hover:border-[#1E3A8A]/40 transition-all duration-200 flex items-center justify-between group cursor-pointer"
    >
      <div>
        <h5 className="font-bold text-base text-[#0f172a] group-hover:text-[#1E3A8A] transition-colors">
          {name}
        </h5>
        <p className="text-xs text-slate-500 mt-0.5">{airports}</p>
      </div>

      <div className="text-right">
        <span className="text-[#06142e] font-extrabold text-sm group-hover:scale-105 transition-transform inline-block">
          From £{price}
        </span>
      </div>
    </Link>
  );
}
