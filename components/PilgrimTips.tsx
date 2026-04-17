import { Lightbulb, MapPin, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

export default function PilgrimTips() {
    return (
        <div className="bg-brand-navy-pale/30 rounded-3xl p-8 border border-brand-navy/10 space-y-8">
            <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-brand-navy text-white rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">Pilgrim Travel Wisdom</h3>
                    <p className="text-brand-navy font-medium">Making your spiritual journey smoother</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-brand-navy/5">
                            <MapPin className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Meeting Points</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                At Jeddah Terminal 1, meet your driver near the large aquarium. For Terminal North, look for the designated pre-arranged transport area.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-brand-navy/5">
                            <Clock className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Peak Hour Planning</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Avoid travel during prayer times if possible, as roads near the Haram in Makkah and Madinah often close 30 minutes before and after Salah.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-brand-navy/5">
                            <ShieldCheck className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Vehicle Verification</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Always ensure your driver is from Haram Taxi Service. They will have your booking details ready on their dispatch app for verification.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-brand-navy/5">
                            <HelpCircle className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Ziyarat Tours</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We recommend booking Ziyarat tours (Mount Uhud, Quba Mosque, Cave of Hira) early in the morning to avoid the midday sun and crowds.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-xs text-brand-navy-dark font-medium italic opacity-80 text-center sm:text-left">
                    Note: Our services are designed to give you peace of mind so you can focus on your Ibadah. 
                </p>
                <a 
                    href="/booking"
                    className="bg-brand-navy hover:bg-brand-navy-light text-white font-black px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap"
                >
                    Book your Umrah taxi now
                </a>
            </div>
        </div>
    );
}
