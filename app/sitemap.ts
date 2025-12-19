import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://haramtaxiservice.com'

    // Main pages
    const routes = [
        '',
        '/about',
        '/fleet',
        '/locations',
        '/contact',
        '/booking',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Fleet pages - All 6 vehicles
    const fleetPages = [
        '/fleet/gmc-yukon',
        '/fleet/toyota-camry',
        '/fleet/hyundai-staria',
        '/fleet/toyota-hiace',
        '/fleet/toyota-coaster',
        '/fleet/hyundai-starex',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Location pages - All 6 cities
    const locationPages = [
        '/locations/makkah',
        '/locations/madinah',
        '/locations/jeddah',
        '/locations/taif',
        '/locations/alula',
        '/locations/khayber-fort',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...fleetPages, ...locationPages]
}
