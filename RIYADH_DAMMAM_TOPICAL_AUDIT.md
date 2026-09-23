# Riyadh ↔ Dammam Topical Cluster — Audit & Recommended Map

Status: **Audit only. No code changes made for this cluster.** (Two unrelated sitewide popups were removed per separate instruction — see note at bottom.)

No existing Riyadh↔Dammam topical map or dedicated planning doc was found anywhere in the repo (`INTERNAL_LINKING_AUDIT.md`, `INTERNAL_LINKING_IMPLEMENTATION.md`, `INTERNAL_LINKING_STRATEGY.md`, `COMPLETE_LOCAL_SEO_STRATEGY.md` were all checked — only passing one-line mentions of "Riyadh to Dammam" as an example route, no dedicated architecture). This is a new audit, not a revision of prior planning.

---

## A. Existing Riyadh/Dammam URLs

| URL | Type | Current Purpose | Notes |
|---|---|---|---|
| `/locations/riyadh` | Location hub | Riyadh city hub — services, districts (KAFD, Diplomatic Quarter, Olaya, Diriyah, Boulevard City, King Salman Park), popular routes grid, FAQs, Popular Services section | Already links to `/routes/riyadh-to-dammam` (card, "Riyadh → Dammam, 4 hrs") |
| `/locations/dammam` | Location hub | Dammam city hub — districts (Bahrain Causeway, Dhahran, Jubail, KFAC Airport, Khobar, Qatif), popular routes, FAQs, Popular Services section | Already links to `/routes/dammam-to-riyadh` (both as a "service" card and a route-grid card) |
| `/routes/riyadh-to-dammam` | Route page (dynamic `[slug]`) | Core Riyadh→Dammam route page | Thin: 1 FAQ, 2 pricing options (Camry, GMC Yukon XL), one short paragraph. Auto-inherits Related Routes, Related Services, and Fleet links from the shared template (see D below) |
| `/routes/dammam-to-riyadh` | Route page | Core Dammam→Riyadh route page (return leg) | Slightly better: 3 FAQs, same 2 vehicle options. Same template inheritance |
| `/locations/riyadh-region` | **Provincial hub** (broader than the city) | Riyadh Region: capital + Al Kharj, Majmaah, Dawadmi, Shaqra, Zulfi, Wadi Ad Dawasir | Lists a "Riyadh → Dammam, 3.5 hrs" route entry — **inconsistent duration** vs. the actual route page (4 hours) |
| `/locations/eastern-province` | **Provincial hub** (broader than the city) | Eastern Province: Dammam, Khobar, Dhahran, Jubail, Qatif, Al Ahsa, Ras Tanura, Khafji, Abqaiq, Salwa | Exists and is linked from `/locations` index, but **does not link to Riyadh, riyadh-to-dammam, dammam-to-riyadh, or even to its own `/locations/dammam` city hub** |
| `/locations/dammam/khobar` | Nested location | Al Khobar taxi | Child of Dammam hub, bidirectionally linked |
| `/locations/dammam/dhahran` | Nested location | Dhahran / Aramco HQ taxi | Child of Dammam hub, bidirectionally linked |
| `/locations/dammam/jubail` | Nested location | Jubail Industrial City taxi | Child of Dammam hub, bidirectionally linked |
| `/locations/dammam/kfac-airport` | Nested location | King Fahd Intl. Airport (DMM) | Child of Dammam hub |
| `/locations/dammam/bahrain-causeway` | Nested location | King Fahd Causeway crossing | Child of Dammam hub |
| `/locations/dammam/qatif` | Nested location | Qatif taxi | Child of Dammam hub |
| `/locations/riyadh/kafd` `/olaya` `/diplomatic-quarter` `/diriyah` `/boulevard-city` `/king-salman-park` | Nested locations | Riyadh districts | Children of Riyadh hub, bidirectionally linked |
| `/services/riyadh-airport-transfer` | Service | Generic Riyadh (KKIA) airport transfer | Exists; not airport-pair-specific |
| `/services/dammam-airport-transfer` | Service | Generic Dammam (KFAC) airport transfer | Exists; not airport-pair-specific |
| `/services/khobar-taxi`, `/khobar-airport-taxi`, `/khobar-to-bahrain-taxi` | Services | Khobar-specific | Exist |
| `/services/dammam-khobar-bahrain-transfer` | Service | Combined Dammam+Khobar→Bahrain | Exists, used as `relatedServiceSlug` by 3 blog posts |
| `/services/jubail-contractor-transfer` | Service | Jubail industrial contractor transfers | Exists, used as `relatedServiceSlug` |
| `/services/riyadh-kafd-corporate-chauffeur` | Service | KAFD corporate chauffeur | Exists, used as `relatedServiceSlug` by the KAFD blog post |
| `/routes/riyadh-to-khobar`, `/routes/khobar-to-riyadh` | Route pages | Riyadh↔Khobar direct (not via Dammam) | Exist |
| `/routes/riyadh-to-jubail`, `/routes/jubail-to-riyadh` | Route pages | Riyadh↔Jubail direct | Exist |
| `/routes/riyadh-to-al-ahsa`, `/routes/al-ahsa-to-riyadh` | Route pages | Riyadh↔Al Ahsa | Exist |
| `/routes/riyadh-to-bahrain` | Route page | Riyadh↔Bahrain direct | Exists |
| `/routes/dammam-to-bahrain`, `/routes/dammam-to-khobar`, `/routes/khobar-to-dammam`, `/routes/dammam-to-jubail` | Route pages | Dammam-side Eastern Province routes | Exist |
| Fleet: `/fleet/toyota-camry`, `/fleet/gmc-yukon` | Fleet pages | The 2 vehicles actually priced on the Riyadh↔Dammam route pages | Both auto-link to riyadh-to-dammam/dammam-to-riyadh via the sitewide `PopularRoutesForVehicle` component (data-driven off `routesData`, no page-specific work needed) |
| Fleet: `/fleet/toyota-hiace`, `/fleet/toyota-coaster`, `/fleet/hyundai-staria`, `/fleet/hyundai-starex` | Fleet pages | Not currently offered as vehicle options on riyadh-to-dammam/dammam-to-riyadh | So they do **not** surface this route automatically — see gap C.6 |
| Blog: `dammam-eastern-province-travel-guide-2026` | Blog | General Eastern Province guide (ITHRA, Causeway, Khobar, Jubail, "Getting Around") | Good content, **zero mentions of Riyadh**, no link to `/routes/riyadh-to-dammam`, `/routes/dammam-to-riyadh`, `/locations/riyadh`, or `/locations/dammam` |
| Blog: `kafd-riyadh-taxi-corporate-guide` | Blog | KAFD corporate travel, links to `/locations/riyadh/kafd` and `/routes/riyadh-to-jeddah` | Already demonstrates the site's working pattern for inline `<a href>` contextual links in blog HTML — just never mentions Dammam/Eastern Province |
| Blog: `khobar-ithra-dhahran-visitor-guide-2026`, `bahrain-causeway-taxi-guide-2026`, `jubail-contractor-transfer-guide-2026`, `bahrain-to-dammam-khobar-causeway-vip-taxi` | Blog | Eastern Province supporting content | Exist, Dammam-side only, no Riyadh linkage |
| Blog: `riyadh-to-makkah-umrah-private-suv`, `dammam-to-makkah-umrah-family-taxi` | Blog | Riyadh/Dammam → **Makkah** (not to each other) | Different intent cluster (Umrah), not part of this pair |
| Blog: none found | — | **No blog post exists specifically about Riyadh↔Dammam travel** (business corridor, road trip, or comparison-to-flying angle) | Genuine content gap — see F |

---

## B. Existing topical map (as it actually stands today)

```
/locations  (index)
 ├── /locations/riyadh  (city hub)
 │     ├── /locations/riyadh/kafd, /olaya, /diplomatic-quarter, /diriyah, /boulevard-city, /king-salman-park
 │     └── links to: /routes/riyadh-to-dammam (card only)
 │
 ├── /locations/riyadh-region  (province hub — separate, lists Riyadh→Dammam at wrong duration)
 │
 ├── /locations/dammam  (city hub)
 │     ├── /locations/dammam/khobar, /dhahran, /jubail, /kfac-airport, /bahrain-causeway, /qatif
 │     └── links to: /routes/dammam-to-riyadh (card + service-list item)
 │
 └── /locations/eastern-province  (province hub — ISOLATED: no link to Riyadh, no link to its own /locations/dammam)

/routes/riyadh-to-dammam  ←→  /routes/dammam-to-riyadh   (connected via the shared template's
                                                            auto "Return Journey" + "Same Origin"
                                                            related-routes logic)
        ↓ (template-driven, automatic)                          ↓
   Fleet: toyota-camry, gmc-yukon                          Fleet: toyota-camry, gmc-yukon
   Services: umrah-taxi, chauffeur-service (keyword-matched, generic — not Eastern-Province-specific)

Blog posts: Eastern Province cluster (5 posts) and Riyadh corporate/Umrah cluster (many posts)
            exist as two SEPARATE islands — no post bridges them.
```

**What's already working well** (per the user's own "don't touch what works" instruction):
- Both core route pages exist and are live, with return-journey + related-route interlinking already handled automatically by the shared `app/routes/[slug]/page.tsx` template.
- Both city hubs already link to their respective route page.
- The nested-district parent↔child linking (Riyadh's 6 districts, Dammam's 6 districts) is already bidirectional and solid — confirmed in an earlier internal-linking pass on this project.
- Fleet↔Route linking for the 2 vehicles actually used on this route (Camry, GMC Yukon) is automatic and already works today, no action needed.

---

## C. Missing topical coverage (genuine gaps)

1. **No contextual (in-prose) link between the Riyadh hub and Dammam hub.** Both link to the *route* page, but neither hub page ever mentions or links to the *other hub* directly (e.g., Riyadh's page never says "planning to continue to Dammam? Here's what to expect" with a link to `/locations/dammam`).
2. **`/locations/eastern-province` is disconnected from this entire cluster.** It doesn't link to Riyadh, to the Riyadh↔Dammam routes, or even to its own child `/locations/dammam`. As the regional super-hub for the Eastern Province side, this is the highest-leverage single fix available.
3. **`/locations/riyadh-region` lists "Riyadh → Dammam: 3.5 hrs"** while the actual route page says "4 hours" — a factual inconsistency of exactly the kind flagged elsewhere in this project's SEO work.
4. **The route pages themselves never link back to either location hub.** This is a template-level gap affecting *all* 166+ route pages sitewide, not just this pair — `app/routes/[slug]/page.tsx` has no `/locations/*` links anywhere in it today (Route→Fleet and Route→Service were already added in an earlier pass; Route→Location was not).
5. **No blog post exists about the Riyadh↔Dammam corridor itself.** The Eastern Province blog cluster (5 posts) and the Riyadh corporate/Umrah blog cluster (15+ posts) are both substantial, but neither has a post that bridges them — e.g., "Riyadh to Dammam: business travel, road trip, or flight?" would naturally sit at the intersection and currently doesn't exist.
6. **Group/family vehicles (Hiace, Coaster, Staria, Starex) aren't priced on either core route page**, so they don't qualify for the automatic `PopularRoutesForVehicle` link and can't surface this corridor to a searcher looking for group transport between the two cities — a real gap against the user's explicitly-requested "family/group transportation between Riyadh and Dammam" intent.
7. **The two existing Eastern-Province-side blog posts that would most naturally bridge to this cluster** (`dammam-eastern-province-travel-guide-2026`, and to a lesser extent `kafd-riyadh-taxi-corporate-guide` on the Riyadh side) currently don't mention the other city at all.

---

## D. Recommended final topical map

```
HUB — /locations/riyadh
 ├─ Core Route → /routes/riyadh-to-dammam
 ├─ Airport → /services/riyadh-airport-transfer  (existing generic service; airport-pair intent is
 │             already served by the route pages' own FAQs — see F for why no new airport-combo page)
 ├─ Service Intent → /services/chauffeur-service, /services/business-travel  (corporate intent),
 │                   /services/group-transport (family/group intent)
 ├─ Related Location → /locations/riyadh-region, /locations/eastern-province (currently missing link)
 ├─ Fleet → /fleet/toyota-camry, /fleet/gmc-yukon (already automatic)
 └─ Blog → kafd-riyadh-taxi-corporate-guide (add a Dammam/Eastern-Province mention)

HUB — /locations/dammam
 ├─ Core Route → /routes/dammam-to-riyadh
 ├─ Airport → /services/dammam-airport-transfer
 ├─ Service Intent → /services/business-travel, /services/group-transport,
 │                   /services/dammam-khobar-bahrain-transfer
 ├─ Related Location → /locations/eastern-province (currently missing — should be bidirectional),
 │                     /locations/khobar-adjacent children (already linked as own district)
 ├─ Fleet → /fleet/toyota-camry, /fleet/gmc-yukon (already automatic)
 └─ Blog → dammam-eastern-province-travel-guide-2026 (add a Riyadh mention + link)

CORE ROUTE PAIR (already exist, need deepening not duplication)
 /routes/riyadh-to-dammam  ⇄  /routes/dammam-to-riyadh
      ↓ add (currently missing)         ↓ add (currently missing)
 → back-link to /locations/riyadh   → back-link to /locations/dammam
 → back-link to /locations/dammam   → back-link to /locations/riyadh
 → fix "family/group" gap: either add Hiace/Coaster/Staria pricing rows to both
   route pages, OR leave as-is and rely on the existing generic
   /services/group-transport contextual link (recommend the latter — avoids
   inventing unverified group pricing; see Priority 2 below)

RELATED EASTERN PROVINCE CLUSTER
 /locations/eastern-province (province hub)
   → should link to: /locations/dammam (its own child!), /routes/dammam-to-riyadh,
     /locations/riyadh or /locations/riyadh-region
 Dammam's existing children (Khobar, Dhahran, Jubail, Qatif, Bahrain Causeway, KFAC)
   stay exactly as they are — already well-linked to Dammam hub, no change needed.

BLOG / INFORMATIONAL (no new articles to be created now — see F for the one identified gap)
 dammam-eastern-province-travel-guide-2026 → add one sentence + link to
   /routes/dammam-to-riyadh in the "Getting Around the Eastern Province" section
 kafd-riyadh-taxi-corporate-guide → add one sentence + link to
   /routes/riyadh-to-dammam alongside the existing Riyadh→Jeddah mention
   (Dammam/Khobar is a major Aramco/corporate destination — directly on-topic)
```

---

## E. Internal-link opportunities

| Source URL | Target URL | Suggested natural anchor | Reason |
|---|---|---|---|
| `/locations/riyadh` | `/locations/dammam` | "continuing to Dammam" / "the Eastern Province" | No hub↔hub contextual link exists today; mirrors the Makkah↔Madinah contextual-sentence pattern already used elsewhere on the site |
| `/locations/dammam` | `/locations/riyadh` | "arriving from Riyadh" | Same, reverse direction |
| `/locations/eastern-province` | `/locations/dammam` | "Dammam, the province's capital" | The province hub doesn't even link to its own primary city hub today |
| `/locations/eastern-province` | `/routes/dammam-to-riyadh` | "Dammam to Riyadh taxi" | Connects the isolated province hub into this cluster |
| `/locations/riyadh` or `/locations/riyadh-region` | `/locations/eastern-province` | "Eastern Province" | Currently zero links from the Riyadh side into the Eastern Province regional hub |
| `/routes/riyadh-to-dammam` | `/locations/riyadh` | "Riyadh taxi service" | Route pages sitewide don't link back to location hubs — template-level fix, highest leverage single change |
| `/routes/riyadh-to-dammam` | `/locations/dammam` | "Dammam taxi service" | Same |
| `/routes/dammam-to-riyadh` | `/locations/dammam` | "Dammam taxi service" | Same |
| `/routes/dammam-to-riyadh` | `/locations/riyadh` | "Riyadh taxi service" | Same |
| `dammam-eastern-province-travel-guide-2026` (blog) | `/routes/dammam-to-riyadh` | "a direct Dammam to Riyadh taxi" | Post already covers "Getting Around the Eastern Province" — natural place to mention the Riyadh corridor for visitors who arrive/depart that way rather than flying |
| `kafd-riyadh-taxi-corporate-guide` (blog) | `/routes/riyadh-to-dammam` | "Riyadh to Dammam private taxi" | Post already links to Riyadh→Jeddah for "when business requires it" — Dammam/Khobar (Aramco corporate corridor) is at least as relevant and currently absent |
| `/locations/riyadh-region` | `/routes/riyadh-to-dammam` | (fix existing entry) | Not a new link — existing "3.5 hrs" entry should be corrected to match the route page's "4 hours" rather than left inconsistent |

---

## F. Pages that should NOT be created

- **Separate "Riyadh Airport → Dammam" / "King Khalid International Airport → Dammam" pages.** The two core route pages already answer this exact intent in their FAQs ("Do you pick up from King Fahd International Airport?", "Can I be dropped at Riyadh Airport?"). A traveler searching "Riyadh airport to Dammam taxi" is served correctly by `/routes/riyadh-to-dammam` — a separate page would be near-duplicate content differentiated only by swapping "city" for "airport" in the title, which is exactly what the brief warns against.
- **Separate "Dammam Airport → Riyadh" / "King Fahd International Airport → Riyadh" pages.** Same reasoning, reverse direction.
- **One-way vs. round-trip variant pages** (e.g., `/routes/riyadh-to-dammam-one-way`, `/routes/riyadh-to-dammam-round-trip`). This is a booking-flow/pricing distinction, not a distinct search intent or distinct content need — it belongs as a paragraph or FAQ on the existing route page, not a new URL.
- **Separate hotel-to-hotel / airport-to-hotel / hotel-to-airport variant pages** for this pair. Same reasoning — these are pickup/drop-off permutations already implicitly covered by "door-to-door" service messaging on the existing route pages, not distinct enough search intent to justify separate URLs.
- **A dedicated "corporate/business Riyadh-Dammam transfer" page separate from the existing route page.** The existing `riyadh-to-dammam` page's title is already "Corporate & Private Transfer" and its content already targets executives/business travel. A second page for the same corridor aimed at "corporate" intent specifically would cannibalize the existing one rather than capture new intent — better served by strengthening the existing page's corporate-angle content and linking `/services/business-travel` into it.
- **A separate "family/group transportation Riyadh-Dammam" page.** Same reasoning — this is a vehicle/audience variant of the same route, not a distinct enough intent. Better served by adding a contextual sentence + fleet link on the existing route pages (see D) than a new URL.

---

## G. Implementation plan (for your review — nothing below has been built)

**Priority 1 — highest-value existing pages (small number of edits, largest expected impact)**
1. Add hub↔hub contextual sentence-links: `/locations/riyadh` ↔ `/locations/dammam` (matches the pattern already used for Makkah↔Madinah elsewhere on the site).
2. Connect `/locations/eastern-province` into the cluster: link to `/locations/dammam`, `/routes/dammam-to-riyadh`, and back to Riyadh/`/locations/riyadh-region`. This single page is currently the most disconnected node touching this cluster.
3. Fix the "3.5 hrs" vs "4 hours" inconsistency on `/locations/riyadh-region`.
4. Add the missing Route→Location back-links on `/routes/riyadh-to-dammam` and `/routes/dammam-to-riyadh` specifically (a targeted fix; doing it sitewide across all 166 route pages would be a separate, larger template change worth flagging to you separately rather than bundling in here).

**Priority 2 — supporting pages (existing pages, deepen content)**
5. Add one contextual link + sentence to `dammam-eastern-province-travel-guide-2026` pointing at `/routes/dammam-to-riyadh`.
6. Add one contextual link + sentence to `kafd-riyadh-taxi-corporate-guide` pointing at `/routes/riyadh-to-dammam`.
7. Add a natural "traveling as a family or group?" sentence + fleet link (Staria/GMC Yukon) on both core route pages, without adding unverified group pricing rows — addresses the family/group intent without inventing pricing data.

**Priority 3 — future content (not to be created now, flagged for later decision)**
8. A new blog post bridging Riyadh↔Dammam directly (e.g., "Riyadh to Dammam: Private Taxi vs. Flying — What Business Travelers Should Know") — genuine gap, no existing post covers this angle.
9. Sitewide Route→Location back-link as a shared-template change (benefits all 166+ route pages, not just this pair) — larger, separate decision from this cluster's scope.
10. Consider whether Hiace/Coaster should be added as real pricing options on the two route pages, if group-travel demand on this corridor is confirmed — pricing-data decision, not a code decision.

---

**Separate note (unrelated to this audit):** Per your first instruction, the two sitewide popups (12-second timed popup and exit-intent popup, both rendered from the now-deleted `components/LeadCapturePopup.tsx` via `SiteChrome.tsx`) have been removed locally. Not committed or pushed, per your instruction to work locally only.
