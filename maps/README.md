# Maps & Geographic Data

Coordinate data, trail routes, plant locations, and property boundaries for The Orboretum.

## Structure

```
geojson/              - GeoJSON files for web mapping (interactive maps)
  - trails.geojson
  - plants.geojson
  - pois.geojson
  - boundaries.geojson

kml/                  - KML files for Google Maps, Google Earth
  - trails.kml
  - plants.kml
  - pois.kml
  - boundaries.kml

data/                 - Raw coordinate data and source files
  trails/             - Trail route coordinates and waypoints
  plants/             - Plant/collection locations and species info
  pois/               - Points of interest (parking, entrances, etc.)
  boundaries/         - Property boundary coordinates
```

## Coordinate System

- **Format:** WGS84 (latitude/longitude)
- **Precision:** Decimal degrees (6 decimal places)
- **Reference:** EPSG:4326

## Adding Data

1. Collect coordinates from Google My Maps
2. Place raw data in `data/[category]/`
3. Convert to GeoJSON for web use
4. Convert to KML for Google Maps/Earth
5. Add metadata (species, date, notes, etc.)

## Export to Website

GeoJSON files are used to generate interactive maps on The Orboretum website.
