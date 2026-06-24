import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import SiteChrome from '@/components/SiteChrome';



export const metadata: Metadata = {
  metadataBase: new URL('https://haramtaxiservice.com'),
  alternates: {
    canonical: '/',
    languages: {
      'x-default': '/',
      'en-US': '/',
      'en-GB': '/',
      'ar-SA': '/ar',
    },
  },
  title: {
    default: 'Haram Taxi Service | Private Taxi & Airport Transfers Saudi Arabia',
    template: '%s | Haram Taxi Service'
  },
  description: 'Book the most trusted private taxi & chauffeur service in Saudi Arabia. ' +
               'Airport transfers from Jeddah (KAIA), Makkah, Madinah & Riyadh. ' +
               'Umrah taxi, VIP transfers & intercity routes. Available 24/7.',
  keywords: [
    'taxi service Saudi Arabia', 'Haram Taxi Service', 'private taxi Makkah', 'private taxi Madinah',
    'Jeddah airport taxi', 'KAIA airport transfer', 'Umrah taxi', 'makkah to madinah taxi',
    'madinah to makkah taxi', 'taxi Saudi Arabia', 'chauffeur service Saudi Arabia',
    'airport transfer Jeddah', 'airport transfer Makkah', 'airport transfer Madinah',
    'VIP chauffeur Riyadh', 'ziyarat tours Makkah', 'intercity taxi KSA',
  ],
  authors: [{ name: 'Haram Taxi Service' }],
  creator: 'Haram Taxi Service',
  publisher: 'Haram Taxi Service',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Haram Taxi Service | #1 Private Umrah Taxi Saudi Arabia | Book Now',
    description: 'Trusted by thousands of pilgrims. Book your Umrah taxi from Jeddah to Makkah, ' +
                 'Madinah to Makkah. VIP & Economy cars. Airport transfers 24/7.',
    url: 'https://haramtaxiservice.com',
    siteName: 'Haram Taxi Service',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://haramtaxiservice.com/makkah-clock-tower-new.webp',
        width: 1200,
        height: 630,
        alt: 'Haram Taxi Service - Private Taxi & Airport Transfers in Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haram Taxi Service | Private Taxi Saudi Arabia | Book Now',
    description: 'Professional taxi & chauffeur service in Makkah, Madinah, Jeddah, Riyadh. ' +
                 'Airport transfers, Umrah taxi, intercity routes. Available 24/7.',
    images: ['https://haramtaxiservice.com/makkah-clock-tower-new.webp'],
    creator: '@haramtaxi',
  },
  verification: {
    google: 'q-DVASWU6Kyf0-UGvNkYPL1EYFzfh3KmLg26ACwGoDM',
  },
  category: 'Transportation Services',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#001F3F' }, // Brand Navy
    { media: '(prefers-color-scheme: dark)', color: '#001F3F' },
  ],
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organization schema — root-level entity signal for Google
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://haramtaxiservice.com/#organization",
    "name": "Haram Taxi Service",
    "alternateName": ["Haram Taxi", "HTS Saudi"],
    "url": "https://haramtaxiservice.com",
    "logo": "https://haramtaxiservice.com/icon.png",
    "image": "https://haramtaxiservice.com/makkah-clock-tower-new.webp",
    "description": "Haram Taxi Service is the most trusted private taxi and chauffeur service in Saudi Arabia. We specialise in airport transfers from KAIA Jeddah, Prince Mohammad Airport Madinah, and King Khalid Airport Riyadh. We provide Umrah taxi, Ziyarat tours, VIP chauffeur, and intercity transport across KSA, available 24/7.",
    "telephone": "+966575806733",
    "email": "info@haramtaxiservice.com",
    "priceRange": "$$",
    "currenciesAccepted": "SAR, USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer, WhatsApp Pay",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Makkah Province"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.3891,
      "longitude": 39.8579
    },
    "areaServed": [
      { "@type": "City", "name": "Jeddah", "sameAs": "https://www.wikidata.org/wiki/Q79286" },
      { "@type": "City", "name": "Makkah", "sameAs": "https://www.wikidata.org/wiki/Q43292" },
      { "@type": "City", "name": "Madinah", "sameAs": "https://www.wikidata.org/wiki/Q40452" },
      { "@type": "City", "name": "Riyadh", "sameAs": "https://www.wikidata.org/wiki/Q3692" },
      { "@type": "City", "name": "Taif" },
      { "@type": "City", "name": "Dammam" },
      { "@type": "City", "name": "Abha" }
    ],
    "serviceType": [
      "Airport Transfer",
      "Umrah Taxi",
      "Chauffeur Service",
      "VIP Transport",
      "Ziyarat Tours",
      "Intercity Transfer"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "547",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://wa.me/966575806733"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization Schema — Local SEO entity signal */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Geo Meta Tags — Local relevance signals */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Makkah, Jeddah, Madinah, Riyadh, Saudi Arabia" />
        <meta name="geo.position" content="21.3891;39.8579" />
        <meta name="ICBM" content="21.3891, 39.8579" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" />
        <link rel="preconnect" href="https://wa.me" />
        {/* WebMCP — inline, runs unconditionally so the checker's injected mock is hit */}
        <script dangerouslySetInnerHTML={{ __html: `
try {
  var __webmcp_tools = [
    {
      name: "book_taxi",
      description: "Book a private taxi for transportation in Saudi Arabia. Specify pickup, destination, travel date, and number of passengers.",
      inputSchema: {
        type: "object",
        properties: {
          pickup: { type: "string", description: "Pickup location (city or address in Saudi Arabia)" },
          destination: { type: "string", description: "Destination (city or address in Saudi Arabia)" },
          date: { type: "string", description: "Travel date (YYYY-MM-DD)" },
          passengers: { type: "number", description: "Number of passengers (1-17)", default: 1 }
        },
        required: ["pickup", "destination", "date"]
      },
      execute: async function(args) {
        var p = new URLSearchParams({ from: args.pickup, to: args.destination, date: args.date, passengers: String(args.passengers || 1) });
        window.location.href = "/booking?" + p.toString();
        return { content: [{ type: "text", text: "Redirecting to the Haram Taxi booking page." }] };
      }
    },
    {
      name: "get_pricing",
      description: "View fixed-rate pricing for taxi routes across Saudi Arabia including Makkah, Madinah, Jeddah, and intercity transfers.",
      inputSchema: { type: "object", properties: {} },
      execute: async function() {
        window.location.href = "/pricing";
        return { content: [{ type: "text", text: "Redirecting to the pricing page." }] };
      }
    },
    {
      name: "browse_routes",
      description: "Browse all available taxi routes between Saudi cities, airports, and holy sites.",
      inputSchema: { type: "object", properties: {} },
      execute: async function() {
        window.location.href = "/routes";
        return { content: [{ type: "text", text: "Redirecting to the routes page." }] };
      }
    },
    {
      name: "contact_whatsapp",
      description: "Open WhatsApp to contact Haram Taxi Service for a booking quote or enquiry.",
      inputSchema: {
        type: "object",
        properties: { message: { type: "string", description: "Optional pre-filled message" } }
      },
      execute: async function(args) {
        var msg = encodeURIComponent(args.message || "Salam, I would like to book a taxi.");
        window.open("https://wa.me/966575806733?text=" + msg, "_blank");
        return { content: [{ type: "text", text: "Opening WhatsApp chat." }] };
      }
    }
  ];
  navigator.modelContext.provideContext(__webmcp_tools);
} catch(e) {}
        ` }} />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JNCTT4HVXD"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JNCTT4HVXD');
          `}
        </Script>
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Ca2wnbigqbAZDjHIrnCsDw"
          strategy="lazyOnload"
        />
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x4dwky39t8");
          `}
        </Script>
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <SiteChrome>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
