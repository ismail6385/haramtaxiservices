# NEOM ↔ Jordan Topical Cluster — Audit & Recommended Map

Status: **Audit only. No code changes, no commits, no pushes.**

No existing NEOM↔Jordan topical map or planning doc exists anywhere in the repo — checked all SEO/internal-linking markdown files, none reference this cluster specifically. This is a new audit. However, **substantial existing content already covers Tabuk↔NEOM and Tabuk↔Jordan separately** — this is not a greenfield cluster, and the main finding is that the missing piece is specifically the *direct* NEOM↔Jordan/Aqaba connection, not the surrounding architecture.

---

## 1. Existing site audit — every relevant URL found

| URL | Type | Covers | Quality |
|---|---|---|---|
| `/locations/tabuk` | Location hub | Tabuk city, links to NEOM, Haql, AlUla, Airport, Castle, Wadi Disah children; FAQs cover NEOM transfers, Jordan border (Haql/Halat Ammar), vehicle guidance | Strong, comprehensive |
| `/locations/tabuk/neom` | Nested location | NEOM Bay, The Line, Sindalah, Gayal, Trojena; distances from Tabuk; **already links to** `/locations/tabuk/haql` ("Haql & Jordan Border →") | Strong |
| `/locations/tabuk/haql` | Nested location | Haql shipwreck, Gulf of Aqaba diving, **both** Al Durra and Halat Ammar border crossings, FAQ on documents needed | Strong, but does **not** link back to `/locations/tabuk/neom` (one-directional) |
| `/locations/tabuk/tabuk-airport`, `/tabuk-castle`, `/wadi-disah`, `/alula` | Nested locations | Other Tabuk-region destinations | Not directly relevant to this cluster |
| `/routes/tabuk-to-jordan-border` | Route page (in `routesData.ts`) | Tabuk→Jordan border, 150km/1h45m, 2 FAQs, mentions Halat Ammar + Al Durra | ⚠️ **See critical finding below — duplicated** |
| `/services/tabuk-to-jordan-border` | **Same slug, different file** (in `servicesData.ts`) | Same title/intent, thin (no distance, 1 generic pricing row, zero FAQs) | ⚠️ **Duplicate of the route page above — see Critical Finding** |
| `/services/tabuk-neom-transfer` | Service | Tabuk↔NEOM Bay/The Line/Sindalah/Gayal, 200km/2.5h, explicitly built around **worker rotation**, Toyota Hiace for groups up to 12 | Strong, rich content — this is the best-developed page in the whole cluster |
| `/services/neom-bay-transfer` | Service | NEOM Bay Airport → Trojena/The Line/Sindalah | Thin, overlaps with `tabuk-neom-transfer` |
| `/services/neom-taxi` | Service | "Taxi Service in NEOM" | Very thin — one-line content |
| `/services/neom-airport-taxi` | Service | NEOM Bay Airport → project sites | Thin, overlaps with `neom-bay-transfer` |
| `/services/the-line-taxi`, `/sindalah-taxi` (approx. slugs), `/trojena-taxi` | Services | NEOM sub-destinations individually | Thin, near-duplicate of each other and of `neom-taxi`/`neom-bay-transfer` |
| `/services/jordan-border-taxi` | Service | Generic — "Halat Ammar, Al Durra (Haql), and Al Haditha border crossings" | Conflates 3 geographically distinct crossings into one generic page |
| `/services/jordan-exit-taxi` | Service | Fully generic "exit to Jordan" | Very thin, near-duplicate of `jordan-border-taxi` |
| `/services/qurayyat-to-jordan-border` | Service | Qurayyat→Al Haditha crossing | **Different region entirely** — Qurayyat is in the far north (Al Jouf area), not connected to NEOM/Tabuk/Haql. Not part of this cluster. |
| `/routes/riyadh-to-neom-city`, `/routes/neom-city-to-riyadh` | Route pages | Riyadh↔NEOM, 1,600km ultra-long-haul, worker/contractor focus | Well-developed, not part of this cluster's scope but shows the pattern for "onward from NEOM" content |
| Multiple other route pages (Hail↔Tabuk, AlUla↔Tabuk, Taif↔Tabuk, Makkah↔Tabuk, Madinah↔Tabuk, Jeddah↔Tabuk) | Route pages | All mention NEOM and/or Jordan border only as **onward-connection FAQs** ("Can I continue to NEOM or Jordan from here?") | Good supporting signal, not primary pages |
| **No page exists for**: "Aqaba" as a destination (any slug) | — | Aqaba is mentioned only as body text inside Haql/Tabuk pages, never as its own page or route endpoint | **Confirmed gap** |
| **No page exists for**: "NEOM to Jordan", "NEOM to Aqaba", "Jordan to NEOM", "Aqaba to NEOM" (any slug variant) | — | — | **Confirmed gap — this is the cluster's actual missing piece** |
| **No page exists for**: dedicated "Durra"/"Ad-Durrah" border page | — | Al Durra is mentioned as text within Haql/Tabuk-border pages, never its own page | Correctly *not* built as separate — current approach (covering it within Haql) is right, see Section 3 |
| Blog: `neom-tabuk-transport-guide-2026` | Blog | Tabuk↔NEOM transport guide — permits, TUU/NUM airports, worker rotation | Strong, links via `relatedServiceSlug: "tabuk-neom-transfer"` |
| Blog: `haql-shipwreck-tabuk-guide` | Blog | Haql shipwreck + explicitly states "Al Durra border crossing is ~10km from the shipwreck... Jordan side: taxis to Aqaba are available" | Strong, links via `relatedServiceSlug: "tabuk-to-jordan-border"` — confirms Al Durra (not Halat Ammar) is the crossing that leads toward Aqaba |
| Blog: `riyadh-to-neom-road-trip-guide-2026`, `tabuk-travel-guide-2026`, `alula-day-trip-from-tabuk-guide`, `wadi-disah-tabuk-canyon-guide` | Blog | Supporting Tabuk-region content | Exist, not border/Jordan-specific |
| Fleet: `/fleet/toyota-camry`, `/fleet/gmc-yukon` | Fleet | Priced on `routes/tabuk-to-jordan-border` — auto-linked via `PopularRoutesForVehicle` | Automatic, working |
| Fleet: `/fleet/toyota-hiace` | Fleet | **Explicitly named** as the vehicle for NEOM worker rotation groups (up to 12) in `tabuk-neom-transfer`'s content | **Not auto-linked** — `tabuk-neom-transfer` lives in `servicesData.ts`, and the sitewide `PopularRoutesForVehicle` component only reads `routesData.ts`. This is a real, specific gap: the fleet page for the vehicle this cluster's content itself recommends doesn't link to that content. |

### 🔴 Critical finding: pre-existing duplicate content

`"tabuk-to-jordan-border"` exists as **the same slug in two different data files** — `lib/routesData.ts` (rich: distance, duration, 2 FAQs) and `lib/servicesData.ts` (thin: no distance, 1 generic pricing row, zero FAQs). Because routes and services render under different URL prefixes (`/routes/tabuk-to-jordan-border` vs `/services/tabuk-to-jordan-border`), this isn't a build error — but it **is** two live URLs targeting the identical search intent with overlapping titles, one much thinner than the other. This predates the NEOM/Jordan cluster work and isn't something I'm proposing to fix here, but it's the exact failure mode the brief's "prevent programmatic SEO sprawl" section warns against, and it's worth your awareness before this cluster adds anything nearby — the new NEOM-Jordan pages should not repeat this pattern (a route AND a service page for the same directional intent).

### Border-crossing terminology, verified across existing content

Three geographically distinct Saudi–Jordan crossings are in play across the site, and the existing content is **mostly accurate** about the distinction (contrary to my initial read of the thinner pages in isolation):
- **Al Durra / Ad-Durrah** (near Haql, coastal) — the crossing that leads toward **Aqaba**. Confirmed by the `haql-shipwreck-tabuk-guide` blog post. ~200–210km from Tabuk, ~10km from the Haql shipwreck.
- **Halat Ammar** — a separate, more inland crossing, ~150km from Tabuk. Does not lead directly to Aqaba.
- **Al Haditha** (near Qurayyat, far north) — unrelated to this cluster entirely; different region.

The one page that blurs this is the thin `servicesData.ts` version of `tabuk-to-jordan-border` and the `/services/jordan-border-taxi` generic page, both of which list crossings without distinguishing which one goes where. **Flagging per instruction 13 rather than fixing now**: any new NEOM↔Jordan page must specify **Al Durra**, not "the Jordan border" generically, since that's the crossing actually relevant to an Aqaba-bound NEOM traveler.

---

## 2. Main topical hierarchy — what's justified vs. not

| Proposed node | Distinct intent? | Recommendation |
|---|---|---|
| NEOM → Jordan (general) | Yes — this is the commercial driver per your booking data | **Build.** This should be the primary new page. |
| NEOM → Aqaba | Overlaps heavily with NEOM → Jordan (Aqaba is the destination *inside* Jordan that this crossing serves) | **Do not build as a separate page.** Aqaba is the natural continuation of "NEOM → Jordan" via Al Durra — same drive, same border, same drop-off logistics. Cover it as the primary destination *within* the NEOM→Jordan page, not a second page. |
| NEOM → Durra Border | Same border crossing as above, narrower framing | **Do not build separately.** This is the same trip as NEOM→Jordan with a different search phrasing — one page, natural mention of "Al Durra crossing" in content/keywords. |
| NEOM → Haql | Distinct — Haql itself is a tourist destination (shipwreck, diving), separate from "continuing into Jordan" | **Already exists** implicitly via `/locations/tabuk/haql`, but that page is framed as "from Tabuk," not "from NEOM." Given NEOM is likely closer to Haql than Tabuk is (both ~200km from Tabuk in the same northwest direction), a NEOM-side mention/section is justified — see Section 4. |
| NEOM → Tabuk | Already exists, reverse of existing content | No action — already covered by `tabuk-neom-transfer` (reverse direction implied) and Tabuk hub. |
| NEOM → Aqaba Airport | Aqaba doesn't have a well-known international airport driving independent search volume for this specific corridor (Aqaba's airport — King Hussein International — is comparatively minor); this is a sub-case of NEOM→Aqaba, not distinct | **Do not build.** Cover as one FAQ line on the main page if relevant, not a section. |
| NEOM → Petra | Genuinely distinct destination, meaningfully further than Aqaba, real tourist demand | **Section, not a page** — see Section 8 for reasoning. |
| NEOM → Wadi Rum | Same reasoning as Petra | **Section, not a page.** |

**Recommendation: one well-built page, not eight.** Build `/routes/neom-to-jordan` (and its return `/routes/jordan-to-neom` or `/routes/neom-to-aqaba` framing — see naming decision in Section 14) as a single comprehensive page covering the Al Durra crossing, Aqaba as the primary destination, and Petra/Wadi Rum as onward-travel mentions with realistic distance/time caveats. This matches your own instruction: "Determine which pages have genuinely distinct search intent... Do not automatically create every URL."

---

## 3. Durra / Ad-Durrah border cluster

**Recommendation: no separate Durra page.** The existing `/locations/tabuk/haql` page already treats Al Durra correctly — as the border-crossing *feature* of Haql, not a standalone destination. This is the right architecture and should be preserved, not duplicated.

What's missing is the **NEOM-side equivalent mention** — the new NEOM→Jordan page should:
- Use "Al Durra crossing" as the canonical name (matches the blog post's usage, which is the most precise existing content)
- Mention "Ad-Durrah" and "Al-Durra" as alternate spellings once in body copy for search-matching, without creating separate URLs for each spelling (directly per your instruction)
- Explicitly **not** use "Halat Ammar" for this route, since that's a different, non-Aqaba-bound crossing — this is the one place existing content (the thin service-side duplicate) gets it wrong, and new content shouldn't repeat that error

---

## 4. Aqaba cluster

**No dedicated Aqaba page exists today.** Given:
- Aqaba is the actual destination city travelers are asking about (per your booking data, this is what's converting)
- It's the natural endpoint of the Al Durra crossing
- It has its own hotels, airport, and onward connections (Petra, Wadi Rum) that a NEOM traveler would ask about

**Recommendation: Aqaba deserves to be the primary framing of the new page**, i.e., the page should be built around "NEOM to Aqaba" as the headline intent (since that's concrete and matches how a customer actually searches and books), with "NEOM to Jordan" and "NEOM to Durra Border" as supporting phrasing within the same page — not three separate pages.

**Aqaba Airport**: not enough distinct justification for its own page. A NEOM traveler's practical question is "how do I get to Aqaba," not specifically "how do I get to Aqaba Airport" as a distinct trip — cover it as one FAQ ("Can you drop me at Aqaba Airport instead of a hotel?") rather than a section or page.

**Aqaba hotel-to-NEOM**: same reasoning as the Riyadh-Dammam audit's finding on hotel-transfer variants — this is a pickup/drop-off detail, not a distinct page.

---

## 5. Tabuk supporting cluster

This is **already well-built** and does not need new pages — it needs one new connective link:

- `/locations/tabuk` → already links to NEOM and Haql children, already has FAQs covering both NEOM and Jordan border separately
- **Missing**: `/locations/tabuk/haql` and `/locations/tabuk/neom` should link to *each other* bidirectionally. Currently only NEOM→Haql exists; Haql→NEOM does not.
- **Missing**: neither Tabuk page currently mentions or links to a NEOM→Jordan direct connection (because that page doesn't exist yet) — once built, `/locations/tabuk/neom` is the natural place to add "traveling on to Jordan from NEOM? Here's the direct route" rather than routing everyone back through Tabuk/Haql framing.

No new Tabuk-side pages are justified — Tabuk→NEOM, Tabuk→Haql, Tabuk→Jordan-border, and Tabuk Airport connections are all already covered with real content.

---

## 6. NEOM sub-location cluster

| Sub-destination | Current coverage | Recommendation |
|---|---|---|
| NEOM Bay | Covered in `tabuk-neom-transfer`, `neom-bay-transfer`, `/locations/tabuk/neom` | Sufficient — no new page |
| The Line | Thin standalone service page exists, also covered in the main NEOM content | **Candidate for consolidation**, not expansion — a standalone "The Line taxi" page with one-line content is a weak page; the content already living in `tabuk-neom-transfer` is stronger. Not touching this now (out of scope for the Jordan cluster), but flagging since it's the same "thin near-duplicate" pattern the brief warns against. |
| Oxagon | **Not found anywhere in the codebase** | Do not build now — no existing demand signal, and the brief is explicit that project names alone don't justify a page. Worth a future look only if it starts appearing in search console data, same standard as everything else. |
| Trojena | Thin standalone page exists | Same as The Line — sufficient existing coverage, not a gap for this audit. |
| Sindalah | Thin standalone page exists, also covered in `tabuk-neom-transfer` | Same. |
| Sharma | Covered as "NEOM Bay (Sharma)" consistently across existing pages | Sufficient, correctly treated as a section not a separate page. |
| Magna, Leyja | **Not found anywhere in the codebase** | Do not build — no existing content, no demand signal, and per your own rule this needs genuine transport intent + commercial relevance to justify a page, neither of which is evidenced yet. |

**None of the NEOM sub-locations need new work for this cluster.** The one relevant action is making sure the new NEOM→Jordan page is reachable from `/locations/tabuk/neom` (the sub-location hub), not creating more sub-location pages.

---

## 7. Airport cluster

| Airport | Existing coverage | Recommendation |
|---|---|---|
| Tabuk Regional Airport (TUU) | Extensively covered — `tabuk-neom-transfer`, `/locations/tabuk/tabuk-airport`, multiple route FAQs | No new page needed |
| NEOM Bay Airport (NUM/Sharma) | Covered in `neom-bay-transfer`, `neom-airport-taxi`, `tabuk-neom-transfer`, `neom-tabuk-transport-guide-2026` blog | No new page needed — arguably already has too many near-identical thin pages (see Section 6), not too few |
| Red Sea International Airport | **Not found anywhere in the codebase** | Not currently relevant to this cluster's actual customer journey based on existing content — don't build speculatively |
| Aqaba Airport (Jordan side) | Not covered anywhere | Per Section 4: one FAQ line on the new NEOM→Aqaba page, not a dedicated page |
| King Hussein International (Jordan, near Aqaba) | Same airport as above, alternate name | Same — one FAQ mention, and note the alternate name in passing so search-matching works without a second page |

**No new airport pages justified.** The airport intent for this cluster is fully served by FAQ sections on the (proposed) NEOM→Jordan page and the existing Tabuk/NEOM airport content.

---

## 8. Jordan destination cluster (Petra, Wadi Rum, Amman)

| Destination | Distance from NEOM (approx., via Al Durra) | Recommendation |
|---|---|---|
| Aqaba | ~150–200km depending on exact NEOM sub-location | **Primary page destination** (Section 4) |
| Wadi Rum | Aqaba + ~60km further | **Section within the NEOM→Jordan page**, framed as "onward from Aqaba." Real tourist demand, but the trip is really "NEOM→Aqaba, then separately arrange Wadi Rum" for most travelers — not a distinct booking pattern our driver would fulfill door-to-door across an international border into Jordan's interior. |
| Petra | Aqaba + ~120km further | Same reasoning as Wadi Rum — **mention, not a page.** Also: a cross-border private taxi continuing deep into Jordan (past Aqaba to Petra) is a materially different service commitment (driver, permits, vehicle insurance validity in Jordan) than a border drop-off — this needs an honest FAQ caveat rather than a page implying we run the full route, unless that's confirmed as an actual bookable service. |
| Amman | Aqaba + ~330km further, effectively the whole length of Jordan | **Do not build, do not imply.** This is far enough beyond a border-drop-off service that presenting it as one of "our routes" would overstate what's realistically delivered. If Amman transfers are genuinely offered end-to-end, that's a business-model question to confirm before writing content, not an SEO decision. |

This section is the clearest case in the whole audit for restraint: real distance and realistic service-delivery limits (not just keyword volume) are the deciding factor, exactly as your brief asks.

---

## 9. Service-intent cluster

| Intent | Recommendation |
|---|---|
| private transfer, taxi, car with driver, chauffeur | Same page — these are synonyms for the same page, vary the anchor/body language, not separate URLs |
| airport transfer (NEOM Bay side) | Already covered elsewhere (Section 7) — FAQ mention on new page, not new page |
| one-way / round-trip | FAQ section on the route page, not separate URLs (matches the Riyadh-Dammam audit's identical finding) |
| family transfer / group transfer | Section on the route page ("traveling as a group? Our Toyota Hiace..." — matches the fleet-linking pattern used elsewhere on the site), not a separate page |
| business/corporate transfer | Given NEOM is a major contractor/corporate destination, this deserves a genuine paragraph on the page (not just a line) — but still the same URL, not a new one |
| VIP transfer | Fold into the main page's vehicle-options section (GMC Yukon as the "VIP" option), not separate |
| long-distance transfer | This *is* the page — not a separate intent |
| cross-border transfer | This *is* the page's core subject — not a separate intent |

**Net recommendation: one page carries all of these intents as sections/FAQs.** None of them clear the bar for a separate URL — this matches your instruction to avoid "15 pages with nearly identical content."

---

## 10. Fleet cluster

| Vehicle | Relevant to this cluster? | Why |
|---|---|---|
| Toyota Camry | Yes | Already the base option on `tabuk-to-jordan-border`; solo/couple travelers |
| GMC Yukon (XL) | Yes | Already used across all Tabuk/NEOM/Jordan content for families/small groups with luggage |
| Toyota Hiace | Yes — and currently under-linked (see Critical gap below) | Explicitly named in `tabuk-neom-transfer`'s own content as the vehicle for NEOM worker groups up to 12 — exactly the "luggage-heavy international transfer" and "group travel" use case this cluster is about |
| Toyota Coaster | Marginal | Only relevant for very large group border crossings (20+); not currently mentioned anywhere in NEOM/Jordan content — don't force a link that isn't evidenced |
| Hyundai Staria | Marginal | Not currently mentioned in any NEOM/Tabuk/Jordan content; Yukon and Hiace already fill the "family/group" role in existing copy |
| Hyundai Starex | Not relevant | Not mentioned anywhere in this cluster's content |
| Mercedes Sprinter | **Not in the fleet at all** — checked `/fleet/*`; only Camry, Yukon, Staria, Starex, Hiace, Coaster exist. Do not reference a vehicle that isn't in the actual fleet. |

**Confirmed gap**: `/fleet/toyota-hiace` does not currently link to `tabuk-neom-transfer` or any Jordan-border content, despite that content explicitly recommending the Hiace. This is because `PopularRoutesForVehicle` (the sitewide component handling fleet→route auto-linking) only reads `routesData.ts`, and `tabuk-neom-transfer` lives in `servicesData.ts`. This is a real, specific, fixable gap — not something to solve by building new pages, but by linking existing ones correctly once you approve implementation.

**Recommendation for the new page**: price it with Camry, GMC Yukon, and Toyota Hiace (matching exactly what `tabuk-neom-transfer` already established as the right vehicle set for this corridor) — not all 6 fleet vehicles.

---

## 11. Content / blog cluster

### Existing articles and their link opportunities

| Source URL | Target URL | Suggested anchor | Reason |
|---|---|---|---|
| `haql-shipwreck-tabuk-guide` (blog) | New NEOM→Jordan page | "a direct NEOM to Jordan transfer" | This post already states the Al Durra crossing leads to Aqaba and is closer to Haql than to Tabuk center — natural to mention NEOM travelers can cross here too |
| `neom-tabuk-transport-guide-2026` (blog) | New NEOM→Jordan page | "continuing on to Jordan" | Post already covers NEOM comprehensively; a traveler reading it may be asking "what's beyond NEOM," and currently nothing answers that |
| `/locations/tabuk/haql` | `/locations/tabuk/neom` | "NEOM, 200km southeast" | Currently one-directional (NEOM→Haql exists, Haql→NEOM doesn't) |
| `/locations/tabuk/neom` | New NEOM→Jordan page | "private transfer to Jordan" | Natural home for this link — it's already the NEOM-side hub |
| New NEOM→Jordan page | `/locations/tabuk/haql` | "Haql shipwreck and Gulf of Aqaba diving" | For travelers who want to stop at Haql en route rather than cross straight through |
| New NEOM→Jordan page | `/fleet/toyota-hiace`, `/fleet/gmc-yukon` | "traveling as a group" / "families with luggage" | Matches the fleet reasoning in Section 10 |

### Missing informational topics (identified, not created)

- "How to travel from NEOM to Jordan by road" — genuine gap, no existing post covers the NEOM-specific angle (only Tabuk-specific)
- "NEOM to Aqaba distance and travel time guide" — genuine gap
- "Durra Border Crossing guide" (standalone informational piece, distinct from a booking-intent route page) — could clarify the Halat Ammar vs. Al Durra distinction for the whole site at once, which would also help fix the confusion in the thinner existing pages
- "Saudi Arabia to Jordan by road from the NEOM region" — overlaps with the above; pick one framing, not both

Not creating any of these now, per your instruction — flagging for your prioritization.

---

## 12. Internal linking architecture (recommended, not yet built)

```
/locations/tabuk  (existing hub)
    ↕
/locations/tabuk/neom  (existing)  ⇄  /locations/tabuk/haql  (existing)
    ↓ (missing today)                        ↓ (missing today — currently one-directional)
    └──────────────→  NEW: /routes/neom-to-jordan  ←──────────────┘
                              ↓
                    /fleet/toyota-camry, gmc-yukon, toyota-hiace
                              ↓
                    haql-shipwreck-tabuk-guide, neom-tabuk-transport-guide-2026 (blog, bidirectional)
```

This is a small, targeted set of new connections — not a sitewide relinking effort. The existing Tabuk/NEOM/Haql architecture is genuinely solid; it just doesn't yet have the one new page this whole cluster is missing, or the handful of links pointing at it once it exists.

---

## 13. Border / travel information — flagged for review, not corrected here

Per your instruction not to repeat unsupported claims:

- **Visa-on-arrival claims** ("Most nationalities can get a Jordan visa on arrival") appear in the thin `servicesData.ts` version of `tabuk-to-jordan-border` without qualification. Jordan's visa-on-arrival policy varies significantly by nationality and land-crossing point — this should be verified against current Jordanian government sources before any new page repeats it, rather than copied forward as-is.
- **"Saudi exit permits required for expatriates"** (from the Haql blog post) is directionally reasonable (Saudi Iqama holders do need exit/re-entry authorization to leave the Kingdom) but the exact current mechanism (Absher-based exit/re-entry visa vs. other processes) should be confirmed as current before restating.
- **Distance figures vary slightly between pages** (Al Durra crossing given as "200km" in one place and "210km" in another, both from Tabuk) — minor, but worth reconciling to one number when the new page is built rather than introducing a third slightly-different figure.
- **No content currently states current border operating hours** for Al Durra — if the new page states hours, they need a source; if unconfirmed, better to say "confirm current crossing hours before travel" than invent a number.

None of this blocks building the new page — it means the new page's border-logistics claims should be written conservatively and sourced, not copied from the existing thinner pages that already contain some unverified specifics.

---

## 14. Final topical map

| Suggested URL | Primary intent | Secondary intents | Page type | Existing/New | Priority | Links to | Linked from | Dedicated page justified? |
|---|---|---|---|---|---|---|---|---|
| `/routes/neom-to-jordan` *(naming decision needed — see note)* | NEOM to Jordan private transfer / NEOM to Aqaba taxi | Durra border crossing, car with driver, group/family transfer, corporate transfer | Route page (`routesData.ts`) | **New** | **P1** | `/locations/tabuk/haql`, `/locations/tabuk/neom`, `/fleet/toyota-camry`, `/fleet/gmc-yukon`, `/fleet/toyota-hiace`, both relevant blog posts | `/locations/tabuk/neom`, `/locations/tabuk/haql`, `haql-shipwreck-tabuk-guide`, `neom-tabuk-transport-guide-2026` | **Yes** — real booking data, no existing page serves this specific corridor |
| `/locations/tabuk/haql` → `/locations/tabuk/neom` link | (existing page, adding one link) | — | Nested location | Existing | **P1** | — | — | N/A — link fix, not a page |
| `dammam-eastern-province-travel-guide-2026`-style new post: "NEOM to Aqaba: The Complete Border Crossing Guide" | Informational — NEOM to Jordan by road | Al Durra crossing, documents needed, distance/time | Blog | **New (not yet — Priority 3)** | P3 | New route page, `/locations/tabuk/haql` | New route page | Reasonable, but explicitly deferred per your "don't create yet" instruction |
| `/fleet/toyota-hiace` → new route page link | (existing page, adding one link) | — | Fleet | Existing | **P1** | — | — | N/A — link fix once new page exists |
| ~~`/routes/neom-to-aqaba`~~ | ~~NEOM to Aqaba~~ | — | — | — | — | — | — | **No** — same intent as `/routes/neom-to-jordan`, would cannibalize it. Aqaba should be the headline destination *within* that one page (see Section 4), not a separate URL. |
| ~~`/routes/neom-to-durra-border`~~ | ~~NEOM to Durra Border~~ | — | — | — | — | — | — | **No** — same trip, narrower phrasing. Fold into the main page's keywords/content. |
| ~~`/locations/aqaba`~~ | ~~Aqaba hub~~ | — | — | — | — | — | — | **No** — Aqaba is a Jordanian city we transfer *to*, not a Saudi location we have a service presence *in*. Treat as a destination within the route page, not a location hub (this site's location hubs are all Saudi cities where the business actually operates). |
| ~~`/routes/neom-to-petra`, `/routes/neom-to-wadi-rum`, `/routes/neom-to-amman`~~ | — | — | — | — | — | — | — | **No** — see Section 8. Mentions/FAQs on the main page only. |
| ~~Separate one-way / round-trip / family / group / corporate / VIP pages~~ | — | — | — | — | — | — | — | **No** — see Section 9. All fold into the one route page as sections/FAQs. |

**Naming decision needed from you before implementation**: should the new page be framed and slugged around "Jordan" (`neom-to-jordan`) or "Aqaba" (`neom-to-aqaba`)? Section 4 argues Aqaba is the more concrete, booking-relevant framing since it's the actual destination city, while "Jordan" is the country-level search term with likely higher generic volume. My recommendation is `/routes/neom-to-aqaba` as the primary page with "Jordan," "Durra Border," and "cross-border" as supporting keywords/content within it — but this is exactly the kind of call you said you wanted to make after reviewing the map, so I've left it as an open decision rather than picking for you.

---

## 15. Explicitly — what NOT to build

- **No separate NEOM→Aqaba page distinct from NEOM→Jordan** — same intent, one page (Section 2, 4).
- **No separate Durra Border page** — it's a feature of the Haql/Jordan-crossing content, not its own destination (Section 3).
- **No new pages for Petra, Wadi Rum, or Amman as NEOM route endpoints** — real destinations, but the honest service-delivery distance/complexity means these are FAQ mentions at most, not bookable routes we should imply we run end-to-end without confirming that's actually offered (Section 8).
- **No spelling-variant URLs** for Durra / Ad-Durrah / Al-Durra — one canonical spelling in the URL and heading ("Al Durra," matching the most precise existing content), other spellings mentioned once in body text for search matching.
- **No separate Aqaba Airport page** — fold into the main page as one FAQ (Section 4, 7).
- **No new airport-swap pages** (e.g., "NEOM Airport to Jordan" vs. "NEOM to Jordan") — same reasoning as the Riyadh-Dammam audit: this is the same trip with the pickup point specified, not a distinct page.
- **No new service-intent pages** (one-way, round-trip, family, group, corporate, VIP, long-distance, cross-border) — all fold into the single route page (Section 9).
- **Do not add more thin NEOM sub-location pages** (The Line, Trojena, Sindalah already have thin standalone pages that arguably should be consolidated, not imitated with more of the same pattern) — out of scope to fix here, but flagged so this cluster's new work doesn't repeat it.
- **Fix, don't duplicate, the existing `tabuk-to-jordan-border` collision** — when you do move to implementation, this pre-existing routes/services duplicate should be resolved (likely: remove or substantially differentiate the thin `servicesData.ts` version) rather than left in place while a new, better NEOM-side page is added alongside it.

---

**Summary**: this cluster needed far less new construction than it might first appear — Tabuk↔NEOM and Tabuk↔Jordan are both already well-covered. The actual gap your booking data is pointing at is narrow and specific: **one genuinely new page** connecting NEOM directly to Jordan/Aqaba via the Al Durra crossing, plus a handful of link fixes (Haql↔NEOM bidirectional, two blog posts, one fleet page) to weave it into what already exists. This matches your stated goal — topical authority through a coherent, non-redundant structure, not URL count.

Stopping here per your instruction. Awaiting your review and the naming decision (Jordan-framed vs. Aqaba-framed URL) before any implementation.
