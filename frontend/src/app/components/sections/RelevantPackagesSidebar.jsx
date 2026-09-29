import React from "react";
import RelevantPackageCard from "../ui/RelevantPackageCard";

export default function RelevantPackagesSidebar({ packages }) {
  return (
    <aside className="space-y-4">
      <h3 className="font-serif text-2xl font-extrabold text-[#1c2520]">Relevant Packages</h3>
      {packages.map((pkg) => (
        <RelevantPackageCard key={pkg.id} pkg={pkg} />
      ))}
    </aside>
  );
}
