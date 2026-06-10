import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ahsa/al-qara-mountain' },
    title: 'Al-Qara Mountain Taxi | Al-Ahsa Caves 18°C Transfer — Natural Air Conditioning',
    description: "Taxi to Al-Qara Mountain from Al-Ahsa — 15km, 20 minutes. Cave networks at 18°C year-round inside a 45°C desert. UNESCO oasis area. Driver waits. Fixed rate.",
    keywords: ['Al-Qara Mountain taxi', 'Jabal Al-Qara taxi', 'Al-Ahsa caves taxi', 'Al-Qara caves Al-Ahsa', 'Al-Ahsa mountain taxi', 'Hofuf Al-Qara taxi'],
    openGraph: {
        title: 'Al-Qara Mountain Taxi — Al-Ahsa Cave Network Transfer',
        description: 'Taxi to Al-Qara Mountain, Al-Ahsa. 18°C cave networks. 15km. Driver waits. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-ahsa/al-qara-mountain',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Al-Qara Mountain?", answer: "Al-Qara Mountain (Jabal Al-Qara) is a sandstone mountain in the Al-Ahsa oasis area containing extensive natural cave networks. The caves maintain a temperature of approximately 18°C year-round — in summer, when Al-Ahsa regularly reaches 45–50°C outside, entering Al-Qara Mountain provides an extraordinary natural cooling effect. The contrast between the desert heat outside and the cool cave interior is one of the most physically striking experiences in Saudi Arabia." },
    { question: "Why is Al-Qara Mountain famous for being cool?", answer: "The cave system inside Al-Qara Mountain acts as a natural temperature buffer — the thermal mass of the surrounding rock stabilises the cave interior temperature at approximately 18°C regardless of the external temperature. The caves are effectively sealed from the direct sun; the rock insulates against heat transfer. This natural 'air conditioning' has been known for centuries — local Bedouin sought refuge in the caves during summer." },
    { question: "What can I see inside Al-Qara Mountain?", answer: "The cave network has a developed visitor path with lighting. Visitors walk through interconnected chambers and passages — some with narrow sections, others opening into large cathedral-like voids. The rock formations include stalactites, mineral deposits, and the characteristic sandstone geology of the Eastern Province. The cave walk takes approximately 45–60 minutes for the standard circuit." },
    { question: "How far is Al-Qara Mountain from Al-Ahsa city?", answer: "Approximately 15km from central Hofuf — about 20 minutes by taxi. The mountain is within the broader UNESCO Al-Ahsa Oasis area, surrounded by date palm groves." },
    { question: "Can I combine Al-Qara Mountain with Jawatha Mosque and Qasr Ibrahim?", answer: "Yes — the standard Al-Ahsa day circuit: Al-Qara Mountain (morning, 1.5 hours) + Jawatha Mosque (25km from city, 30 minutes) + Qasr Ibrahim (city centre, 45 minutes) + Al-Qaysariyya Market. This covers all main sites. Your driver plans the optimal routing. Depart early (8–9am) to avoid the midday heat for outdoor sections." },
];

export default function AlQaraMountainPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ahsa">Al-Ahsa</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Qara Mountain</span>
                </div>
            </div>

            <section className="bg-teal-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Qara Mountain · 18°C Caves · UNESCO Oasis Area · 15km from Hofuf</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Qara Mountain Taxi — Al-Ahsa Cave Network Transfer</h1>
                        <p className="text-xl text-teal-100 mb-8 font-light">
                            Taxi to <strong>Al-Qara Mountain (Jabal Al-Qara)</strong> from Al-Ahsa — 15km, 20 minutes. <strong>Natural cave networks at 18°C year-round</strong> inside a 45°C desert — the most extraordinary natural temperature contrast in Saudi Arabia. Driver waits. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al-Qara%20Mountain%20caves%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Al-Qara Mountain Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-teal-50 border-b border-teal-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">18°C</div><div className="text-sm text-gray-600">Cave Temperature Year-Round</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">15 km</div><div className="text-sm text-gray-600">from Hofuf City</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">Caves</div><div className="text-sm text-gray-600">Sandstone Cave Network</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">Driver</div><div className="text-sm text-gray-600">Waits On Site</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Al-Qara Mountain — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Cave Network', desc: "Al-Qara Mountain contains an extensive natural cave system cut through the sandstone geology — interconnected chambers, narrow passages, and large vaulted spaces. The caves are illuminated with permanent lighting and have a well-maintained visitor path. The standard circuit takes approximately 45–60 minutes. Some sections require ducking or single-file walking. The cave floor is flat and accessible.", note: 'Cave tour: 45–60 minutes. Bring a light jacket.' },
                            { title: 'The Temperature Experience', desc: "The defining experience of Al-Qara Mountain is physical — the transition from 45–50°C desert heat outside to the 18°C cave interior within steps. The cave entrance is typically unremarkable from the outside; the temperature drop is abrupt and dramatic. This effect is most striking in the summer months (June–September) when Al-Ahsa is at its hottest. In winter the contrast is less dramatic (outside: 20–25°C, inside: 18°C).", note: 'Best contrast: June–September summer visits.' },
                            { title: 'UNESCO Oasis Setting', desc: "Al-Qara Mountain sits within the broader UNESCO Al-Ahsa Oasis cultural landscape — the largest oasis in the world at approximately 85,000 hectares. The mountain is surrounded by date palm groves and the oasis irrigation system. The approach road from Hofuf passes through the oasis — a contrasting landscape of green date palms and sandstone geology that is unique to this part of Eastern Arabia.", note: 'Best photos: approach road through date palms.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-teal-700 font-medium border-t border-teal-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Qara Mountain Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-teal-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-teal-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Al-Qara Mountain Taxi</h2>
                    <p className="mb-8 opacity-90">15km from Hofuf — 18°C cave network, driver waits. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al-Qara%20Mountain%20caves%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Al-Qara Mountain Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ahsa" className="text-amber-700 hover:underline">← Back to Al-Ahsa Hub</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ahsa/jawatha-mosque" className="text-amber-700 hover:underline">Jawatha Mosque →</Link>
            </div>
        </div>
    );
}
