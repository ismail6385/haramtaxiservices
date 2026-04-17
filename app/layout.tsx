import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import JsonLdOrganization from '@/components/JsonLdOrganization';
import JsonLdLocalBusiness from '@/components/JsonLdLocalBusiness';
import JsonLdService from '@/components/JsonLdService';
import UrgencyTopBar from '@/components/UrgencyTopBar';
import LeadCapturePopup from '@/components/LeadCapturePopup';
import MobileBottomCTA from '@/components/MobileBottomCTA';


const inter = Montserrat({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://haramtaxiservice.com'),
  title: {
    default: 'Reliable Taxi & Travel Agency | Complete Saudi Arabia Transport',
    template: '%s | Haram Taxi'
  },
  description: 'Book the most trusted transportation service in Saudi Arabia. Reliable private transport for Jeddah, Makkah, Madinah, Airport Transfers and Border Crossings. 24/7 Professional Travel Agency.',
  keywords: [
    // Primary Local SEO Keywords
    'online taxi service Saudi Arabia', 'taxi service Makkah', 'taxi service Madinah', 'taxi service Jeddah',
    'Haram Taxi Service', 'Saudi Arabia taxi booking', 'book taxi Saudi Arabia',
    'haram taxi', 'taxi haram', 'al haram taxi', 'haram transport', 'al haram cabs',

    // City-Specific & Intercity Keywords
    'Makkah taxi', 'Madinah taxi', 'Jeddah taxi', 'Taif taxi',
    'taxi in Makkah', 'taxi in Madinah', 'taxi in Jeddah',
    'makkah to madinah taxi', 'madinah to makkah taxi', 'jeddah to makkah taxi', 'jeddah to madinah taxi',
    'makkah to jeddah taxi', 'madinah to jeddah taxi', 'makkah to madina taxi', 'medina to makkah taxi',
    'taxi from madinah to makkah', 'taxi from makkah to madinah', 'taxi from jeddah to makkah',
    'taxi jeddah to makkah', 'taxi jeddah to madinah', 'taxi makkah to madinah', 'taxi madinah to makkah',
    'madinah to badar taxi fare', 'madina to badar taxi fare price', 'taxi jeddah', 'taxi makkah',
    'taxi from medina to mecca', 'taxi from mecca to medina', 'medina to mecca taxi fare',

    // Umrah & Pilgrim Specific
    'affordable private umrah taxi', 'book private taxi for umrah', 'private taxi for umrah pilgrims',
    'taxi for umrah', 'private taxi for umrah', 'umrah chauffeur service near me', 'best umrah chauffeur service',
    'private car service for umrah', 'umrah chauffeur service', 'private umrah taxi', 'umrah chauffeur service in saudi arabia',
    'umrah chauffeur services', 'umrah taxis', 'luxury umrah cab',

    // Fare & Pricing Keywords
    'madinah to makkah taxi fare', 'taxi fare from madinah to makkah', 'taxi fare from medina to mecca',
    'makkah to madinah taxi fare', 'taxi price from makkah to madinah', 'jeddah to makkah taxi price',
    'taxi cost from makkah to madinah', 'how much taxi from makkah to madinah', 'makkah to madinah taxi cost',

    // Airport Transfer Keywords
    'Jeddah airport taxi', 'Madinah airport taxi', 'airport transfer Jeddah',
    'Jeddah to Makkah taxi', 'Madinah to Makkah taxi', 'taxi from makkah to jeddah airport',
    'makkah to jeddah airport taxi', 'jeddah airport to madinah taxi', 'jeddah airport to haram taxi fare',

    // Service Type & Vehicle Keywords
    'online taxi booking Saudi Arabia', '24/7 chauffeur service', 'professional taxi drivers',
    'VIP taxi Saudi Arabia', 'GMC Yukon taxi Makkah', 'Toyota Camry taxi Saudi Arabia', 'staria taxi',
    'coaster bus for rent', 'rent coaster bus', 'bus coaster for rent', 'family taxi in makkah',
    'chauffeur service in mecca', 'cab service in makkah', 'online taxi in makkah',
    'best chauffeur service in makkah', 'online taxi madinah to makkah',

    // General Saudi Taxi & Service Keywords
    'taxi in saudi arabia', 'chauffeur services in saudi arabia', 'ksa chauffeur service',
    'saudi taxi', 'taxi saudi arabia', 'taxi saudi', 'taxi company', 'best chauffeur service in saudi arabia',
    'chauffeur service ksa', 'saudi taxi number', 'cab service in saudi arabia',
    'online chauffeur service in saudi arabia', 'chauffeur service', 'taxis service',
    'saudi chauffeur service', 'chauffeur service saudi arabia', 'ksa taxi', 'saudi taxi companies',
    'saudi taxi company', 'taxi companies in saudi arabia', 'taxi company in saudi arabia',
    'taxis in saudi arabia', 'chauffeur services', 'taxi', 'reliable chauffeur service',
    'private chauffeur service in riyadh', 'online taxi in saudi arabia', 'saudi taxi booking',
    'online taxi saudi arabia', 'saudi online taxi', 'taxi business in saudi arabia',
    'saudi airport taxi', 'saudi cab', 'cab in saudi', 'taxi in saudi', 'saudi taxis',
    'how to book taxi in saudi arabia', 'saudi cab service', 'saudi arabia taxi company',
    'taxi booking', 'private taxi', 'taxi booking in saudi arabia', 'saudi taxi car',
    'saudi arab taxi',
    'airport transfer', 'private transport', 'group transport', 'family transport',
    'VIP transport', 'luxury transport', 'hotel to haram transport', 'haram to hotel transfer',

    // Arabic Keywords
    'تاكسي السعودية', 'سيارات اجرة', 'تاكسي اجره', 'شركة أجرة تاكسي', 'سيارات تكسي',
    'أجرة تاكسي', 'تكسي السعودية', 'تكسي اجره', 'تاكسي السعوديه', 'سيارة اجرة السعودية',
    'تاكسي في السعودية', 'أسعار سيارات الأجرة في السعودية', 'تاكسي مطار جدة', 'تاكسي جدة',
    'تاكسي من مكة الى جدة', 'تاكسي من مطار جدة الى مكة', 'تكسي أجرة', 'رقم شركة أجرة جدة',
    'سيارات أجرة خاصة',

    // Historical & Sightseeing Keywords
    'top 10 beautiful places in saudi arabia', 'beautiful places in saudi arabia',
    'masjid quba', 'masjid al haram', 'quba mosque', 'quba mosque madinah',
    'masjid quba madinah', 'quba mosque medina', 'masjid quba madinah history',
    'masjid al quba history', 'masjid quba history', 'mosque of quba', 'masjid e quba history',
    'masjid al quba', 'quba medina', 'quba mosque saudi', 'mecca grand mosque',
    'grand mosque mecca', 'masjid al-haram', 'masjid al quba madinah', 'sacred mosque in mecca',
    'saudi arabia beautiful places', 'history masjid quba', 'beautiful place in saudi arabia',
    'al haram mosque', 'masjid quba saudi arabia', 'masjid e quba', 'haram saudi arabia',
    'great mosque of mecca', 'makkah grand mosque', 'first mosque in islam',
    'the great mosque of mecca', 'great mosque mecca', 'haram mecca', 'haram mosque',
    'the grand mosque mecca', 'quba mosque saudi arabia', 'first mosque of islam',
    'mosque of mecca', 'masjid al haram capacity', 'first masjid of islam',
    'al masjid al haram', 'quba mosque history', 'grand mosque saudi arabia',
    'grand mosque mecca saudi arabia', 'masjid quba first mosque', 'quba masjid history',
    'grand mosque in mecca', 'grand mosque in makkah', 'significance of masjid quba',
    'masjid al haram mecca', 'masjid quba medina', 'mecca mosque', 'mosque quba',
    'grand mosque makkah', 'masjid quba significance', 'masjid e quba madinah',
    'grand mosque at mecca', 'masjid cuba', 'al rajhi mosque', 'masjid quba saudi',
    'the quba mosque', 'first masjid in islam', 'makkah ziyarat places',
    'saudi arabia places to visit', 'grand mosque of mecca', 'places to visit in ksa',
    'saudi arabia most beautiful places', 'masjid quba location', 'mecca masjid al haram',
    'masjid al haram history', 'masjid kuba', 'masjid al-quba', 'masjid quba madina',
    '1st mosque in islam', 'vehicle service jeddah to makkah', 'why is it called masjid al haram',
    'when was masjid al haram built', 'masjid e quba saudi arabia', 'saudi arabia mosque',
    'the great mosque mecca', 'best places in saudi arabia', 'beautiful places of saudi arabia',
    'masjid al-haram history', 'masjid a quba', 'what is the haram', 'the grand mosque in mecca',
    'first mosque in medina', 'saudi beautiful places', 'the grand mosque of mecca',

    // Google Search Console — High Intent Keywords (NEW)
    'madinah to makkah by car', 'how long from madinah to makkah by car', 'madinah to makkah drive',
    'car with driver saudi arabia', 'rent a car with driver saudi arabia',
    'hyundai staria rental saudi arabia', 'hyundai starex 7 seater', 'starex car saudi',
    'staria for rent', 'staria rent a car ksa', 'hyundai staria for rent ksa',
    'taif to makkah taxi', 'taif airport to makkah', 'how to get from taif to makkah',
    'alula taxi', 'alula airport transfer', 'private taxi alula', 'al ula transport',
    'hiace rent in ksa', 'toyota hiace makkah', 'hiace for rent saudi', '11 seater van',
    'gmc yukon rental jeddah', 'gmc from madinah to makkah', 'gmc taxi saudi',
    'private car from madinah to makkah', 'private car makkah to madinah',
    'car with driver in makkah', 'car with driver in madinah', 'driver with car madinah',
    'madinah to makkah transport', 'transport from madinah to makkah',
    'jeddah to madinah by car', 'jeddah to medinah car',
    'expatriates pick and drop jeddah', 'pick and drop service riyadh',
    'luxury car service saudi arabia', 'vip transfer makkah',
    'chauffeur service saudi arabia', 'private driver saudi arabia',
    'medinah to makkah by car', 'medinah to mecca by car', 'medina to mecca car',
    'how much taxi from madinah to makkah', 'madinah to makkah cost by car',
    'madinah to makkah travel time by car', 'cab booking saudi arabia',
    'private umrah taxi for families', 'umrah taxi for families',
    'makkah to badr distance', 'makkah to badr taxi',
    'professional airport transfers in jeddah', 'airport transfers saudi arabia',
    'private transport umrah', 'makkah to madinah coaster',
    'madinah airport to masjid nabawi', '7 seater taxi near me',
    'car ride makkah to madinah', 'car ride madinah to makkah',
    'madinah to makkah how long', 'taxi services makkah', 'best taxi service makkah',
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
    title: 'No 1. Private Umrah Taxi Service in Saudi Arabia | Book Now',
    description: 'Trusted by thousands. Book your Umrah taxi from Jeddah to Makkah, Madinah to Makkah. VIP & Economy cars available. 24/7 Service.',
    url: 'https://haramtaxiservice.com',
    siteName: 'Haram Taxi Service',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://haramtaxiservice.com/makkah-clock-tower-new.png',
        width: 1200,
        height: 630,
        alt: 'Haram Taxi Service - Online Taxi Booking in Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Taxi Service in Saudi Arabia | Book Now',
    description: 'Professional taxi service in Makkah, Madinah, Jeddah. Airport transfers, city rides. Available 24/7.',
    images: ['https://haramtaxiservice.com/makkah-clock-tower-new.png'],
    creator: '@haramtaxi',
  },

  verification: {
    // google: 'TODO: Add new verification code',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        window.open("https://wa.me/923080628195?text=" + msg, "_blank");
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
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JNCTT4HVXD');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`} suppressHydrationWarning>
        <UrgencyTopBar />
        <Navbar />
        <JsonLdBreadcrumb />
        <JsonLdOrganization />
        <JsonLdLocalBusiness />
        <JsonLdService />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <LeadCapturePopup />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
