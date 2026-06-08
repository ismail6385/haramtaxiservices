import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jeddah/north-jeddah' },
    title: 'North Jeddah Taxi | Obhur, KAUST & New Districts Transfer Service',
    description: 'Private taxi in North Jeddah — Obhur Creek, KAUST Thuwal, Red Sea Mall, Al Shallal, and all northern residential compounds. Fixed-rate KAIA and intercity transfers.',
    keywords: ['North Jeddah taxi', 'Obhur taxi Jeddah', 'KAUST taxi Jeddah', 'Al Shallal Jeddah taxi', 'Red Sea Mall Jeddah taxi', 'North Jeddah compound taxi'],
    openGraph: {
        title: 'North Jeddah Taxi | Obhur, KAUST & New Districts',
        description: 'Reliable taxi in North Jeddah, Obhur, KAUST, and northern compounds. Airport transfers and intercity routes at fixed rates.',
        url: 'https://haramtaxiservice.com/locations/jeddah/north-jeddah',
        type: 'website',
    },
};

export default function NorthJeddahPage() {
    const areas = [
        { name: 'Obhur Creek & Resorts', desc: 'Red Sea beach resorts and marina — 40km north of Jeddah city center', time: '40 min from KAIA' },
        { name: 'KAUST (Thuwal)', desc: 'King Abdullah University of Science and Technology campus', time: '60 min from KAIA' },
        { name: 'Red Sea Mall', desc: 'Major north Jeddah shopping mall — 30km north of city center', time: '35 min from KAIA' },
        { name: 'Al Shallal Theme Park', desc: 'Family entertainment complex with rides and ice rink', time: '35 min from KAIA' },
        { name: 'Al Andalus Mall', desc: 'North Jeddah shopping and dining complex', time: '30 min from KAIA' },
        { name: 'North Jeddah Compounds', desc: 'Expat residential compounds — Hayat, Seder, Al Rabwa and others', time: '30–45 min from KAIA' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jeddah">Jeddah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">North Jeddah & Obhur</span>
                </div>
            </div>

            <section className="bg-stone-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">North Jeddah · Obhur · KAUST</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">North Jeddah Taxi — Obhur, KAUST &amp; New Districts</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Reliable taxi in <strong>North Jeddah</strong> covering Obhur Creek, KAUST (Thuwal), Red Sea Mall, Al Shallal, and all northern residential compounds. KAIA airport transfers and intercity routes at fixed rates.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20North%20Jeddah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book North Jeddah Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">North Jeddah Destinations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {areas.map((a, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <MapPin className="w-6 h-6 text-stone-500 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{a.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{a.desc}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-400"><Clock className="w-3 h-3" />{a.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Services for North Jeddah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'KAIA Airport Transfers', desc: '24/7 airport service to all North Jeddah addresses and compounds. Fixed rate, flight tracked, driver meets at arrivals.' },
                            { title: 'KAEC Day Trips', desc: 'North Jeddah to King Abdullah Economic City — 30-minute drive north. Business and leisure transfers available.' },
                            { title: 'Makkah & Madinah Runs', desc: 'Direct transfers to Makkah (90 min) and Madinah (4 hrs) from your North Jeddah compound or hotel.' },
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

            <section className="py-16 bg-stone-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book from North Jeddah</h2>
                    <p className="mb-8 opacity-90">WhatsApp your compound name or address, destination, and travel date for an instant fixed quote.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20taxi%20from%20North%20Jeddah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Now
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jeddah" className="text-slate-600 hover:underline">← Back to Jeddah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jeddah/kaec" className="text-slate-600 hover:underline">KAEC →</Link>
            </div>
        </div>
    );
}
