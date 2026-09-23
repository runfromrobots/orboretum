# Project: The Joan Vermeulen Arboretum

A new 200-acre arboretum in the Mohawk Valley, NY, dedicated to preserving, cultivating, and interpreting native and heritage trees. The site documents the arboretum's mission, collections, trails, and educational resources, with an interactive map showing property boundaries, hiking trails, and plant observations synced from iNaturalist.

## Stack

Plain HTML/CSS/JS. No build step, no framework, no dependencies. Fonts loaded via Google Fonts CDN link tags in each HTML file's `<head>`.

## File structure

```
index.html                     homepage (hero carousel, mission, what to expect, featured gallery, get involved, contact)
styles.css                      shared stylesheet for the whole site
script.js                        shared JS (footer year, nav scroll-spy, hero carousel cycling)
map.html                         interactive Leaflet.js map showing trails, boundaries, plant observations
visit.html                       visit planning (hours, location, parking, accessibility)
collections.html                plant collection database and browsable plant species
education.html                   educational programs and learning opportunities
history.html                     historical context of the property
contact.html                     contact information, volunteer/board inquiry form
maps/geojson/                    GeoJSON data files (trails, boundaries, features, parcels)
data/                            JSON data files (plant-accessions synced from iNaturalist)
images/                          site imagery (hero carousel, trail photos, landscape, wildlife)
images/logos/                    partner/organization logos (if any)
.github/workflows/               GitHub Actions for automated iNaturalist sync
.github/scripts/                 Python scripts (sync_inaturalist.py)
.nojekyll                        present so GitHub Pages serves files as-is
README.md                        repository overview
DEPLOY.md                        deployment notes (GitHub Pages, Vercel)
```

## Design system

* **Colors**: Dark forest theme with cyan accents
  - Forest 900 (`#0d2818`): primary dark background
  - Forest 800 (`#1a3d2e`), 700 (`#2d5a47`), 600 (`#3d7556`): secondary backgrounds
  - Creek (`#4a7c7e`): teal accent, used for links and secondary buttons
  - Wheat (`#f5f1e8`): light text and contrast
  - Brown (`#6B4423`): features layer accent (parking, cemetery, etc.)
  - Dark Blue (`#2C5AA0`): proposed arboretum parcels accent
  - See `:root` in styles.css for full token list

* **Type**: 
  - DM Sans (body copy, headings) — loaded via Google Fonts
  - IBM Plex Mono (dates, labels, eyebrows)
  - Responsive type scale with Carbon Design System tokens (`--cds-*`)

* **Spacing**: Carbon Design System spacing tokens (`--cds-spacing-*`) — use these instead of hardcoded px values

* **Map styling**:
  - Trail Route: green (`#42b37c`), 4px weight, 0.9 opacity
  - Property Boundary: teal (`#4a7c7e`), 3.5px weight, 0.85 opacity
  - Plant Observations: blue (`#2196F3`), circular markers 6px radius
  - Current Property Features: brown (`#6B4423`), 2px weight, 0.7 opacity
  - Proposed Arboretum Parcels: dark blue (`#2C5AA0`), 2.5px weight, 0.8 opacity
  - Labels use collision detection with leader lines connecting to features
  - Observations layer uses custom `observations-pane` with z-index 650 to stay clickable

* **Hero section**: 
  - Two-image carousel (hero1.png, hero2.png) with smooth fade animation
  - 16-second cycle, one image always fully visible
  - Dark overlay (rgba(0, 0, 0, 0.5)) for text readability
  - White text (#ffffff) for contrast
  - Buttons: primary (creek), secondary (forest-900)

## Content guidelines

### Naming & Branding

* Always use **"The Joan Vermeulen Arboretum"** in formal contexts (page titles, headers, mission statements, footer)
* Acceptable shorter forms in narrative: "the arboretum," "Vermeulen Arboretum," "Joan Vermeulen Arboretum" (context-dependent)
* URLs and file paths: use lowercase, hyphens for spacing (e.g., `joan-vermeulen-arboretum.com`, not camelCase or underscores)
* Never abbreviate to just "Vermeulen" in official copy without the "Arboretum" qualifier
* Email/contact: use "The Joan Vermeulen Arboretum" for sender name in forms

### Copy tone & style

* Concise and welcoming — avoid over-explaining
* Emphasize the arboretum's mission: preservation, cultivation, education, community
* Avoid redundant phrasing (e.g., don't say "a new arboretum that is brand new")
* Property details: 200 acres, 1.5-mile trail, Mohawk Valley location (Sprakers, NY)
* Historical context: four layers — pre-colonial Mohawk territory, Revolutionary War era, mid-20th century horticulture, six decades of conservation stewardship

### Real content vs. placeholder

**Real:**
* Property location: 472 Anderson Road, Sprakers, NY
* Trail distance: 1.5 miles
* Property size: 200 acres
* iNaturalist integration: automated sync every 6 hours via GitHub Actions
* Plant observation data: quality grades (research grade, needs ID, casual), photos, observer info, dates
* Leadership: Rip Kennedy, Executive Director
* All hero and landscape imagery

**Placeholder/future:**
* Volunteer signup forms
* Board member bios
* Educational program details (subject to change as programs develop)
* Visitor hours and seasonal closures

## Map interactivity

* All layers (trail, boundaries, features, parcels) are toggleable via checkboxes
* Plant observation markers are always clickable, regardless of other layer visibility
* Observation popups display: photo (if available), quality grade badge (color-coded), scientific name, common name, accession ID, observed date, observer, location, iNaturalist link
* Non-interactive layers (boundaries, features, parcels) use `interactive: false` so clicks pass through to observations
* Leader lines with dashed styling connect labels to features when labels are offset due to collision detection
* Custom pane (`observations-pane`, z-index 650) keeps observation markers on top

## iNaturalist integration

* **Data source**: Place ID 237476 (The Joan Vermeulen Arboretum), taxon ID 47126 (Plantae/plants only)
* **Sync schedule**: Every 6 hours via GitHub Actions (`.github/workflows/sync-inaturalist.yml`)
* **Python script**: `.github/scripts/sync_inaturalist.py` fetches observations and writes to `data/plant-accessions.json`
* **Accession format**: 
  - `accession_id`: ORB-{observation_id}
  - `scientific_name`, `common_name`: from iNaturalist taxon data
  - `quality_grade`: research/needs_id/casual
  - `photos`: array with url, square_url, original_url for each photo
  - `latitude`, `longitude`: GeoJSON coordinates (longitude first)
  - `observed_date`, `observer`, `place_guess`: metadata
  - `inaturalist_url`, `inaturalist_id`: links back to source
* **Coordinate extraction**: Prefers geojson.coordinates field; falls back to latitude/longitude fields; observations without coordinates are filtered out

## Deployment

* **Repository**: https://github.com/runfromrobots/orboretum
* **Currently deployed via**: GitHub Pages (Settings → Pages → `claude/orboretum-level-1-accreditation-fwcfj3` branch) and Vercel (auto-deploy on push)
* **Branch strategy**: `claude/orboretum-level-1-accreditation-fwcfj3` is the active development/staging branch; PRs/merges to be determined
* **Domain**: To be configured (DNS/hosting TBD)

## Conventions

* Relative links only (`map.html`, `../`, `images/...`) so the site works from any path
* No em dashes in content
* Avoid "it's not X, it's Y" constructions
* Keep prose direct and concise
* GeoJSON coordinates are always [longitude, latitude] per GeoJSON spec
* Accession IDs follow pattern: ORB-{iNaturalist observation ID}
