import { notFound } from "next/navigation";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import HeroSection from "../../../components/sections/HeroSection";
import PackageIncludedSection from "../../../components/sections/PackageIncludedSection";
import PackageHotelsSection from "../../../components/sections/PackageHotelsSection";
import RelevantPackagesSidebar from "../../../components/sections/RelevantPackagesSidebar";
import UserReviewsSection from "../../../components/sections/UserReviewsSection";
import CtaBanner from "../../../components/sections/CtaBanner";
import PackageStatsCards from "../../../components/ui/PackageStatsCards";
import { cityPackageSets, getCityPackageBySlug } from "@/data/cityPackages";
import { ukCities } from "@/data/cities";

export function generateStaticParams() {
  return Object.entries(cityPackageSets).flatMap(([citySlug, packageSet]) =>
    packageSet.allPackages.map((pkg) => ({
      citySlug,
      packageSlug: pkg.slug,
    })),
  );
}

export async function generateMetadata({ params }) {
  const { citySlug, packageSlug } = await params;
  const city = ukCities.find((item) => item.slug === citySlug);
  const pkg = getCityPackageBySlug(citySlug, packageSlug);

  if (!city || !pkg) {
    return { title: "Package not found | Umrah Planner™" };
  }

  return {
    title: `${pkg.title} from ${city.name} | Umrah Planers™`,
    description:
      pkg.description ||
      `Explore this ${pkg.starCount}-star, ${pkg.nightsTotal}-night Umrah package departing from ${city.name}.`,
  };
}

export default async function CityPackageDetailPage({ params }) {
  const { citySlug, packageSlug } = await params;
  const city = ukCities.find((item) => item.slug === citySlug);
  const pkg = getCityPackageBySlug(citySlug, packageSlug);

  if (!city || !pkg) {
    notFound();
  }

  const displayPackage = {
    ...pkg,
    title: pkg.title.includes(city.name)
      ? pkg.title
      : `${pkg.title} from ${city.name}`,
  };
  const relevantPackages = cityPackageSets[citySlug].allPackages
    .filter(
      (item) => item.id !== pkg.id && item.nightsTotal === pkg.nightsTotal,
    )
    .slice(0, 2)
    .map((item) => ({ ...item, citySlug }));

  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col justify-between selection:bg-[#d4af37] selection:text-slate-950">
      <Header />

      <div className="flex-1">
        <HeroSection pkg={displayPackage} />

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-2">
                <PackageStatsCards pkg={pkg} />
                <PackageIncludedSection nightsTotal={pkg.nightsTotal} />
                <PackageHotelsSection pkg={pkg} />
              </div>

              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <RelevantPackagesSidebar packages={relevantPackages} />
              </div>
            </div>
          </div>
        </section>

        <UserReviewsSection
          eyebrow={`${city.name.toUpperCase()} PILGRIMS REVIEWS`}
          title={
            <>
              Umrah experiences from{" "}
              <span className="italic font-normal text-[#1E3A8A]">
                our pilgrims.
              </span>
            </>
          }
          limit={3}
        />

        <CtaBanner />
      </div>

      <Footer />
    </main>
  );
}
