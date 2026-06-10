import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/buraidah/ar-rass' },
    title: 'Ar Rass Taxi | Historic Qassim Town — 110km from Buraidah',
    description: 'Taxi to Ar Rass from Buraidah — 110km south, 1 hour. Historic Qassim town, old fort, traditional souq. Fixed rate.',
    keywords: ['Ar Rass taxi', 'Al Rass taxi', 'Ar Rass Buraidah taxi', 'Qassim Ar Rass taxi', 'Ar Rass historic town taxi'],
    openGraph: {
        title: 'Ar Rass Taxi — Historic Qassim Town Transfer',
        description: 'Taxi from Buraidah to Ar Rass. 110km, historic town, old fort. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/buraidah/ar-rass',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Ar Rass?", answer: "Ar Rass (Al-Rass) is a historic town in southern Qassim Region, approximately 110km south of Buraidah. It is one of the oldest settled communities in central Najd — mentioned in early Islamic historical sources. The town has an old fort, traditional architecture, and a history as a significant trading and agricultural centre." },
    { question: "How far is Ar Rass from Buraidah?", answer: "Approximately 110km south — about 1 hour by taxi on the main Qassim highway south. The drive crosses the flat Najd plateau through date palm oases and desert." },
    { question: "What is the historical significance of Ar Rass?", answer: "Ar Rass is mentioned in early Islamic history as a town in the Qassim area. The town has a long-established fort and traditional Najdi architecture. It was part of the commercial network of the central Najd plateau, connected to both Buraidah and Unaizah to the north and to Riyadh to the south." },
    { question: "Can I combine Ar Rass with Unaizah in one day?", answer: "Ar Rass is 110km south of Buraidah and Unaizah is 25km south — they are not directly linked as a circuit but can be combined as a full-day south Qassim trip from Buraidah. Confirm the routing and timing when booking a driver-waits package." },
    { question: "Is there accommodation in Ar Rass?", answer: "Ar Rass has limited accommodation options — most visitors to the Ar Rass area base themselves in Buraidah or Unaizah and do a day transfer. Our taxi service covers both directions — Buraidah to Ar Rass and return." },
];

export default function ArRassPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/buraidah">Buraidah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Ar Rass</span>
                </div>
            </div>

            <section className="bg-orange-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Ar Rass · Historic Qassim Town · 110km from Buraidah · Old Fort</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Ar Rass Taxi — Historic Qassim Town Transfer</h1>
                        <p className="text-xl text-orange-100 mb-8 font-light">
                            Taxi from <strong>Buraidah to Ar Rass</strong> — 110km south, 1 hour. Historic Qassim town with <strong>ancient fort, traditional souq</strong>, and deep Najdi heritage. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Buraidah%20to%20Ar%20Rass" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Ar Rass Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-orange-50 border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">110 km</div><div className="text-sm text-gray-600">from Buraidah</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">1 hr</div><div className="text-sm text-gray-600">Taxi Journey</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Old Fort</div><div className="text-sm text-gray-600">Historic Qassim Heritage</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Najd</div><div className="text-sm text-gray-600">Central Arabia Heritage</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ar Rass Taxi FAQ</h2>
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

            <section className="py-14 bg-orange-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Ar Rass Taxi</h2>
                    <p className="mb-8 opacity-90">110km from Buraidah — fixed rate confirmed on WhatsApp.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Buraidah%20to%20Ar%20Rass" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Ar Rass Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/buraidah/al-qassim-mall" className="text-amber-600 hover:underline">← Al Qassim Mall</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/buraidah/al-asyah" className="text-amber-600 hover:underline">Al Asyah →</Link>
            </div>
        </div>
    );
}
