import { NextResponse } from 'next/server'

const BASE = 'https://haramtaxiservice.com'

export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: BASE,
        item: [
          { href: `${BASE}/api/send-booking-emails`, type: 'application/json' },
          { href: `${BASE}/api/prayer-times`, type: 'application/json' },
          { href: `${BASE}/api/hijri-converter`, type: 'application/json' },
          { href: `${BASE}/api/confirm-booking`, type: 'application/json' },
        ],
        'service-doc': [{ href: `${BASE}/booking`, type: 'text/html' }],
        describedby: [{ href: `${BASE}/.well-known/agent-card.json`, type: 'application/json' }],
      },
      {
        anchor: `${BASE}/api/send-booking-emails`,
        type: ['application/json'],
        'service-doc': [{ href: `${BASE}/booking`, type: 'text/html' }],
        title: 'Taxi Booking — initiates a booking and sends confirmation emails',
      },
      {
        anchor: `${BASE}/api/prayer-times`,
        type: ['application/json'],
        'service-doc': [{ href: `${BASE}/tools`, type: 'text/html' }],
        title: 'Prayer Times — returns daily prayer times for Saudi cities',
      },
      {
        anchor: `${BASE}/api/hijri-converter`,
        type: ['application/json'],
        'service-doc': [{ href: `${BASE}/tools`, type: 'text/html' }],
        title: 'Hijri Converter — converts Gregorian dates to Hijri calendar',
      },
    ],
  }

  return NextResponse.json(catalog, {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
