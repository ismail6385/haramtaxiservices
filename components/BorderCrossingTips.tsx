import { ShieldCheck, Clock, MapPin, Info, Car } from 'lucide-react';

interface BorderCrossingTipsProps {
    borderName: string;
    targetCountry: string;
}

export default function BorderCrossingTips({ borderName, targetCountry }: BorderCrossingTipsProps) {
    return (
        <div className="bg-brand-navy-pale/30 rounded-3xl p-8 border border-brand-navy/10 space-y-8 mt-12">
            <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-brand-navy text-white rounded-2xl flex items-center justify-center font-bold">
                    <Info className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-brand-navy/20 pb-1">Efficient Border Crossing Guide</h3>
                    <p className="text-brand-navy font-medium mt-1">Travel Seamlessly Through {borderName}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-white p-2 rounded-xl shadow-sm border border-brand-navy/5 ring-4 ring-brand-navy/5">
                            <Clock className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Timing your Arrival</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Most land ports like {borderName} are busiest during weekends and holidays. For {targetCountry} crossings, arriving before 10 AM or after 8 PM often saves up to 2 hours of processing time.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-white p-2 rounded-xl shadow-sm border border-brand-navy/5 ring-4 ring-brand-navy/5">
                            <ShieldCheck className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Documentation Readiness</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ensure your passport, visa, and vehicle registration (Istimara) are easily accessible. If crossing for a &quot;Visa Run,&quot; have your previous exit stamps ready for the immigration officer.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-white p-2 rounded-xl shadow-sm border border-brand-navy/5 ring-4 ring-brand-navy/5">
                            <Car className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Drop-off Procedure</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our drivers drop you directly at the Saudi Departure Terminal. From there, you will proceed through immigration and customs before taking the neutral zone shuttle to the {targetCountry} side.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-white p-2 rounded-xl shadow-sm border border-brand-navy/5 ring-4 ring-brand-navy/5">
                            <MapPin className="w-5 h-5 text-brand-navy" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Safety & Convenience</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Avoid unauthorized transportation offered at the gates. Stick with our verified drivers who are familiar with {borderName}&apos;s security protocols and authorized parking areas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-brand-navy/10 flex items-center justify-between text-xs text-brand-navy-dark font-medium opacity-80 italic">
                <span>* Crossing procedures vary by nationality and visa type. Stay updated with official government portals.</span>
                <span className="hidden sm:inline">24/7 Driver Support Available</span>
            </div>
        </div>
    );
}
