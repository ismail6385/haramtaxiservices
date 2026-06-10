import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/buraidah/buraydah-dates-market' },
    title: "Buraidah Dates Market Taxi | World's Largest Dates Market — Mahrajan Al-Tamr",
    description: "Taxi to Buraidah Dates Market (Souq Al-Tamr) — world's largest dates market, active August–September. Sukkari, Ruthab, 100+ varieties. Festival season transfers. Fixed rate.",
    keywords: ['Buraidah dates market taxi', 'Mahrajan Al-Tamr taxi', 'Souq Al-Tamr Buraidah', 'Buraidah dates festival taxi', 'Sukkari dates Buraidah', 'Qassim dates market'],
    openGraph: {
        title: "Buraidah Dates Market Taxi — World's Largest Dates Market",
        description: "Taxi to Buraidah Dates Market, world's largest. Sukkari, 100+ varieties. August–September festival.",
        url: 'https://haramtaxiservice.com/locations/buraidah/buraydah-dates-market',
        type: 'website',
    },
};

const faqs = [
    { question: "What is the Buraidah Dates Market?", answer: "The Buraidah Dates Market (Souq Al-Tamr or Mahrajan Al-Tamr — the Dates Festival) is the world's largest dates trading market, held annually in Buraidah during the August–September harvest season. Thousands of tonnes of fresh dates — over 100 varieties — are auctioned and sold daily at the purpose-built market complex. It is simultaneously a wholesale trade event, a cultural festival, and one of Saudi Arabia's most distinctive seasonal experiences." },
    { question: "What is Sukkari date?", answer: "Sukkari ('sugar' date) is the most famous variety produced in Qassim Region — and considered by many experts to be the finest eating date in the world. Sukkari dates are soft, caramel-sweet with a crumbly, almost meringue-like texture when perfectly ripe. The fresh Rutab (soft-ripe) Sukkari available at the Buraidah market in August–September is radically different from the dried Sukkari sold year-round in shops — the fresh version is vastly superior." },
    { question: "When does the Buraidah Dates Festival take place?", answer: "The main festival (Mahrajan Al-Tamr) runs in August and September, coinciding with the date harvest. The specific dates vary year to year based on the harvest calendar. The market is most active in the first two weeks of the festival when the fresh Rutab (soft-ripe) dates are at peak quality and the wholesale auctions are running daily." },
    { question: "How do I get to the Buraidah Dates Market by taxi?", answer: "The Souq Al-Tamr is located in the northern part of Buraidah city — approximately 5–10 minutes by taxi from central Buraidah hotels, 25 minutes from ELQ Airport. Our taxi drops you at the market entrance and can be pre-booked for a specific return pickup time." },
    { question: "Can I buy dates to take on a flight?", answer: "Yes — fresh dates in sealed boxes are accepted as cabin or hold luggage on Saudi domestic flights. Vacuum-packed and dried date varieties are straightforward. Fresh Rutab dates are more fragile and best in cool carry-on bags for same-day travel. Confirm current airline carry-on policies when buying." },
];

export default function BuraydahDatesMarketPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/buraidah">Buraidah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Dates Market</span>
                </div>
            </div>

            <section className="bg-amber-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Souq Al-Tamr · World&apos;s Largest Dates Market · August–September · Sukkari</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Buraidah Dates Market Taxi — World&apos;s Largest Dates Market</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Taxi to <strong>Buraidah Dates Market (Souq Al-Tamr)</strong> — the world&apos;s largest dates trading market. <strong>100+ varieties, fresh Sukkari Rutab, wholesale auctions</strong>. Active August–September harvest season. Fixed rate, hotel pickup.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Buraidah%20Dates%20Market" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Dates Market Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">World&apos;s #1</div><div className="text-sm text-gray-600">Largest Dates Market</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">100+</div><div className="text-sm text-gray-600">Date Varieties</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Aug–Sep</div><div className="text-sm text-gray-600">Harvest Festival Season</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Sukkari</div><div className="text-sm text-gray-600">World&apos;s Finest Date</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Buraidah Dates Market — What to Know</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Market', desc: "The Souq Al-Tamr is a purpose-built market complex in northern Buraidah — open from before dawn during the harvest season. Wholesale buyers arrive early (5–8am) for the auctions. Retail visitors can browse the hundreds of vendor stalls selling every variety, size, and ripeness level of date produced in Qassim.", note: 'Best time: early morning, first week of festival.' },
                            { title: 'Sukkari — The Crown Date', desc: "Sukkari (meaning 'sugar') is Qassim's signature date — soft, sweet, with a texture like caramel meringue at full ripeness. The fresh Rutab-stage Sukkari available during harvest is incomparably better than the dried version sold year-round. Buying directly from the market at harvest is the only way to get the genuine fresh article.", note: 'Sukkari Rutab: soft yellow/amber, crumbles when fully ripe.' },
                            { title: 'The Festival (Mahrajan Al-Tamr)', desc: "Beyond the trading, the Dates Festival is a cultural event — traditional Najdi music and dance performances, cooking demonstrations of date-based dishes, heritage exhibitions on date palm cultivation, and agricultural awards for the best produce. It draws visitors from across Saudi Arabia and Gulf states.", note: 'Festival runs 3–4 weeks, core trading fortnight.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-amber-700 font-medium border-t border-amber-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dates Market FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-amber-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-amber-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Dates Market Taxi</h2>
                    <p className="mb-8 opacity-90">Festival season transfers — hotel to market, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Buraidah%20Dates%20Market" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Dates Market Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/buraidah/buraidah-airport" className="text-amber-600 hover:underline">← Buraidah Airport</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/buraidah/unaizah" className="text-amber-600 hover:underline">Unaizah →</Link>
            </div>
        </div>
    );
}
