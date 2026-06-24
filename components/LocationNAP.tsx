import { MapPin, Phone, Clock, Mail, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

interface LocationNAPProps {
    city: string;
    address: string;
    mapsUrl: string;
    reviewCount?: number;
    ratingValue?: number;
    nearbyAreas?: string[];
}

export default function LocationNAP({
    city,
    address,
    mapsUrl,
    reviewCount = 0,
    ratingValue = 4.9,
    nearbyAreas = [],
}: LocationNAPProps) {
    const waMessage = encodeURIComponent(
        `Hello Haram Taxi Service, I would like to book a taxi in ${city}.`
    );

    return (
        <section className="py-14 bg-gray-50 border-t border-gray-200" aria-label={`Contact information for taxi service in ${city}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Haram Taxi Service — {city}</h2>
                    <p className="text-gray-500 text-sm">Our contact details and service area for {city}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Address */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
                        <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                            <p className="text-sm text-gray-800 font-medium leading-snug">{address}</p>
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-brand-navy hover:underline mt-2 inline-block font-semibold"
                            >
                                View on Google Maps →
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
                        <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                            <Phone className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                            <a href="tel:+966575806733" className="text-sm font-bold text-gray-900 hover:text-brand-navy">
                                +966 575 806 733
                            </a>
                            <div className="mt-2">
                                <a
                                    href={`https://wa.me/966575806733?text=${waMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs bg-[#25D366] text-white px-3 py-1.5 rounded-full font-semibold hover:bg-[#1ebd5b] transition-colors"
                                >
                                    <WhatsAppIcon className="w-3.5 h-3.5" />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
                        <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                            <Clock className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Hours</p>
                            <p className="text-sm font-bold text-gray-900">Open 24 / 7</p>
                            <p className="text-xs text-gray-500 mt-1">Monday – Sunday, including Eid & Hajj season</p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                            <Star className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Customer Rating</p>
                            <div className="flex items-center gap-1.5">
                                <span className="text-2xl font-bold text-gray-900">{ratingValue}</span>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                            </div>
                            {reviewCount > 0 && (
                                <p className="text-xs text-gray-500 mt-1">{reviewCount}+ verified bookings in {city}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Email row */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Mail className="w-4 h-4" />
                    <span>Email:</span>
                    <a href="mailto:booking@haramtaxiservice.com" className="text-brand-navy font-medium hover:underline">
                        booking@haramtaxiservice.com
                    </a>
                </div>

                {/* Nearby areas served */}
                {nearbyAreas.length > 0 && (
                    <div className="mt-8 text-center">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            Also Serving Nearby Areas
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {nearbyAreas.map((area) => (
                                <span
                                    key={area}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600 shadow-sm"
                                >
                                    <MapPin className="w-3 h-3 text-brand-navy" />
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
