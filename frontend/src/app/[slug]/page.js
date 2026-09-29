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
import { allPackages, getPackageBySlug, getRelevantPackages } from "@/data/packages";

export function generateStaticParams() {
  return allPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) {
    return { title: "Package not found | Makkah Tour™" };
  }
  return {
    title: `${pkg.title} from £${pkg.price}pp | Makkah Tour™`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const relevant = getRelevantPackages(pkg);

  return (
    <main className="min-h-screen bg-[#fbf8f1] flex flex-col justify-between selection:bg-[#c9a24b] selection:text-white">
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
          eyebrow="VERIFIED PILGRIMS"
          title={
            <>
              Real Stories from <span className="italic font-normal text-[#0e5c4a]">Verified Pilgrims.</span>
            </>
          }
          subtitle="No paid reviews. Every testimonial linked to a real booking."
          limit={3}
        />

        <CtaBanner />
      </div>

      <Footer />
    </main>
  );
}
