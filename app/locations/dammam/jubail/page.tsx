import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/dammam/jubail' },
    title: 'Jubail Taxi | Jubail Industrial City, SABIC & Contractor Transfers',
    description: 'Taxi to Jubail Industrial City — SABIC, petrochem plants, contractor transfers, KFAC Airport pickups to Jubail. Fixed rates for individuals and corporate groups. 24/7.',
    keywords: ['Jubail taxi', 'Jubail Industrial City taxi', 'SABIC Jubail taxi', 'contractor transfer Jubail', 'Dammam to Jubail taxi', 'Khobar to Jubail taxi', 'KFAC to Jubail transfer'],
    openGraph: {
        title: 'Jubail Taxi — Industrial City, SABIC & Contractor Airport Transfers',
        description: 'Professional taxi to Jubail Industrial City. SABIC, contractor transfers, KFAC Airport. Fixed rates, group vehicles.',
        url: 'https://haramtaxiservice.com/locations/dammam/jubail',
        type: 'website',
    },
};

const faqs = [
    { question: 'How far is Jubail from Dammam and how long does it take?', answer: "Jubail Industrial City is approximately 100km north of Dammam — about 1 hour by taxi via the coastal highway (Highway 5). From Al Khobar: 130km, 1.5 hours. From KFAC Airport: 140km, 1.5 hours." },
    { question: 'Do you transfer contractors to the Jubail industrial facilities?', answer: "Yes — contractor and employee transfers to Jubail Industrial City are one of our primary services for the Eastern Province. We serve SABIC, SADAF, SAFCO, and the various downstream facilities. Drop-off at compound gates, site offices, and guesthouses. For regular contractor rotations, ask about fixed monthly rates." },
    { question: 'Is Jubail only for workers, or can visitors go too?', answer: "Jubail has two distinct zones: Jubail Industrial City (Royal Commission area — requires authorization for many areas) and Jubail Al-Sinai (the residential/commercial city). The residential city has a corniche, souqs, and restaurants that are open to all. The industrial zone has strict access control but visitors with host authorization can enter." },
    { question: 'Do you provide group transport for Jubail shifts?', answer: "Yes — for contractor shift changes and group movements, we offer vehicles accommodating 4–12 passengers. Advance booking required for groups of 5 or more. Common use: morning shift drops at Jubail complex, evening return to Dammam or KFAC Airport." },
    { question: 'What is the Jubail Corniche?', answer: "The Jubail Al-Sinai Corniche is a seafront promenade in the residential city, separate from the industrial complex. It features parks, restaurants, and a popular weekend destination for Eastern Province families. Accessible to all visitors." },
];

export default function JubailPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/dammam">Dammam</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Jubail Industrial City</span>
                </div>
            </div>

            <section className="bg-orange-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Jubail Industrial City · SABIC · Eastern Province</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jubail Taxi — Industrial City, SABIC &amp; Contractor Transfers</h1>
                        <p className="text-xl text-orange-100 mb-8 font-light">
                            Professional taxi to <strong>Jubail Industrial City</strong> — one of the world&apos;s largest industrial cities. SABIC, SADAF, petrochem contractors, KFAC Airport transfers. <strong>Fixed rates, 24/7, group vehicles available.</strong>
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jubail%20Industrial%20City" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Jubail Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-orange-50 border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">100 km</div><div className="text-sm text-gray-600">from Dammam</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">~1 hr</div><div className="text-sm text-gray-600">Travel Time</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Groups</div><div className="text-sm text-gray-600">4–12 Passengers</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">24/7</div><div className="text-sm text-gray-600">Shift Transfers</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Jubail Industrial City — Key Areas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'SABIC Headquarters & Plants', desc: 'Saudi Arabia\'s global petrochemical company — headquartered in Riyadh but major operations in Jubail. SABIC industrial complex transfers from Dammam, KFAC Airport, and Al Khobar.', note: 'Gate access requires visitor/employee pass from SABIC host.' },
                            { title: 'SADAF, SAFCO & Complex Plants', desc: 'Multiple integrated downstream petrochemical facilities in Jubail Industrial City: SADAF, SAFCO, National Petrochemical Company, Arabian Petrochemical, and others. Contractor and staff transfers daily.', note: 'Jubail Industrial City covers 1,000+ sq km — specify your facility gate.' },
                            { title: 'Jubail Al-Sinai (Residential City)', desc: 'The residential and commercial zone of Jubail — with the Gulf Corniche, Al-Sinai Park, markets, and restaurants. Open to all visitors. Hotels and guesthouses are in this area, not the industrial zone.', note: 'Guesthouses: Royal Beach Hotel, Al Hamra area. 5 min from industrial zone gates.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-orange-700 font-medium border-t border-orange-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Routes to Jubail</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-orange-800 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Route</th>
                                    <th className="px-5 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-5 py-4 text-left font-semibold">Time</th>
                                    <th className="px-5 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { route: 'Dammam to Jubail', dist: '100 km', time: '1 hr', note: 'Via Highway 5 (coastal)' },
                                    { route: 'KFAC Airport to Jubail', dist: '140 km', time: '1.5 hrs', note: 'Flight-tracked KFAC pickup' },
                                    { route: 'Al Khobar to Jubail', dist: '130 km', time: '1.5 hrs', note: 'Via coastal highway north' },
                                    { route: 'Riyadh to Jubail', dist: '450 km', time: '4.5 hrs', note: 'Intercity executive transfer' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-gray-900">{row.route}</td>
                                        <td className="px-5 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-5 py-4 font-bold text-orange-700">{row.time}</td>
                                        <td className="px-5 py-4 text-gray-500">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Corporate &amp; Contractor Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { title: 'KFAC Airport to Jubail — Contractor Pickup', desc: 'Flight-tracked, name board at DMM arrivals. Direct to your Jubail facility or guesthouse.' },
                            { title: 'Shift Rotation Transport', desc: 'Morning and evening shift drops for contractors. Groups of 4–12 in one vehicle — ask for rates.' },
                            { title: 'Jubail to Dammam / Khobar', desc: 'Return trips from Jubail to Dammam city, Khobar hotels, or KFAC Airport for departing staff.' },
                            { title: 'Monthly Corporate Accounts', desc: 'Fixed monthly billing for companies with regular Jubail transfer needs.' },
                            { title: 'Executive Transfers', desc: 'Comfortable vehicles for site managers and executive visitors to Jubail facilities.' },
                            { title: 'Jubail Corniche & Leisure', desc: 'Day transfers for workers\' rest days — Jubail Corniche, Al-Sinai Park, and Dammam.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-100 flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                                    <p className="text-xs text-gray-600">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jubail Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-orange-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-orange-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Jubail Transfer</h2>
                    <p className="mb-8 opacity-90">Contractors, corporate groups, KFAC Airport pickups — fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jubail%20Industrial%20City" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Jubail Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/dammam/kfac-airport" className="text-slate-600 hover:underline">← KFAC Airport</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/dammam/bahrain-causeway" className="text-slate-600 hover:underline">Bahrain Causeway →</Link>
            </div>
        </div>
    );
}
