import { Star, Quote, CheckCircle2, Users, Shield, ThumbsUp } from 'lucide-react';

const testimonials = [
    {
        name: 'Ahmed Al-Sayed',
        role: 'Umrah Pilgrim',
        origin: 'Egypt 🇪🇬',
        content: 'Alhamdulillah, the driver was waiting for us at the airport with a name board. The GMC Yukon was spotless and the AC was perfect. After a 10-hour flight, this was exactly the comfort we needed. Highly recommended for any pilgrim.',
        rating: 5,
        initials: 'AA',
        color: 'bg-slate-600',
        trip: 'Jeddah Airport → Makkah',
        source: 'Google',
        date: '2 weeks ago',
    },
    {
        name: 'Fatima Rahman',
        role: 'Family of 6',
        origin: 'United Kingdom 🇬🇧',
        content: 'We traveled with our elderly parents and young children. The driver was incredibly patient and helped with all our luggage. He even stopped at the Meeqat for us without us asking. This is the kind of service that makes your Umrah special.',
        rating: 5,
        initials: 'FR',
        color: 'bg-indigo-600',
        trip: 'Makkah → Madinah',
        source: 'Google',
        date: '1 month ago',
    },
    {
        name: 'Mohammad Khan',
        role: 'Group Leader',
        origin: 'Pakistan 🇵🇰',
        content: 'I organized Umrah for a group of 14 people. Haram Taxi provided two Hiace vans, both on time and both immaculate. The drivers knew every Ziyarat location in Madinah. Will definitely use again for our next group trip.',
        rating: 5,
        initials: 'MK',
        color: 'bg-yellow-600',
        trip: 'Madinah Ziyarat Tour',
        source: 'Google',
        date: '3 weeks ago',
    },
    {
        name: 'Yusuf Al-Farsi',
        role: 'Business Traveler',
        origin: 'UAE 🇦🇪',
        content: 'I travel to Makkah frequently for business. Haram Taxi is the only service I trust. Competitive quotes, no surprises, always on time. The WhatsApp booking is instant — I get confirmation within minutes.',
        rating: 5,
        initials: 'YF',
        color: 'bg-rose-600',
        trip: 'Jeddah Airport → Makkah',
        source: 'Google',
        date: '2 months ago',
    },
    {
        name: 'Aisha Okonkwo',
        role: 'First-time Pilgrim',
        origin: 'Nigeria 🇳🇬',
        content: 'As a first-time Umrah pilgrim traveling alone, I was nervous about transportation. The driver was professional and made me feel completely safe. He gave me tips about the Haram and even helped me find my hotel. Truly above and beyond.',
        rating: 5,
        initials: 'AO',
        color: 'bg-purple-600',
        trip: 'Jeddah Airport → Makkah Hotel',
        source: 'Google',
        date: '1 month ago',
    },
    {
        name: 'Hassan Al-Turki',
        role: 'Hajj Pilgrim',
        origin: 'Saudi Arabia 🇸🇦',
        content: 'Even as a local, I use Haram Taxi for Hajj season because of the reliability. During Hajj, every minute counts. Their drivers know the routes perfectly and never get stuck. Best decision I made for my Hajj logistics.',
        rating: 5,
        initials: 'HT',
        color: 'bg-cyan-600',
        trip: 'Makkah → Mina → Arafat',
        source: 'Google',
        date: '5 months ago',
    },
    {
        name: 'Nadia Benali',
        role: 'Umrah Pilgrim',
        origin: 'France 🇫🇷',
        content: 'La voiture était immaculée, le chauffeur très respectueux. He spoke enough English for clear communication. Pickup was exactly on time at Madinah Airport. Dropping us directly at our Makkah hotel entrance. Perfect service.',
        rating: 5,
        initials: 'NB',
        color: 'bg-emerald-600',
        trip: 'Madinah Airport → Makkah',
        source: 'Google',
        date: '3 months ago',
    },
    {
        name: 'Tariq Mahmood',
        role: 'Corporate Client',
        origin: 'Malaysia 🇲🇾',
        content: 'Used Haram Taxi for our entire delegation of 22 people. Three Toyota Coasters arranged perfectly. All drivers were professionally dressed and the vehicles were spotless. Exactly what we needed for a government-level visit.',
        rating: 5,
        initials: 'TM',
        color: 'bg-amber-700',
        trip: 'Jeddah Airport → Makkah (Group)',
        source: 'Google',
        date: '6 weeks ago',
    },
    {
        name: 'Zainab Al-Rashidi',
        role: 'Solo Traveler',
        origin: 'Kuwait 🇰🇼',
        content: 'As a woman traveling alone, safety was my top priority. The driver from Haram Taxi was completely professional, didn\'t engage in unnecessary conversation, and delivered me door to door safely. I booked them three more times during my stay.',
        rating: 5,
        initials: 'ZR',
        color: 'bg-pink-700',
        trip: 'Multiple Madinah Routes',
        source: 'Google',
        date: '1 week ago',
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-900" id="testimonials" aria-label="Customer Testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-full mb-8">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-sm font-bold tracking-wide">4.9 Rating · 500+ Verified Reviews</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                        Trusted by Pilgrims <span className="text-yellow-400">Worldwide</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Real experiences from real pilgrims. From Jeddah Airport transfers to full Ziyarat tours — here&apos;s what our customers say.
                    </p>

                    {/* Avatar stack */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="flex -space-x-4">
                            {testimonials.slice(0, 5).map((t, i) => (
                                <div
                                    key={i}
                                    className={`w-12 h-12 rounded-full ${t.color} border-4 border-gray-900 flex items-center justify-center text-white text-xs font-bold shadow-md hover:scale-110 transition-transform z-10`}
                                    aria-hidden="true"
                                >
                                    {t.initials}
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full bg-gray-700 border-4 border-gray-900 flex items-center justify-center text-gray-300 text-xs font-bold shadow-md z-0">
                                +
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-white font-bold text-sm">15,000+ happy pilgrims</p>
                            <p className="text-gray-400 text-xs font-medium">from 50+ countries</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 border border-gray-700 rounded-2xl p-7 hover:border-yellow-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Quote className="w-24 h-24 text-yellow-400 transform rotate-12" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Review text */}
                            <p className="text-gray-300 leading-relaxed flex-grow mb-6 relative z-10 font-light">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Trip tag */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-bold mb-6 self-start border border-yellow-400/20">
                                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" aria-hidden="true" />
                                {testimonial.trip}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-5 border-t border-gray-700 relative z-10">
                                <div
                                    className={`w-11 h-11 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md ring-2 ring-gray-700`}
                                    aria-hidden="true"
                                >
                                    {testimonial.initials}
                                </div>
                                <div className="flex-grow">
                                    <div className="font-bold text-white text-sm flex items-center gap-2">
                                        {testimonial.name}
                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                                    </div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{testimonial.role} · {testimonial.origin}</div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="font-bold text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full uppercase">{testimonial.source}</span>
                                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom aggregate trust */}
                <div className="mt-14 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-6 px-10 py-6 bg-gray-800 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                                ))}
                            </div>
                            <span className="text-white font-bold text-base">5.0 Average Rating</span>
                        </div>
                        <div className="w-px h-6 bg-gray-600 hidden sm:block" aria-hidden="true" />
                        <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-yellow-400" /> 15,000+ Verified Bookings
                        </span>
                        <div className="w-px h-6 bg-gray-600 hidden sm:block" aria-hidden="true" />
                        <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                            <Users className="w-4 h-4 text-yellow-400" /> 50+ Countries Served
                        </span>
                        <div className="w-px h-6 bg-gray-600 hidden sm:block" aria-hidden="true" />
                        <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                            <Shield className="w-4 h-4 text-yellow-400" /> TGA Licensed &amp; Insured
                        </span>
                        <div className="w-px h-6 bg-gray-600 hidden sm:block" aria-hidden="true" />
                        <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                            <ThumbsUp className="w-4 h-4 text-yellow-400" /> 500+ Google Reviews
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
