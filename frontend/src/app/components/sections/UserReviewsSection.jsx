import React from "react";
import { userReviews } from "@/data/user_review";

export default function UserReviewsSection({
  eyebrow = "PILGRIM REVIEWS",
  title = (
    <>
      Believe by Pilgrims Across <span className="italic font-normal text-[#0e5c4a]">the UK.</span>
    </>
  ),
  subtitle = "Genuine experiences from UK brothers & sisters who completed their Umrah with Umrah Planers.",
  limit,
}) {
  const reviews = typeof limit === "number" ? userReviews.slice(0, limit) : userReviews;

  return (
    <section className="py-13 md:py-15 bg-[#f1f5f9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-2">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Responsive Reviews Grid: 4 columns at xl, 2 columns at lg/md/sm, 1 column at xsm */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 ${limit === 3 ? "xl:grid-cols-3" : "xl:grid-cols-4"}`}>
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Row: Verified Badge & Stars */}
                <div className="flex items-center justify-between">
                  <span className="bg-blue-50 text-[#1E3A8A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-200/80 flex items-center gap-1">
                    <span>✓</span> Verified booking
                  </span>
                  <div className="text-amber-500 font-bold text-sm tracking-widest">
                    {"★".repeat(rev.rating)}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              {/* User Avatar & Info */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#06142e] text-[#D4AF37] font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                  {rev.initials}
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#0f172a]">
                    {rev.name}
                  </h5>
                  <span className="text-[10px] text-slate-500 block">
                    {rev.packageInfo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
