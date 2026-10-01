"use client";

import React, { useState } from "react";

export default function HajjPackageCard({ pkg }) {
  const { title, image } = pkg;

  const [imgSrc, setImgSrc] = useState(image);

  const fallbackImage =
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80";

  const handleEnquire = () => {
    const hero = document.getElementById("hajj-hero-section");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="aspect-[3/4] w-full overflow-hidden bg-stone-100">
        <img
          src={imgSrc}
          alt={title}
          onError={() => setImgSrc(fallbackImage)}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="space-y-3 p-3">
        <h3 className="min-h-7 text-center font-serif text-base font-bold leading-snug text-[#1c2520]">
          {title}
        </h3>

        <div className="grid grid-cols-2 gap-2">
          <a
            href="https://api.whatsapp.com/send?phone=442039700100"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-[#07382b] px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0e5c4a]"
          >
            <svg
              className="h-4 w-4 shrink-0 fill-current text-emerald-400"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.086z" />
            </svg>
            WhatsApp
          </a>

          <button
            onClick={handleEnquire}
            className="flex cursor-pointer items-center justify-center rounded-lg bg-[#c9a24b] px-3 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#b8912f]"
          >
            Enquire now
          </button>
        </div>
      </div>
    </div>
  );
}
