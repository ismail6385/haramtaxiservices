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

const googleReviews = [
    {
        name: 'Khalid Al-Mansouri',
        rating: 5,
        text: 'Driver arrived 10 minutes early with a name sign. Vehicle was brand new Staria — spotless and cold AC. The driver helped all 5 of us with heavy luggage. No hassle at all.',
        time: '1 week ago',
        initials: 'KM',
        color: 'bg-blue-600',
    },
    {
        name: 'Sara Patel',
        rating: 5,
        text: 'Booking via WhatsApp was instant. Got confirmation in under 5 minutes. Exact price quoted upfront — no surprises at destination. Will use every Umrah trip.',
        time: '2 weeks ago',
        initials: 'SP',
        color: 'bg-green-600',
    },
    {
        name: 'Abdullah Chaudhry',
        rating: 5,
        text: 'Booked a Coaster for our group of 16. All arrived together, no splitting. Driver was patient during Ziyarat stops. Professional and highly recommended for group bookings.',
        time: '3 weeks ago',
        initials: 'AC',
        color: 'bg-purple-600',
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
                            <p className="text-gray-500 text-sm">What pilgrims say after their journey</p>
                        </div>

                        <div className="space-y-4">
                            {googleReviews.map((review, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-11 h-11 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                            {review.initials}
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">
                                                    {review.name}
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                                </div>
                                                <span className="text-xs text-gray-400 flex-shrink-0">{review.time}</span>
                                            </div>
                                            <div className="flex gap-0.5 mb-2">
                                                {[...Array(review.rating)].map((_, j) => (
                                                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-2 py-1 rounded-full">Google Review</span>
                                        <span className="text-xs text-gray-300">· Haram Taxi Service</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                            <div>
                                <p className="font-bold text-gray-900 text-sm">See all 500+ reviews</p>
                                <p className="text-xs text-gray-400">on Google · Maps · TripAdvisor</p>
                            </div>
                            <a
                                href="https://www.google.com/search?q=Haram+Taxi+Service+reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors"
                            >
                                View on Google →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
