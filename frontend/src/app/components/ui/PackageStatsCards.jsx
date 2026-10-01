import React from "react";


function ClockIcon() {
  return (
    <svg className="w-6 h-6 text-[#0e5c4a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
export default function PackageStatsCards({ pkg }) {
  const stats = [
    {
      label: "STARTING FROM",
      value: `£${pkg.price} pp`,
      icon: (
        <img
          src="https://www.makkahtour.co.uk/images/icons/why-pricing.webp?v=2"
          alt="Pricing"
          className="w-6 h-6 object-contain"
        />
      ),
    },
    {
      label: "DURATION",
      value: (
        <>
          {pkg.nightsTotal} Nights
          <span className="block text-sm font-semibold text-stone-500">Days</span>
        </>
      ),
      icon: <ClockIcon />,
    },
    {
      label: "MAKKAH",
      value: (
        <>
          {pkg.makkahDays} Days
        </>
      ),
      icon: (
        <img
          src="/mecca.png"
          alt="Makkah"
          className="w-6 h-6 object-contain"
        />
      ),
    },
    {
      label: "MADINAH",
      value: `${pkg.madinahDays} Days`,
      icon: (
        <img
          src="https://www.makkahtour.co.uk/images/icons/madinah-dome.webp"
          alt="Madinah"
          className="w-6 h-6 object-contain"
        />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl border border-stone-200/80 shadow-xs px-4 py-4 flex items-center gap-3 lg:justify-start justify-center"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
            {stat.icon}
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-stone-400">
              {stat.label}
            </span>
            <span className="font-serif text-lg font-extrabold text-[#1c2520] leading-tight block">
              {stat.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
