'use client';
import { useState } from 'react';
import { ChevronDown, Star, CheckCircle2, MessageSquare } from 'lucide-react';

const faqs = [
    {
        question: "Where exactly will I meet my driver at the airport?",
        answer: "We offer a 'No-Stress Meet & Greet' service. Your driver will be waiting at the arrivals terminal exit (International or Domestic) holding a clear name-board with your name and the Haram Taxi logo. We track your flight status live, so even if you land early or late, we are there."
    },
    {
        question: "Do I need to pay in advance for my Makkah to Madinah taxi?",
        answer: "No pre-payment is required. We believe in trust-based service. You can book your ride today and pay the driver in cash or via local transfer after you safely reach your destination. This gives you total peace of mind and flexibility."
    },
    {
        question: "Can we stop for food or prayer during the long Makkah-Madinah journey?",
        answer: "Absolutely. Our drivers understand the needs of pilgrims and families. The 450km journey includes stops at high-quality rest areas (like Sasco) for prayer, washrooms, or a meal. Just let your driver know — your comfort is our priority."
    },
    {
        question: "Are child seats available for family transfers?",
        answer: "Yes, we prioritize the safety of your little ones. Please mention the requirement for a child seat when booking via WhatsApp, and we will ensure your vehicle (SUV or Van) is equipped with one before arrival."
    },
    {
        question: "How much is the taxi fare from Jeddah Airport to Makkah?",
        answer: "Our Jeddah Airport to Makkah fare is fixed and confirmed before the journey. Pricing depends on vehicle type: Toyota Camry (4 passengers), Hyundai Staria (7 passengers), GMC Yukon (7 passengers), Toyota Hiace (11 passengers), or Toyota Coaster (17 passengers). WhatsApp us for an instant quote."
    },
    {
        question: "Do you provide service during Hajj and Ramadan seasons?",
        answer: "Yes, we operate 24/7 every day of the year including Hajj season, Ramadan, Eid, and all public holidays. During peak season we recommend booking at least 48 hours in advance to secure your preferred vehicle and time slot."
    },
];


function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-100 last:border-none">
            <button
                className="w-full flex items-center justify-between text-left py-5 gap-4 group"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span className="font-semibold text-gray-900 text-base leading-snug group-hover:text-brand-navy transition-colors">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-brand-navy flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
            </button>
            {open && (
                <div className="pb-5 text-gray-600 leading-relaxed text-sm pr-8">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function HomeFAQ() {
    return (
        <section className="py-20 bg-white border-t border-gray-100" id="faq">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT: FAQ Accordion */}
                    <div>
                        <div className="mb-10">
                            <p className="text-xs font-black text-brand-navy uppercase tracking-widest mb-3">Customer Questions</p>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Everything you need to know before booking your private taxi in Saudi Arabia.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl px-6">
                            {faqs.map((faq, i) => (
                                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
                            ))}
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            <MessageSquare className="w-5 h-5 text-brand-navy flex-shrink-0" />
                            <p className="text-sm text-gray-500">
                                More questions?{' '}
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20have%20a%20question%20about%20booking"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-navy font-semibold hover:underline"
                                >
                                    WhatsApp us instantly
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Google Reviews */}
                    <div>
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex">
                                    {[1,2,3,4,5].map(i => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="font-bold text-gray-900">4.9 on Google</span>
                                <span className="text-xs text-gray-400 font-medium">500+ reviews</span>
                            </div>
                            <p className="text-gray-500 text-sm">Read verified reviews directly on our Google Business Profile</p>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center gap-4">
                            <div className="flex gap-0.5">
                                {[1,2,3,4,5].map(i => (
                                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                                We link directly to our Google Business Profile so you can read reviews exactly as pilgrims and customers left them — nothing curated or rewritten.
                            </p>
                            <a
                                href="https://www.google.com/search?q=Haram+Taxi+Service+reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white font-bold text-sm rounded-xl hover:bg-brand-navy-light transition-colors"
                            >
                                <CheckCircle2 className="w-4 h-4" /> View All Reviews on Google
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
