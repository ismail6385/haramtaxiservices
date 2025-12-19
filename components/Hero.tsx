"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Clock, Shield } from 'lucide-react';
import BookingForm from './BookingForm';
import { useState, useEffect } from 'react';

interface HeroProps {
    images?: string[];
    title?: React.ReactNode;
    subtitle?: string;
    location?: string;
    h1Text?: string;
}

export default function Hero(props: HeroProps) {
    const { images } = props;
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = images || [
        '/makkah-clock-tower.webp',
        '/madinah-prophets-mosque.webp',
        '/gmc-yukon.webp',
    ];

    const slideAltTexts = [
        "Makkah Clock Tower",
        "Madinah Mosque",
        "Luxury Vehicle Fleet"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={slide}
                            alt={slideAltTexts[index] || "Taxi Service"}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            quality={85}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/90 rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                            <span className="text-white text-sm font-semibold">Professional Service</span>
                        </div>

                        {/* H1 - SEO Optimized */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
                            Online Taxi Service in <span className="text-teal-400">Saudi Arabia</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            Book reliable taxi service in Makkah, Madinah, and Jeddah. Professional drivers, clean vehicles, and 24/7 availability.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/booking">
                                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-semibold">
                                    Book Your Ride
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/fleet">
                                <Button size="lg" variant="outline" className="bg-white border-white text-gray-900 hover:bg-teal-500 hover:text-white hover:border-teal-500 px-8 py-6 text-lg font-semibold">
                                    View Fleet
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-8 pt-6">
                            <div className="flex items-center gap-2 text-white">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-teal-400" />
                                </div>
                                <div>
                                    <div className="font-semibold">24/7 Service</div>
                                    <div className="text-sm text-gray-300">Always Available</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-teal-400" />
                                </div>
                                <div>
                                    <div className="font-semibold">Safe & Secure</div>
                                    <div className="text-sm text-gray-300">Licensed Drivers</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Booking Form */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
                            <div className="bg-teal-500 p-4 text-center">
                                <h3 className="text-xl font-bold text-white">Book Your Taxi</h3>
                                <p className="text-sm text-white/90">Quick & Easy Booking</p>
                            </div>
                            <div className="p-6">
                                <BookingForm variant="default" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                            ? 'bg-teal-500 w-8'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
