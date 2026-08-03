# Points of Interest (POIs) Template

Add visitor facilities, parking, entrances, landmarks, and other important locations.

## Format (CSV)

```
name,type,latitude,longitude,description,amenities
Parking Lot,parking,42.883647,-74.441161,Main parking across street,restrooms;trash
Trail Entrance,entrance,42.884019,-74.440925,Primary trail start,kiosk;map
Picnic Area,rest_area,42.887513,-74.434961,Shaded rest spot,bench;table
Creek Overlook,landmark,42.886861,-74.434465,View of Yatesville Creek,bench;interpretive sign
```

## Or as Markdown

```
## Parking Lot
- **Type:** Parking
- **Coordinates:** 42.883647, -74.441161
- **Description:** Main parking across the street in tennis/basketball court lot
- **Amenities:** Restrooms, trash bins
- **Accessible:** Yes
- **Capacity:** ~20 spaces

## Trail Entrance
- **Type:** Entrance
- **Coordinates:** 42.884019, -74.440925
- **Description:** Primary trail start point
- **Amenities:** Trail map kiosk, interpretive signage
- **Accessible:** Yes
- **Hours:** Sunrise to sunset

## Picnic Area
- **Type:** Rest Area
- **Coordinates:** 42.887513,-74.434961
- **Description:** Shaded rest spot along main trail
- **Amenities:** Bench, picnic table
- **Water:** No
```

## POI Types

- `parking` - Parking areas
- `entrance` - Trail entrances/exits
- `rest_area` - Benches, picnic areas
- `water` - Water sources, streams
- `landmark` - Notable features (vistas, old trees, etc.)
- `facility` - Restrooms, shelters, signage
- `historic` - Historical sites or markers
