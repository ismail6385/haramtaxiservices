import { Play, Star, MapPin, Camera, User, CheckCircle2 } from 'lucide-react';

interface UpdateItem {
    id: number;
    author: string;
    trip: string;
    quote: string;
    date: string;
    type: 'video' | 'photo';
    color: string;
}

export default function CustomerUpdates({ location }: { location: string }) {
    // Dynamic content based on location
    const updates: Record<string, UpdateItem[]> = {
        'Makkah': [
            { id: 1, author: "Usman Ali", trip: "Jeddah Airport to Makkah", quote: "GMC Yukon had space for 6 bags and a wheelchair. Very smooth ride from the airport.", date: "2 days ago", type: 'video', color: 'bg-blue-600' },
            { id: 2, author: "Fatima Family", trip: "Makkah Ziyarat", quote: "Driver picked us up exactly in front of the Clock Tower. Very respectful.", date: "1 week ago", type: 'photo', color: 'bg-emerald-600' },
            { id: 3, author: "Abdullah", trip: "Makkah to Madinah", quote: "4.5 hour journey felt like a breeze. The AC was perfect for the hot weather.", date: "3 weeks ago", type: 'video', color: 'bg-purple-600' },
        ],
        'Madinah': [
            { id: 1, author: "Hassan Group", trip: "Madinah Ziyarat Tour", quote: "Highly recommend for Ziyarat. Driver knew all the historical spots around Masjid Quba.", date: "3 days ago", type: 'video', color: 'bg-blue-600' },
            { id: 2, author: "Salma Syed", trip: "Makkah to Madinah", quote: "Safe driving on the highway. We felt totally relaxed all the way to our Madinah hotel.", date: "1 week ago", type: 'photo', color: 'bg-emerald-600' },
            { id: 3, author: "Rehan M", trip: "Madinah Airport Transfer", quote: "Driver was waiting at the arrivals gate with a name sign. Super easy.", date: "2 weeks ago", type: 'video', color: 'bg-purple-600' },
        ],
        'Jeddah': [
            { id: 1, author: "Zainab T.", trip: "Jeddah Airport to Makkah", quote: "We had a lot of ZamZam water and luggage on our return trip. The Hiace van was perfect.", date: "1 day ago", type: 'video', color: 'bg-blue-600' },
            { id: 2, author: "Ahmed K.", trip: "Jeddah City Tour", quote: "Corniche ride was amazing. Driver was very polite and the car spotlessly clean.", date: "4 days ago", type: 'photo', color: 'bg-emerald-600' },
            { id: 3, author: "Sonia H.", trip: "Jeddah Hotel Transfer", quote: "Quick, reliable, and communication via WhatsApp before arrival gave us peace of mind.", date: "2 weeks ago", type: 'video', color: 'bg-purple-600' },
        ],
        'Kuwait': [
            { id: 1, author: "Adnan R.", trip: "Riyadh to Kuwait City", quote: "The 7-hour journey was very comfortable in the GMC Yukon. Driver was extremely professional at the border.", date: "4 days ago", type: 'video', color: 'bg-brand-teal' },
            { id: 2, author: "Zaid Family", trip: "Dammam to Kuwait", quote: "Direct pickup from DMM Airport. Safe driving and no hassle at the border crossing. Perfect service.", date: "1 week ago", type: 'photo', color: 'bg-brand-amber' },
            { id: 3, author: "Yasin", trip: "Kuwait to Riyadh", quote: "Punctual driver. We reached Riyadh RUH Airport exactly on time for our flight. Thank you!", date: "2 weeks ago", type: 'video', color: 'bg-slate-700' },
        ],
        'Riyadh': [
            { id: 1, author: "Khalid M.", trip: "Riyadh City to Kuwait", quote: "Excellent inter-country transfer. Smooth ride and very clean Camry. 5 stars!", date: "2 days ago", type: 'video', color: 'bg-brand-teal' },
            { id: 2, author: "Sara", trip: "Riyadh Airport Transfer", quote: "Reliable pickup from RUH Airport. Very polite driver and large trunk for 4 bags.", date: "1 week ago", type: 'photo', color: 'bg-brand-amber' },
        ],
        'Dammam': [
            { id: 1, author: "Omar", trip: "Dammam to Kuwait", quote: "Quickest cross-border ride we've had. The driver handled all the paperwork at Al Raqi border.", date: "3 days ago", type: 'video', color: 'bg-brand-teal' },
            { id: 2, author: "Ahmed", trip: "DMM Airport to Kuwait", quote: "Met us at the arrivals gate. Stress-free journey to Kuwait City hotels.", date: "1 week ago", type: 'photo', color: 'bg-brand-amber' },
        ],
        'Default': [
            { id: 1, author: "Usman Group", trip: "Jeddah Airport Transfer", quote: "Driver picked us up right at the gate. Smooth journey.", date: "2 days ago", type: 'video', color: 'bg-blue-600' },
            { id: 2, author: "Ali Family", trip: "City Ziyarat", quote: "Excellent tour of the holy sites. Highly recommended.", date: "1 week ago", type: 'photo', color: 'bg-emerald-600' },
            { id: 3, author: "Bilal", trip: "Intercity Travel", quote: "Safe and comfortable highway driving. Great experience.", date: "3 weeks ago", type: 'video', color: 'bg-purple-600' },
        ]
    };

    // Smarter logic to find matching updates
    let locationUpdates = updates[location];

    if (!locationUpdates) {
        if (location.toLowerCase().includes('kuwait')) {
            locationUpdates = updates['Kuwait'];
        } else if (location.toLowerCase().includes('riyadh')) {
            locationUpdates = updates['Riyadh'];
        } else if (location.toLowerCase().includes('dammam') || location.toLowerCase().includes('khobar') || location.toLowerCase().includes('jubail')) {
            locationUpdates = updates['Dammam'];
        } else {
            locationUpdates = updates['Default'];
        }
    }

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100" aria-label="Customer Updates">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold-pale/40 border border-brand-gold text-brand-gold-dark rounded-full mb-4">
                        <Camera className="w-4 h-4" />
                        <span className="text-sm font-bold tracking-wide uppercase">Live Updates from {location}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Pilgrim Stories &amp; Videos from {location}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See what our recent customers in {location} say about their journeys, airport transfers, and Ziyarat tours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {locationUpdates.map((update) => (
                        <div key={update.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
                            {/* Fake media thumbnail container */}
                            <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center">
                                {/* Simulated image/video background using gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${update.color} opacity-80`} />
                                
                                {update.type === 'video' ? (
                                    <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                        <Play className="w-8 h-8 text-white ml-1" />
                                    </div>
                                ) : (
                                    <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                        <Camera className="w-8 h-8 text-white" />
                                    </div>
                                )}
                                
                                <div className="absolute top-4 left-4">
                                    <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-white font-medium">
                                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                                        Verified Trip
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium">
                                        {update.type === 'video' ? '0:24' : 'Photo'}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-6">
                                    &ldquo;{update.quote}&rdquo;
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                                            <User className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">{update.author}</div>
                                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                                <MapPin className="w-3 h-3" /> {update.trip}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-400">{update.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
