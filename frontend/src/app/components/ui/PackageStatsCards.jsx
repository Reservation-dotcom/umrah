import React from "react";

function MoneyIcon() {
  return (
    <svg className="w-6 h-6 text-[#0e5c4a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

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

function KaabaIcon() {
  return (
    <svg className="w-6 h-6 text-[#0e5c4a]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 7.5L12 4l8 3.5v12.2L12 23l-8-3.3V7.5zm2 1.4v9.3l6 2.5V11.4L6 8.9zm8 2.5v9.3l6-2.5V8.9l-6 2.5zM12 6.1L7.6 8 12 9.9 16.4 8 12 6.1z" />
    </svg>
  );
}

function DomeIcon() {
  return (
    <svg className="w-6 h-6 text-[#0e5c4a]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3c.4 0 .8.1 1.1.3.6.4 1 1.1 1 1.9V6h1.2c2.9 0 5.3 2.1 5.7 4.9H3c.4-2.8 2.8-4.9 5.7-4.9H10V5.2c0-.8.4-1.5 1-1.9.3-.2.7-.3 1-.3zM4 13h16v7H4v-7zm2 2v3h12v-3H6z" />
    </svg>
  );
}

export default function PackageStatsCards({ pkg }) {
  const stats = [
    {
      label: "STARTING FROM",
      value: `£${pkg.price} pp`,
      icon: <MoneyIcon />,
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
      icon: <KaabaIcon />,
    },
    {
      label: "MADINAH",
      value: `${pkg.madinahDays} Days`,
      icon: <DomeIcon />,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl border border-stone-200/80 shadow-xs px-4 py-4 flex items-center gap-3"
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
