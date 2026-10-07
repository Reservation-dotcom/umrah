"use client";

import React, { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function HajjPackageCard({ pkg }) {
  const { title, image } = pkg;

  const [imgSrc, setImgSrc] = useState(image);

  // const fallbackImage =
  //   "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80";

  const handleEnquire = () => {
    const hero = document.getElementById("hajj-hero-section");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="w-full overflow-hidden bg-stone-100">
        <img
          src={imgSrc}
          alt={title}
          
          className="block h-auto w-full"
        />
      </div>

      <div className="space-y-3 p-3">
        {/* <h3 className="min-h-7 text-center font-serif text-base font-bold leading-snug text-[#1c2520]">
          {title}
        </h3> */}

        <div className="grid grid-cols-2 gap-2">
          <a
            href="https://api.whatsapp.com/send?phone=447883408637"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-[#07382b] px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0e5c4a]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-400" />
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
