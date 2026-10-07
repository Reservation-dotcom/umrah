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

const maktabALocalImages = ["/hajj_1.png", "/hajj_2.png", "/hajj_3.png"];
const maktabBLocalImages = ["/hajj_4.png", "/hajj_5.png"];
const maktabAPackages = hajjPackagesMaktabA
  .slice(0, maktabALocalImages.length)
  .map((pkg, index) => ({
    ...pkg,
    image: maktabALocalImages[index],
  }));
const maktabBPackages = hajjPackagesMaktabB
  .slice(0, maktabBLocalImages.length)
  .map((pkg, index) => ({
    ...pkg,
    image: maktabBLocalImages[index],
  }));

function renderInlineMarkdown(text) {
  const pattern = /(\*\*[^*]+\*\*)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <strong key={`${match.index}-${match[0]}`} className="font-semibold text-slate-800">
        {match[1].replace(/^\*\*|\*\*$/g, "")}
      </strong>,
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function renderContentLine(line, index) {
  const trimmedLine = line.trim();

  if (!trimmedLine) {
    return null;
  }

  if (/^#{1,6}\s+/.test(trimmedLine)) {
    const level = trimmedLine.match(/^#+/)?.[0].length ?? 1;
    const headingText = trimmedLine.replace(/^#{1,6}\s+/, "");
    const headingClasses = {
      1: "font-serif text-3xl sm:text-4xl font-extrabold text-[#06142e] pt-8 first:pt-0",
      2: "font-serif text-2xl sm:text-3xl font-bold text-[#06142e] pt-8 first:pt-0",
      3: "font-serif text-xl font-bold text-[#06142e] pt-4",
      4: "font-serif text-lg font-bold text-[#06142e] pt-3",
      5: "font-serif text-base font-bold text-[#06142e] pt-3",
      6: "font-serif text-sm font-bold uppercase tracking-wide text-[#06142e] pt-3",
    };

    const HeadingTag = `h${Math.min(level, 6)}`;

    return (
      <HeadingTag
        key={`${HeadingTag}-${index}-${headingText}`}
        className={headingClasses[Math.min(level, 6)]}
      >
        {renderInlineMarkdown(headingText)}
      </HeadingTag>
    );
  }

  if (/^[-*]\s+/.test(trimmedLine)) {
    return (
      <p key={`${trimmedLine}-${index}`} className="text-slate-600 leading-7 pl-4">
        <span className="mr-2 text-slate-800">•</span>
        {renderInlineMarkdown(trimmedLine.replace(/^[-*]\s+/, ""))}
      </p>
    );
  }

  if (/^\d+\.\s+/.test(trimmedLine)) {
    return (
      <p key={`${trimmedLine}-${index}`} className="text-slate-600 leading-7 pl-4">
        <span className="mr-2 font-semibold text-slate-800">
          {trimmedLine.match(/^\d+\./)?.[0]}
        </span>
        {renderInlineMarkdown(trimmedLine.replace(/^\d+\.\s+/, ""))}
      </p>
    );
  }

  const labelEnd = trimmedLine.indexOf(": ");
  if (labelEnd > 0 && labelEnd < 70) {
    return (
      <p key={`${trimmedLine}-${index}`} className="text-slate-600 leading-7">
        <strong className="text-slate-800">{trimmedLine.slice(0, labelEnd)}:</strong>
        {renderInlineMarkdown(trimmedLine.slice(labelEnd + 1))}
      </p>
    );
  }

  return (
    <p key={`${trimmedLine}-${index}`} className="text-slate-600 leading-7">
      {renderInlineMarkdown(trimmedLine)}
    </p>
  );
}

const contentLines = makkahTourContent
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

export const metadata = {
  title: "Hajj Packages 2027 from UK | Umrah Planers",
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
                {/* <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-blue-100/90">
                  {heroDescription}
                </p> */}
                {/* <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-xs font-semibold text-slate-200">
                  <span>ATOL protected</span>
                  <span>Experienced UK group leaders</span>
                  <span>Support throughout your journey</span>
                </div> */}
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
                <HajjPackageCard
                  key="hajj-image-6"
                  pkg={{ id: "hajj-image-6", title: "Hajj package", image: "/hajj_6.png" }}
                />
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
          subtitle="Recent feedback from pilgrims who travelled with Umrah Planers."
          limit={4}
        />
      </div>

      <Footer />
    </main>
  );
}