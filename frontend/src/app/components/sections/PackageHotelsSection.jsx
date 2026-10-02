import React from "react";
import HotelStayCard from "../ui/HotelStayCard";
import { getPackageHotels } from "@/data/package_hotels";

export default function PackageHotelsSection({ pkg }) {
  const hotels = getPackageHotels(pkg);

  return (
    <div className="pt-12 space-y-6">
      <div>
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-2">
         YOUR ACCOMMODATION
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
          Two Hotels. <span className="italic font-normal text-[#1E3A8A]">Near the Haram.</span>
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          Named hotels, clear details. Walking time displayed in minutes.
        </p>
      </div>

      <div className="space-y-5">
        {hotels.map((hotel) => (
          <HotelStayCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
