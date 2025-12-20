import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import StickyContactButton from '@/components/StickyContactButton';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import JsonLdOrganization from '@/components/JsonLdOrganization';
import JsonLdLocalBusiness from '@/components/JsonLdLocalBusiness';
import JsonLdService from '@/components/JsonLdService';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://haramtaxiservice.com'),
  title: {
    default: 'Online Taxi Service in Saudi Arabia | Makkah, Madinah, Jeddah - Haram Taxi',
    template: '%s | Haram Taxi Service'
  },
  description: 'Book online taxi service in Saudi Arabia. Professional drivers in Makkah, Madinah, Jeddah, Taif, AlUla. Airport transfers, city rides, Ziyarat tours. Available 24/7. Instant booking!',
  keywords: [
    // Primary Local SEO Keywords
    'online taxi service Saudi Arabia', 'taxi service Makkah', 'taxi service Madinah', 'taxi service Jeddah',
    'Haram Taxi Service', 'Saudi Arabia taxi booking', 'book taxi Saudi Arabia',

    // City-Specific Keywords
    'Makkah taxi', 'Madinah taxi', 'Jeddah taxi', 'Taif taxi', 'AlUla taxi', 'Khayber taxi',
    'taxi in Makkah', 'taxi in Madinah', 'taxi in Jeddah',

    // Airport Transfer Keywords
    'Jeddah airport taxi', 'Madinah airport taxi', 'airport transfer Jeddah',
    'Jeddah to Makkah taxi', 'Madinah to Makkah taxi',

    // Service Type Keywords
    'online taxi booking Saudi Arabia', '24/7 taxi service', 'professional taxi drivers',
    'airport transfer Saudi Arabia', 'city taxi service', 'intercity taxi',

    // Long-tail Keywords
    'best taxi service Makkah', 'reliable taxi Madinah', 'cheap taxi Jeddah',
    'Ziyarat taxi service', 'family taxi Saudi Arabia', 'private taxi booking'
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
    title: 'Online Taxi Service in Saudi Arabia | Makkah, Madinah, Jeddah',
    description: 'Book online taxi service in Saudi Arabia. Professional drivers in Makkah, Madinah, Jeddah. Airport transfers, city rides. Available 24/7. Instant booking!',
    url: 'https://haramtaxiservice.com',
    siteName: 'Haram Taxi Service',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://haramtaxiservice.com/og-image.jpg',
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
    images: ['https://haramtaxiservice.com/twitter-image.jpg'],
    creator: '@haramtaxi',
  },
  alternates: {
    canonical: 'https://haramtaxiservice.com',
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
    { media: '(prefers-color-scheme: light)', color: '#245A5F' }, // Deep Teal
    { media: '(prefers-color-scheme: dark)', color: '#245A5F' },
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
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <JsonLdBreadcrumb />
        <JsonLdOrganization />
        <JsonLdLocalBusiness />
        <JsonLdService />
        {children}
        <Footer />
        <StickyContactButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
