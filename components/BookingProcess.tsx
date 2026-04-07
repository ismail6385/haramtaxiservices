import { MapPin, MessageSquare, ShieldCheck, CheckCircle2, Navigation, Clock, UserCheck } from 'lucide-react';

export default function BookingProcess() {
    const steps = [
        {
            icon: MessageSquare,
            title: "Instant Quote & Confirm",
            desc: "Click the WhatsApp button and send your details. Get an instant, competitive quote from our dispatch team within minutes."
        },
        {
            icon: UserCheck,
            title: "Driver Details Dispatched",
            desc: "Once confirmed, you'll receive your driver's name, phone number, and vehicle details via WhatsApp before arrival."
        },
        {
            icon: ShieldCheck,
            title: "Smooth & Safe Journey",
            desc: "Your professional chauffeur will assist with luggage and ensure a peaceful transfer to your hotel or airport destination."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-navy/20 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        Seamless Operations
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">How Your Journey <span className="text-brand-navy underline decoration-brand-gold underline-offset-8 italic">Unfolds</span></h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Precision-planned transfers designed around your peace of mind. Experience the Haram Taxi standard of service.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-brand-navy/20 -z-10"></div>
                    
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative">
                                <span className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold shadow-lg ring-4 ring-white">
                                    {i + 1}
                                </span>
                                <step.icon className="w-10 h-10 text-brand-navy" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-light">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 bg-white rounded-[40px] border border-gray-100 shadow-2xl shadow-brand-navy/5 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-brand-navy text-white rounded-2xl flex items-center justify-center flex-shrink-0 animate-pulse">
                            <Clock className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900">Arriving in the next 24 Hours?</h4>
                            <p className="text-gray-500">Fast-track your booking via WhatsApp for priority dispatch.</p>
                        </div>
                    </div>
                    <a 
                        href="https://wa.me/996575806733?text=Assalamu%20Alaikum%2C%20I%20am%20arriving%20soon%20and%20need%20a%20taxi."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full lg:w-auto"
                    >
                        <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-200 transition-all active:scale-95 flex items-center justify-center gap-3 group">
                           <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                           Priority WhatsApp Booking
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
