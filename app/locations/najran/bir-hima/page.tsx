import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/najran/bir-hima' },
    title: 'Bir Hima Taxi | UNESCO World Heritage Rock Art — Driver Waits Transfer from Najran',
    description: 'Taxi to Bir Hima UNESCO World Heritage Site from Najran — 100km, 1 hour. 25,000+ ancient rock carvings (2021 UNESCO inscription). Driver waits — no transport at site. Fixed rate.',
    keywords: ['Bir Hima taxi', 'Bir Hima UNESCO taxi', 'Najran rock art taxi', 'Bir Hima day trip Najran', 'Bir Hima driver waits', 'UNESCO Najran taxi'],
    openGraph: {
        title: 'Bir Hima UNESCO Taxi — Rock Art Day Trip from Najran',
        description: 'Taxi to Bir Hima UNESCO (2021). 100km from Najran. 25,000+ rock carvings. Driver waits. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/najran/bir-hima',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Bir Hima UNESCO site?", answer: "Bir Hima Cultural Area is a UNESCO World Heritage Site inscribed in July 2021 — the same session that inscribed several other Saudi sites. It is located approximately 100km north of Najran city on the ancient caravan route from Yemen to the Hejaz. The site has over 25,000 rock carvings and inscriptions carved into sandstone surfaces over a period spanning from the Neolithic era (approximately 10,000 BCE) to the early Islamic period (7th–8th century CE). The carvings depict animals (camels, cattle, horses, ibex, ostriches), hunting scenes, human figures, and text in multiple ancient scripts." },
    { question: "Why was Bir Hima inscribed as UNESCO World Heritage?", answer: "Bir Hima was inscribed as a UNESCO World Heritage Site for its 'outstanding universal value' as one of the most important concentrations of rock art in the world — spanning an extraordinary time range (Neolithic to Islamic) and documenting the human presence, animal life, and trade activity of the Arabian Peninsula over millennia. The ancient wells at the site also document the practical infrastructure of the caravan routes." },
    { question: "Why do I need a driver-waits taxi to Bir Hima?", answer: "Bir Hima is 100km north of Najran in open desert — no public transport, no Uber, no taxis on-site. Without a pre-booked driver who waits, you cannot return. The nearest town with any transport is Khamis Mushait (further north). Always book a driver-waits round-trip transfer from Najran." },
    { question: "How long does a Bir Hima visit take?", answer: "The main rock art panels and ancient wells can be explored in 2–3 hours at a comfortable pace with interpretation of the key panels. A thorough visit of all accessible areas takes 4 hours. Plan for a half-day from Najran: 1 hour drive each way + 2–3 hours on site = 4–5 hours total." },
    { question: "Do I need to book Bir Hima tickets in advance?", answer: "Bir Hima is managed by the Saudi Heritage Commission — tickets may be required and opening hours are specific. Check the Nusuk app or heritage.gov.sa for current booking requirements. The site was relatively recently opened to tourism following the 2021 UNESCO inscription and access arrangements are evolving. Confirm before your visit." },
];

export default function BirHimaPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/najran">Najran</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Bir Hima UNESCO</span>
                </div>
            </div>

            <section className="bg-stone-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Bir Hima · UNESCO 2021 · 25,000+ Rock Carvings · 100km from Najran</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Bir Hima Taxi — UNESCO World Heritage Rock Art, Driver Waits Transfer</h1>
                        <p className="text-xl text-stone-200 mb-8 font-light">
                            Taxi from <strong>Najran to Bir Hima</strong> — 100km north, 1 hour. <strong>UNESCO World Heritage Site (2021)</strong> with over 25,000 ancient rock carvings spanning Neolithic to Islamic periods. <strong>Driver waits — no transport at site</strong>. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Najran%20to%20Bir%20Hima%20UNESCO%20site%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Bir Hima Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 max-w-7xl mx-auto mt-6 mx-4 sm:mx-6 lg:mx-8 rounded-r-xl">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                        <p className="font-semibold text-amber-800">No Transport at Bir Hima — Pre-Book Driver Waits Service</p>
                        <p className="text-sm text-amber-700 mt-1">Bir Hima is 100km from Najran in open desert. No taxi, Uber, or public transport at the site. Without a pre-booked driver, you cannot return from the site. Always confirm your driver is waiting before entering.</p>
                    </div>
                </div>
            </div>

            <section className="py-10 bg-stone-100 border-b border-stone-200 mt-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">100 km</div><div className="text-sm text-gray-600">from Najran</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">25,000+</div><div className="text-sm text-gray-600">Rock Carvings</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">UNESCO</div><div className="text-sm text-gray-600">Inscribed July 2021</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">10,000 BCE</div><div className="text-sm text-gray-600">Neolithic Origin</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Bir Hima — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Rock Art', desc: "Over 25,000 individual carvings on sandstone surfaces — animals (camels most frequently, followed by cattle, horses, ibex, ostriches, and gazelle), hunting scenes with bows and spears, human figures, geometric symbols, and abstract patterns. The camels alone span thousands of years of depiction — from the wild camels of the Neolithic to the loaded pack camels of the caravan trade period.", note: 'Peak carvings: main sandstone panels along the wadi.' },
                            { title: 'Ancient Inscriptions', desc: "Bir Hima has inscriptions in multiple ancient scripts alongside the carvings: Musnad (South Arabian), early Arabic, Nabataean, Greek, and Thamudic. Inscriptions range from official commemorative texts to personal names scratched by passing travellers. The site documents the full sequence of writing traditions used in northwest Arabia over three millennia.", note: 'UNESCO citation specifically mentions inscription diversity.' },
                            { title: 'Ancient Wells (Bir Hima)', desc: "The name 'Bir Hima' means 'wells of Hima' — the site has ancient water wells that served the pre-Islamic caravan route running from Yemen north to the Hejaz and onward to the Levant. The wells are why caravans stopped here; the rock surfaces near water sources became the canvas for carvings over millennia. The well infrastructure reveals the practical geography of ancient Arabian long-distance trade.", note: 'Well structures preserved and interpreted on site.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-stone-700 font-medium border-t border-stone-300 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bir Hima Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-stone-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-stone-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Bir Hima Driver Waits Taxi</h2>
                    <p className="mb-8 opacity-90">100km from Najran — UNESCO rock art, no transport at site, driver waits. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Najran%20to%20Bir%20Hima%20UNESCO%20site%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Bir Hima Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/najran/emara-palace" className="text-red-700 hover:underline">← Emara Palace</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/najran/wadi-najran" className="text-red-700 hover:underline">Wadi Najran →</Link>
            </div>
        </div>
    );
}
