import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi Service Locations in Saudi Arabia | All 13 Regions — Haram Taxi',
    description: 'Professional taxi service across all Saudi Arabia regions — Makkah, Madinah, Riyadh, Eastern Province, Asir, Tabuk and more. 50+ cities, 24/7 WhatsApp booking, fixed rates.',
    keywords: ['taxi service Saudi Arabia', 'Saudi Arabia regions taxi', 'Makkah region taxi', 'Eastern Province taxi', 'Riyadh region taxi', 'Madinah region taxi', 'Asir taxi', 'Tabuk taxi', 'all Saudi cities taxi', 'KSA private taxi'],
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations',
    },
    openGraph: {
        title: 'Taxi Service Locations in Saudi Arabia — All Regions',
        description: 'Covering all 13 Saudi Arabia regions. 50+ cities served with fixed rates and 24/7 WhatsApp booking.',
        url: 'https://haramtaxiservice.com/locations',
        type: 'website',
    },
};

const serviceAreasSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Taxi Service",
    "provider": { "@type": ["LocalBusiness", "TaxiService"], "name": "Haram Taxi Service", "url": "https://haramtaxiservice.com" },
    "areaServed": [
        { "@type": "AdministrativeArea", "name": "Makkah Region, Saudi Arabia" },
        { "@type": "AdministrativeArea", "name": "Madinah Region, Saudi Arabia" },
        { "@type": "AdministrativeArea", "name": "Riyadh Region, Saudi Arabia" },
        { "@type": "AdministrativeArea", "name": "Eastern Province, Saudi Arabia" },
        { "@type": "AdministrativeArea", "name": "Asir Region, Saudi Arabia" },
        { "@type": "AdministrativeArea", "name": "Tabuk Region, Saudi Arabia" },
    ]
};

const provinces = [
    {
        name: 'Makkah Region',
        slug: 'makkah-region',
        emoji: '🕌',
        color: 'bg-emerald-700',
        hoverBorder: 'hover:border-emerald-500',
        hoverBg: 'hover:bg-emerald-50',
        textColor: 'group-hover:text-emerald-700',
        desc: 'The holiest region — Hajj 2026 permitted vehicles, KAIA airport, Haram transfers',
        cities: ['Makkah', 'Jeddah', 'Taif', 'Rabigh', 'KAEC', 'Al Qunfudhah'],
        highlight: 'Hajj 2026 Priority',
    },
    {
        name: 'Madinah Region',
        slug: 'madinah-region',
        emoji: '🕌',
        color: 'bg-teal-700',
        hoverBorder: 'hover:border-teal-500',
        hoverBg: 'hover:bg-teal-50',
        textColor: 'group-hover:text-teal-700',
        desc: "Prophet's Mosque city, Yanbu Industrial Port, Al Ula heritage UNESCO site",
        cities: ['Madinah', 'Yanbu', 'Al Ula'],
        highlight: 'Ziyarat Tours',
    },
    {
        name: 'Riyadh Region',
        slug: 'riyadh-region',
        emoji: '🏙️',
        color: 'bg-amber-700',
        hoverBorder: 'hover:border-amber-500',
        hoverBg: 'hover:bg-amber-50',
        textColor: 'group-hover:text-amber-700',
        desc: 'Capital province — KKIA airport, business chauffeur, Diriyah, intercity routes',
        cities: ['Riyadh', 'Al Kharj', 'Majmaah', 'Dawadmi', 'Shaqra', 'Zulfi', 'Wadi Ad Dawasir'],
        highlight: 'Capital City',
    },
    {
        name: 'Eastern Province',
        slug: 'eastern-province',
        emoji: '⛽',
        color: 'bg-blue-800',
        hoverBorder: 'hover:border-blue-500',
        hoverBg: 'hover:bg-blue-50',
        textColor: 'group-hover:text-blue-700',
        desc: 'Oil country hub — Dammam, Khobar, Jubail, Bahrain Causeway, Qatar/Kuwait border',
        cities: ['Dammam', 'Al Khobar', 'Dhahran', 'Jubail', 'Qatif', 'Al Ahsa', 'Ras Tanura', 'Khafji', 'Abqaiq'],
        highlight: 'Bahrain & Border',
    },
    {
        name: 'Asir Region',
        slug: 'asir-region',
        emoji: '⛰️',
        color: 'bg-green-800',
        hoverBorder: 'hover:border-green-500',
        hoverBg: 'hover:bg-green-50',
        textColor: 'group-hover:text-green-700',
        desc: "Saudi Arabia's cool highlands — Abha, Soudah Peak (3015m), Rijal Almaa, Al Namas",
        cities: ['Abha', 'Khamis Mushait', 'Bisha', 'Al Namas'],
        highlight: 'Mountain Tours',
    },
    {
        name: 'Tabuk Region',
        slug: 'tabuk-region',
        emoji: '🌊',
        color: 'bg-violet-800',
        hoverBorder: 'hover:border-violet-500',
        hoverBg: 'hover:bg-violet-50',
        textColor: 'group-hover:text-violet-700',
        desc: 'Northwest frontier — NEOM megaproject, Haql Red Sea beaches, Jordan border',
        cities: ['Tabuk', 'NEOM', 'Haql', 'Al Wajh', 'Duba', 'Umluj'],
        highlight: 'NEOM Transfers',
    },
];

const allCitiesByRegion: Record<string, { name: string; slug: string; desc: string }[]> = {
    'Makkah Region': [
        { name: 'Makkah Al-Mukarramah', slug: 'makkah', desc: 'Haram hotel, Ziyarat, Hajj, KAIA airport' },
        { name: 'Jeddah', slug: 'jeddah', desc: 'KAIA airport gateway, Al Balad, Corniche' },
        { name: 'Taif', slug: 'taif', desc: 'Miqat, Al Hada mountain, rose farm tours' },
        { name: 'Rabigh', slug: 'rabigh', desc: 'Economic City, Petro Rabigh, Red Sea' },
        { name: 'KAEC', slug: 'kaec', desc: 'King Abdullah Economic City, Haramain train' },
        { name: 'Al Qunfudhah', slug: 'al-qunfudhah', desc: 'Southern Red Sea coast, Farasan ferry' },
    ],
    'Madinah Region': [
        { name: 'Madinah Al-Munawwarah', slug: 'madinah', desc: "Prophet's Mosque, PMIA airport, Ziyarat tours" },
        { name: 'Yanbu', slug: 'yanbu', desc: 'Industrial City, YNB airport, Red Sea port' },
        { name: 'Al Ula', slug: 'al-ula', desc: 'Hegra UNESCO, Elephant Rock, luxury resorts' },
    ],
    'Riyadh Region': [
        { name: 'Riyadh', slug: 'riyadh', desc: 'KKIA airport, business chauffeur, Diriyah' },
        { name: 'Al Kharj', slug: 'kharj', desc: 'Military City, agriculture, Riyadh satellite' },
        { name: 'Majmaah', slug: 'majmaah', desc: 'University city, northern Riyadh Province' },
        { name: 'Dawadmi', slug: 'dawadmi', desc: 'Western Riyadh gateway, Hejaz connection' },
        { name: 'Shaqra', slug: 'shaqra', desc: 'Heritage town, Ushaiger village nearby' },
        { name: 'Zulfi', slug: 'zulfi', desc: 'Golden dunes, northern Riyadh Province' },
        { name: 'Wadi Ad Dawasir', slug: 'wadi-ad-dawasir', desc: 'Southern gateway, Empty Quarter edge' },
    ],
    'Eastern Province': [
        { name: 'Dammam', slug: 'dammam', desc: 'KFI Airport, Corniche, Half Moon Bay' },
        { name: 'Al Khobar', slug: 'khobar', desc: 'King Fahd Causeway (Bahrain), expat hub' },
        { name: 'Dhahran', slug: 'dhahran', desc: 'Aramco HQ, KFUPM, SANG compound' },
        { name: 'Jubail', slug: 'jubail', desc: 'Royal Commission Industrial City, SABIC' },
        { name: 'Qatif', slug: 'qatif', desc: 'Tarut Island, heritage oasis, date farms' },
        { name: 'Al Ahsa (Hofuf)', slug: 'al-ahsa', desc: 'UNESCO oasis, Al Qara Mountain, border' },
        { name: 'Al Hofuf', slug: 'al-hofuf', desc: 'Al Ahsa city center, palace, heritage' },
        { name: 'Ras Tanura', slug: 'ras-tanura', desc: 'Aramco refinery, Tarut Bay, staff transfers' },
        { name: 'Khafji', slug: 'khafji', desc: 'Kuwait border, Khafji Joint Operations' },
        { name: 'Abqaiq', slug: 'abqaiq', desc: "World's largest oil processing plant" },
        { name: 'Salwa', slug: 'salwa', desc: 'Qatar border crossing (Abu Samra)' },
        { name: 'Hafr Al Batin', slug: 'hafr-al-batin', desc: 'Kuwait border KKMC, northern Eastern' },
    ],
    'Asir Region': [
        { name: 'Abha', slug: 'abha', desc: 'AHB airport, Green Mountain, Soudah tours' },
        { name: 'Khamis Mushait', slug: 'khamis-mushait', desc: 'Twin city to Abha, military, commerce' },
        { name: 'Bisha', slug: 'bisha', desc: 'Northern Asir, BHH airport, date farms' },
        { name: 'Al Namas', slug: 'al-namas', desc: 'Fog city, highland retreat, pomegranates' },
    ],
    'Tabuk Region': [
        { name: 'Tabuk', slug: 'tabuk', desc: 'PSAA airport, Tabuk Castle, NEOM gateway' },
        { name: 'NEOM', slug: 'neom', desc: 'The Line, Sindalah Island, Trojena, Magna' },
        { name: 'Haql', slug: 'haql', desc: 'Gulf of Aqaba, Red Sea diving, Jordan border' },
        { name: 'Al Wajh', slug: 'al-wajh', desc: 'WAE airport, Red Sea coast, coral reefs' },
        { name: 'Duba', slug: 'duba', desc: 'Red Sea port, Duba Harbor, NEOM link' },
        { name: 'Umluj', slug: 'umluj', desc: "Saudi Maldives — turquoise lagoons, islands" },
        { name: 'Al Haditha', slug: 'al-haditha', desc: 'Jordan border (Al Omari crossing)' },
    ],
    'Al Qassim Region': [
        { name: 'Buraidah', slug: 'buraidah', desc: 'QUB airport, Date Festival, Al Qassim hub' },
        { name: 'Unaizah', slug: 'unaizah', desc: "Paris of Najd, Ghadha Park, date markets" },
        { name: 'Al Rass', slug: 'al-rass', desc: 'Qassim gateway, Madinah road link' },
    ],
    'Northern Borders Region': [
        { name: 'Arar', slug: 'arar', desc: 'RAE airport, Iraq border (Jadeed Arar)' },
        { name: 'Rafha', slug: 'rafha', desc: 'RAF airport, Lina Village, Kuwait highway' },
        { name: 'Turaif', slug: 'turaif', desc: "TUI airport, Wa'ad Al Shamal phosphate" },
        { name: 'Al Wadeeah', slug: 'al-wadeeah', desc: 'Yemen border crossing' },
        { name: 'Halat Ammar', slug: 'halat-mmar', desc: 'Pilgrim border crossing, Tabuk road' },
    ],
    'Al Jouf Region': [
        { name: 'Al Jouf (Sakaka)', slug: 'al-jouf', desc: 'AJF airport, Marid Castle, olive farms' },
        { name: 'Qurayyat', slug: 'qurayyat', desc: 'URY airport, Jordan border, agriculture' },
    ],
    'Najran Region': [
        { name: 'Najran', slug: 'najran', desc: 'NJH airport, Emara Palace, Al-Ukhdood' },
        { name: 'Sharurah', slug: 'sharurah', desc: 'SHW airport, Yemen border, Empty Quarter' },
    ],
    'Jizan Region': [
        { name: 'Jazan', slug: 'jazan', desc: 'GIZ airport, Pearl of the South, Farasan Islands' },
    ],
    'Hail Region': [
        { name: 'Hail', slug: 'hail', desc: 'HAS airport, Jubbah rock art UNESCO, heritage' },
    ],
    'Al Bahah Region': [
        { name: 'Al Baha', slug: 'al-baha', desc: 'ABT airport, Thee Ain village, Raghdan Park' },
    ],
    'Special Zones': [
        { name: 'Batha', slug: 'batha', desc: 'Riyadh district, UAE highway, Visa runs' },
    ],
};

const regionColors: Record<string, string> = {
    'Makkah Region': 'border-emerald-200 bg-emerald-50',
    'Madinah Region': 'border-teal-200 bg-teal-50',
    'Riyadh Region': 'border-amber-200 bg-amber-50',
    'Eastern Province': 'border-blue-200 bg-blue-50',
    'Asir Region': 'border-green-200 bg-green-50',
    'Tabuk Region': 'border-violet-200 bg-violet-50',
    'Al Qassim Region': 'border-orange-200 bg-orange-50',
    'Northern Borders Region': 'border-gray-200 bg-gray-50',
    'Al Jouf Region': 'border-lime-200 bg-lime-50',
    'Najran Region': 'border-red-200 bg-red-50',
    'Jizan Region': 'border-cyan-200 bg-cyan-50',
    'Hail Region': 'border-stone-200 bg-stone-50',
    'Al Bahah Region': 'border-rose-200 bg-rose-50',
    'Special Zones': 'border-gray-200 bg-gray-50',
};

const regionHeadingColors: Record<string, string> = {
    'Makkah Region': 'text-emerald-800',
    'Madinah Region': 'text-teal-800',
    'Riyadh Region': 'text-amber-800',
    'Eastern Province': 'text-blue-800',
    'Asir Region': 'text-green-800',
    'Tabuk Region': 'text-violet-800',
    'Al Qassim Region': 'text-orange-800',
    'Northern Borders Region': 'text-gray-700',
    'Al Jouf Region': 'text-lime-800',
    'Najran Region': 'text-red-800',
    'Jizan Region': 'text-cyan-800',
    'Hail Region': 'text-stone-700',
    'Al Bahah Region': 'text-rose-800',
    'Special Zones': 'text-gray-600',
};

export default function LocationsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-gray-50 border-b border-gray-200 py-3">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-gray-900">Home</Link>
                        <span className="mx-2 opacity-40">/</span>
                        <span className="font-semibold text-gray-900">Locations</span>
                    </div>
                </div>

                {/* Hero */}
                <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold">Saudi Arabia — All 13 Regions</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Taxi Service Locations<br /><span className="text-amber-400">in Saudi Arabia</span>
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
                            Professional private taxi across all Saudi Arabia regions — 50+ cities from Makkah to NEOM. Fixed rates, 24/7 WhatsApp booking.
                        </p>
                    </div>
                </section>

                {/* Province Hub Cards */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">Browse by Region</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Saudi Arabia Regions</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Each region page lists every city we serve, popular routes, and local service details.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {provinces.map((province) => (
                                <Link key={province.slug} href={`/locations/${province.slug}`} className="group block">
                                    <div className={`${province.color} text-white p-7 rounded-2xl hover:scale-[1.02] transition-all shadow-md h-full`}>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="text-3xl">{province.emoji}</div>
                                            <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-semibold">{province.highlight}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{province.name}</h3>
                                        <p className="text-sm opacity-85 mb-5 leading-relaxed">{province.desc}</p>
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {province.cities.slice(0, 4).map(city => (
                                                <span key={city} className="text-xs bg-white/20 px-2 py-1 rounded-full">{city}</span>
                                            ))}
                                            {province.cities.length > 4 && (
                                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+{province.cities.length - 4} more</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-semibold opacity-90 group-hover:opacity-100">
                                            <span>View region page</span><ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Cities by Region */}
                <section className="py-16 bg-gray-50 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">All 50+ Cities — Browse by Province</h2>
                            <p className="text-gray-500">Every Saudi city we serve, organized by region.</p>
                        </div>
                        <div className="space-y-10">
                            {Object.entries(allCitiesByRegion).map(([region, cities]) => (
                                <div key={region}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className={`text-lg font-bold ${regionHeadingColors[region] ?? 'text-gray-800'}`}>
                                            {region}
                                        </h3>
                                        <div className="flex-grow h-px bg-gray-200" />
                                        {provinces.find(p => p.name === region) && (
                                            <Link
                                                href={`/locations/${provinces.find(p => p.name === region)!.slug}`}
                                                className={`text-xs font-semibold ${regionHeadingColors[region] ?? 'text-gray-600'} hover:underline flex items-center gap-1`}
                                            >
                                                Region page <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        )}
                                    </div>
                                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3`}>
                                        {cities.map((city) => (
                                            <Link
                                                key={city.slug}
                                                href={`/locations/${city.slug}`}
                                                className={`group flex items-start gap-3 p-4 rounded-xl border ${regionColors[region] ?? 'border-gray-200 bg-gray-50'} hover:shadow-md transition-all`}
                                            >
                                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" />
                                                <div>
                                                    <p className="font-semibold text-gray-900 text-sm leading-snug group-hover:underline">{city.name}</p>
                                                    <p className="text-xs text-gray-500 mt-0.5 leading-tight">{city.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-16 bg-slate-900 text-white text-center">
                    <div className="max-w-xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-4">Don&apos;t see your city?</h2>
                        <p className="text-gray-400 mb-8">We travel across all of Saudi Arabia. WhatsApp us any route — we&apos;ll confirm availability and a fixed rate instantly.</p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Saudi%20Arabia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us Now
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
