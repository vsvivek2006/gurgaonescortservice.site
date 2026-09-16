'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Compass, ArrowRight } from 'lucide-react';
import { LocationRegion } from '@/data/locations';

export interface CompactLocation {
  slug: string;
  name: string;
  area: string;
  city: string;
  region: LocationRegion;
  corridor?: string;
  isHub?: boolean;
  shortDescription: string;
}

const filterTabs = [
  { id: 'all', label: 'All Locations' },
  { id: 'gurgaon-prime', label: 'Gurgaon Prime & DLF' },
  { id: 'golf-spr', label: 'Golf Course & SPR' },
  { id: 'delhi-airport', label: 'Delhi & Airport' },
  { id: 'regional-ncr', label: 'Noida & Regional NCR' },
];

interface LocationsDirectoryProps {
  locations: CompactLocation[];
}

export default function LocationsDirectory({ locations }: LocationsDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredLocations = useMemo(() => {
    let result = locations;

    // Filter by tab
    if (activeTab === 'gurgaon-prime') {
      result = result.filter(
        (loc) =>
          loc.region === 'Gurgaon' &&
          (loc.isHub ||
            ['cyber-city', 'mg-road', 'dlf-phase-1', 'dlf-phase-2', 'dlf-phase-3', 'dlf-phase-4', 'dlf-phase-5', 'sushant-lok', 'sector-29', 'huda-city-centre'].includes(loc.slug) ||
            loc.slug.includes('dlf') ||
            loc.slug.includes('phase'))
      );
    } else if (activeTab === 'golf-spr') {
      result = result.filter(
        (loc) =>
          loc.region === 'Gurgaon' &&
          (loc.slug.includes('golf') ||
            loc.slug.includes('spr') ||
            loc.slug.includes('sohna') ||
            ['sector-42', 'sector-43', 'sector-53', 'sector-54', 'sector-55', 'sector-56', 'sector-57', 'sector-65', 'sector-66', 'sector-67'].includes(loc.slug))
      );
    } else if (activeTab === 'delhi-airport') {
      result = result.filter(
        (loc) =>
          loc.region === 'Delhi' ||
          loc.region === 'Delhi NCR' ||
          ['aerocity', 'mahipalpur', 'dwarka', 'south-delhi', 'vasant-vihar', 'chanakyapuri', 'connaught-place'].includes(loc.slug)
      );
    } else if (activeTab === 'regional-ncr') {
      result = result.filter((loc) => loc.region !== 'Gurgaon' && loc.region !== 'Delhi' && loc.region !== 'Delhi NCR');
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (loc) =>
          loc.name.toLowerCase().includes(q) ||
          loc.area.toLowerCase().includes(q) ||
          loc.city.toLowerCase().includes(q) ||
          (loc.corridor && loc.corridor.toLowerCase().includes(q))
      );
    }

    return result;
  }, [locations, searchTerm, activeTab]);

  return (
    <>
      {/* Interactive Search Bar & Filters */}
      <div className="max-w-xl mx-auto mt-10 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by sector, corridor or landmark (e.g., Sector 65, DLF Phase 5, Aerocity)..."
          className="w-full bg-charcoal-800/90 border border-charcoal-700 focus:border-gold-500 px-12 py-4 text-sm text-white placeholder-charcoal-400 focus:outline-none transition-all shadow-xl rounded-sm"
        />
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500" />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-white bg-charcoal-700 px-2 py-1 rounded"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSearchTerm('');
            }}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-sm ${
              activeTab === tab.id
                ? 'bg-gold-500 text-charcoal-950 shadow-md shadow-gold-500/20'
                : 'bg-charcoal-800/70 text-charcoal-300 border border-charcoal-700 hover:border-gold-500/50 hover:text-gold-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Quick Counter */}
      <p className="text-xs text-charcoal-400 mt-4 tracking-wider text-center">
        Showing <span className="text-gold-400 font-semibold">{filteredLocations.length}</span> of{' '}
        <span className="text-white font-semibold">{locations.length}</span> verified locations
      </p>

      {/* Locations Directory Grid */}
      <section className="py-16 md:py-24 bg-charcoal-900/50">
        <div className="container-luxury">
          {filteredLocations.length === 0 ? (
            <div className="text-center py-16 luxury-card p-12 max-w-lg mx-auto">
              <Compass size={40} className="text-gold-500 mx-auto mb-4 opacity-60" />
              <h3 className="font-serif text-2xl text-white mb-2 font-light">No Locations Found</h3>
              <p className="text-sm text-charcoal-400 mb-6">
                We couldn&apos;t find any locations matching &ldquo;{searchTerm}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveTab('all');
                }}
                className="btn-gold text-xs"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  prefetch={false}
                  className="luxury-card p-7 group hover:border-gold-500 hover:shadow-xl hover:shadow-gold-500/10 flex flex-col justify-between transition-all duration-300 rounded-sm bg-charcoal-850/80 border border-charcoal-700"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-gold-400 font-mono uppercase tracking-wider font-semibold">
                          {loc.city || loc.region}
                        </span>
                      </div>
                      {loc.isHub && (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-950 bg-gold-500 px-2 py-0.5 rounded-2xs shadow-sm">
                          PRIMARY HUB
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl text-white mb-2 font-light group-hover:text-gold-400 transition-colors">
                      {loc.name}
                    </h3>

                    <p className="text-sm text-charcoal-400 leading-relaxed mb-6 line-clamp-2 font-light">
                      {loc.area || `${loc.name} service corridor in ${loc.city || loc.region}`}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal-700/80 flex items-center justify-between">
                    <span className="text-xs text-gold-400 tracking-wider uppercase font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Explore Area Guide <ArrowRight size={14} />
                    </span>
                    <span className="text-[11px] text-charcoal-400 font-mono">
                      20–30m Dispatch
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
