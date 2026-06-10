import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ula/hegra' },
    title: 'Hegra (Madain Saleh) Taxi | AlUla UNESCO Transfer — Driver Waits Service',
    description: "Taxi to Hegra (Madain Saleh) from AlUla — 20km, 20 minutes. Saudi Arabia's first UNESCO World Heritage Site. Driver waits at site. No taxis at Hegra — pre-book essential. Fixed rate.",
    keywords: ['Hegra taxi', 'Madain Saleh taxi', 'Hegra AlUla transfer', 'Mada\'in Saleh taxi', 'AlUla UNESCO taxi', 'Hegra driver waits', 'Nabataean tombs taxi'],
    openGraph: {
        title: "Hegra (Madain Saleh) Taxi — AlUla UNESCO Transfer",
        description: "Taxi to Hegra (Madain Saleh). 20km from AlUla. Driver waits at site. No taxis at Hegra — pre-book essential.",
        url: 'https://haramtaxiservice.com/locations/al-ula/hegra',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Hegra (Madain Saleh)?", answer: "Hegra — also known as Mada'in Saleh or Al-Hijr — is a Nabataean city dating from the 1st century BCE to the 1st century CE, contemporaneous with Petra in Jordan. It features 111 monumental rock-cut tombs carved into dramatic sandstone outcrops across the desert valley. Hegra became Saudi Arabia's first UNESCO World Heritage Site in 2008 and is the centrepiece of AlUla's tourism offering." },
    { question: "Why do I need to pre-book the Hegra taxi?", answer: "Hegra has no public transport, no taxis, and no Uber access. The site is 20km north of AlUla town in open desert — once you're at the site, you cannot leave without a pre-arranged vehicle. Without a driver-waits booking, you are stranded at the site after your tour finishes. Always pre-book a round-trip driver-waits service." },
    { question: "How far is Hegra from AlUla city?", answer: "Approximately 20km north of AlUla town centre — about 20 minutes by private taxi on the highway north through the valley. The route passes through the Dadan area and the AlUla Archaeological Zone." },
    { question: "Do I need to pre-book Hegra entry tickets separately?", answer: "Yes — Hegra has strictly limited daily visitor numbers. You must book entry tickets through the Experience AlUla app (alula.sa) before your visit. Peak season (October–April, especially December–January during Winter at Tantora) can sell out 3–4 weeks in advance. Morning slots (9am–12pm) are recommended for photography light and cooler temperatures. Our taxi service covers the transport — ticket booking is separate and must be done in advance." },
    { question: "How long should I spend at Hegra?", answer: "2–3 hours covers the main tomb groups (Jabal Ithlib, Qasr Al-Farid, and the main decorated facades) at a comfortable pace with the guided buggy tour included in the ticket. 4 hours allows a thorough visit including the Visitor Centre and all accessible tomb platforms. Morning arrival (9am–10am) is strongly recommended." },
];

export default function HegraPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ula">AlUla</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Hegra (Madain Saleh)</span>
                </div>
            </div>

            <section className="bg-rose-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Hegra · Saudi Arabia&apos;s First UNESCO Site · Nabataean Tombs · 20km from AlUla</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Hegra (Madain Saleh) Taxi — Driver Waits UNESCO Transfer</h1>
                        <p className="text-xl text-rose-100 mb-8 font-light">
                            Taxi from <strong>AlUla to Hegra (Madain Saleh)</strong> — 20km north, 20 minutes. Saudi Arabia&apos;s first UNESCO World Heritage Site. <strong>111 Nabataean rock-cut tombs, 1st century BCE</strong>. Driver waits at site — no taxis at Hegra. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20Hegra%20(Madain%20Saleh)%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Hegra Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 max-w-7xl mx-auto mt-6 mx-4 sm:mx-6 lg:mx-8 rounded-r-xl">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                        <p className="font-semibold text-amber-800">No Taxis or Uber at Hegra — Pre-Book Your Return Driver</p>
                        <p className="text-sm text-amber-700 mt-1">Hegra is 20km from AlUla in open desert. No ride-hailing apps operate here. Without a driver-waits booking you cannot leave the site after your tour. Always confirm your driver is waiting before entering the site.</p>
                    </div>
                </div>
            </div>

            <section className="py-10 bg-rose-50 border-b border-rose-100 mt-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">20 km</div><div className="text-sm text-gray-600">from AlUla town</div></div>
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">111</div><div className="text-sm text-gray-600">Nabataean Tombs</div></div>
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">UNESCO</div><div className="text-sm text-gray-600">Saudi Arabia&apos;s First (2008)</div></div>
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">1st BCE</div><div className="text-sm text-gray-600">Nabataean Period</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Hegra — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Qasr Al-Farid', desc: "The lone free-standing tomb — Hegra's most photographed monument. A massive unfinished Nabataean tomb carved from a solitary sandstone outcrop in the open desert. The incomplete upper section reveals the Nabataean carving technique: working top-down from the facade. The isolation and scale (18 metres tall) make it the defining image of Hegra.", note: 'Best light: early morning or late afternoon.' },
                            { title: 'The Tomb Groups', desc: "Hegra has 111 monumental tombs distributed across approximately 12 sandstone outcrops (jabal). The main groups — Jabal Ithlib, Jabal Al-Banat, Al-Khuraymat, Al-Aklah — each have distinctive decorative facades carved with Nabataean architectural motifs: eagles, snakes, Medusa heads, and Attic cornices. The inscriptions above tomb doorways identify the owner and proclaim the tomb is sealed.", note: 'Buggy tour included in site ticket.' },
                            { title: 'Visitor Centre & Jabal Ithlib', desc: "The Hegra Visitor Centre at the entrance has detailed models and the history of the Nabataean trade network. Jabal Ithlib — to the north of the main site — has the dining triclinium (ritual banquet hall cut into the rock), Nabataean inscriptions, and a narrow defile (siq) that recalls the approach to Petra. Worth the walk.", note: 'Jabal Ithlib: 15 min additional walk from main site.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-rose-800 font-medium border-t border-rose-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hegra Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-rose-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-rose-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Hegra Driver-Waits Transfer</h2>
                    <p className="mb-8 opacity-90">Driver waits at Hegra — 20km from AlUla. No taxis at site. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20Hegra%20(Madain%20Saleh)%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Hegra Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ula" className="text-amber-700 hover:underline">← Back to AlUla Hub</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ula/elephant-rock" className="text-amber-700 hover:underline">Elephant Rock →</Link>
            </div>
        </div>
    );
}
