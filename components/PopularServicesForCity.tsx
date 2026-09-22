import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServiceLink {
    label: string;
    href: string;
}

interface Props {
    city: string;
    services: ServiceLink[];
}

export default function PopularServicesForCity({ city, services }: Props) {
    if (services.length === 0) return null;

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                        <Sparkles className="w-6 h-6 text-brand-gold" /> Popular Services in {city}
                    </h2>
                    <p className="text-gray-600">Book the right service for your trip</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((s, idx) => (
                        <Link
                            key={idx}
                            href={s.href}
                            className="flex items-center justify-between gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-brand-navy/40 hover:shadow-md transition-all group"
                        >
                            <span className="font-semibold text-gray-900 group-hover:text-brand-navy text-sm leading-snug">{s.label}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-navy flex-shrink-0" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
