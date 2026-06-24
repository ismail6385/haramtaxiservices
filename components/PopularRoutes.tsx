import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const routes = [
  {
    from: "Jeddah Airport",
    to: "Makkah (Haram)",
    description: "The most convenient way to start your Umrah journey. Our driver will meet you at the arrival hall and take you directly to your hotel in Makkah.",
    time: "1 Hour 15 Mins",
    distance: "100 KM",
    image: "/jeddah-airport-pickup-service.webp"
  },
  {
    from: "Makkah",
    to: "Madinah",
    description: "Travel between the two Holy Cities in absolute comfort. Enjoy a scenic drive with our experienced chauffeurs who know the best routes.",
    time: "4 Hours 30 Mins",
    distance: "450 KM",
    image: "/makkah-highway.webp"
  },
  {
    from: "Jeddah",
    to: "Madinah",
    description: "Direct transfers from Jeddah to Madinah. Perfect for pilgrims and visitors who want to visit the Prophet's Mosque without delays.",
    time: "4 Hours",
    distance: "415 KM",
    image: "/jeddah-corniche-road.webp"
  },
  {
    from: "Riyadh Airport",
    to: "Makkah",
    description: "Long-distance luxury transfer from Riyadh to Makkah. Ideal for those who prefer a private car over flying.",
    time: "8 Hours 30 Mins",
    distance: "870 KM",
    image: "/riyadh-skyline.webp"
  },
  {
    from: "Taif",
    to: "Makkah",
    description: "Scenic drive from the cool mountains of Taif to the Holy City of Makkah. Enjoy the beautiful landscapes in comfort.",
    time: "1 Hour 10 Mins",
    distance: "90 KM",
    image: "/taif-al-hada.webp"
  },
  {
    from: "Madinah Airport",
    to: "Madinah City",
    description: "Quick and reliable transfer from Prince Mohammad Bin Abdulaziz Airport to your hotel in Madinah.",
    time: "25 Mins",
    distance: "20 KM",
    image: "/madinah-hotel-transfer-service.webp"
  }
];

export default function PopularRoutes() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-navy font-bold tracking-widest uppercase text-xs mb-2 block">Top Destinations</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Popular Taxi Routes in KSA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg">
            We cover all major routes across Saudi Arabia. Here are some of our most frequently booked transfers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                        <Image
                            src={route.image}
                            alt={`${route.from} to ${route.to} Taxi Service`}
                            width={500}
                            height={300}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                    <p className="text-brand-navy font-bold text-xs uppercase tracking-wider">{route.distance}</p>
                  </div>
                  <div className="bg-gray-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-white/10">
                    <p className="text-white text-xs font-medium">{route.time}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-gray-900 truncate">{route.from}</span>
                  <ArrowRight className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span className="text-lg font-bold text-gray-900 truncate">{route.to}</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1 font-light">
                  {route.description}
                </p>
                <div className="flex flex-col gap-3 w-full mt-auto">
                  <Link href={`/booking?service=${encodeURIComponent(`${route.from} to ${route.to}`)}`} className="w-full">
                    <Button className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-bold py-6 rounded-xl transition-all shadow-md hover:shadow-lg group-hover:translate-y-[-2px]">
                      Book via Form
                    </Button>
                  </Link>
                  <a 
                    href={`https://wa.me/966575806733?text=${encodeURIComponent(`As-salamu alaykum, I want to book a taxi from ${route.from} to ${route.to}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy-pale font-bold py-6 rounded-xl transition-all">
                      Quick WhatsApp Booking
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
