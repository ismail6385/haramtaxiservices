"use client";

import Link from 'next/link';
import { Car, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Fleet', href: '/fleet' },
        { name: 'Locations', href: '/locations' },
        { name: 'Contact', href: '/contact' },
        { name: 'Booking', href: '/booking' },
    ];

    const locations = [
        { name: 'Makkah', href: '/locations/makkah' },
        { name: 'Madinah', href: '/locations/madinah' },
        { name: 'Jeddah', href: '/locations/jeddah' },
        { name: 'Taif', href: '/locations/taif' },
        { name: 'AlUla', href: '/locations/alula' },
        { name: 'Khayber', href: '/locations/khayber-fort' },
    ];

    const vehicles = [
        { name: 'GMC Yukon', href: '/fleet/gmc-yukon' },
        { name: 'Toyota Camry', href: '/fleet/toyota-camry' },
        { name: 'Hyundai Staria', href: '/fleet/hyundai-staria' },
        { name: 'Toyota Hiace', href: '/fleet/toyota-hiace' },
        { name: 'Toyota Coaster', href: '/fleet/toyota-coaster' },
        { name: 'Hyundai Starex', href: '/fleet/hyundai-starex' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                                <Car className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">
                                    Haram <span className="text-teal-400">Taxi</span>
                                </span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Premium Service</span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 mb-4">
                            Professional taxi service across Saudi Arabia. Available 24/7 for your transportation needs.
                        </p>
                        <div className="mb-4">
                            <a href="mailto:haramtaxiservice@gmail.com" className="text-teal-400 hover:text-teal-300 text-sm flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                haramtaxiservice@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Service Areas</h3>
                        <ul className="space-y-2">
                            {locations.map((location) => (
                                <li key={location.name}>
                                    <Link href={location.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {location.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fleet */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Our Fleet</h3>
                        <ul className="space-y-2">
                            {vehicles.map((vehicle) => (
                                <li key={vehicle.name}>
                                    <Link href={vehicle.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2">
                                        <Car className="w-4 h-4" />
                                        {vehicle.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Haram Taxi Service. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
