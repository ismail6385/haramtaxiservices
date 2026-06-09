import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/dammam/bahrain-causeway' },
    title: 'Bahrain Causeway Taxi | King Fahd Causeway Saudi Arabia to Bahrain Transfer',
    description: 'Taxi across the King Fahd Causeway — Dammam / Khobar to Manama Bahrain. Experienced drivers, immigration checkpoint guidance, 24/7. SAR to BHD crossing specialist.',
    keywords: ['Bahrain Causeway taxi', 'King Fahd Causeway taxi', 'Saudi Arabia to Bahrain taxi', 'Khobar to Manama taxi', 'Dammam to Bahrain taxi', 'causeway crossing transfer', 'Bahrain border taxi'],
    openGraph: {
        title: 'Bahrain Causeway Taxi — King Fahd Causeway Saudi to Bahrain Transfer',
        description: 'Taxi across King Fahd Causeway. Khobar or Dammam to Manama. Experienced drivers, checkpoint guidance. 24/7.',
        url: 'https://haramtaxiservice.com/locations/dammam/bahrain-causeway',
        type: 'website',
    },
};

const faqs = [
    { question: 'What documents do I need to cross the Bahrain Causeway by taxi?', answer: "Saudi nationals: national ID card (or passport). GCC nationals: national ID or passport. Non-GCC residents and visitors: passport + valid Saudi residency permit (Iqama) or Saudi entry visa, plus a valid Bahrain visa (or Bahrain eVisa). Citizens of GCC states do not need a Bahrain visa. Check Bahrain eVisa eligibility before travel — your driver knows the requirement but cannot obtain visas for passengers." },
    { question: 'How long does the King Fahd Causeway crossing take?', answer: "The Causeway is 25km long — driving time is 20–30 minutes. However, immigration adds 15–90 minutes depending on traffic. Saudi exit checkpoint + Bahrain entry checkpoint each process separately. Peak crossing times: Thursday evening (Saudi weekend starts), Friday morning, and during Bahrain Grand Prix. Normal weekday crossings average 30–45 minutes total including checkpoints." },
    { question: 'Do Saudi taxis need special permission to cross to Bahrain?', answer: "Yes — only licensed cross-border taxis can cross the King Fahd Causeway. Our service includes this authorization. Standard app-based taxis (Careem, Uber) generally cannot cross into Bahrain with Saudi plates. Cross-border passengers are processed at a dedicated taxi lane at the checkpoint. Your driver handles all vehicle documentation." },
    { question: 'How much does the Causeway taxi cost?', answer: "The Causeway toll is paid by the driver and included in your fare. WhatsApp us your pickup location (Dammam, Khobar, Dhahran, KFAC Airport) and destination in Manama or Bahrain, and we quote a fixed rate immediately. The fixed rate covers door-to-door — Saudi side to your Bahrain destination." },
    { question: 'What are the peak crossing times to avoid?', answer: "Heavy traffic: Thursday evening after 5pm (Saudi weekend departure), Friday and Saturday morning return, Saudi national holidays, Bahrain Grand Prix weekend (April), and Eid al-Fitr/Eid al-Adha. Best times: early weekday morning (6–9am), midday (12–2pm), and Sunday morning. Note: some nationalities face additional inspection — build extra time into your schedule." },
];

export default function BahrainCausewayPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/dammam">Dammam</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Bahrain Causeway</span>
                </div>
            </div>

            <section className="bg-indigo-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">King Fahd Causeway · Saudi Arabia ↔ Bahrain</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Bahrain Causeway Taxi — King Fahd Causeway Transfer</h1>
                        <p className="text-xl text-indigo-200 mb-8 font-light">
                            Cross the <strong>King Fahd Causeway</strong> with an experienced, licensed cross-border driver. Pickup from <strong>Dammam, Al Khobar, Dhahran, or KFAC Airport</strong> — drop-off in <strong>Manama or anywhere in Bahrain</strong>. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Bahrain%20via%20King%20Fahd%20Causeway" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Causeway Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8 rounded-r-xl">
                <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-amber-800 mb-1">Visa Required for Non-GCC Travellers</p>
                        <p className="text-sm text-amber-700">Non-GCC nationals must have a valid Bahrain visa (eVisa or on-arrival, depending on nationality) before crossing. Your driver cannot obtain this for you. Check Bahrain eVisa eligibility at evisa.gov.bh before booking.</p>
                    </div>
                </div>
            </div>

            <section className="py-10 bg-indigo-50 border-b border-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-indigo-700 mb-1">25 km</div><div className="text-sm text-gray-600">Causeway Length</div></div>
                        <div><div className="text-3xl font-bold text-indigo-700 mb-1">~1.5 hrs</div><div className="text-sm text-gray-600">Khobar to Manama</div></div>
                        <div><div className="text-3xl font-bold text-indigo-700 mb-1">Licensed</div><div className="text-sm text-gray-600">Cross-Border Taxi</div></div>
                        <div><div className="text-3xl font-bold text-indigo-700 mb-1">24/7</div><div className="text-sm text-gray-600">Causeway is Open 24hrs</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Causeway Crossing — Routes &amp; Times</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-indigo-800 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Pickup / Destination</th>
                                    <th className="px-5 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-5 py-4 text-left font-semibold">Normal Time</th>
                                    <th className="px-5 py-4 text-left font-semibold">Peak Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { from: 'Al Khobar to Manama', dist: '80 km', normal: '~1 hr', peak: '2–3 hrs (Thu eve)' },
                                    { from: 'Dammam City to Manama', dist: '100 km', normal: '1.5 hrs', peak: '2.5–3.5 hrs (Thu eve)' },
                                    { from: 'KFAC Airport to Manama', dist: '120 km', normal: '1.5 hrs', peak: '2.5–3.5 hrs' },
                                    { from: 'Dhahran / Aramco to Manama', dist: '80 km', normal: '~1 hr', peak: '2–3 hrs' },
                                    { from: 'Manama to Al Khobar (return)', dist: '80 km', normal: '~1 hr', peak: '2–3 hrs (Fri/Sat)' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-gray-900">{row.from}</td>
                                        <td className="px-5 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-5 py-4 font-bold text-indigo-700">{row.normal}</td>
                                        <td className="px-5 py-4 text-amber-600 font-medium">{row.peak}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Book a Private Taxi vs. Public Transport</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { title: 'Door-to-Door in Bahrain', desc: 'We drop you at your hotel, office, or home in Bahrain — not just at the Bahrain border.' },
                            { title: 'Licensed Cross-Border Vehicle', desc: 'Only licensed Saudi taxis can cross to Bahrain. App taxis (Careem/Uber) cannot.' },
                            { title: 'Immigration Knowledge', desc: 'Driver knows which lanes to use, which documents to show, and how to handle each nationality\'s process.' },
                            { title: 'Fixed Rate — No Meter Shock', desc: 'Rate confirmed on WhatsApp before travel. Causeway toll is included.' },
                            { title: 'Flexible Timing', desc: 'Leave when you want. No waiting for shared minibuses or scheduled coaches.' },
                            { title: 'Return Trip Option', desc: 'Pre-book your return leg at the same time — guaranteed pickup in Bahrain.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-700 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                                    <p className="text-xs text-gray-600">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bahrain Causeway Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-indigo-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-indigo-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Bahrain Causeway Taxi</h2>
                    <p className="mb-8 opacity-90">Saudi Arabia to Bahrain — fixed rate, licensed cross-border driver.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Bahrain%20via%20King%20Fahd%20Causeway" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Causeway Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/dammam/jubail" className="text-slate-600 hover:underline">← Jubail Industrial</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/dammam/qatif" className="text-slate-600 hover:underline">Qatif →</Link>
            </div>
        </div>
    );
}
