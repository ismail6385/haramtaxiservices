import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/buraidah/unaizah' },
    title: "Unaizah Taxi | Buraidah Twin City — Old Souq & Al Ulayya Transfer",
    description: "Taxi to Unaizah from Buraidah — 25km, 25 minutes. Historic old souq, Al Ulayya heritage district, Qassim University. Unaizah hotel transfers. Fixed rate.",
    keywords: ['Unaizah taxi', 'Unaizah Buraidah taxi', 'Unaizah old souq taxi', 'Qassim Unaizah taxi', 'Unaizah hotel transfer'],
    openGraph: {
        title: 'Unaizah Taxi — Buraidah Twin City & Old Souq Transfer',
        description: 'Taxi from Buraidah to Unaizah. 25km, old souq, Al Ulayya heritage. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/buraidah/unaizah',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Unaizah?", answer: "Unaizah (also spelled Unayzah or Onaizah) is the second city of Qassim Region and twin city to Buraidah — located 25km south. Historically it was considered the more affluent and educated of the two Qassim cities, with a reputation as an intellectual and commercial centre of central Najd. Many prominent Saudi families and scholars have roots in Unaizah." },
    { question: "What is the Al Ulayya district of Unaizah?", answer: "Al Ulayya is the historic old quarter of Unaizah — a neighbourhood of traditional Najdi mud-brick architecture, narrow lanes, and the old covered souq. It is the best-preserved traditional urban fabric in Qassim Region. The old souq sold goods ranging from cloth and spices to gold and agricultural produce — some traditional merchants still operate in the restored arcades." },
    { question: "How far is Unaizah from Buraidah?", answer: "25km south of Buraidah city centre — about 25 minutes by taxi on the main intercity road. The two cities are connected by a well-maintained dual carriageway with heavy daily traffic." },
    { question: "Does Unaizah have its own airport?", answer: "No — Unaizah uses Prince Naif Airport (ELQ) in Buraidah, which is approximately 25km from Unaizah city centre (about 30 minutes). We serve airport transfers for Unaizah passengers from ELQ as a standard service." },
    { question: "What is Unaizah known for historically?", answer: "Unaizah was historically one of the most important commercial and intellectual cities of central Najd — known for its merchants who traded across the Gulf, and for producing some of Arabia's most respected Islamic scholars and poets. The city had a literary and cultural reputation that distinguished it from the more tribal Buraidah to the north." },
];

export default function UnaizahPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/buraidah">Buraidah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Unaizah</span>
                </div>
            </div>

            <section className="bg-green-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Unaizah · Qassim Twin City · Old Souq · Al Ulayya Heritage · 25km from Buraidah</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Unaizah Taxi — Buraidah Twin City &amp; Old Souq Transfer</h1>
                        <p className="text-xl text-green-100 mb-8 font-light">
                            Taxi from <strong>Buraidah to Unaizah</strong> — 25km south, 25 minutes. Historic twin city with <strong>Al Ulayya heritage district, old covered souq</strong>, and Qassim University. Hotel transfers, airport connections. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Unaizah%20from%20Buraidah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Unaizah Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-green-50 border-b border-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-green-700 mb-1">25 km</div><div className="text-sm text-gray-600">from Buraidah</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">Al Ulayya</div><div className="text-sm text-gray-600">Heritage Old Quarter</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">Old Souq</div><div className="text-sm text-gray-600">Traditional Market</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">25 min</div><div className="text-sm text-gray-600">Taxi Journey</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Unaizah — The Intellectual City of Qassim</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Al Ulayya Heritage District', desc: "The old quarter of Unaizah — traditional Najdi mud-brick architecture, narrow lanes between high walls, and the historic covered souq. Al Ulayya is the best-preserved traditional urban neighbourhood in Qassim. The architecture uses the distinctive central Najdi style: high mud-brick walls, decorative parapets, and internal courtyard houses.", note: 'Heritage Commission restoration ongoing.' },
                            { title: 'Unaizah Old Souq', desc: "The traditional covered market of Unaizah operated for centuries as a regional commercial hub — selling goods from across the Najd, Hejaz, and Gulf trade routes. Today, a mix of traditional merchants and modern shops operates in the souq area. Gold shops, spice merchants, traditional clothing, and agricultural goods are the staples.", note: 'Busiest: Thursday evenings and Friday mornings.' },
                            { title: 'Historical Significance', desc: "Unaizah has an outsized historical importance in Arabian intellectual history. The city produced some of the most influential Islamic scholars and poets of the 19th and 20th centuries. The Shaqra–Unaizah–Buraidah triangle was the intellectual heart of the Najd plateau in the pre-modern period.", note: 'Unaizah Museum: city heritage exhibitions.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-green-700 font-medium border-t border-green-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unaizah Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-green-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Buraidah–Unaizah Taxi</h2>
                    <p className="mb-8 opacity-90">25km corridor — hotels, souq, university, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Unaizah%20from%20Buraidah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Unaizah Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/buraidah/buraydah-dates-market" className="text-amber-600 hover:underline">← Dates Market</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/buraidah/al-qassim-mall" className="text-amber-600 hover:underline">Al Qassim Mall →</Link>
            </div>
        </div>
    );
}
