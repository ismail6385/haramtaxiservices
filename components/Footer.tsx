"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Car, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    if (pathname && pathname.startsWith('/admin')) {
        return null;
    }

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'About Us', href: '/about' },
        { name: 'Fleet', href: '/fleet' },
        { name: 'Locations', href: '/locations' },
        { name: 'Contact', href: '/contact' },
        { name: 'Booking', href: '/booking' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Tools', href: '/tools' },
    ];

    const locations = [
        { name: 'Makkah', href: '/locations/makkah' },
        { name: 'Madinah', href: '/locations/madinah' },
        { name: 'Jeddah', href: '/locations/jeddah' },
        { name: 'Taif', href: '/locations/taif' },
        { name: 'Riyadh', href: '/locations/riyadh' },
        { name: 'Dammam', href: '/locations/dammam' },
        { name: 'Al Ula', href: '/locations/al-ula' },
        { name: 'Tabuk', href: '/locations/tabuk' },
    ];

    const popularRoutes = [
        { name: 'Routes Index', href: '/routes' },
        { name: 'Riyadh to Bahrain', href: '/routes/riyadh-to-bahrain' },
        { name: 'Jeddah to Riyadh', href: '/routes/jeddah-to-riyadh' },
        { name: 'Dammam to Madinah', href: '/routes/dammam-to-madinah' },
        { name: 'Qassim to Makkah', href: '/routes/qassim-to-makkah' },
        { name: 'Makkah to Madinah', href: '/routes/makkah-to-madinah' },
    ];

    const vehicles = [
        { name: 'GMC Yukon', href: '/fleet/gmc-yukon' },
        { name: 'Toyota Camry', href: '/fleet/toyota-camry' },
        { name: 'Hyundai Staria', href: '/fleet/hyundai-staria' },
        { name: 'Toyota Hiace', href: '/fleet/toyota-hiace' },
        { name: 'Toyota Coaster', href: '/fleet/toyota-coaster' },
        { name: 'Hyundai Starex', href: '/fleet/hyundai-starex' },
    ];

    const services = [
        { name: 'Umrah Travel Agency', href: '/routes/umrah-travel-agency' },
        { name: 'Hajj Travel Agency', href: '/routes/hajj-travel-agency' },
        { name: 'Umrah Transport', href: '/routes/umrah-transport' },
        { name: 'Luxury Transport', href: '/routes/luxury-umrah-transport' },
        { name: 'Hotel to Haram', href: '/routes/hotel-to-haram-transport' },
    ];

    return (
        <footer itemScope itemType="https://schema.org/LocalBusiness" className="bg-gray-950 text-gray-300 border-t border-gray-900">
            <meta itemProp="name" content="Haram Taxi Service" />
            <meta itemProp="image" content="https://haramtaxiservice.com/logo.png" />
            <meta itemProp="priceRange" content="$$" />
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-8 group">
                            <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-brand-navy-light transition-all">
                                <Car className="w-8 h-8 text-brand-gold" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-display font-black text-white tracking-tighter">
                                    Haram <span className="text-brand-gold">Taxi</span>
                                </span>
                                <span className="text-xs text-gray-500 uppercase tracking-[0.3em] font-black">Official KSA Transport</span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 mb-8 leading-relaxed pr-8">
                            Premium licensed transportation service specializing in Makkah to Madinah transit, Jeddah Airport VIP transfers, and custom Umrah Ziyarat packages since 2014. 
                        </p>
                        <div className="space-y-4 mb-8">
                            {/* Address — NAP signal */}
                            <a href="https://maps.google.com/?q=Haram+Taxi+Service+Makkah+Saudi+Arabia" target="_blank" rel="noopener noreferrer" itemProp="hasMap" className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-gold transition-colors">
                                    <MapPin className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest">Headquarters</p>
                                    <p className="text-sm text-white font-bold group-hover:text-brand-gold transition-colors"><span itemProp="streetAddress">Al Aziziyah</span>, <span itemProp="addressLocality">Makkah</span>, <span itemProp="addressCountry">Saudi Arabia</span></p>
                                </div>
                            </a>
                            {/* Phone / WhatsApp */}
                            <a href="https://wa.me/966575806733" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-green-500 transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest">WhatsApp / Phone</p>
                                    <p itemProp="telephone" className="text-sm text-white font-bold group-hover:text-green-400 transition-colors">+966 57 580 6733</p>
                                </div>
                            </a>
                            {/* Email */}
                            <a href="mailto:booking@haramtaxiservice.com" className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-gold transition-colors">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-brand-gold"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest">Email Bookings</p>
                                    <p itemProp="email" className="text-sm text-white font-bold group-hover:text-brand-gold transition-colors">booking@haramtaxiservice.com</p>
                                </div>
                            </a>
                            {/* Hours */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-brand-gold"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest">Hours</p>
                                    <p itemProp="openingHours" content="Mo-Su 00:00-23:59" className="text-sm text-white font-bold">Open 24 / 7 — All Days</p>
                                </div>
                            </div>
                            {/* Social sameAs */}
                            <div className="flex items-center gap-3 pt-2">
                                <a href="https://www.facebook.com/haramtaxiservice" target="_blank" rel="noopener noreferrer" itemProp="sameAs" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500 transition-colors">
                                    <Facebook className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                                </a>
                                <a href="https://www.instagram.com/haramtaxiservice" target="_blank" rel="noopener noreferrer" itemProp="sameAs" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-pink-500 transition-colors">
                                    <Instagram className="w-4 h-4 text-gray-400 hover:text-pink-400" />
                                </a>
                                <a href="https://wa.me/966575806733" target="_blank" rel="noopener noreferrer" itemProp="sameAs" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-green-500 transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-400 hover:fill-green-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h3 className="text-white font-display font-black text-xs uppercase tracking-[0.3em] mb-8">Service Areas</h3>
                        <ul className="space-y-4">
                            {locations.map((location) => (
                                <li key={location.name}>
                                    <Link href={location.href} className="text-gray-500 hover:text-brand-gold transition-colors text-[11px] font-black uppercase tracking-widest flex items-center gap-2 group">
                                        <div className="w-1 h-1 bg-brand-gold/20 group-hover:bg-brand-gold rounded-full" /> {location.name} Taxi
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Routes */}
                    <div>
                        <h3 className="text-white font-display font-black text-xs uppercase tracking-[0.3em] mb-8">Popular Routes</h3>
                        <ul className="space-y-4">
                            {popularRoutes.map((route) => (
                                <li key={route.name}>
                                    <Link href={route.href} className="text-gray-500 hover:text-brand-gold transition-colors text-[11px] font-black uppercase tracking-widest flex items-center gap-2 group">
                                        <div className="w-1 h-1 bg-brand-gold/20 group-hover:bg-brand-gold rounded-full" /> {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Fleet */}
                    <div>
                        <h3 className="text-white font-display font-black text-xs uppercase tracking-[0.3em] mb-8">Our Fleet</h3>
                        <ul className="space-y-4">
                             {vehicles.map((vehicle) => (
                                <li key={vehicle.name}>
                                    <Link href={vehicle.href} className="text-gray-500 hover:text-brand-gold transition-colors text-[11px] font-black uppercase tracking-widest flex items-center gap-2 group">
                                        <div className="w-1 h-1 bg-brand-gold/20 group-hover:bg-brand-gold rounded-full" /> {vehicle.name}
                                    </Link>
                                </li>
                             ))}
                        </ul>
                    </div>

                    {/* Trust Column */}
                    <div>
                        <h3 className="text-white font-display font-black text-xs uppercase tracking-[0.3em] mb-8">Compliance</h3>
                        <div className="space-y-6">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-xs font-bold text-gray-400 mb-2 leading-tight uppercase tracking-widest">Ministry of Transport Licensed</p>
                                <p className="text-xs text-gray-500 font-medium">Verified transport license for operation across all KSA regions and airports.</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-xs font-bold text-gray-400 mb-2 leading-tight uppercase tracking-widest">Customer Protection</p>
                                <p className="text-xs text-gray-500 font-medium">All rides are insured and monitored for safety and punctuality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-900 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-gray-500 text-sm">
                            © {currentYear} Haram Taxi Service. All rights reserved.
                        </div>
                        <div className="flex gap-8 text-sm">
                            <Link href="/privacy" className="text-gray-500 hover:text-brand-navy transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-500 hover:text-brand-navy transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}
