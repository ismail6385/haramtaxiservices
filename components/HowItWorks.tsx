import { CheckCircle2, Search, Calendar, MapPin } from 'lucide-react';

const steps = [
    {
        title: "Search & Choose",
        description: "Select your route and pick the perfect vehicle for your group size and baggage needs.",
        icon: Search,
        color: "bg-blue-500"
    },
    {
        title: "Book Instantly",
        description: "Fill in your details and confirm your ride via WhatsApp for immediate peace of mind.",
        icon: Calendar,
        color: "bg-green-500"
    },
    {
        title: "Meet Your Driver",
        description: "Your professional chauffeur will meet you at the designated point with a name sign.",
        icon: MapPin,
        color: "bg-yellow-500"
    },
    {
        title: "Relax & Arrive",
        description: "Enjoy a safe, comfortable door-to-door journey to your destination in Saudi Arabia.",
        icon: CheckCircle2,
        color: "bg-brand-navy"
    }
];

export default function HowItWorks({ title = "How It Works" }: { title?: string }) {
    return (
        <section className="py-24 bg-brand-navy text-white overflow-hidden relative" aria-labelledby="how-it-works-heading">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-display font-bold mb-4">{title}</h2>
                    <p className="text-xl opacity-90 leading-relaxed">
                        Follow our simple four-step process to secure your premium transportation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Step Number Background */}
                            <div className="absolute -top-10 -left-6 text-9xl font-bold text-white/10 select-none">
                                {index + 1}
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full hover:bg-white/20 transition-all duration-300 relative z-10">
                                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <step.icon className="w-7 h-7 text-white" />
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-white/80 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        </section>
    );
}
