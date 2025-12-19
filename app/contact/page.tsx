import BookingForm from '@/components/BookingForm';
import { Clock, MapPin, CheckCircle2, MessageSquare, Headphones, Phone, Mail } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Contact Us | Book Taxi in Saudi Arabia - Haram Taxi Service',
    description: 'Contact Haram Taxi Service for bookings in Makkah, Madinah, Jeddah. Book online or call us 24/7. Professional taxi service across Saudi Arabia.',
    keywords: ['contact taxi Saudi Arabia', 'book taxi Makkah', 'taxi booking Madinah', 'call taxi Jeddah', 'online taxi booking'],
    openGraph: {
        title: 'Contact Us | Book Taxi in Saudi Arabia',
        description: 'Contact us for taxi bookings in Makkah, Madinah, Jeddah. Available 24/7.',
        url: 'https://haramtaxiservice.com/contact',
        type: 'website',
    },
};

export default function ContactPage() {
    const faqs = [
        {
            question: "How can I book a taxi?",
            answer: "You can book through our online booking form on this page or the homepage. Fill in your details and we&apos;ll confirm your booking immediately."
        },
        {
            question: "What is your response time?",
            answer: "We aim to respond to all inquiries within 30-60 minutes. For urgent bookings, we provide instant confirmation."
        },
        {
            question: "Do you operate 24/7?",
            answer: "Yes, our taxi service is available 24 hours a day, 7 days a week including holidays."
        },
        {
            question: "Can I modify my booking?",
            answer: "Yes, you can modify your booking by contacting us through the form. We recommend making changes at least 24 hours before your scheduled pickup."
        },
        {
            question: "What areas do you cover?",
            answer: "We provide taxi services across Makkah, Madinah, Jeddah, Taif, AlUla, and other major cities in Saudi Arabia."
        }
    ];

    const features = [
        {
            icon: Clock,
            title: "24/7 Available",
            description: "Round the clock service for your convenience"
        },
        {
            icon: CheckCircle2,
            title: "Instant Confirmation",
            description: "Quick booking confirmation via online form"
        },
        {
            icon: MapPin,
            title: "Wide Coverage",
            description: "Service across all major cities in KSA"
        },
        {
            icon: Headphones,
            title: "Customer Support",
            description: "Dedicated support team ready to help"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
                            <MessageSquare className="w-4 h-4 text-teal-500" />
                            <span className="text-teal-600 text-sm font-semibold">Get in Touch</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Contact <span className="text-teal-500">Us</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Have questions about our taxi service? Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>

                        <div className="mt-6">
                            <a href="mailto:haramtaxiservice@gmail.com" className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 font-semibold text-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                haramtaxiservice@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <feature.icon className="w-6 h-6 text-teal-500" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                            <p className="text-gray-600">
                                Fill out the form below and our team will respond to your inquiry promptly.
                            </p>
                        </div>
                        <BookingForm variant="hero" />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Why Choose Haram Taxi Service?
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                We are committed to providing the best taxi service experience in Saudi Arabia with professional drivers and well-maintained vehicles.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Professional Drivers</h3>
                                        <p className="text-gray-600 text-sm">Experienced and licensed drivers</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Clean Vehicles</h3>
                                        <p className="text-gray-600 text-sm">Well-maintained and sanitized cars</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Transparent Pricing</h3>
                                        <p className="text-gray-600 text-sm">No hidden fees or charges</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">24/7 Service</h3>
                                        <p className="text-gray-600 text-sm">Always available when you need us</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/support-team.webp"
                                alt="Customer Support"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500 rounded-full mb-3">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    <span className="text-white text-sm font-semibold">Available Now</span>
                                </div>
                                <h3 className="text-white text-2xl font-bold">Professional Service</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Common questions about our service</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item - ${index} `}
                                className="bg-white px-6 rounded-xl border-0 shadow-sm"
                            >
                                <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:text-teal-500 text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-teal-500 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Book?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Book your taxi now and experience professional service
                    </p>
                    <a
                        href="/booking"
                        className="inline-block bg-white text-teal-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                    >
                        Book Now
                    </a>
                </div>
            </section>
        </div>
    );
}
