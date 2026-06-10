import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ahsa/al-uqair' },
    title: 'Al-Uqair Taxi | Al-Ahsa Arabian Gulf Coast, Ancient Port Ruins & Beach Transfer',
    description: 'Taxi to Al-Uqair from Al-Ahsa — 80km, 1 hour. Ancient Arabian Gulf port ruins, 1922 Uqair Protocol site, isolated beach. No public transport. Driver waits. Fixed rate.',
    keywords: ['Al-Uqair taxi', 'Uqair Al-Ahsa taxi', 'Al-Ahsa coastal taxi', 'Arabian Gulf Al-Ahsa taxi', 'Al-Uqair port ruins taxi', 'Hofuf beach taxi'],
    openGraph: {
        title: 'Al-Uqair Taxi — Al-Ahsa Arabian Gulf Coast & Ancient Port Ruins Transfer',
        description: 'Taxi to Al-Uqair, Al-Ahsa. Ancient port ruins, isolated beach, 1922 border treaty site. 80km. Driver waits.',
        url: 'https://haramtaxiservice.com/locations/al-ahsa/al-uqair',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Al-Uqair?", answer: "Al-Uqair (Uqair) is an ancient coastal settlement and port on the Arabian Gulf, approximately 80km east of Hofuf. For centuries it was the main maritime gateway for the Al-Ahsa region — the landing point for Persian Gulf trade routes, pearl trading, and communication with the Gulf states. The site has archaeological remains of the ancient settlement and port infrastructure. It is also the location of the 1922 Uqair Conference." },
    { question: "What is the 1922 Uqair Protocol?", answer: "The Uqair Protocol (1922) was a diplomatic conference held at this coastal site that defined the borders between Saudi Arabia (then the Sultanate of Najd), Iraq, and Kuwait. Sir Percy Cox, the British Political Representative, presided over the conference. The boundary lines agreed at Uqair in 1922 largely persist as the borders of these countries today. The site has a small commemorative marker." },
    { question: "Is there a beach at Al-Uqair?", answer: "Yes — Al-Uqair has a beach on the Arabian Gulf that is isolated and rarely visited. The beach is not developed (no facilities) but is clean, with shallow warm waters. The combination of ancient port ruins, historical significance, and a deserted beach makes Al-Uqair a distinctive combination unavailable elsewhere in the Eastern Province." },
    { question: "How far is Al-Uqair from Al-Ahsa?", answer: "Approximately 80km east of Hofuf — about 1 hour by taxi on the highway through the date oasis and then across the flat coastal plain to the Arabian Gulf coast. No public transport serves Al-Uqair — a pre-booked taxi with driver waiting is the only practical option." },
    { question: "Can I do Al-Uqair as a day trip from Dammam?", answer: "Al-Uqair is approximately 180km from Dammam (about 2 hours). A day trip from Dammam: Dammam → Al-Ahsa city heritage circuit → Al-Uqair coast is approximately 400km total. More practical as a 2-day trip: Dammam to Al-Ahsa, one night in Hofuf, full day Al-Ahsa sites, Al-Uqair afternoon, return to Dammam." },
];

export default function AlUqairPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ahsa">Al-Ahsa</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Uqair</span>
                </div>
            </div>

            <section className="bg-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Uqair · Arabian Gulf Coast · Ancient Port · 1922 Protocol Site · 80km from Hofuf</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Uqair Taxi — Al-Ahsa Arabian Gulf Coast &amp; Ancient Port Ruins Transfer</h1>
                        <p className="text-xl text-blue-100 mb-8 font-light">
                            Taxi to <strong>Al-Uqair</strong> from Al-Ahsa — 80km east, 1 hour. <strong>Ancient Arabian Gulf port ruins, 1922 border treaty site, isolated beach</strong>. No public transport — driver waits essential. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al-Ahsa%20to%20Al-Uqair%20coast%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Al-Uqair Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-50 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">80 km</div><div className="text-sm text-gray-600">east of Hofuf</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">1922</div><div className="text-sm text-gray-600">Border Treaty Site</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Arabian</div><div className="text-sm text-gray-600">Gulf Coast Beach</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Ruins</div><div className="text-sm text-gray-600">Ancient Port Settlement</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Al-Uqair — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Ancient Port Ruins', desc: "Al-Uqair's archaeological remains document centuries of Arabian Gulf maritime trade. The ancient settlement has fortification walls, the ruins of a lighthouse or watchtower, and remains of the port infrastructure that handled trade between the Al-Ahsa hinterland and the Gulf maritime network. The site is partially excavated and partially visible above ground. Walking through the ruins gives a tangible sense of the pre-modern trading economy of the Eastern Province.", note: 'Ruins walk: approx 45 minutes.' },
                            { title: '1922 Uqair Conference Site', desc: "The 1922 Uqair Protocol was signed at this coastal location — a conference that defined the borders between Saudi Arabia (Sultanate of Najd), Iraq, and Kuwait, largely determining the territorial outline of the three states as they exist today. The British Political Resident Sir Percy Cox presided. A commemorative marker acknowledges the site's diplomatic importance. For students of Gulf political history, this is a significant location.", note: '1922 Protocol: marker near the old fort structure.' },
                            { title: 'The Arabian Gulf Beach', desc: "Al-Uqair has an undeveloped beach on the Arabian Gulf — fine sand, shallow warm waters, and a view across the Gulf toward Qatar and Bahrain on clear days. The isolation of the beach (few visitors, no commercial development) makes it one of the most peaceful coastal spots in the Eastern Province. The water is calm and the beach is clean. Swimming is possible, though facilities are absent — bring your own food, water, and shade.", note: 'Best time: October–March (comfortable beach weather).' },
                        ].map((s, i) => (
                            <div key={i} className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-blue-700 font-medium border-t border-blue-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Uqair Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-blue-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-blue-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Al-Uqair Taxi</h2>
                    <p className="mb-8 opacity-90">80km from Hofuf — Arabian Gulf coast, ancient ruins, driver waits. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al-Ahsa%20to%20Al-Uqair%20coast%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Al-Uqair Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ahsa/al-qaysariyya-market" className="text-amber-700 hover:underline">← Al-Qaysariyya Market</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ahsa/al-ahsa-airport" className="text-amber-700 hover:underline">Al-Ahsa Airport →</Link>
            </div>
        </div>
    );
}
