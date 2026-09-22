import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { routesData } from '@/lib/routesData';
import { getFleetSlugForVehicle } from '@/lib/routeRelated';

interface Props {
    vehicleSlug: string;
    vehicleName: string;
}

export default function PopularRoutesForVehicle({ vehicleSlug, vehicleName }: Props) {
    const matchingRoutes = routesData
        .filter((r) => r.pricing.some((p) => getFleetSlugForVehicle(p.vehicle) === vehicleSlug))
        .slice(0, 6);

    if (matchingRoutes.length === 0) return null;

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes for the {vehicleName}</h2>
                    <p className="text-xl text-gray-600">Frequently booked transfers using this vehicle</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matchingRoutes.map((r) => (
                        <Link
                            key={r.slug}
                            href={`/routes/${r.slug}`}
                            className="flex items-center justify-between gap-3 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-slate-400 hover:shadow-md transition-all group"
                        >
                            <span className="font-semibold text-gray-900 group-hover:text-slate-700 text-sm leading-snug">{r.h1}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-slate-600 flex-shrink-0" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
