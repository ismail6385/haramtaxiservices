import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jeddah/al-hamra' },
    title: 'Al Hamra & Al Rawdah Jeddah Taxi | Upscale District Transfer Service',
    description: 'Private taxi in Al Hamra and Al Rawdah — Jeddah\'s upscale residential and commercial district. KAIA airport transfers, compound pickups, and intercity routes. Fixed rate.',
    keywords: ['Al Hamra Jeddah taxi', 'Al Rawdah Jeddah taxi', 'Jeddah residential district taxi', 'Al Hamra compound taxi', 'Jeddah expat taxi'],
    openGraph: {
        title: 'Al Hamra & Al Rawdah Jeddah Taxi | Private Residential Transfer',
        description: 'Reliable taxi in Al Hamra and Al Rawdah, Jeddah. Airport transfers, city routes, and intercity connections. Fixed rates, no surge.',
        url: 'https://haramtaxiservice.com/locations/jeddah/al-hamra',
        type: 'website',
    },
};

export default function AlHamraJeddahPage() {
    const travelTimes = [
        { dest: 'KAIA Airport', time: '20–25 min', dist: '25 km' },
        { dest: 'Al Balad (Historic Jeddah)', time: '10–15 min', dist: '5 km' },
        { dest: 'Jeddah Corniche', time: '5–10 min', dist: '3 km' },
        { dest: 'Makkah', time: '75–90 min', dist: '100 km' },
        { dest: 'Madinah', time: '4 hrs', dist: '400 km' },
        { dest: 'Taif', time: '2.5 hrs', dist: '170 km' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jeddah">Jeddah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al Hamra & Al Rawdah</span>
                </div>
            </div>

            <section className="bg-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Upscale Residential · Central Jeddah</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al Hamra &amp; Al Rawdah Jeddah Taxi</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Reliable taxi service in <strong>Al Hamra and Al Rawdah</strong> — Jeddah&apos;s central upscale residential and commercial corridor. Airport transfers, Makkah runs, compound pickups, and intercity routes, all at fixed rates.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al%20Hamra%20Jeddah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Travel Times from Al Hamra</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {travelTimes.map((t, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-gray-900">{t.dest}</div>
                                    <div className="text-sm text-gray-500">{t.dist}</div>
                                </div>
                                <div className="flex items-center gap-2 text-brand-navy-dark font-bold">
                                    <Clock className="w-4 h-4" />{t.time}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Services in Al Hamra &amp; Al Rawdah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'KAIA Airport Transfers', desc: '24/7 airport pickup and drop-off from your Al Hamra address — fixed fare, flight tracked.' },
                            { title: 'Makkah Transfers', desc: 'Direct transfer to Makkah hotels via Haramain Expressway — 75 minutes, Hajj permits available.' },
                            { title: 'Intercity Routes', desc: 'Madinah, Taif, Riyadh, Abha — all intercity routes from your Al Hamra or Al Rawdah address.' },
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

            <section className="py-16 bg-green-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book from Al Hamra or Al Rawdah</h2>
                    <p className="mb-8 opacity-90">WhatsApp your address, destination, and travel date for an instant fixed quote.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20taxi%20from%20Al%20Hamra%20Jeddah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Now
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jeddah" className="text-slate-600 hover:underline">← Back to Jeddah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jeddah/north-jeddah" className="text-slate-600 hover:underline">North Jeddah →</Link>
            </div>
        </div>
    );
}
