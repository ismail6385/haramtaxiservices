"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Car, ChevronDown, MessageCircle } from 'lucide-react';
import HeaderDate from '@/components/HeaderDate';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 24 24" 
        className={className} 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [fleetDropdownOpen, setFleetDropdownOpen] = useState(false);
    const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
    const pathname = usePathname();

    if (pathname && pathname.startsWith('/admin')) {
        return null;
    }

    const fleetItems = [
        { name: 'GMC Yukon', href: '/fleet/gmc-yukon' },
        { name: 'Toyota Camry', href: '/fleet/toyota-camry' },
        { name: 'Hyundai Staria', href: '/fleet/hyundai-staria' },
        { name: 'Toyota Hiace', href: '/fleet/toyota-hiace' },
        { name: 'Toyota Coaster', href: '/fleet/toyota-coaster' },
        { name: 'Hyundai Starex', href: '/fleet/hyundai-starex' },
    ];

    const locationItems = [
        { name: 'Makkah', href: '/locations/makkah' },
        { name: 'Madinah', href: '/locations/madinah' },
        { name: 'Jeddah', href: '/locations/jeddah' },
        { name: 'Taif', href: '/locations/taif' },
        { name: 'Riyadh', href: '/locations/riyadh' },
        { name: 'Dammam', href: '/locations/dammam' },
        { name: 'Al Ula', href: '/locations/al-ula' },
        { name: 'Tabuk', href: '/locations/tabuk' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-md transition-all border-b border-gray-100">
            {/* Top Bar - Date Display */}
            <div className="bg-brand-navy-dark w-full border-b border-brand-navy/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
                    <HeaderDate />
                    <div className="hidden sm:block text-[11px] text-brand-navy-pale uppercase tracking-[0.2em] font-medium">
                        Serving the Guests of Allah
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center group-hover:bg-brand-navy-dark transition-all shadow-lg shadow-brand-navy/20">
                            <Car className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-gray-900 font-display tracking-tight leading-none">
                                Haram <span className="text-brand-gold">Taxi</span>
                            </span>
                            <span className="text-xs text-gray-500 uppercase tracking-[0.2em] font-black mt-1">Car Rental With Driver</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-600 hover:text-brand-navy font-medium transition-colors text-sm uppercase tracking-wide">
                            Home
                        </Link>
                        <Link href="/services" className="text-gray-600 hover:text-brand-navy font-medium transition-colors text-sm uppercase tracking-wide">
                            Services
                        </Link>
                        <Link href="/blog" className="text-gray-600 hover:text-brand-navy font-medium transition-colors text-sm uppercase tracking-wide">
                            Blog
                        </Link>


                        {/* Fleet Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setFleetDropdownOpen(true)}
                            onMouseLeave={() => setFleetDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-gray-600 hover:text-brand-navy font-medium transition-colors py-2 text-sm uppercase tracking-wide"
                                aria-expanded={fleetDropdownOpen}
                                aria-haspopup="true"
                            >
                                Fleet
                                <ChevronDown className={`w-4 h-4 transition-transform ${fleetDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {fleetDropdownOpen && (
                                <div className="absolute top-full left-0 pt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-gray-900/5">
                                    <div className="absolute -top-1 left-6 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100"></div>
                                    <Link href="/fleet" className="block px-5 py-3 text-sm text-gray-900 hover:bg-brand-navy-pale/50 hover:text-brand-navy font-bold border-b border-gray-50">
                                        View All Fleet
                                    </Link>
                                    {fleetItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-brand-navy-pale/30 hover:text-brand-navy transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Locations Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setLocationsDropdownOpen(true)}
                            onMouseLeave={() => setLocationsDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-gray-600 hover:text-brand-navy font-medium transition-colors py-2 text-sm uppercase tracking-wide"
                                aria-expanded={locationsDropdownOpen}
                                aria-haspopup="true"
                            >
                                Locations
                                <ChevronDown className={`w-4 h-4 transition-transform ${locationsDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {locationsDropdownOpen && (
                                <div className="absolute top-full left-0 pt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-gray-900/5">
                                    <div className="absolute -top-1 left-10 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100"></div>
                                    <Link href="/locations" className="block px-5 py-3 text-sm text-gray-900 hover:bg-brand-navy-pale/50 hover:text-brand-navy font-bold border-b border-gray-50">
                                        View All Locations
                                    </Link>
                                    {locationItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-brand-navy-pale/30 hover:text-brand-navy transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="text-gray-600 hover:text-brand-navy font-medium transition-colors text-sm uppercase tracking-wide">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-brand-navy font-medium transition-colors text-sm uppercase tracking-wide">
                            Contact
                        </Link>

                        <a
                            href="https://wa.me/966575806733?text=As-salamu%20alaykum,%20I%20want%20to%20get%20a%20quote%20for%20chauffeur%20service."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />
                                Get Quote
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
                    <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-navy-pale hover:text-brand-navy rounded-lg font-medium transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-navy-pale hover:text-brand-navy rounded-lg font-medium transition-colors"
                        >
                            Services
                        </Link>

                        {/* Fleet Section */}
                        <div className="bg-gray-50/50 rounded-xl p-2">
                            <div className="px-2 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Fleet</div>
                            <div className="space-y-1">
                                <Link href="/fleet" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-white hover:text-brand-navy rounded-lg hover:shadow-sm font-medium">
                                    View All Fleet
                                </Link>
                                {fleetItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-white hover:text-brand-navy rounded-lg transition-colors pl-6"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Locations Section */}
                        <div className="bg-gray-50/50 rounded-xl p-2">
                            <div className="px-2 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Locations</div>
                            <div className="space-y-1">
                                <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-white hover:text-brand-navy rounded-lg hover:shadow-sm font-medium">
                                    View All Locations
                                </Link>
                                {locationItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-white hover:text-brand-navy rounded-lg transition-colors pl-6"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-navy-pale hover:text-brand-navy rounded-lg font-medium transition-colors"
                        >
                            About
                        </Link>

                        <Link
                            href="/blog"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-navy-pale hover:text-brand-navy rounded-lg font-medium transition-colors"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-navy-pale hover:text-brand-navy rounded-lg font-medium transition-colors"
                        >
                            Contact
                        </Link>

                        <a
                            href="https://wa.me/966575806733?text=As-salamu%20alaykum,%20I%20want%20to%20get%20a%20quote%20for%20chauffeur%20service."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-6 text-lg font-bold shadow-md flex items-center justify-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />
                                Get Quote
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
