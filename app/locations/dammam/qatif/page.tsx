import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/dammam/qatif' },
    title: 'Qatif Taxi | Qatif Old Town, Tarout Island & Eastern Province Transfers',
    description: 'Taxi service in Qatif — Qatif old town, Tarout Island, date palm groves, Qatif Corniche. Dammam to Qatif, KFAC Airport transfers. Fixed rates, 24/7.',
    keywords: ['Qatif taxi', 'Tarout Island taxi', 'Qatif old town taxi', 'Dammam to Qatif taxi', 'Qatif Corniche taxi', 'Eastern Province taxi', 'Qatif heritage taxi'],
    openGraph: {
        title: 'Qatif Taxi — Old Town, Tarout Island & Heritage Transfers',
        description: 'Professional taxi in Qatif. Old town, Tarout Island, date palm groves. Fixed rates, 24/7.',
        url: 'https://haramtaxiservice.com/locations/dammam/qatif',
        type: 'website',
    },
};

const faqs = [
    { question: 'How far is Qatif from Dammam?', answer: "Qatif is approximately 25km north of central Dammam — about 30 minutes by taxi. From Al Khobar: 55km, 50 minutes. From KFAC Airport: 60km, 1 hour." },
    { question: 'What is Qatif known for?', answer: "Qatif is one of the oldest continuously inhabited areas in the Eastern Province — a historic port city with an ancient mud-brick old town (Al-Qadimah), traditional souqs, and famous date palm groves. Tarout Island (connected by causeway) has one of the most archaeologically significant sites in Arabia, with a Dilmun-era fort and castle ruins dating to 3000 BCE. The Qatif Corniche is a popular waterfront promenade." },
    { question: 'Is Tarout Island accessible by taxi?', answer: "Yes — Tarout Island is connected to the Qatif mainland by a short causeway and is accessible by taxi. Tarout Castle (Al-Qal'a Fort ruins), the fish market, and traditional pearl-fishing villages are the main attractions. Our driver navigates to specific sites on the island. Day trips from Dammam or Khobar are common." },
    { question: 'Can I visit Qatif old town (Al-Qadimah)?', answer: "Qatif old town (Al-Qadimah) is a historic walled neighbourhood with traditional architecture. Much of it is in varying states of preservation and is open for walking exploration. The covered souq (covered market) near the old town gateway sells local produce, dates, and traditional goods. Local guides are not required — taxis navigate to the old town gate directly." },
    { question: 'What are the Qatif date farms and when are dates in season?', answer: "Qatif is famous for its Khalas dates — considered among the finest in Saudi Arabia. The date palm groves (around Al-Awamiyah and the northern Qatif oasis areas) are a distinctive landscape of the region. Date harvest season is August to September, when fresh Khalas dates are sold at roadside stalls around Qatif." },
];

export default function QatifPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/dammam">Dammam</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Qatif</span>
                </div>
            </div>

            <section className="bg-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Qatif · Tarout Island · Old Town · Date Palm Oasis</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Qatif Taxi — Old Town, Tarout Island &amp; Heritage Transfers</h1>
                        <p className="text-xl text-green-100 mb-8 font-light">
                            Professional taxi in <strong>Qatif</strong> — one of Arabia&apos;s oldest inhabited cities. <strong>Old town, Tarout Island, date groves, and Qatif Corniche.</strong> Day trips from Dammam and Khobar. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Qatif" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Qatif Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-green-50 border-b border-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-green-700 mb-1">5,000 yrs</div><div className="text-sm text-gray-600">Oldest Inhabited Port</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">Tarout</div><div className="text-sm text-gray-600">Dilmun-Era Island</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">Khalas</div><div className="text-sm text-gray-600">Premium Qatif Dates</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">25 km</div><div className="text-sm text-gray-600">from Dammam</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Qatif &amp; Tarout — Key Destinations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Qatif Old Town (Al-Qadimah)', desc: 'The historic walled district with traditional mud-brick architecture, narrow alleys, and the covered souq. One of the most authentic old-city experiences in the Eastern Province.', note: 'Accessible on foot — taxi drops at main gate.' },
                            { title: 'Tarout Island & Tarout Castle', desc: 'A small island connected by causeway with an ancient Dilmun-era fort (3000 BCE) and a traditional fishing village. Al-Qal\'a Fort ruins overlook the Gulf — one of the oldest castles in Arabia.', note: 'Island accessible by road. Fort ruins freely accessible.' },
                            { title: 'Qatif Corniche', desc: 'The waterfront promenade running along the Gulf shore — parks, seafood restaurants, and shaded walkways. Popular for families and weekend visitors from Dammam and Khobar.', note: 'Best visited late afternoon or after Maghrib.' },
                            { title: 'Date Palm Groves', desc: 'Qatif is famous for Khalas dates — consider the finest in Saudi Arabia. The oasis groves around the city are a distinctive landscape visible from the road.', note: 'Fresh dates available at roadside stalls: Aug–Sept.' },
                            { title: 'Qatif Fish Market', desc: 'One of the best fresh seafood markets in the Eastern Province. Local fishermen sell Gulf catch daily. Near the old harbour and Tarout bay area.', note: 'Best early morning (6–9am) for freshest catch.' },
                            { title: 'Al-Awamiyah Area', desc: 'Traditional date-farming village north of Qatif with oasis scenery and traditional architecture. A quieter alternative for those interested in Eastern Province agricultural heritage.', note: '15 minutes north of central Qatif.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-green-700 font-medium border-t border-green-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Qatif Taxi Routes</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Route</th>
                                    <th className="px-5 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-5 py-4 text-left font-semibold">Time</th>
                                    <th className="px-5 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { route: 'Dammam to Qatif', dist: '25 km', time: '30 min', note: 'City centre to Qatif old town area' },
                                    { route: 'Khobar to Qatif', dist: '55 km', time: '50 min', note: 'Via Dammam–Khobar highway' },
                                    { route: 'KFAC Airport to Qatif', dist: '60 km', time: '1 hr', note: 'Airport direct to Qatif' },
                                    { route: 'Qatif to Tarout Island', dist: '5 km', time: '10 min', note: 'Short causeway crossing' },
                                    { route: 'Dammam–Qatif Day Trip', dist: 'Roundtrip', time: 'Half day', note: 'Driver waits — old town, Tarout, corniche' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-gray-900">{row.route}</td>
                                        <td className="px-5 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-5 py-4 font-bold text-green-700">{row.time}</td>
                                        <td className="px-5 py-4 text-gray-500">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Qatif Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-green-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Qatif Taxi</h2>
                    <p className="mb-8 opacity-90">Old town, Tarout Island, date groves — day trips from Dammam or Khobar.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Qatif" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Qatif Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/dammam/bahrain-causeway" className="text-slate-600 hover:underline">← Bahrain Causeway</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/dammam" className="text-slate-600 hover:underline">Back to Dammam Hub</Link>
            </div>
        </div>
    );
}
