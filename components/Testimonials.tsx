import { Star, Users, Shield, ThumbsUp, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-900" id="testimonials" aria-label="Customer Reviews">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Header */}
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
                <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                    From Jeddah Airport transfers to full Ziyarat tours — read what pilgrims and families say about us directly on Google.
                </p>

                <div className="flex items-center justify-center gap-3 mb-10">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <p className="text-white font-bold text-sm">15,000+ happy pilgrims from 50+ countries</p>
                </div>

                <a
                    href="https://maps.google.com/?q=Haram+Taxi+Service+Saudi+Arabia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors mb-14"
                >
                    Read Our Reviews on Google <ExternalLink className="w-4 h-4" />
                </a>

                {/* Bottom aggregate trust */}
                <div className="flex flex-wrap items-center justify-center gap-6 px-10 py-6 bg-gray-800 rounded-2xl border border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                            ))}
                        </div>
                        <span className="text-white font-bold text-base">4.9 Average Rating</span>
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
                        <Shield className="w-4 h-4 text-yellow-400" /> Licensed &amp; Insured
                    </span>
                    <div className="w-px h-6 bg-gray-600 hidden sm:block" aria-hidden="true" />
                    <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4 text-yellow-400" /> 500+ Google Reviews
                    </span>
                </div>
            </div>
        </section>
    );
}
