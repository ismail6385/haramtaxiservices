"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Car, ChevronDown } from 'lucide-react';
import HeaderDate from '@/components/HeaderDate';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [fleetDropdownOpen, setFleetDropdownOpen] = useState(false);
    const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

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
        { name: 'AlUla', href: '/locations/alula' },
        { name: 'Khayber', href: '/locations/khayber-fort' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white shadow-md transition-all">
            {/* Top Bar - Date Display */}
            <div className="bg-teal-950 w-full border-b border-teal-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
                    <HeaderDate />
                    <div className="hidden sm:block text-[10px] text-teal-100/60 uppercase tracking-widest">
                        Serving the Guests of Allah
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                            <Car className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-gray-900">
                                Haram <span className="text-teal-500">Taxi</span>
                            </span>
                            <span className="text-xs text-gray-600 uppercase tracking-wider">Premium Service</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">
                            Home
                        </Link>

                        {/* Fleet Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setFleetDropdownOpen(true)}
                            onMouseLeave={() => setFleetDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-gray-700 hover:text-teal-500 font-medium transition-colors">
                                Fleet
                                <ChevronDown className={`w-4 h-4 transition-transform ${fleetDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {fleetDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                                    <Link href="/fleet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-500 font-semibold border-b border-gray-100">
                                        View All Fleet
                                    </Link>
                                    {fleetItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-500 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Locations Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setLocationsDropdownOpen(true)}
                            onMouseLeave={() => setLocationsDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-gray-700 hover:text-teal-500 font-medium transition-colors">
                                Locations
                                <ChevronDown className={`w-4 h-4 transition-transform ${locationsDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {locationsDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                                    <Link href="/locations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-500 font-semibold border-b border-gray-100">
                                        View All Locations
                                    </Link>
                                    {locationItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-500 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/contact" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">
                            Contact
                        </Link>

                        <Link href="/booking">
                            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6">
                                Book Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-900" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-900" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-500 rounded-lg font-medium transition-colors"
                        >
                            Home
                        </Link>

                        {/* Fleet Section */}
                        <div>
                            <div className="px-4 py-2 text-sm font-bold text-gray-900 bg-gray-50 rounded-lg">Fleet</div>
                            <div className="mt-2 space-y-1 pl-4">
                                <Link href="/fleet" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-500 rounded-lg">
                                    View All Fleet
                                </Link>
                                {fleetItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-500 rounded-lg transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Locations Section */}
                        <div>
                            <div className="px-4 py-2 text-sm font-bold text-gray-900 bg-gray-50 rounded-lg">Locations</div>
                            <div className="mt-2 space-y-1 pl-4">
                                <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-500 rounded-lg">
                                    View All Locations
                                </Link>
                                {locationItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-500 rounded-lg transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-500 rounded-lg font-medium transition-colors"
                        >
                            Contact
                        </Link>

                        <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                            <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
