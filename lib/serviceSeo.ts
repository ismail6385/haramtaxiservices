import { ServiceData } from './servicesData';

// Per-slug overrides for services where the slug itself doesn't clearly encode
// the right location (generic names, borders, multi-city services, etc).
const LOCATION_OVERRIDES: Record<string, string> = {
    'umrah-taxi': 'Makkah',
    'pilgrim-taxi': 'Makkah',
    'hotel-to-haram-transport': 'Makkah',
    'wheelchair-accessible-umrah-taxi': 'Makkah',
    'safe-umrah-taxi-solo-females-families': 'Jeddah',
    'date-festival-transfer': 'Buraidah',
    'royal-commission-taxi': 'Jubail',
    'aramco-taxi': 'Dhahran',
    'uae-border-taxi': 'Al Ahsa',
    'qatar-border-taxi': 'Al Ahsa',
    'kuwait-border-taxi': 'Hafr Al Batin',
    'yemen-border-taxi': 'Najran',
    'wadeeah-border-taxi': 'Najran',
    'jordan-border-taxi': 'Tabuk',
    'jordan-exit-taxi': 'Tabuk',
    'northern-borders-taxi': 'Arar',
    'oasis-tour-taxi': 'Al Ahsa',
    'kjo-taxi': 'Jeddah',
    'kfupm-taxi': 'Dhahran',
    'kkmc-taxi': 'Hafr Al Batin',
    'qaisumah-airport-taxi': 'Hafr Al Batin',
    'lina-village-taxi': 'Tabuk',
    'half-moon-bay-taxi': 'Khobar',
    'raghdan-park-taxi': 'Al Baha',
    'red-sea-airport-taxi': 'Red Sea Coast',
};

// Ordered by specificity — multi-word phrases are tried before single words
// at every position, and the scan runs left-to-right through the slug so the
// first (usually origin) city wins for routes like "jazan-to-abha-transfer".
const PLACE_MAP: Record<string, string> = {
    'jeddah': 'Jeddah',
    'madinah': 'Madinah',
    'medina': 'Madinah',
    'makkah': 'Makkah',
    'riyadh': 'Riyadh',
    'dammam': 'Dammam',
    'khobar': 'Khobar',
    'dhahran': 'Dhahran',
    'neom': 'NEOM',
    'the-line': 'NEOM',
    'sindalah': 'NEOM',
    'trojena': 'NEOM',
    'tabuk': 'Tabuk',
    'haql': 'Tabuk',
    'duba': 'Tabuk',
    'taif': 'Taif',
    'abha': 'Abha',
    'khamis-mushait': 'Abha',
    'rijal-almaa': 'Abha',
    'soudah': 'Abha',
    'jazan': 'Jazan',
    'farasan': 'Jazan',
    'najran': 'Najran',
    'hail': 'Hail',
    'jubbah': 'Hail',
    'ghadha-park': 'Hail',
    'nafud': 'Hail',
    'qassim': 'Qassim',
    'buraidah': 'Buraidah',
    'unaizah': 'Buraidah',
    'arar': 'Arar',
    'bisha': 'Bisha',
    'king-fahd-dam': 'Bisha',
    'rafha': 'Rafha',
    'sharurah': 'Sharurah',
    'empty-quarter': 'Najran',
    'turaif': 'Turaif',
    'waad-al-shamal': 'Turaif',
    'wadi-ad-dawasir': 'Wadi Ad Dawasir',
    'dawadmi': 'Ad Dawadmi',
    'al-wajh': 'Al Wajh',
    'yanbu': 'Yanbu',
    'qurayyat': 'Qurayyat',
    'jubail': 'Jubail',
    'rabigh': 'Rabigh',
    'petro-rabigh': 'Rabigh',
    'umluj': 'Umluj',
    'baljurashi': 'Baljurashi',
    'tanomah': 'Tanomah',
    'hofuf': 'Hofuf',
    'al-ahsa': 'Al Ahsa',
    'al-qara': 'Al Ahsa',
    'al-baha': 'Al Baha',
    'thee-ain': 'Al Baha',
    'dhee-ain': 'Al Baha',
    'al-jouf': 'Al Jouf',
    'olive-farm': 'Al Jouf',
    'alula': 'AlUla',
    'hegra': 'AlUla',
    'badr': 'Madinah',
    'ushaiger': 'Riyadh',
    'kharj': 'Al Kharj',
    'sudair': 'Sudair',
    'majmaah': 'Majmaah',
    'kaec': 'KAEC',
};

function detectLocationFromSlug(slug: string): string | null {
    const words = slug.split('-');
    for (let i = 0; i < words.length; i++) {
        for (let len = 3; len >= 1; len--) {
            if (i + len > words.length) continue;
            const phrase = words.slice(i, i + len).join('-');
            if (PLACE_MAP[phrase]) return PLACE_MAP[phrase];
        }
    }
    return null;
}

export function getServiceLocation(slug: string): string {
    if (LOCATION_OVERRIDES[slug]) return LOCATION_OVERRIDES[slug];
    return detectLocationFromSlug(slug) || 'Saudi Arabia';
}

// Text before the first " | " or " — " separator — the distinctive keyword
// portion of a service title, without its secondary clause.
function getKeyword(title: string): string {
    const sepMatch = title.match(/ [|—] /);
    if (sepMatch && sepMatch.index !== undefined) {
        return title.slice(0, sepMatch.index).trim();
    }
    return title.trim();
}

/**
 * SEO <title> tag: {keyword} — Private Car, Taxi, Limo & Chauffeur Service in {Location} | 24/7 Service
 * Collapses to the plain formula (no keyword prefix) for "Taxi Service in X" / "Taxi to X"
 * style titles, since the keyword there adds no information beyond the location itself.
 */
export function buildServiceSeoTitle(service: ServiceData): string {
    const location = getServiceLocation(service.slug);
    const keyword = getKeyword(service.title);
    const isPlainCityTaxi = /^taxi( service)? (in|to) /i.test(keyword);

    if (isPlainCityTaxi) {
        return `Private Car, Taxi, Limo & Chauffeur Service in ${location} | 24/7 Service`;
    }

    const hasTaxiWord = /\btaxi\b/i.test(keyword);
    const carWords = hasTaxiWord
        ? 'Private Car, Limo & Chauffeur Service'
        : 'Private Car, Taxi, Limo & Chauffeur Service';

    return `${keyword} — ${carWords} in ${location} | 24/7 Service`;
}

// H1: keeps the existing unique heading, just swaps pipe separators for an
// en dash so it reads as a heading instead of a meta-title fragment — and,
// critically, never contains the CTA/formula wording that's now in <title>.
export function buildServiceH1(service: ServiceData): string {
    return service.title.replace(/ \| /g, ' – ').replace(/ — /g, ' – ');
}
