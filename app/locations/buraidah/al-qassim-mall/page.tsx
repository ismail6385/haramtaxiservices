import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/buraidah/al-qassim-mall' },
    title: 'Al Qassim Mall Taxi | Buraidah Shopping & Hotel District Transfer',
    description: 'Taxi to Al Qassim Mall area in Buraidah — commercial centre, major hotels, restaurants. Airport connections, hotel pickups. Fixed rate.',
    keywords: ['Al Qassim Mall taxi', 'Buraidah mall taxi', 'Buraidah hotel taxi', 'Buraidah commercial centre taxi', 'Qassim mall transfer'],
    openGraph: {
        title: 'Al Qassim Mall Taxi — Buraidah Commercial & Hotel District',
        description: 'Taxi to Al Qassim Mall, Buraidah hotels and commercial centre. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/buraidah/al-qassim-mall',
        type: 'website',
    },
};

const faqs = [
    { question: "What is the Al Qassim Mall area?", answer: "Al Qassim Mall is Buraidah's main shopping centre — anchoring the commercial district with international retail brands, food courts, cinema, and family entertainment. The surrounding area has Buraidah's highest concentration of hotels (local and international chains), restaurants, and business facilities." },
    { question: "Which hotels are near Al Qassim Mall?", answer: "Major hotels in the Al Qassim Mall area and central Buraidah include Mövenpick Hotel Buraidah, Radisson Blu Buraidah, and several national hotel chains. Most business travellers and visitors to Buraidah stay in this commercial zone. Our taxi serves all hotel pickups and drop-offs in the area." },
    { question: "How far is Al Qassim Mall from ELQ Airport?", answer: "Al Qassim Mall is approximately 20km from Prince Naif Airport (ELQ) — about 22 minutes by taxi. Standard airport-to-mall hotel transfer with fixed rate." },
    { question: "Is there good dining near Al Qassim Mall?", answer: "Yes — the Al Qassim Mall area has Buraidah's widest restaurant selection: Saudi traditional Najdi cuisine, international chains, Egyptian, Lebanese, Indian, and fast food options. The food court in the mall covers most international fast food brands." },
    { question: "What business facilities are in the Al Qassim Mall area?", answer: "The commercial district around Al Qassim Mall has Buraidah's main business hotels with conference facilities, meeting rooms, and business centres. Government offices, corporate headquarters, and the main banking district are also in the central Buraidah area close to the mall zone." },
];

export default function AlQassimMallPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/buraidah">Buraidah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al Qassim Mall Area</span>
                </div>
            </div>

            <section className="bg-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al Qassim Mall · Buraidah Commercial Centre · Hotels · Business District</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al Qassim Mall Taxi — Buraidah Commercial &amp; Hotel District</h1>
                        <p className="text-xl text-blue-100 mb-8 font-light">
                            Taxi to <strong>Al Qassim Mall area</strong> — Buraidah&apos;s main commercial zone. <strong>Major hotels (Mövenpick, Radisson Blu)</strong>, restaurants, business facilities. Airport connections, hotel pickups. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al%20Qassim%20Mall%20Buraidah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Mall Area Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-50 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Hotels</div><div className="text-sm text-gray-600">Mövenpick, Radisson</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">20 km</div><div className="text-sm text-gray-600">from ELQ Airport</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Dining</div><div className="text-sm text-gray-600">International & Saudi</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Business</div><div className="text-sm text-gray-600">Corporate District</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al Qassim Mall Area FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Buraidah Hotel Transfer</h2>
                    <p className="mb-8 opacity-90">Airport to hotel, hotel to hotel — fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al%20Qassim%20Mall%20Buraidah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Hotel Transfer
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/buraidah/unaizah" className="text-amber-600 hover:underline">← Unaizah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/buraidah/ar-rass" className="text-amber-600 hover:underline">Ar Rass →</Link>
            </div>
        </div>
    );
}
