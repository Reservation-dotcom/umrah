import { notFound } from "next/navigation";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import PackageIncludedSection from "../components/sections/PackageIncludedSection";
import PackageHotelsSection from "../components/sections/PackageHotelsSection";
import RelevantPackagesSidebar from "../components/sections/RelevantPackagesSidebar";
import UserReviewsSection from "../components/sections/UserReviewsSection";
import CtaBanner from "../components/sections/CtaBanner";
import PackageStatsCards from "../components/ui/PackageStatsCards";
import {
  allPackages,
  getPackageBySlug,
  getRelevantPackages,
  packages3Star as ukPackages3Star,
  packages4Star as ukPackages4Star,
  packages5Star as ukPackages5Star,
} from "@/data/packages";
import { ukCities } from "@/data/cities";
import { cityPackageSets } from "@/data/cityPackages";
import PackageCard from "../components/ui/PackageCard";

export function generateStaticParams() {
  return [
    ...allPackages.map((pkg) => ({ slug: pkg.slug })),
    ...ukCities.map((city) => ({ slug: city.slug })),
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = ukCities.find((item) => item.slug === slug);
  if (city) {
    return {
      title: `Umrah Packages from ${city.name} from £${city.price}pp | Umrah Planner™`,
      description: `Compare 3, 4 and 5-star Umrah packages departing from ${city.name}. Browse available itineraries and choose the right package for your journey.`,
    };
  }

  const pkg = getPackageBySlug(slug);
  if (!pkg) {
    return { title: "Package not found | Umrah Planner™" };
  }
  return {
    title: `${pkg.title} from £${pkg.price}pp | Umrah Planner™`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const city = ukCities.find((item) => item.slug === slug);
  const pkg = getPackageBySlug(slug);

  if (city) {
    const cityPackages = cityPackageSets[city.slug] ?? {
      packages3Star: ukPackages3Star,
      packages4Star: ukPackages4Star,
      packages5Star: ukPackages5Star,
    };
    const packageGroups = [
      { title: "3 Star Umrah Packages", packages: cityPackages.packages3Star },
      { title: "4 Star Umrah Packages", packages: cityPackages.packages4Star },
      { title: "5 Star Umrah Packages", packages: cityPackages.packages5Star },
    ];

    return (
      <main className="min-h-screen bg-[#f8fafc] flex flex-col justify-between selection:bg-[#d4af37] selection:text-slate-950">
        <Header />

        <div className="flex-1">
          <HeroSection city={city} />

          <section className="py-12 md:py-16 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
              {packageGroups.map((group) => (
                <div key={group.title} className="space-y-6">
                  <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                    {group.title.split(" ")[0]} {group.title.split(" ")[1]} Umrah{" "}
                    <span className="italic font-normal text-[#1E3A8A]">
                      Packages from {city.name}
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {group.packages.map((cityPackage) => (
                      <PackageCard
                        key={cityPackage.id}
                        pkg={{ ...cityPackage, citySlug: city.slug }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <UserReviewsSection
            eyebrow={`${city.name.toUpperCase()} PILGRIM REVIEWS`}
            title={
              <>
                Umrah experiences from{" "}
                <span className="italic font-normal text-[#1E3A8A]">our pilgrims.</span>
              </>
            }
            limit={3}
          />
        </div>

        <Footer />
      </main>
    );
  }

  if (!pkg) {
    notFound();
  }

  const relevant = getRelevantPackages(pkg);

  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col justify-between selection:bg-[#d4af37] selection:text-slate-950">
      <Header />

      <div className="flex-1">
        <HeroSection pkg={pkg} />

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-2">
                <PackageStatsCards pkg={pkg} />
                <PackageIncludedSection nightsTotal={pkg.nightsTotal} />
                <PackageHotelsSection pkg={pkg} />
              </div>

              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <RelevantPackagesSidebar packages={relevant} />
              </div>
            </div>
          </div>
        </section>

        <UserReviewsSection
          eyebrow="PILGRIMS REVIEWS"
          title={
            <>
              Genuine Reviews from <span className="italic font-normal text-[#1E3A8A]"> Pilgrims.</span>
            </>
          }
          subtitle="No sponsored feedback. Each review is connected to a genuine reservation."
          limit={3}
        />

        <CtaBanner />
      </div>

      <Footer />
    </main>
  );
}
