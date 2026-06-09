import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/dammam/khobar' },
    title: 'Al Khobar Taxi | Bahrain Causeway, Corniche & Corporate Transfers 2026',
    description: 'Taxi service in Al Khobar — Bahrain Causeway crossings, Gulf Corniche, Dhahran Aramco, and KFAC Airport. Fixed rates, 24/7. Closest Saudi city to Bahrain.',
    keywords: ['Al Khobar taxi', 'Khobar to Bahrain taxi', 'Khobar Corniche taxi', 'Khobar airport transfer', 'Khobar Dhahran taxi', 'taxi Khobar Saudi Arabia'],
    openGraph: {
        title: 'Al Khobar Taxi — Bahrain Causeway, Corniche & Airport Transfers',
        description: 'Professional taxi in Al Khobar. Bahrain Causeway crossings, Gulf Corniche, KFAC Airport, Aramco/Dhahran. Fixed rates, 24/7.',
        url: 'https://haramtaxiservice.com/locations/dammam/khobar',
        type: 'website',
        images: [{ url: '/khobar-water-tower.webp', width: 1200, height: 630, alt: 'Al Khobar Water Tower — Eastern Province Saudi Arabia' }],
    },
};

const faqs = [
    { question: 'How far is Al Khobar from the Bahrain Causeway entrance?', answer: "The King Fahd Causeway Saudi entrance (at Al Aziziyah checkpoint) is approximately 25km north of central Al Khobar — about 25–30 minutes by taxi. This is the closest Saudi city to Bahrain, which is why Khobar is the primary embarkation point for Causeway crossings." },
    { question: 'How long does the full Khobar to Manama journey take?', answer: "From central Al Khobar to central Manama (Bahrain): typically 1 hour to 1.5 hours. The 25km Causeway drive takes 20–30 minutes. The two immigration checkpoints (Saudi exit + Bahrain entry) add 15–45 minutes on a normal day. Peak times — Thursday evenings, Saudi holidays, Bahrain Grand Prix week — can push checkpoint wait to 1–2 hours." },
    { question: 'What is the Al Khobar Corniche?', answer: "The Al Khobar Corniche is a 9km waterfront promenade along the Gulf of Arabia. It runs from the ARAMCO area south through the city centre with parks, restaurants, cafes, and the iconic Khobar Water Tower. One of the Eastern Province's most popular leisure destinations. Taxis from Dammam or KFAC Airport to the Khobar Corniche area are available 24/7." },
    { question: 'Do you serve the Khobar industrial and corporate area?', answer: "Yes — Al Khobar is the commercial hub of the Eastern Province with major corporate offices, banks, and the Dhahran Expo & Convention Centre nearby. We serve all business addresses in Khobar including the business district, Al Olaya towers, and the Thuwal industrial area." },
    { question: 'How far is Al Khobar from KFAC Airport?', answer: "Al Khobar (city centre) to King Fahd International Airport (DMM/KFAC) is approximately 40km — about 40–45 minutes. We provide pre-booked pickups from KFAC with flight tracking at no extra charge for delays." },
];

export default function KhobarPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/dammam">Dammam</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al Khobar</span>
                </div>
            </div>

            <section className="relative h-[420px] bg-gray-900">
                <Image src="/khobar-water-tower.webp" alt="Al Khobar Water Tower — Eastern Province Saudi Arabia" width={1200} height={420} className="w-full h-full object-cover opacity-60" sizes="100vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-700 rounded-full mb-5">
                                <MapPin className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold uppercase tracking-wider">Eastern Province · Gulf Corniche · Bahrain Gateway</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Al Khobar Taxi — Bahrain Causeway, Corniche &amp; Airport</h1>
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al%20Khobar" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                    <WhatsAppIcon className="w-5 h-5" />Book Khobar Taxi
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-sky-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">25 km</div><div className="text-sm opacity-85">to Bahrain Causeway</div></div>
                        <div><div className="text-3xl font-bold mb-1">~1 hr</div><div className="text-sm opacity-85">to Manama, Bahrain</div></div>
                        <div><div className="text-3xl font-bold mb-1">9 km</div><div className="text-sm opacity-85">Gulf Corniche</div></div>
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-85">Causeway & Airport</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Al Khobar — Key Areas &amp; Transport Points</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Bahrain Causeway Access', desc: 'Al Khobar is the closest Saudi city to the King Fahd Causeway entrance (25km north). Our taxi takes you from your Khobar hotel or address directly to the Causeway checkpoint — or all the way through to Manama with an immigration-experienced driver.', detail: 'Causeway toll: paid on Saudi side. Bahrain entry: customs check for all nationalities.' },
                            { title: 'Al Khobar Corniche & City Centre', desc: 'The 9km Khobar Corniche stretches along the Gulf from the Dammam boundary south to the Khobar fishing harbour. The city centre commercial district — Al Olaya, Al Bandariyah — is directly behind the Corniche. Most hotels are within 5 minutes of the waterfront.', detail: 'Khobar Water Tower is the landmark navigation point at the Corniche midpoint.' },
                            { title: 'Dhahran & Aramco (15km West)', desc: 'Saudi Aramco headquarters is in Dhahran — 15km west of central Khobar. The Aramco residential compound, KFUPM university, and ITHRA (King Abdulaziz Center) are all in Dhahran. Khobar is the nearest city with hotels for Aramco business visitors.', detail: 'Khobar to Aramco compound gate: 20 minutes. KFUPM campus: 18 minutes.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-sky-700 font-medium border-t border-sky-200 pt-3">{s.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Al Khobar Taxi Routes &amp; Travel Times</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-sky-700 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Route</th>
                                    <th className="px-5 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-5 py-4 text-left font-semibold">Time</th>
                                    <th className="px-5 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { route: 'Khobar to Bahrain Causeway', dist: '25 km', time: '25 min', note: 'Saudi checkpoint only — no Bahrain crossing' },
                                    { route: 'Khobar to Manama, Bahrain', dist: '80 km', time: '~1 hr', note: 'Full Causeway crossing to Manama' },
                                    { route: 'Khobar to Dhahran / Aramco', dist: '15 km', time: '20 min', note: 'Via Dhahran highway' },
                                    { route: 'Khobar to KFAC Airport (DMM)', dist: '40 km', time: '40 min', note: 'Flight tracking included' },
                                    { route: 'Khobar to Dammam City', dist: '30 km', time: '30 min', note: 'Dammam–Khobar arterial road' },
                                    { route: 'Khobar to Jubail', dist: '130 km', time: '1.5 hrs', note: 'Via coastal highway north' },
                                    { route: 'Khobar to Riyadh', dist: '450 km', time: '4.5 hrs', note: 'Via Route 40 west' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-gray-900">{row.route}</td>
                                        <td className="px-5 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-5 py-4 font-bold text-sky-700">{row.time}</td>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al Khobar Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-sky-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-sky-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Al Khobar Taxi</h2>
                    <p className="mb-8 opacity-90">Bahrain Causeway, Corniche, KFAC Airport — fixed rate, 24/7.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al%20Khobar" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Khobar Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/dammam" className="text-slate-600 hover:underline">← Back to Dammam</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/dammam/dhahran" className="text-slate-600 hover:underline">Dhahran &amp; Aramco →</Link>
            </div>
        </div>
    );
}
