import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/buraidah/al-asyah' },
    title: 'Al Asyah Taxi | Heritage Village, Pottery & Sandstone Landscape — Qassim',
    description: 'Taxi to Al Asyah from Buraidah — 90km, 55 minutes. Heritage village, traditional pottery, dramatic sandstone cliffs. Qassim hidden gem. Fixed rate.',
    keywords: ['Al Asyah taxi', 'Al Asyah Buraidah taxi', 'Al Asyah heritage village', 'Qassim pottery village taxi', 'Al Asyah sandstone taxi'],
    openGraph: {
        title: 'Al Asyah Taxi — Heritage Village & Pottery, Qassim',
        description: 'Taxi from Buraidah to Al Asyah heritage village. 90km, pottery, sandstone landscape.',
        url: 'https://haramtaxiservice.com/locations/buraidah/al-asyah',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Al Asyah?", answer: "Al Asyah is a historic village in Qassim Region known for its dramatic sandstone cliff landscape, traditional Najdi architecture, and pottery tradition. The village sits against a backdrop of red-orange sandstone cliffs — visually striking in the otherwise flat Qassim plateau. It is one of the most photographed heritage villages in the region." },
    { question: "What is the pottery tradition of Al Asyah?", answer: "Al Asyah has a centuries-old pottery tradition — producing traditional Najdi clay vessels (awani), water jugs, cooking pots, and decorative pieces using local clay. The pottery style is distinctive to the Qassim region and represents one of central Arabia's oldest surviving craft traditions. Some potters still work using traditional techniques." },
    { question: "How far is Al Asyah from Buraidah?", answer: "Approximately 90km west of Buraidah — about 55 minutes by taxi on the highway west across the Qassim plateau." },
    { question: "What are the sandstone cliffs of Al Asyah?", answer: "Al Asyah sits at the edge of a sandstone escarpment — the same Precambrian sandstone formation that creates the dramatic landscapes of Tabuk and Mada'in Saleh further north. The red-orange cliffs rising behind the village create a backdrop found nowhere else in Qassim, making it a striking photography destination." },
    { question: "Is Al Asyah good for photography?", answer: "Yes — Al Asyah is one of the best photography locations in Qassim. The combination of traditional mud-brick architecture against dramatic sandstone cliffs, date palm groves, and the surrounding desert is exceptional. Golden hour (sunrise and sunset) illuminates the cliffs with warm orange-red light." },
];

export default function AlAsyahPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/buraidah">Buraidah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al Asyah</span>
                </div>
            </div>

            <section className="bg-stone-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al Asyah · Heritage Village · Pottery · Sandstone Cliffs · 90km from Buraidah</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al Asyah Taxi — Heritage Village, Pottery &amp; Sandstone Landscape</h1>
                        <p className="text-xl text-stone-200 mb-8 font-light">
                            Taxi from <strong>Buraidah to Al Asyah</strong> — 90km west, 55 minutes. Historic village with <strong>traditional pottery craft, Najdi mud-brick architecture</strong>, and dramatic sandstone cliff backdrop. Qassim&apos;s best-kept photographic secret.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Buraidah%20to%20Al%20Asyah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Al Asyah Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-stone-50 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">90 km</div><div className="text-sm text-gray-600">from Buraidah</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Pottery</div><div className="text-sm text-gray-600">Ancient Craft Tradition</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Cliffs</div><div className="text-sm text-gray-600">Sandstone Escarpment</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Heritage</div><div className="text-sm text-gray-600">Najdi Village</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Al Asyah — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Sandstone Cliffs & Landscape', desc: "Al Asyah sits against a dramatic red-orange sandstone escarpment — the same formation that creates Saudi Arabia's great canyon landscapes further north. The cliffs frame the village in a way found nowhere else in Qassim Region. Golden hour photography here is extraordinary.", note: 'Best photography: 30 min before sunset.' },
                            { title: 'Traditional Pottery', desc: "Al Asyah pottery is among the oldest craft traditions in central Najd — clay vessels, water jugs, and cooking pots made from local clay using traditional hand-forming techniques. Some village potters still produce using these methods. The pottery is functional, aesthetically minimalist, and distinctly Najdi in character.", note: 'Pottery workshops: enquire in village on arrival.' },
                            { title: 'Heritage Architecture', desc: "The old village has traditional mud-brick Najdi architecture — thick walls, small windows, internal courtyards, and the distinctive decorative parapets of central Arabian construction. Several structures have been preserved or restored. The old village layout follows the traditional organic growth patterns of Arabian oasis settlements.", note: 'Heritage Commission signage at key structures.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-stone-700 font-medium border-t border-stone-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al Asyah Taxi FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Al Asyah Taxi</h2>
                    <p className="mb-8 opacity-90">Heritage village, pottery, sandstone cliffs — 90km from Buraidah.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Buraidah%20to%20Al%20Asyah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Al Asyah Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/buraidah/ar-rass" className="text-amber-600 hover:underline">← Ar Rass</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/buraidah" className="text-amber-600 hover:underline">Back to Buraidah Hub</Link>
            </div>
        </div>
    );
}
