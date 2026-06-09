import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/abha/asir-national-park' },
    title: 'Asir National Park Taxi | Cloud Forest, Dalghan & Al-Soudah Day Trip',
    description: 'Taxi to Asir National Park from Abha — juniper cloud forest, Dalghan Adventure Park, Al-Soudah peak, Habala viewpoint. Driver waits. Fixed rate, 24/7.',
    keywords: ['Asir National Park taxi', 'Dalghan adventure park taxi', 'Abha national park taxi', 'cloud forest Asir taxi', 'Al-Soudah taxi', 'Abha day trip taxi'],
    openGraph: {
        title: 'Asir National Park Taxi — Cloud Forest, Dalghan & Day Trips from Abha',
        description: 'Taxi to Asir National Park. Cloud forest, Dalghan Adventure Park, Al-Soudah. Driver waits. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/abha/asir-national-park',
        type: 'website',
    },
};

const faqs = [
    { question: 'What is Asir National Park?', answer: "Asir National Park is one of Saudi Arabia's largest and most ecologically diverse national parks, covering parts of the Asir mountain range and escarpment. It is home to Saudi Arabia's only cloud forest — juniper woodlands at altitude that collect moisture from the Indian Ocean monsoon, creating a lush, mist-shrouded landscape unlike anywhere else in Arabia. The park covers ~4,500 sq km." },
    { question: 'What is the Dalghan Adventure Park?', answer: "Dalghan (Al-Dalghan) is an adventure and nature park about 20km from Abha inside the Asir National Park area. Activities include zip lines, mountain biking, hiking trails, and paragliding. It is one of Saudi Arabia's premier adventure tourism sites. Pre-booking activities at Dalghan is recommended, especially during peak season (July–August)." },
    { question: 'What is the khareef (monsoon) experience in Asir National Park?', answer: "From July to September, the Indian Ocean monsoon pushes moisture over the Asir mountains, creating the khareef season — mist, light rain, and remarkably lush green landscapes. The cloud forest comes alive with fog drifting through juniper trees, wildflowers bloom on mountain slopes, and temperatures are 18–25°C while the rest of Saudi Arabia is 40°C+. The khareef is the main reason families from across Saudi Arabia travel to Abha in summer." },
    { question: 'How long should I spend in Asir National Park?', answer: "Half day (3–4 hours) covers the main viewpoints, Green Mountain area, and one or two park scenic spots. A full day (6–8 hours) adds Dalghan Adventure Park activities and deeper exploration. Two days is ideal to combine Asir National Park with Al-Soudah peak and Habala Village." },
    { question: 'What wildlife lives in Asir National Park?', answer: "Asir National Park has the highest biodiversity in Saudi Arabia. Notable species: hamadryas baboons (frequently seen at roadsides), Arabian leopard (critically endangered, rarely seen), Arabian wolf, Asir magpie (endemic to the park), and hundreds of bird species. Baboons are the most commonly encountered wildlife on mountain roads." },
];

export default function AsirNationalParkPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/abha">Abha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Asir National Park</span>
                </div>
            </div>

            <section className="bg-emerald-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Asir National Park · Cloud Forest · Dalghan · Khareef Season</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Asir National Park Taxi — Cloud Forest &amp; Dalghan Day Trip</h1>
                        <p className="text-xl text-emerald-100 mb-8 font-light">
                            Taxi to <strong>Asir National Park</strong> from Abha — Saudi Arabia&apos;s cloud forest. <strong>Dalghan Adventure Park</strong>, juniper forest viewpoints, and khareef season mist. Driver waits. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Asir%20National%20Park" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Asir Park Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">4,500 km²</div><div className="text-sm text-gray-600">Park Area</div></div>
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">Cloud Forest</div><div className="text-sm text-gray-600">Arabia&apos;s Only Juniper Forest</div></div>
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">Dalghan</div><div className="text-sm text-gray-600">Zip Lines &amp; Adventure</div></div>
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">30 min</div><div className="text-sm text-gray-600">from Abha City</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Asir National Park — Key Sites</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Juniper Cloud Forest', desc: "Saudi Arabia's only cloud forest — African juniper and wild olive trees draped in mist. The forest collects moisture from the Indian Ocean monsoon and stays green year-round. Most dramatic in khareef season (July–September) when clouds drift through the canopy.", note: 'Best time: early morning when cloud cover is thickest.' },
                            { title: 'Dalghan Adventure Park', desc: 'Mountain adventure park with zip lines, mountain biking trails, scenic hiking, and paragliding. One of Saudi Arabia\'s premier adventure tourism destinations. Pre-book activities at asirpark.com especially in summer peak season.', note: 'Distance from Abha: ~20km, 30 min. Pre-booking recommended.' },
                            { title: 'Asir Escarpment Viewpoints', desc: "The western escarpment of the Asir mountains drops 2,000–3,000m to the Tihama coastal plain in dramatic cliffs and ridges. Multiple viewpoints along the park road offer views across the escarpment to the Red Sea coast and as far as Yemen on clear days.", note: 'Habala viewpoint (top of cable car descent) is the most dramatic.' },
                            { title: 'Hamadryas Baboon Viewing', desc: "Troops of hamadryas baboons are commonly seen along park roads, especially at dawn and dusk. They have adapted to human presence and are frequently photographed by visitors. Do not feed the baboons.", note: 'Most active: early morning and late afternoon.' },
                            { title: 'Al-Soudah Corridor', desc: "The road from Abha to Al-Soudah (Route 211) passes through the heart of the park — winding mountain road through juniper forest, with multiple scenic pullouts and viewpoints. Al-Soudah itself at 2,910m is the highest accessible point in Saudi Arabia.", note: 'Al-Soudah: 40 min from Abha (separate district page available).' },
                            { title: 'Khareef Season (July–September)', desc: "The summer monsoon season transforms Asir into Saudi Arabia's most visited domestic destination. Families from Riyadh, Jeddah, and Dammam come specifically for the cool, misty mountain weather (18–25°C). Accommodation books out months in advance for peak khareef.", note: 'Book accommodation well in advance for July–August visits.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-emerald-700 font-medium border-t border-emerald-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Asir National Park FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-emerald-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-emerald-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Asir National Park Taxi</h2>
                    <p className="mb-8 opacity-90">Cloud forest, Dalghan, khareef viewpoints — driver waits, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Asir%20National%20Park" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Asir Park Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/abha/khamis-mushait" className="text-slate-600 hover:underline">← Khamis Mushait</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/abha/al-soudah" className="text-slate-600 hover:underline">Al-Soudah →</Link>
            </div>
        </div>
    );
}
