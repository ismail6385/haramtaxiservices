import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import { Plane, MapPin, Building2, Shield, Clock, Award, CheckCircle2, Users, Crown, Star, ArrowRight, DollarSign, Headphones, Car, Phone, Mail, Navigation } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import { getPrayerTimes } from '@/lib/prayer-times';
import PrayerTimesWidget from '@/components/PrayerTimes';

export default async function Home() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Haram Taxi Service - Premium Transportation",
    "url": "https://haramtaxiservice.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://haramtaxiservice.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const initialPrayerTimes = await getPrayerTimes('Makkah');

  const heroImages = [
    '/makkah-royal-clock-tower.webp',
    '/masjid-nabawi-madinah.webp',
    '/gmc-yukon-xl-taxi.webp',
    '/jeddah-corniche-view.webp',
    '/makkah-haram-night-view.webp',
  ];

  const services = [
    {
      title: "Airport Transfers",
      description: "Seamless pickup from King Abdulaziz (Jeddah) & Prince Mohammad (Madinah) Airports directly to your hotel.",
      icon: Plane,
      link: "/locations/jeddah",
      image: "/jeddah-airport-taxi-service.webp",
      imageAlt: "Airport taxi transfer from Jeddah Airport to Makkah and Madinah"
    },
    {
      title: "Intercity Travel",
      description: "Comfortable, private rides between Makkah, Madinah, and Jeddah with experienced drivers.",
      icon: Navigation,
      link: "/locations/makkah",
      image: "/makkah-city-taxi-transfer.webp",
      imageAlt: "City to city taxi transfer between Makkah Madinah and Jeddah"
    },
    {
      title: "Hotel Pickups",
      description: "Door-to-door transfer service for all hotels in the Holy Cities. No waiting, no hassle.",
      icon: Building2,
      link: "/locations/madinah",
      image: "/madinah-hotel-transfer-service.webp",
      imageAlt: "Hotel to hotel transfer service in Madinah and Makkah"
    },
    {
      title: "Private Chauffeur",
      description: "Exclusive VIP service for Ziyarat tours, business meetings, and family travel.",
      icon: Crown,
      link: "/fleet/gmc-yukon",
      image: "/private-vip-taxi-driver.webp",
      imageAlt: "Private VIP taxi driver service in Saudi Arabia"
    }
  ];

  const fleet = [
    {
      name: "GMC Yukon XL",
      image: "/gmc-yukon-xl-taxi.webp",
      passengers: 7,
      luggage: 5,
      features: ["VIP Luxury", "Soundproof", "Privacy Glass"],
      link: "/fleet/gmc-yukon",
      imageAlt: "GMC Yukon XL luxury taxi interior and exterior for VIPs"
    },
    {
      name: "Toyota Camry",
      image: "/toyota-camry-taxi-sedan.webp",
      passengers: 4,
      luggage: 2,
      features: ["Economic", "Comfortable", "City Travel"],
      link: "/fleet/toyota-camry",
      imageAlt: "Toyota Camry economic taxi sedan for city travel in Jeddah"
    },
    {
      name: "Hyundai Staria",
      image: "/hyundai-staria-family-taxi.webp",
      passengers: 7,
      luggage: 4,
      features: ["Family Van", "Spacious", "Modern AC"],
      link: "/fleet/hyundai-staria",
      imageAlt: "Hyundai Staria family van taxi for Umrah groups"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Round the clock service, any time you need"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Licensed drivers and insured vehicles"
    },
    {
      icon: DollarSign,
      title: "Best Rates",
      description: "Competitive pricing with no hidden fees"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Customer support always ready to help"
    }
  ];

  const faqs = [
    {
      question: "How do I book a taxi from Jeddah Airport to Makkah?",
      answer: "You can book online through our website or contact us directly. Our driver will meet you at the arrival hall with a name board for easy identification."
    },
    {
      question: "What are your rates for Makkah to Madinah?",
      answer: "Our rates are competitive and transparent with no hidden fees. The price includes fuel, driver, toll gates, and all applicable charges. Contact us for a detailed quote."
    },
    {
      question: "Do you provide 24/7 service?",
      answer: "Yes, Haram Taxi Service operates 24 hours a day, 7 days a week. We're always available for airport pickups, hotel transfers, and intercity travel."
    },
    {
      question: "What types of vehicles do you offer?",
      answer: "We offer a range of vehicles including sedans (Toyota Camry), SUVs (GMC Yukon), and vans (Hyundai Staria, Toyota Hiace) to accommodate individuals, families, and groups."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <JsonLdFAQ faqs={faqs} />

      {/* Hero Section - Modern Clean Design */}
      <Hero images={heroImages} />

      {/* Quick Stats Bar */}
      <section className="bg-teal-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Service Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Professional Drivers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-6">
                Islamic Prayer Schedule
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Prayer Times for <span className="text-teal-600">Pilgrims</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stay punctual with your prayers during your spiritual journey. Check accurate daily prayer times for Makkah, Madinah, and Jeddah. Our drivers ensure strict adherence to prayer schedules, pausing journeys for Salah when needed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/locations/makkah">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 h-14 px-8 text-lg">
                    Ride to Makkah Haram
                  </Button>
                </Link>
                <Link href="/locations/madinah">
                  <Button size="lg" variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 h-14 px-8 text-lg">
                    Ride to Masjid Nabawi
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-500/5 rounded-[2rem] transform rotate-2"></div>
              <PrayerTimesWidget initialData={initialPrayerTimes} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional taxi services across Saudi Arabia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.link} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center text-teal-500 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Icon Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Haram Taxi Service</h2>
            <p className="text-xl text-gray-600">Reliable, professional, and always on time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase - Horizontal Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fleet</h2>
            <p className="text-xl text-gray-600">Choose from our range of premium vehicles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{vehicle.name}</h3>

                  <div className="flex justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-teal-500" />
                      <span>{vehicle.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-teal-500" />
                      <span>{vehicle.luggage} Bags</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-teal-50 text-teal-700 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link href={vehicle.link}>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50 px-8 py-6 text-lg">
                View All Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-white" />)}
          </div>
          <blockquote className="text-2xl md:text-3xl font-light mb-6 italic">
            &quot;Excellent service! The driver was professional, the car was clean and comfortable. Highly recommended for anyone traveling in Saudi Arabia.&quot;
          </blockquote>
          <p className="text-lg opacity-90">- Ahmed K., Riyadh</p>
        </div>
      </section>

      {/* FAQ Section - Clean Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 px-6 rounded-xl border-0"
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

      {/* CTA Section - Modern Split Design */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Book Your Ride?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience professional taxi service in Saudi Arabia. Book now and travel with comfort and confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
                    Book Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 hover:text-teal-600 px-8 py-6 text-lg border-2 border-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-teal-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Book With Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Professional Drivers</div>
                    <div className="text-sm opacity-90">Experienced and licensed drivers</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Clean Vehicles</div>
                    <div className="text-sm opacity-90">Well-maintained and sanitized cars</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">24/7 Available</div>
                    <div className="text-sm opacity-90">Round the clock service</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Best Rates</div>
                    <div className="text-sm opacity-90">Competitive pricing guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
