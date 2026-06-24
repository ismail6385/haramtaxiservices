import Script from 'next/script';

export default function JsonLdLocalBusiness() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service",
        "image": [
            "https://haramtaxiservice.com/logo.png",
            "https://haramtaxiservice.com/gmc-yukon-xl-taxi.webp"
        ],
        "logo": "https://haramtaxiservice.com/logo.png",
        "description": "Saudi Arabia's most trusted private taxi service. Specialising in Umrah transfers, Makkah to Madinah routes, Jeddah Airport pickups, and intercity travel. Fixed rates, 24/7 availability.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Aziziyah, Misfalah District",
            "addressLocality": "Makkah Al Mukarramah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.4225",
            "longitude": "39.8262"
        },
        "hasMap": "https://maps.google.com/?q=Haram+Taxi+Service+Makkah+Saudi+Arabia",
        "url": "https://haramtaxiservice.com",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "priceRange": "$$",
        "currenciesAccepted": "SAR",
        "paymentAccepted": "Cash, Bank Transfer, WhatsApp",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": [
            { "@type": "City", "name": "Makkah" },
            { "@type": "City", "name": "Madinah" },
            { "@type": "City", "name": "Jeddah" },
            { "@type": "City", "name": "Riyadh" },
            { "@type": "City", "name": "Dammam" },
            { "@type": "City", "name": "Taif" },
            { "@type": "City", "name": "Al Khobar" },
            { "@type": "City", "name": "Yanbu" },
            { "@type": "Country", "name": "Saudi Arabia" }
        ],
        "sameAs": [
            "https://www.facebook.com/haramtaxiservice",
            "https://www.instagram.com/haramtaxiservice",
            "https://wa.me/966575806733"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "847",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
    );
}
