import { readFileSync } from "node:fs";
import { join } from "node:path";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import QuoteForm from "../components/forms/QuoteForm";
import HajjPackageCard from "../components/ui/HajjPackageCard";
import UserReviewsSection from "../components/sections/UserReviewsSection";
import { hajjPackagesMaktabA, hajjPackagesMaktabB } from "@/data/hajj_packages";

const hajjSource = readFileSync(join(process.cwd(), "src/data/hajj.txt"), "utf8");
const makkahTourContent = readFileSync(
  join(process.cwd(), "src/data/makkah-tour.txt"),
  "utf8",
);

const hajjLines = hajjSource.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
const heroTitle = hajjLines[0];
const arabicCalligraphy = hajjLines[1];
const heroDescription = hajjLines[2];

function getPackageGroups(lines) {
  const groups = { A: [], B: [] };
  let activeGroup = null;

  for (const line of lines) {
    if (line.startsWith("Pre-Booking Maktab A")) {
      activeGroup = "A";
    } else if (line.startsWith("Installment Planned Maktab B")) {
      activeGroup = "B";
    } else if (activeGroup && line.startsWith("https://")) {
      groups[activeGroup].push(line);
    }
  }

  return groups;
}

const packageImageGroups = getPackageGroups(hajjLines);
const maktabAPackages = hajjPackagesMaktabA.map((pkg, index) => ({
  ...pkg,
  image: packageImageGroups.A[index] ?? pkg.image,
}));
const maktabBPackages = hajjPackagesMaktabB.map((pkg, index) => ({
  ...pkg,
  image: packageImageGroups.B[index] ?? pkg.image,
}));

const majorHeadings = new Set([
  "Why Our Hajj Packages Stand Out",
  "What's Included in Our Hajj Packages",
  "Categories of Our Hajj 2027 Packages",
  "Complete Hajj Guidance for First-Time Pilgrims",
  "How to Book Your Hajj Package from the UK",
]);

const minorHeadings = new Set([
  "Expert Pilgrimage Planning",
  "Affordable Packages for Every Pilgrim",
  "Stress-Free Travel from Start to Finish",
  "Guided Spiritual Enrichment",
  "Flexible Travel Options",
  "4-Star Shifting Hajj Packages - Affordable Comfort",
  "5-Star Shifting Hajj Packages - Premium Spiritual Experience",
  "Customised Hajj Packages - Designed for You",
  "Non-Shifting Hajj Packages - Comfort and Stability",
]);

function renderContentLine(line, index) {
  const normalizedLine = line.replace(/[\u2013\u2014]/g, "-");

  if (index === 0 || majorHeadings.has(line)) {
    return (
      <h2
        key={line}
        className="font-serif text-2xl sm:text-3xl font-bold text-[#06142e] pt-8 first:pt-0"
      >
        {line}
      </h2>
    );
  }

  if (minorHeadings.has(normalizedLine)) {
    return (
      <h3 key={line} className="font-serif text-xl font-bold text-[#06142e] pt-3">
        {line}
      </h3>
    );
  }

  const labelEnd = line.indexOf(": ");
  if (labelEnd > 0 && labelEnd < 70) {
    return (
      <p key={line} className="text-slate-600 leading-7">
        <strong className="text-slate-800">{line.slice(0, labelEnd)}:</strong>
        {line.slice(labelEnd + 1)}
      </p>
    );
  }

  return (
    <p key={line} className="text-slate-600 leading-7">
      {line}
    </p>
  );
}

const contentLines = makkahTourContent
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

export const metadata = {
  title: "Hajj Packages 2027 from UK | Umrah Planner",
  description:
    "Explore Hajj packages 2027 from the UK with flights, accommodation, transport between the holy sites, and experienced group leaders.",
};

export default function HajjPackagesPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <div className="flex-1">
        <section
          id="hajj-hero-section"
          className="bg-islamic-pattern scroll-mt-36 text-white relative py-12 md:py-14 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
              <div className="lg:col-span-7 space-y-5">
                <p className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  2027 Hajj packages from the UK
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-extrabold leading-tight text-white">
                  {heroTitle}
                </h1>
                <p className="font-arabic text-3xl sm:text-4xl text-[#D4AF37]">
                  {arabicCalligraphy}
                </p>
                <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-blue-100/90">
                  {heroDescription}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-xs font-semibold text-slate-200">
                  <span>ATOL protected</span>
                  <span>Experienced UK group leaders</span>
                  <span>Support throughout your journey</span>
                </div>
              </div>

              <div className="lg:col-span-5" id="quote">
                <QuoteForm tripType="Hajj" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-18 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="space-y-6">
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] mb-2">
                  Pre-booking · Maktab A
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0f172a]">
                  Hajj Packages
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {maktabAPackages.map((pkg) => (
                  <HajjPackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>

            <div className="space-y-6 border-t border-slate-200 pt-12">
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] mb-2">
                  Installment planned · Maktab B
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0f172a]">
                  Hajj Packages
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {maktabBPackages.map((pkg) => (
                  <HajjPackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-slate-200 py-14 md:py-18">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {contentLines.map(renderContentLine)}
          </article>
        </section>

        <UserReviewsSection
          eyebrow="PILGRIM STORIES"
          title={
            <>
              Real Stories from <span className="italic font-normal text-[#1E3A8A]">Our Pilgrims.</span>
            </>
          }
          subtitle="Recent feedback from pilgrims who travelled with Umrah Planner."
          limit={4}
        />
      </div>

      <Footer />
    </main>
  );
}