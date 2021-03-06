import * as io from 'io-ts';
export declare const i: <P extends io.Props>(props: P, name?: string | undefined) => io.TypeC<P>;
export declare const u: <CS extends [io.Mixed, io.Mixed, ...io.Mixed[]]>(codecs: CS, name?: string | undefined) => io.UnionC<CS>;
export declare const l: <V extends string | number | boolean>(value: V, name?: string | undefined) => io.LiteralC<V>;
export declare const a: <C extends io.Mixed>(codec: C, name?: string | undefined) => io.ArrayC<C>;
export declare const t: typeof io.tuple;
export declare const p: <P extends io.Props>(props: P, name?: string | undefined) => io.PartialC<P>;
export declare const DirectGeometryTypeIO: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
export declare const GeometryCollectionTypeIO: io.LiteralC<"GeometryCollection">;
export declare const GeometryTypeIO: io.UnionC<[io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>, io.LiteralC<"GeometryCollection">]>;
export declare const GeoJsonTypeIO: io.UnionC<[io.UnionC<[io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>, io.LiteralC<"GeometryCollection">]>, io.UnionC<[io.LiteralC<"Feature">, io.LiteralC<"FeatureCollection">]>]>;
export declare const BoundingBoxIO: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
export declare const GeoJsonObjectIO: io.IntersectionC<[io.TypeC<{
    type: io.UnionC<[io.UnionC<[io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>, io.LiteralC<"GeometryCollection">]>, io.UnionC<[io.LiteralC<"Feature">, io.LiteralC<"FeatureCollection">]>]>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const PositionIO: io.ArrayC<io.NumberC>;
export declare const CoordinatesIO: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
export declare const DirectGeometryObjectIO: io.IntersectionC<[io.TypeC<{
    type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
    coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const PointIO: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"Point">;
    coordinates: io.ArrayC<io.NumberC>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const MultiPointIO: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"MultiPoint">;
    coordinates: io.ArrayC<io.ArrayC<io.NumberC>>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const LineStringIO: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"LineString">;
    coordinates: io.ArrayC<io.ArrayC<io.NumberC>>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const MultiLineStringIO: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"MultiLineString">;
    coordinates: io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const PolygonIO: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"Polygon">;
    coordinates: io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const MultiPolygonIO: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"MultiPolygon">;
    coordinates: io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const GeometryCollectionIO: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"GeometryCollection">;
    geometries: io.ArrayC<io.IntersectionC<[io.TypeC<{
        type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
        coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
    }>, io.PartialC<{
        bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
    }>]>>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const GeometryObjectIO: io.UnionC<[io.IntersectionC<[io.TypeC<{
    type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
    coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>, io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"GeometryCollection">;
    geometries: io.ArrayC<io.IntersectionC<[io.TypeC<{
        type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
        coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
    }>, io.PartialC<{
        bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
    }>]>>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>]>;
export declare const PropertiesIO: io.UnionC<[io.RecordC<io.StringC, io.AnyC>, io.NullC]>;
export declare const FeatureIO: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"Feature">;
    geometry: io.UnionC<[io.UnionC<[io.IntersectionC<[io.TypeC<{
        type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
        coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
    }>, io.PartialC<{
        bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
    }>]>, io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"GeometryCollection">;
        geometries: io.ArrayC<io.IntersectionC<[io.TypeC<{
            type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
            coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
        }>, io.PartialC<{
            bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
        }>]>>;
    }>, io.PartialC<{
        bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
    }>]>]>, io.NullC]>;
    properties: io.UnionC<[io.RecordC<io.StringC, io.AnyC>, io.NullC]>;
}>, io.PartialC<{
    id: io.UnionC<[io.StringC, io.NumberC]>;
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const PartialFeatureIO: <T>(propType: io.Type<T, T, unknown>, name: string) => io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"Feature">;
    geometry: io.UnionC<[io.UnionC<[io.IntersectionC<[io.TypeC<{
        type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
        coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
    }>, io.PartialC<{
        bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
    }>]>, io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"GeometryCollection">;
        geometries: io.ArrayC<io.IntersectionC<[io.TypeC<{
            type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
            coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
        }>, io.PartialC<{
            bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
        }>]>>;
    }>, io.PartialC<{
        bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
    }>]>]>, io.NullC]>;
    properties: io.Type<T, T, unknown>;
}>, io.PartialC<{
    id: io.UnionC<[io.StringC, io.NumberC]>;
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare const FeatureCollectionIO: io.IntersectionC<[io.TypeC<{
    type: io.LiteralC<"FeatureCollection">;
    features: io.ArrayC<io.IntersectionC<[io.TypeC<{
        type: io.LiteralC<"Feature">;
        geometry: io.UnionC<[io.UnionC<[io.IntersectionC<[io.TypeC<{
            type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
            coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
        }>, io.PartialC<{
            bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
        }>]>, io.IntersectionC<[io.TypeC<{
            type: io.LiteralC<"GeometryCollection">;
            geometries: io.ArrayC<io.IntersectionC<[io.TypeC<{
                type: io.UnionC<[io.LiteralC<"Point">, io.LiteralC<"Polygon">, io.LiteralC<"LineString">, io.LiteralC<"MultiPoint">, io.LiteralC<"MultiPolygon">, io.LiteralC<"MultiLineString">]>;
                coordinates: io.UnionC<[io.ArrayC<io.NumberC>, io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>, io.ArrayC<io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>>]>;
            }>, io.PartialC<{
                bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
            }>]>>;
        }>, io.PartialC<{
            bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
        }>]>]>, io.NullC]>;
        properties: io.UnionC<[io.RecordC<io.StringC, io.AnyC>, io.NullC]>;
    }>, io.PartialC<{
        id: io.UnionC<[io.StringC, io.NumberC]>;
        bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
    }>]>>;
}>, io.PartialC<{
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare type DirecGeometryType = io.TypeOf<typeof DirectGeometryTypeIO>;
export declare type GeometryType = io.TypeOf<typeof GeometryTypeIO>;
export declare type GeoJsonType = io.TypeOf<typeof GeoJsonTypeIO>;
export declare type GeoJsonObject = io.TypeOf<typeof GeoJsonObjectIO>;
export declare type Position = io.TypeOf<typeof PositionIO>;
export declare type DirectGeometryObject = io.TypeOf<typeof DirectGeometryObjectIO>;
export declare type GeometryObject = io.TypeOf<typeof GeometryObjectIO>;
export declare type Point = io.TypeOf<typeof PointIO>;
export declare type MultiPoint = io.TypeOf<typeof MultiPointIO>;
export declare type LineString = io.TypeOf<typeof LineStringIO>;
export declare type MultiLineString = io.TypeOf<typeof MultiLineStringIO>;
export declare type Polygon = io.TypeOf<typeof PolygonIO>;
export declare type MultiPolygon = io.TypeOf<typeof MultiPolygonIO>;
export declare type Feature = io.TypeOf<typeof FeatureIO>;
export declare type FeatureCollection = io.TypeOf<typeof FeatureCollectionIO>;
export declare type Properties = io.TypeOf<typeof PropertiesIO>;
