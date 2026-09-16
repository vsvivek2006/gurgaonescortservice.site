import manifestData from './final_location_manifest.json';

export type LocationDisposition = 'INDEX' | 'NOINDEX' | 'REDIRECT';

export interface LocationManifestEntry {
  slug: string;
  url: string;
  disposition: LocationDisposition;
  indexable: boolean;
  sitemapIncluded: boolean;
  canonical: string | null;
  redirectTarget: string | null;
}

export const locationManifest: LocationManifestEntry[] = manifestData as LocationManifestEntry[];

export const manifestMap = new Map<string, LocationManifestEntry>(
  locationManifest.map((entry) => [entry.slug, entry])
);

export function getLocationManifestEntry(slug: string): LocationManifestEntry | undefined {
  return manifestMap.get(slug);
}

export function isLocationIndexable(slug: string): boolean {
  return manifestMap.get(slug)?.indexable ?? false;
}

export function isLocationRedirect(slug: string): boolean {
  return manifestMap.get(slug)?.disposition === 'REDIRECT';
}

export function getRedirectDestination(slug: string): string | null {
  return manifestMap.get(slug)?.redirectTarget ?? null;
}
