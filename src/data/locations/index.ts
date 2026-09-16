import { LocationData, LocationRegion } from './types';
import { gurgaonHub } from './gurgaon-hub';
import { gurgaonCorridors } from './gurgaon-corridors';
import { gurgaonSectorsInner } from './gurgaon-sectors-inner';
import { gurgaonSectorsGolfSpr } from './gurgaon-sectors-golf-spr';
import { gurgaonSectorsNewExpressway } from './gurgaon-sectors-new-expressway';
import { delhiNcrHub, regionalNcrHubs } from './delhi-ncr-hub';
import { delhiLocalities } from './delhi-localities';
import { noidaSectors } from './noida-sectors';

export * from './types';
export { gurgaonHub } from './gurgaon-hub';
export { gurgaonCorridors } from './gurgaon-corridors';
export { gurgaonSectorsInner } from './gurgaon-sectors-inner';
export { gurgaonSectorsGolfSpr } from './gurgaon-sectors-golf-spr';
export { gurgaonSectorsNewExpressway } from './gurgaon-sectors-new-expressway';
export { delhiNcrHub, regionalNcrHubs } from './delhi-ncr-hub';
export { delhiLocalities } from './delhi-localities';
export { noidaSectors } from './noida-sectors';

export const locations: LocationData[] = [
  gurgaonHub,
  ...gurgaonCorridors,
  ...gurgaonSectorsInner,
  ...gurgaonSectorsGolfSpr,
  ...gurgaonSectorsNewExpressway,
  delhiNcrHub,
  ...regionalNcrHubs,
  ...delhiLocalities,
  ...noidaSectors,
];

// Helper functions for easy querying across the platform
export const getLocationBySlug = (slug: string): LocationData | undefined => {
  const normalized = slug.toLowerCase().trim();
  return locations.find((loc) => loc.slug.toLowerCase() === normalized);
};

export const getLocation = getLocationBySlug;

export const getLocationsByRegion = (region: LocationRegion | 'All'): LocationData[] => {
  if (region === 'All') return locations;
  return locations.filter((loc) => loc.region === region);
};

export const getHubLocations = (): LocationData[] => {
  return locations.filter((loc) => loc.isHub);
};

export const getGurgaonLocations = (): LocationData[] => {
  return locations.filter((loc) => loc.region === 'Gurgaon');
};

export const getDelhiLocations = (): LocationData[] => {
  return locations.filter((loc) => loc.region === 'Delhi');
};

export const getNcrRegionalLocations = (): LocationData[] => {
  return locations.filter(
    (loc) =>
      loc.region === 'Noida' ||
      loc.region === 'Greater Noida' ||
      loc.region === 'Ghaziabad' ||
      loc.region === 'Faridabad' ||
      loc.region === 'Delhi NCR'
  );
};
