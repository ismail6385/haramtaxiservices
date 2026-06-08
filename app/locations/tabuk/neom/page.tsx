import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/tabuk/neom' },
    title: 'NEOM Taxi from Tabuk | The Line, NEOM Bay & Sindalah Transfer Guide 2026',
    description: 'Taxi from Tabuk to NEOM (The Line, NEOM Bay, Sindalah, Gayal, Trojena). 200km northwest, 2.5 hours. NEOM workers and visitors: checkpoint-familiar drivers, fixed rates, 24/7.',
    keywords: ['NEOM taxi Tabuk', 'The Line NEOM transfer', 'NEOM Bay transport', 'Sindalah taxi', 'Tabuk to NEOM taxi', 'NEOM worker transport', 'Gayal NEOM taxi'],
    openGraph: {
        title: 'Tabuk to NEOM — The Line, NEOM Bay, Sindalah Taxi & Transfer Guide',
        description: 'Private taxi from Tabuk to NEOM megaproject. 200km, 2.5 hrs. Worker rotations, visitor transfers, fixed rates.',
        url: 'https://haramtaxiservice.com/locations/tabuk/neom',
        type: 'website',
    },
};

const faqs = [
    { question: 'How far is Tabuk from NEOM Bay?', answer: "Tabuk to NEOM Bay (Sharma) is approximately 200km — about 2.5 hours via Route 55 northwest toward the Gulf of Aqaba coast. The route passes through Sharma Bay and the NEOM coastal zone." },
    { question: 'Do I need a permit to enter NEOM?', answer: "Yes — NEOM is a controlled development zone. Visitors and workers require permits issued by NEOM LLC or their sponsoring NEOM contractor. General tourist visit permits are available through NEOM's official visitor programme. Construction zone access requires a NEOM-issued contractor ID or visitor access pass. Ensure your NEOM host has issued your permit before booking transport — our driver cannot enter restricted construction zones without passenger permit documentation." },
    { question: 'What are the different NEOM sub-destinations?', answer: "NEOM covers approximately 26,500 km² in northwestern Saudi Arabia (Tabuk Province). Main sub-destinations: (1) NEOM Bay — the coastal hub near Sharma, including NEOM Bay Airport (NUM); (2) The Line — 170km linear city, construction active; (3) Sindalah — island luxury resort (first area opening ~2025–26); (4) Gayal — mountain resort (former Shalatein area); (5) Trojena — mountain ski/outdoor resort (2029 Asian Winter Games venue). Each has different access routes and permit requirements." },
    { question: 'Can I take a taxi from NEOM Bay Airport (NUM)?', answer: "Yes — NEOM Bay Airport (Sharma Airport, IATA: NUM) opened in 2022 for NEOM-related and charter flights. We provide pickup from NUM Airport to NEOM Bay hotels, Tabuk (2.5 hrs), Jeddah (12 hrs+), and Madinah (8 hrs+). WhatsApp your flight number and arrival time for a pre-booked pickup." },
    { question: 'Do you serve NEOM worker rotation transfers?', answer: "Yes — NEOM worker rotation transport is a significant part of our Tabuk service. We handle contractors rotating from Tabuk Airport (TUU) or Tabuk City to NEOM Bay, The Line, and Gayal sites. For group rotations: WhatsApp your project site, worker count, and rotation date/time. Multiple vehicles available for larger groups." },
];

export default function NEOMPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/tabuk">Tabuk</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">NEOM</span>
                </div>
            </div>

            <section className="bg-cyan-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">NEOM Province · 200km from Tabuk · Vision 2030</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Tabuk to NEOM — The Line, NEOM Bay & Sindalah Taxi Transfers</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Private taxi from <strong>Tabuk to NEOM</strong> megaproject — <strong>The Line, NEOM Bay, Sindalah, Gayal, Trojena</strong>. 200km northwest, 2.5 hours. NEOM workers and visitors: checkpoint-familiar drivers, 24/7, fixed rates.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Tabuk%20to%20NEOM" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Tabuk–NEOM Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-cyan-50 border-b border-cyan-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-cyan-700 mb-1">200 km</div><div className="text-sm text-gray-600">Tabuk to NEOM Bay</div></div>
                        <div><div className="text-3xl font-bold text-cyan-700 mb-1">2.5 hrs</div><div className="text-sm text-gray-600">Drive Time</div></div>
                        <div><div className="text-3xl font-bold text-cyan-700 mb-1">24/7</div><div className="text-sm text-gray-600">Worker Rotations</div></div>
                        <div><div className="text-3xl font-bold text-cyan-700 mb-1">Fixed</div><div className="text-sm text-gray-600">Rate Confirmed on WhatsApp</div></div>
                    </div>
                </div>
            </section>

            <div className="py-6 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-900"><strong>NEOM Permit Reminder:</strong> All visitors and workers entering NEOM require valid access permits issued by NEOM LLC or your sponsoring contractor. Our driver cannot enter restricted zones without passenger permit documentation. Ensure you have your permit before booking transport.</p>
                    </div>
                </div>
            </div>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">NEOM Sub-Destinations from Tabuk</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'NEOM Bay (Sharma)', dist: '200 km · 2.5 hrs', desc: 'The coastal hub of NEOM — NEOM Bay Airport (NUM), hotels, and the Gulf of Aqaba waterfront. First area accessible to visitors and workers.', type: 'Coastal Hub' },
                            { name: 'The Line', dist: '210–230 km · 2.5–3 hrs', desc: '170km linear city under active construction. Access strictly controlled to NEOM contractors with site passes. Worker shuttle point from Tabuk.', type: 'Construction Zone' },
                            { name: 'Sindalah Island', dist: '205 km · 2.5 hrs', desc: 'Luxury island resort in the Gulf of Aqaba — first NEOM destination opening to visitors. Yacht marina, hospitality venues. Ferry or water taxi from NEOM Bay.', type: 'Luxury Resort' },
                            { name: 'Gayal (Former Shalatein)', dist: '240 km · 3 hrs', desc: 'Mountain and highland zone of NEOM — dramatic Hisma plateau scenery. Development for eco-tourism and adventure facilities.', type: 'Mountain Zone' },
                            { name: 'Trojena', dist: '240 km · 3 hrs', desc: 'Mountain ski and outdoor resort in NEOM\'s Hisma highlands. Venue for the 2029 Asian Winter Games. Ski slopes, adventure park, lake, and year-round mountain resort.', type: '2029 Asian Winter Games' },
                            { name: 'NEOM Bay Airport (NUM)', dist: '200 km · 2.5 hrs', desc: 'Sharma Airport — the gateway airport for NEOM. Serves NEOM-specific and charter flights. Pickup and drop-off for arriving NEOM workers and visitors.', type: 'NEOM Airport' },
                        ].map((dest, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <div className="text-xs font-bold text-cyan-700 uppercase tracking-wide mb-2">{dest.type}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{dest.name}</h3>
                                <div className="flex items-center gap-1 text-xs text-gray-500 mb-3"><Clock className="w-3 h-3" />{dest.dist}</div>
                                <p className="text-sm text-gray-600 leading-relaxed">{dest.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why NEOM Workers Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'Checkpoint Route Knowledge', desc: 'Our drivers know the NEOM entry routes and which checkpoint lanes are used for private passenger vehicles versus construction transport. No fumbling at the checkpoint.' },
                            { title: 'Rotation Scheduling', desc: 'We handle regular contractor rotation scheduling — same driver each rotation, familiar with your route and site. WhatsApp us your rotation calendar for the month.' },
                            { title: 'Group Transport', desc: 'For groups of 4–12 workers rotating together, we deploy appropriate vehicles (GMC Yukon XL, Toyota Hiace). One booking covers the full group.' },
                            { title: 'Flight Coordination', desc: 'Rotations often involve Tabuk Airport (TUU) transfers. We track your incoming flights and have your vehicle ready at arrivals — regardless of delay.' },
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-cyan-100 flex gap-4">
                                <CheckCircle2 className="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                                    <p className="text-sm text-gray-600">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">NEOM Transport FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-cyan-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-cyan-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Tabuk–NEOM Transfer</h2>
                    <p className="mb-8 opacity-90">Workers and visitors — fixed rate, 24/7, checkpoint-familiar drivers.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Tabuk%20to%20NEOM" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book NEOM Transfer
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/tabuk/tabuk-castle" className="text-slate-600 hover:underline">← Tabuk Castle</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/tabuk/haql" className="text-slate-600 hover:underline">Haql & Jordan Border →</Link>
            </div>
        </div>
    );
}
