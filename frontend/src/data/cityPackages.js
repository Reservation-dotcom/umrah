import {
  packages3StarBirmingham,
  packages4StarBirmingham,
  packages5StarBirmingham,
} from "./birmingham_umrah_package";
import {
  packages3StarBradford,
  packages4StarBradford,
  packages5StarBradford,
} from "./bradford_umrah_package";
import {
  packages3StarEdinburgh,
  packages4StarEdinburgh,
  packages5StarEdinburgh,
} from "./edinburg_umrah_package";
import {
  packages3StarGlasgow,
  packages4StarGlasgow,
  packages5StarGlasgow,
} from "./glasgow_umrah_package";
import {
  packages3StarLeicester,
  packages4StarLeicester,
  packages5StarLeicester,
} from "./leicester_umrah_package";
import {
  packages3StarLiverpool,
  packages4StarLiverpool,
  packages5StarLiverpool,
} from "./liverpool_umrah_package";
import {
  packages3StarManchester,
  packages4StarManchester,
  packages5StarManchester,
} from "./manchester_umrah_package";
import {
  packages3StarLondon,
  packages4StarLondon,
  packages5StarLondon,
} from "./london_umrah_package";

function createPackageSet(packages3Star, packages4Star, packages5Star) {
  return {
    packages3Star,
    packages4Star,
    packages5Star,
    allPackages: [...packages3Star, ...packages4Star, ...packages5Star],
  };
}

export const cityPackageSets = {
  "umrah-packages-birmingham": createPackageSet(
    packages3StarBirmingham,
    packages4StarBirmingham,
    packages5StarBirmingham,
  ),
  "umrah-packages-bradford": createPackageSet(
    packages3StarBradford,
    packages4StarBradford,
    packages5StarBradford,
  ),
  "umrah-packages-edinburgh": createPackageSet(
    packages3StarEdinburgh,
    packages4StarEdinburgh,
    packages5StarEdinburgh,
  ),
  "umrah-packages-glasgow": createPackageSet(
    packages3StarGlasgow,
    packages4StarGlasgow,
    packages5StarGlasgow,
  ),
  "umrah-packages-leicester": createPackageSet(
    packages3StarLeicester,
    packages4StarLeicester,
    packages5StarLeicester,
  ),
  "umrah-packages-liverpool": createPackageSet(
    packages3StarLiverpool,
    packages4StarLiverpool,
    packages5StarLiverpool,
  ),
  "umrah-packages-manchester": createPackageSet(
    packages3StarManchester,
    packages4StarManchester,
    packages5StarManchester,
  ),
  "umrah-packages-london": createPackageSet(
    packages3StarLondon,
    packages4StarLondon,
    packages5StarLondon,
  ),
};

export function getCityPackageBySlug(citySlug, packageSlug) {
  return cityPackageSets[citySlug]?.allPackages.find(
    (pkg) => pkg.slug === packageSlug,
  );
}
