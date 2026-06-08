import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2 } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jeddah/kaec' },
    title: 'KAEC Taxi | King Abdullah Economic City to Jeddah & KAIA Airport Transfer',
    description: 'Private taxi between KAEC (King Abdullah Economic City) and Jeddah KAIA Airport. 90-minute fixed-rate transfer. Business and expat transfers, Makkah connections available.',
    keywords: ['KAEC taxi', 'King Abdullah Economic City taxi', 'KAEC to Jeddah taxi', 'KAEC airport transfer', 'KAEC to KAIA taxi', 'Rabigh KAEC taxi'],
    openGraph: {
        title: 'KAEC Taxi — King Abdullah Economic City to Jeddah & KAIA',
        description: 'Fixed-rate taxi between KAEC and Jeddah. 90 min. Business, expat, and airport transfers. Book via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/jeddah/kaec',
        type: 'website',
    },
};

export default function KaecPage() {
    const routes = [
        { dest: 'KAIA Jeddah Airport', time: '90 min', dist: '130 km', note: '24/7 flight-tracked service' },
        { dest: 'Jeddah City Center', time: '90 min', dist: '130 km', note: 'Direct via Prince Naif highway' },
        { dest: 'North Jeddah / Obhur', time: '60 min', dist: '80 km', note: 'Compounds and resorts' },
        { dest: 'Makkah', time: '2.5 hrs', dist: '200 km', note: 'Via Jeddah expressways' },
        { dest: 'Madinah', time: '3 hrs', dist: '290 km', note: 'Via Hijrah Highway' },
        { dest: 'Riyadh', time: '8–9 hrs', dist: '900 km', note: 'Long-haul via Route 40' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jeddah">Jeddah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">KAEC</span>
                </div>
            </div>

            <section className="bg-purple-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">King Abdullah Economic City · Rabigh</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">KAEC Taxi — King Abdullah Economic City Transfers</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Fixed-rate private taxi between <strong>KAEC (King Abdullah Economic City)</strong> and Jeddah, KAIA Airport, Makkah, and Madinah. 90-minute Jeddah connection — serve business and expat passengers across KAEC&apos;s residential and commercial zones.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20KAEC%20to%20Jeddah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book KAEC Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-purple-50 border-b border-purple-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">90 min</div><div className="text-sm text-gray-600">KAEC to Jeddah</div></div>
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">130 km</div><div className="text-sm text-gray-600">from Jeddah City</div></div>
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">24/7</div><div className="text-sm text-gray-600">Airport Service</div></div>
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">Fixed</div><div className="text-sm text-gray-600">No Surge Pricing</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">KAEC Transfer Routes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {routes.map((r, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-gray-900">{r.dest}</div>
                                    <div className="text-sm text-gray-500">{r.dist} · {r.note}</div>
                                </div>
                                <div className="flex items-center gap-1 text-purple-700 font-bold whitespace-nowrap ml-3">
                                    <Clock className="w-4 h-4" />{r.time}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">KAEC Areas We Serve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'KAEC Residential Zone', desc: 'All residential compounds, apartments, and villas within the King Abdullah Economic City perimeter.' },
                            { title: 'KAEC Business & Industrial', desc: 'Factories, offices, port facilities, and commercial developments throughout KAEC.' },
                            { title: 'KAEC Beach & Hospitality', desc: 'Beachfront hotels, Sharm Obhur area, and recreation facilities in the economic city.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <CheckCircle2 className="w-6 h-6 text-green-500 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-purple-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your KAEC Transfer</h2>
                    <p className="mb-8 opacity-90">WhatsApp your KAEC address, destination, group size, and travel date for an instant fixed quote.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20taxi%20from%20KAEC%20King%20Abdullah%20Economic%20City" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book KAEC Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jeddah/north-jeddah" className="text-slate-600 hover:underline">← North Jeddah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jeddah" className="text-slate-600 hover:underline">Jeddah Hub</Link>
            </div>
        </div>
    );
}
