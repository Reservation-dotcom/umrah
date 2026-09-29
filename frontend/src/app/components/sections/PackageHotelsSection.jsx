import React from "react";
import HotelStayCard from "../ui/HotelStayCard";
import { getPackageHotels } from "@/data/package_hotels";

export default function PackageHotelsSection({ pkg }) {
  const hotels = getPackageHotels(pkg);

  return (
    <div className="pt-12 space-y-6">
      <div>
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c9a24b] block mb-2">
          WHERE YOU&apos;LL STAY
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#1c2520] tracking-tight">
          Two Hotels. <span className="italic font-normal text-[#0e5c4a]">Both Steps From the Haram.</span>
        </h2>
        <p className="text-stone-600 text-sm mt-2">
          Specific hotels, not vague promises. Distance shown in walking minutes.
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
