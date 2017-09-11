// tslint:disable:variable-name
import * as io from 'io-ts';

export const i = io.interface;
export const u = io.union;
export const l = io.literal;
export const a = io.array;
export const t = io.tuple;
export const p = io.partial;

/**
 * https://tools.ietf.org/html/rfc7946#section-1.4
 */
export const DirectGeometryTypeIO = u([
    l('Point'),
    l('Polygon'),
    l('LineString'),
    l('MultiPoint'),
    l('MultiPolygon'),
    l('MultiLineString'),
], 'DirectGeometryTypeIO');

export const GeometryCollectionTypeIO = l('GeometryCollection', 'GeometryCollectionTypeIO');

export const GeometryTypeIO = u([
    DirectGeometryTypeIO,
    GeometryCollectionTypeIO,
], 'GeometryTypeIO');

export const GeoJsonTypeIO = u([
    GeometryTypeIO,
    u([
        l('Feature'),
        l('FeatureCollection'),
    ]),
], 'GeoJsonTypeIO');

/**
 * https://tools.ietf.org/html/rfc7946#section-5
 * 
 * I leave it un-done for the moment as I won't use it here.
 * Would need specific validate
 */
export const BoundingBoxIO = u([a(a(io.number)), a(a(a(io.number)))], 'BoundingBoxIO');


/***
* https://tools.ietf.org/html/rfc7946#section-3
*/
export const GeoJsonObjectIO = io.intersection([
    i({
        type: GeoJsonTypeIO,
    }),
    p({
        bbox: BoundingBoxIO,
    }),
], 'GeoJsonObjectIO');

/***
* https://tools.ietf.org/html/rfc7946#section-3.1.1
*/
export const PositionIO = a(io.number, 'PositionIO');

export const CoordinatesIO = u([
    PositionIO,
    a(PositionIO),
    a(a(PositionIO)),
    a(a(a(PositionIO))),
], 'CoordinatesIO');

/***
* https://tools.ietf.org/html/rfc7946#section-3.1
*/
export const DirectGeometryObjectIO = io.intersection([
    GeoJsonObjectIO,
    i({
        type: DirectGeometryTypeIO,
        coordinates: CoordinatesIO,
    }),
], 'DirectGeometryObjectIO');



/***
* https://tools.ietf.org/html/rfc7946#section-3.1.2
*/
export const PointIO = io.intersection([
    DirectGeometryObjectIO,
    i({
        type: l('Point'),
        coordinates: PositionIO,
    }),
], 'PointIO');

/***
* https://tools.ietf.org/html/rfc7946#section-3.1.3
*/
export const MultiPointIO = io.intersection([
    DirectGeometryObjectIO,
    i({
        type: l('MultiPoint'),
        coordinates: a(PositionIO),
    }),
], 'MultiPointIO');

/***
* https://tools.ietf.org/html/rfc7946#section-3.1.4
*/
export const LineStringIO = io.intersection([
    DirectGeometryObjectIO,
    i({
        type: l('LineString'),
        coordinates: a(PositionIO),
    }),
], 'LineStringIO');

/***
* https://tools.ietf.org/html/rfc7946#section-3.1.5
*/
export const MultiLineStringIO = io.intersection([
    DirectGeometryObjectIO,
    i({
        type: l('MultiLineString'),
        coordinates: a(a(PositionIO)),
    }),
], 'MultiLineStringIO');

/***
* https://tools.ietf.org/html/rfc7946#section-3.1.6
*/
export const PolygonIO = io.intersection([
    DirectGeometryObjectIO,
    i({
        type: l('Polygon'),
        coordinates: a(a(PositionIO)),
    }),
], 'PolygonIO');

/***
* https://tools.ietf.org/html/rfc7946#section-3.1.7
*/
export const MultiPolygonIO = io.intersection([
    DirectGeometryObjectIO,
    i({
        type: l('MultiPolygon'),
        coordinates: a(a(a(PositionIO))),
    }),
], 'MultiPolygonIO');

/***
* https://tools.ietf.org/html/rfc7946#section-3.1.8
* 
* Because of difficulty to express nested types here and the RFC states that:
* "To maximize interoperability, implementations SHOULD avoid nested
   GeometryCollections"
* We do not implement nested collections.
*/
export const GeometryCollectionIO = io.intersection([
    i({
        type: l('GeometryCollection'),
        geometries: a(DirectGeometryObjectIO),
    }),
    p({
        bbox: BoundingBoxIO,
    }),
]);


export const GeometryObjectIO = u([
    DirectGeometryObjectIO,
    GeometryCollectionIO,
], 'GeometryObjectIO');


/***
* https://tools.ietf.org/html/rfc7946#section-3.2
*/
export const PropertiesIO = u([io.dictionary(io.string, io.any), io.null], 'PropertiesIO');

export const FeatureIO = io.intersection([
    GeoJsonObjectIO,
    i({
        type: l('Feature'),
        geometry: u([GeometryObjectIO, io.null]),
        properties: PropertiesIO,
    }),
    p({
        id: u([io.string, io.number]),
    }),
], 'FeatureIO');

/***
* https://tools.ietf.org/html/rfc7946#section-3.3
*/
export const FeatureCollectionIO = io.intersection([
    GeoJsonObjectIO,
    i({
        type: l('FeatureCollection'),
        features: a(FeatureIO),
    }),
], 'FeatureCollectionIO');



export type DirecGeometryType = io.TypeOf<typeof DirectGeometryTypeIO>;
export type GeometryType = io.TypeOf<typeof GeometryTypeIO>;
export type GeoJsonType = io.TypeOf<typeof GeoJsonTypeIO>;
export type GeoJsonObject = io.TypeOf<typeof GeoJsonObjectIO>;
export type Position = io.TypeOf<typeof PositionIO>;
export type DirectGeometryObject = io.TypeOf<typeof DirectGeometryObjectIO>;
export type GeometryObject = io.TypeOf<typeof GeometryObjectIO>;
export type Point = io.TypeOf<typeof PointIO>;
export type MultiPoint = io.TypeOf<typeof MultiPointIO>;
export type LineString = io.TypeOf<typeof LineStringIO>;
export type MultiLineString = io.TypeOf<typeof MultiLineStringIO>;
export type Polygon = io.TypeOf<typeof PolygonIO>;
export type MultiPolygon = io.TypeOf<typeof MultiPolygonIO>;
export type Feature = io.TypeOf<typeof FeatureIO>;
export type FeatureCollection = io.TypeOf<typeof FeatureCollectionIO>;
export type Properties = io.TypeOf<typeof PropertiesIO>;

