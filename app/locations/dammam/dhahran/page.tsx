import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/dammam/dhahran' },
    title: 'Dhahran Taxi | Saudi Aramco, ITHRA & KFUPM Corporate Transfers',
    description: 'Taxi service in Dhahran — Saudi Aramco headquarters, ITHRA museum, KFUPM university, and Dhahran Expo. Corporate accounts, contractor transfers, KFAC airport pickups. 24/7.',
    keywords: ['Dhahran taxi', 'Saudi Aramco taxi', 'ITHRA taxi Dhahran', 'KFUPM taxi', 'Dhahran corporate transfer', 'Aramco compound taxi', 'Dhahran airport taxi'],
    openGraph: {
        title: 'Dhahran Taxi — Aramco, ITHRA & Corporate Transfers Eastern Province',
        description: 'Professional taxi in Dhahran. Saudi Aramco HQ, ITHRA, KFUPM campus, and Dhahran Expo. Corporate accounts. KFAC Airport transfers.',
        url: 'https://haramtaxiservice.com/locations/dammam/dhahran',
        type: 'website',
        images: [{ url: '/dhahran-ithra.webp', width: 1200, height: 630, alt: 'ITHRA King Abdulaziz Center Dhahran Saudi Arabia' }],
    },
};

const faqs = [
    { question: 'Where is Saudi Aramco headquarters and how do I get there by taxi?', answer: "Saudi Aramco headquarters is in Dhahran, Eastern Province — approximately 15km west of central Dammam and 20km west of Al Khobar. The Aramco admin area (Head Office) and the Aramco residential compound are adjacent. WhatsApp us your pickup point (KFAC Airport, hotel, or address) and we arrange direct transfer to the Aramco gate." },
    { question: 'What is ITHRA and is it worth visiting?', answer: "ITHRA (King Abdulaziz Center for World Culture) is a landmark cultural complex in Dhahran — designed by Snohetta architects, it contains Saudi Arabia's largest public library, the Museum (permanent and rotating exhibitions on Saudi culture and history), a cinema, an innovation hub, a theatre, and the Energy Exhibit (Saudi Aramco's interactive energy museum). It is one of the most remarkable buildings in the Gulf. Open to all visitors — no Aramco affiliation required." },
    { question: 'Do you serve the Aramco residential compound in Dhahran?', answer: "Yes — the Aramco residential compound is one of our regular pickup/drop-off points. We provide transfers for Aramco employees and families to KFAC Airport, KFAC arrivals pickups, Khobar shopping, Bahrain Causeway crossings, and intercity routes (Riyadh, etc.). Regular compound residents: ask about monthly corporate accounts." },
    { question: 'How far is Dhahran from KFAC Airport?', answer: "Dhahran (Aramco compound area) to KFAC Airport (DMM) is approximately 40km — about 40 minutes. We provide flight-tracked pickups from KFAC directly to Aramco compound or Dhahran hotel." },
    { question: 'What is KFUPM and do you serve the campus?', answer: "KFUPM (King Fahd University of Petroleum and Minerals) is Saudi Arabia's premier technical university, located in Dhahran adjacent to the Aramco compound. We serve students, faculty, and visitors at KFUPM. Campus-to-KFAC Airport transfers and KFUPM-to-Khobar/Dammam routes available." },
];

export default function DhahranPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/dammam">Dammam</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Dhahran &amp; Aramco</span>
                </div>
            </div>

            <section className="bg-teal-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Dhahran · Saudi Aramco HQ · ITHRA · KFUPM</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Dhahran Taxi — Aramco, ITHRA &amp; Corporate Transfers</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Professional taxi in <strong>Dhahran</strong> — Saudi Aramco headquarters, ITHRA cultural centre, KFUPM university, and Dhahran Expo. Corporate accounts, contractor airport pickups, and 24/7 compound transfers.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Dhahran" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Dhahran Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-teal-50 border-b border-teal-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">Aramco HQ</div><div className="text-sm text-gray-600">World&apos;s Largest Oil Company</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">ITHRA</div><div className="text-sm text-gray-600">Cultural &amp; Innovation Hub</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">15 km</div><div className="text-sm text-gray-600">from Dammam City</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">24/7</div><div className="text-sm text-gray-600">Compound Transfers</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Dhahran Key Destinations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'Saudi Aramco Headquarters', desc: 'The global headquarters of Saudi Aramco — the world\'s most valuable company. Admin building, operations centre, and the adjacent residential compound housing thousands of employees. Access at the main gate requires valid ID and visitor authorization from your Aramco host.', img: '/dhahran-ithra.webp' },
                            { name: 'ITHRA — King Abdulaziz Center', desc: 'One of the most architecturally extraordinary buildings in the Gulf — designed by Snohetta. Houses Saudi Arabia\'s largest library, museum of Saudi culture, interactive energy exhibit, theatre, cinema, and innovation hub. Open to all visitors.', img: '/dhahran-ithra.webp' },
                        ].map((dest, i) => (
                            <div key={i} className="bg-teal-50 rounded-2xl overflow-hidden border border-teal-100">
                                <div className="relative h-48">
                                    <Image src={dest.img} alt={dest.name} fill className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{dest.name}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{dest.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Corporate Transfer Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { title: 'KFAC Airport to Aramco Compound', desc: 'Flight-tracked pickup at DMM arrivals. Direct to Aramco compound gate. Name board at exit.' },
                            { title: 'Aramco Compound to Khobar / Manama', desc: 'Employees and families to Khobar shopping, restaurants, or Bahrain Causeway.' },
                            { title: 'KFUPM Campus Transfers', desc: 'Students, faculty, and visitors to/from KFAC Airport, Khobar, or Dammam.' },
                            { title: 'ITHRA Visitor Transport', desc: 'Hotel to ITHRA and back. Museum and event visits for non-Aramco visitors.' },
                            { title: 'Dhahran Expo & Convention Centre', desc: 'Conference and exhibition transport from Khobar hotels and KFAC Airport.' },
                            { title: 'Monthly Corporate Accounts', desc: 'For regular Aramco and KFUPM users — consolidated billing and priority booking.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                                    <p className="text-xs text-gray-600">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dhahran &amp; Aramco Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-teal-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-teal-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Dhahran &amp; Aramco Taxi</h2>
                    <p className="mb-8 opacity-90">Compound transfers, KFAC Airport, ITHRA — corporate accounts available.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Dhahran" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Dhahran Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/dammam/khobar" className="text-slate-600 hover:underline">← Al Khobar</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/dammam/kfac-airport" className="text-slate-600 hover:underline">KFAC Airport →</Link>
            </div>
        </div>
    );
}
