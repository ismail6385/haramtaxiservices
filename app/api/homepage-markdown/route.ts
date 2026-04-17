import { NextResponse } from 'next/server'

const MARKDOWN = `# Haram Taxi Service — Premium Taxi & Transportation in Saudi Arabia

**Website:** https://haramtaxiservice.com
**WhatsApp / Phone:** +923080628195
**Available:** 24/7

---

## About

Haram Taxi Service is Saudi Arabia's leading private transportation provider, trusted by thousands of Umrah and Hajj pilgrims. We offer professional, door-to-door taxi services across Makkah, Madinah, Jeddah, and all major Saudi cities.

---

## Services

- **Umrah Transport** — Private taxis for pilgrims visiting Makkah and Madinah
- **Airport Transfers** — Jeddah (JED), Madinah (MED), Dammam (DMM)
- **Intercity Transfers** — Makkah ↔ Madinah, Jeddah ↔ Makkah, and more
- **VIP Transfers** — Luxury vehicles with professional chauffeurs
- **Group Transport** — Vans and buses for families and groups

---

## Vehicle Fleet

| Vehicle | Seats | Class |
|---------|-------|-------|
| Toyota Camry | 4 | Economy |
| Hyundai Staria | 7 | Premium |
| Toyota HiAce | 11 | Group |
| GMC Yukon | 6 | VIP |
| Toyota Coaster | 17 | Large Group |

---

## Popular Routes & Pricing (SAR)

| Route | Distance | Starting Price |
|-------|----------|----------------|
| Makkah → Madinah | ~450 km | SAR 350 |
| Madinah → Makkah | ~450 km | SAR 350 |
| Jeddah → Makkah | ~80 km | SAR 120 |
| Makkah → Jeddah Airport | ~85 km | SAR 130 |
| Jeddah → Madinah | ~420 km | SAR 320 |

Full pricing: https://haramtaxiservice.com/pricing

---

## How to Book

1. **WhatsApp:** Send a message to +923080628195 with pickup, destination, date, and number of passengers
2. **Online form:** https://haramtaxiservice.com/booking

---

## Locations Served

Makkah, Madinah, Jeddah, Riyadh, Dammam, Taif, Al-Ula, Neom, Buraidah, Al-Hofuf, Najran, Zulfi, Majmaah, Al-Jouf, and more.

Full list: https://haramtaxiservice.com/locations

---

## Why Choose Us

- 24/7 availability including Hajj and Ramadan peak seasons
- Licensed, professional drivers
- Fixed prices — no surge pricing
- Vehicles serviced for Haram zone access
- English and Arabic speaking drivers

---

## Contact

- **WhatsApp/Phone:** +923080628195
- **Website:** https://haramtaxiservice.com
- **Booking:** https://haramtaxiservice.com/booking
- **Pricing:** https://haramtaxiservice.com/pricing
- **Routes:** https://haramtaxiservice.com/routes
- **Fleet:** https://haramtaxiservice.com/fleet
`

export async function GET() {
  return new NextResponse(MARKDOWN, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'x-markdown-tokens': String(MARKDOWN.split(/\s+/).length),
    },
  })
}
