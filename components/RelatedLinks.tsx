import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface LinkItem {
    label: string;
    href: string;
}

interface Props {
    heading: string;
    links: LinkItem[];
}

export default function RelatedLinks({ heading, links }: Props) {
    if (links.length === 0) return null;

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{heading}</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {links.map((l, idx) => (
                        <Link
                            key={idx}
                            href={l.href}
                            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-slate-400 hover:text-slate-700 hover:shadow-sm transition-all"
                        >
                            {l.label} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
