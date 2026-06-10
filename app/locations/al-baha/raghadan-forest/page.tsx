import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-baha/raghadan-forest' },
    title: 'Raghadan Forest Taxi | Al-Baha Cable Car & Highland Forest Transfer',
    description: 'Taxi to Raghadan Forest Park from Al-Baha city — 5km, 10 minutes. Highland cedar and juniper forest, cable car with panoramic valley views. Main recreation area in Al-Baha Province. Fixed rate.',
    keywords: ['Raghadan Forest taxi', 'Raghadan Park Al-Baha taxi', 'Al-Baha cable car taxi', 'Raghadan cable car taxi', 'Al-Baha forest park taxi'],
    openGraph: {
        title: 'Raghadan Forest Taxi — Al-Baha Cable Car & Highland Forest Transfer',
        description: 'Taxi to Raghadan Forest Park, Al-Baha. Cable car, highland forest, 5km. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-baha/raghadan-forest',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Raghadan Forest Park?", answer: "Raghadan Forest Park is Al-Baha's main recreation and nature destination — a highland forest of cedar, juniper, and wild olive trees approximately 5km from Al-Baha city centre. The park covers a significant area of the Al-Baha highland plateau at approximately 1,700m and has walking trails, picnic areas, family recreation zones, viewpoints overlooking the mountain valleys, and the Raghadan Cable Car that descends from the plateau to the valley below." },
    { question: "What is the Raghadan Cable Car?", answer: "The Raghadan Cable Car (Teleferik Raghadan) is a cable car system running from the forest park on the plateau edge down to a lower station in the valley — one of the most popular tourist attractions in Al-Baha. The cable car gives panoramic views of the escarpment, highland villages, and (in clear weather) the lower coastal plain toward the Red Sea. Operating hours vary seasonally; check before visiting. Tickets are purchased at the station." },
    { question: "How far is Raghadan Forest from Al-Baha?", answer: "Approximately 5km from Al-Baha city centre — about 10 minutes by taxi. It is the most accessible major attraction from the city. The taxi drop-off is at the park entrance; the driver can wait or return at a scheduled time." },
    { question: "What trees are in Raghadan Forest?", answer: "The forest is a relict highland forest — one of the last remaining areas of natural forest in western Saudi Arabia. The main species are African juniper (Juniperus procera), wild olive (Olea europaea), and at higher elevations, species of Acacia. The forest's existence at this altitude is due to Al-Baha's unusual microclimate — the southwestern escarpment position captures monsoon moisture from the Indian Ocean that doesn't reach the rest of Saudi Arabia." },
    { question: "Can I combine Raghadan Forest with Dhee Ain?", answer: "Yes — the standard Al-Baha morning combines Raghadan Forest (cable car + forest walk: 1.5 hours) with Dhee Ain (marble village: 1 hour, 25km further west). Start at Raghadan early, then drive to Dhee Ain for the afternoon light. Return to Al-Baha city for dinner. Your driver covers the full circuit with waiting time at both sites." },
];

export default function RaghadanForestPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-baha">Al-Baha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Raghadan Forest</span>
                </div>
            </div>

            <section className="bg-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Raghadan Forest · Cable Car · Highland Forest · 1,700m · 5km from Al-Baha</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Raghadan Forest Taxi — Al-Baha Cable Car &amp; Highland Forest Transfer</h1>
                        <p className="text-xl text-green-100 mb-8 font-light">
                            Taxi to <strong>Raghadan Forest Park</strong> — 5km from Al-Baha city, 10 minutes. <strong>Highland cedar forest, cable car with panoramic valley views</strong>, walking trails. Main recreation destination in Al-Baha Province. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Raghadan%20Forest%20Park%20in%20Al-Baha" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Raghadan Forest Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-green-50 border-b border-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-green-800 mb-1">5 km</div><div className="text-sm text-gray-600">from Al-Baha city</div></div>
                        <div><div className="text-3xl font-bold text-green-800 mb-1">Cable Car</div><div className="text-sm text-gray-600">Panoramic Valley Views</div></div>
                        <div><div className="text-3xl font-bold text-green-800 mb-1">1,700m</div><div className="text-sm text-gray-600">Highland Altitude</div></div>
                        <div><div className="text-3xl font-bold text-green-800 mb-1">Cedar</div><div className="text-sm text-gray-600">Highland Forest</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Raghadan Forest — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Highland Forest', desc: "Raghadan is one of the last remnants of natural highland forest in western Saudi Arabia — a relict ecosystem that exists because of Al-Baha's unique position on the southwestern escarpment, which captures monsoon moisture that doesn't penetrate the rest of the Arabian Peninsula. Walking through the juniper and olive woodland at 1,700m feels genuinely different from the rest of Saudi Arabia — cool, fragrant, and visually lush.", note: 'Best morning walk: marked forest trail, 1.5km loop.' },
                            { title: 'The Cable Car', desc: "The Raghadan Cable Car (Teleferik) descends from the forest plateau edge to a lower station — the crossing gives unobstructed panoramic views of the escarpment, the valley below, and on clear days the coastal plain toward the Red Sea. The cable car is the most popular single tourist activity in Al-Baha city. Operating hours and ticket booking: check current arrangements at the park entrance.", note: 'Cable car: operating hours vary by season.' },
                            { title: 'Park Facilities & Views', desc: "The park has multiple viewpoints on the plateau edge — accessible by short walks from the main park road. The best views are from the southern edge, overlooking the deep valleys of the Hejaz escarpment with highland villages visible on the opposing slopes. Family picnic areas are distributed through the forest with permanent facilities. The park is busiest on Thursdays and weekends — arrive early for parking and a quieter experience.", note: 'Best views: southern plateau edge viewpoints.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-green-800 font-medium border-t border-green-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Raghadan Forest Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-green-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Raghadan Forest Taxi</h2>
                    <p className="mb-8 opacity-90">5km from Al-Baha — cable car, highland forest, valley views. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Raghadan%20Forest%20Park%20in%20Al-Baha" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Raghadan Forest Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-baha/dhee-ain" className="text-emerald-700 hover:underline">← Dhee Ain</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-baha/zahran-heritage-village" className="text-emerald-700 hover:underline">Zahran Heritage Village →</Link>
            </div>
        </div>
    );
}
