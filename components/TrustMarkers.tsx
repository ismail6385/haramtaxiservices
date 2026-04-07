import { Shield, CheckCircle2, Award, Clock, Star, Users, MapPin, Gauge } from 'lucide-react';

export default function TrustMarkers() {
    const markers = [
        {
            icon: Shield,
            title: "TGA Licensed",
            desc: "Fully compliant with Saudi Transport Authority.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: CheckCircle2,
            title: "Verified Fleet",
            desc: "Every car is inspected & sanitized before each trip.",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            icon: Award,
            title: "Award Winning",
            desc: "Voted #1 Umrah Taxi Service by pilgrims in 2025.",
            color: "text-brand-gold",
            bg: "bg-brand-gold-pale"
        },
        {
            icon: Clock,
            title: "On-Time Guarantee",
            desc: "Driver arrives 15 minutes before your scheduled pickup.",
            color: "text-brand-navy",
            bg: "bg-brand-navy-pale"
        }
    ];

    const stats = [
        { label: "Bookings Monthly", value: "2,500+" },
        { label: "Verified Drivers", value: "85+" },
        { label: "Customer Rating", value: "4.9/5" },
        { label: "Service Area", value: "All KSA" }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy/10 text-brand-navy rounded-full mb-6 font-bold text-sm uppercase tracking-widest">
                            <Star className="w-4 h-4 fill-current" />
                            The Gold Standard of Umrah Transport
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
                            Experience the Premium <span className="text-brand-navy italic underline decoration-brand-gold underline-offset-8">Difference</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
                            While others copy our words, they can never replicate our commitment. We provide more than just a car; we provide a worry-free spiritual experience.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {markers.map((marker, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className={`w-12 h-12 ${marker.bg} ${marker.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <marker.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{marker.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">{marker.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Interactive Stats Card */}
                        <div className="bg-gray-900 rounded-[40px] p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden group">
                           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-navy/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-navy/40 transition-colors"></div>
                           
                           <div className="flex items-center gap-4 mb-10">
                               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                   <Gauge className="w-6 h-6 text-brand-gold" />
                               </div>
                               <div>
                                   <h3 className="text-white font-bold text-xl">Real-Time Reliability</h3>
                                   <p className="text-white/50 text-xs">Live performance indicators (Monthly Avg.)</p>
                               </div>
                           </div>

                           <div className="grid grid-cols-2 gap-8">
                               {stats.map((stat, i) => (
                                   <div key={i} className="space-y-1">
                                       <div className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-brand-navy transition-colors">{stat.value}</div>
                                       <div className="text-xs text-white/40 uppercase tracking-widest font-bold font-sans">{stat.label}</div>
                                   </div>
                               ))}
                           </div>

                           <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                               <div className="flex -space-x-3">
                                   {[1,2,3,4].map(i => (
                                       <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center overflow-hidden">
                                           <Users className="w-5 h-5 text-white/30" />
                                       </div>
                                   ))}
                               </div>
                               <button className="text-brand-gold font-bold text-sm hover:underline">
                                   Join 50k+ Happy Pilgrims
                               </button>
                           </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-brand-navy/5 blur-3xl rounded-full scale-125 -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
