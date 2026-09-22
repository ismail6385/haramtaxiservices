import { RouteData } from './routesData';

// Maps the free-text vehicle names used in route pricing tables to their
// fleet page slug. Substring match (case-insensitive) so "GMC Yukon XL"
// and "GMC Yukon" both resolve to the same fleet page.
const FLEET_SLUG_PATTERNS: { match: string; slug: string }[] = [
    { match: 'camry', slug: 'toyota-camry' },
    { match: 'yukon', slug: 'gmc-yukon' },
    { match: 'staria', slug: 'hyundai-staria' },
    { match: 'starex', slug: 'hyundai-starex' },
    { match: 'hiace', slug: 'toyota-hiace' },
    { match: 'coaster', slug: 'toyota-coaster' },
];

export function getFleetSlugForVehicle(vehicle: string): string | null {
    const lower = vehicle.toLowerCase();
    const found = FLEET_SLUG_PATTERNS.find((p) => lower.includes(p.match));
    return found ? found.slug : null;
}

// Picks 3-4 relevant /services/* hub pages for a given route, based on
// keywords in the route's slug/h1 and the vehicles offered — so a route
// page links into the topical service cluster instead of only routes.
export function getRelatedServicesForRoute(route: RouteData): { label: string; href: string }[] {
    const haystack = `${route.slug} ${route.h1}`.toLowerCase();
    const hasLargeVehicle = route.pricing.some((p) => /hiace|coaster/i.test(p.vehicle));
    const links: { label: string; href: string }[] = [];

    if (/airport|kaia|jed\b|med\b|ruh\b|dmm\b/.test(haystack)) {
        links.push({ label: 'Airport Transfer Service', href: '/services/airport-transfers' });
    }

    if (/makkah|madinah|jeddah|umrah/.test(haystack)) {
        links.push({ label: 'Umrah Taxi Service', href: '/services/umrah-taxi' });
    }

    if (/makkah|madinah|ziyarat/.test(haystack)) {
        links.push({ label: 'Ziyarat Taxi Tours', href: '/services/ziyarat-tours' });
    }

    if (/hajj/.test(haystack)) {
        links.push({ label: 'Hajj Transportation', href: '/services/hajj-transport' });
    }

    if (hasLargeVehicle) {
        links.push({ label: 'Group Transportation', href: '/services/group-transport' });
    }

    links.push({ label: 'Private Chauffeur Service', href: '/services/chauffeur-service' });

    // De-duplicate while preserving order, cap at 4.
    const seen = new Set<string>();
    return links.filter((l) => (seen.has(l.href) ? false : (seen.add(l.href), true))).slice(0, 4);
}
