import React from "react";
import { packageIncludes, packageGoodToKnow } from "@/data/package_includes";

function IncludeIcon({ type }) {
  const className = "w-7 h-7 text-[#0e5c4a]";
  if (type === "plane") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M2.5 19.5l7.5-3 3 7.5 2-4.5 4.5 2-7.5-15-9.5 13z"
        />
      </svg>
    );
  }
  if (type === "passport") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8.5 16.5c.8-1.2 2-1.8 3.5-1.8s2.7.6 3.5 1.8" />
      </svg>
    );
  }
  if (type === "bed") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3 18v-5a3 3 0 013-3h12a3 3 0 013 3v5M3 18h18M6 10V8a2 2 0 012-2h3"
        />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M3 13l2-5h10l4 5v6a1 1 0 01-1 1h-1a2 2 0 01-4 0H9a2 2 0 01-4 0H4a1 1 0 01-1-1v-6z"
      />
    </svg>
  );
}

export default function PackageIncludedSection({ nightsTotal }) {
  return (
    <div className="pt-10 space-y-6">
      <div>
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c9a24b] block mb-2">
          EVERYTHING HANDLED FOR YOU
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-[#1c2520] tracking-tight">
          What&apos;s Included In Our{" "}
          <span className="italic font-normal text-[#0e5c4a]">{nightsTotal} Nights</span> Umrah
          Package
        </h2>
        <p className="text-stone-600 text-sm mt-2">
          No add-ons, no upgrades pushed at checkout. The price you see is exactly what you pay.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {packageIncludes.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-stone-200/80 p-5 shadow-xs flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <IncludeIcon type={item.icon} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1c2520] mb-1">{item.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">{item.description}</p>
              {item.included && (
                <span className="inline-flex bg-[#c9a24b] text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  Included
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f4eee3] border border-amber-900/10 rounded-2xl p-5">
        <h4 className="font-bold text-sm text-[#1c2520] mb-3">Good to Know</h4>
        <ul className="space-y-2">
          {packageGoodToKnow.map((note) => (
            <li key={note} className="text-xs text-stone-600 flex items-start gap-2">
              <span className="text-[#c9a24b]">✦</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
