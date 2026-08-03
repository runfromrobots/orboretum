# Plant Location Data Template

Add plant/tree locations with species and collection info.

## Format (CSV)

```
id,species_name,common_name,latitude,longitude,collection_category,planting_date,notes
1,Pinus strobus,Eastern White Pine,42.883647,-74.441161,native,2020-05-15,Large specimen near trail
2,Acer saccharum,Sugar Maple,42.884019,-74.440925,native,2019-03-20,Mature tree
3,Lilium,Japanese Lily,42.887513,-74.434961,heritage,1945-06-01,Maryanne Granger planting
```

## Or as Markdown (for manual entry)

```
## Eastern White Pine
- **Scientific Name:** Pinus strobus
- **Collection:** Native & Regionally Indigenous
- **Coordinates:** 42.883647, -74.441161
- **Planting Date:** 2020-05-15
- **Notes:** Large specimen, visible from main trail
- **Health:** Good

## Sugar Maple
- **Scientific Name:** Acer saccharum
- **Collection:** Native & Regionally Indigenous
- **Coordinates:** 42.884019, -74.440925
- **Planting Date:** 2019-03-20
- **Notes:** Mature tree, excellent fall color
- **Health:** Good
```

## Collection Categories

- `native` - Native & Regionally Indigenous Species
- `heritage` - Heritage & Historically Documented Cultivars
- `educational` - Educational & Interpretive Plantings
