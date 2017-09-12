import * as io from 'io-ts';
export declare const i: <P extends io.Props>(props: P, name?: string | undefined) => io.InterfaceType<P>;
export declare const u: <RTS extends [io.Type<any>]>(types: RTS, name?: string | undefined) => io.UnionType<RTS, RTS["_A"]["_A"]>;
export declare const l: <V extends string | number | boolean>(value: V, name?: string | undefined) => io.LiteralType<V>;
export declare const a: <RT extends io.Type<any>>(type: RT, name?: string | undefined) => io.ArrayType<RT>;
export declare const t: typeof io.tuple;
export declare const p: <P extends io.Props>(props: P, name?: string | undefined) => io.PartialType<P>;
export declare const DirectGeometryTypeIO: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
export declare const GeometryCollectionTypeIO: io.LiteralType<"GeometryCollection">;
export declare const GeometryTypeIO: io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">;
export declare const GeoJsonTypeIO: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
export declare const BoundingBoxIO: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
export declare const GeoJsonObjectIO: io.IntersectionType<[io.InterfaceType<{
    type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const PositionIO: io.ArrayType<io.NumberType>;
export declare const CoordinatesIO: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
export declare const DirectGeometryObjectIO: io.IntersectionType<[io.InterfaceType<{
    type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
    coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
    coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const PointIO: io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"Point">;
    coordinates: io.ArrayType<io.NumberType>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"Point">;
    coordinates: io.ArrayType<io.NumberType>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const MultiPointIO: io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"MultiPoint">;
    coordinates: io.ArrayType<io.ArrayType<io.NumberType>>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"MultiPoint">;
    coordinates: io.ArrayType<io.ArrayType<io.NumberType>>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const LineStringIO: io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"LineString">;
    coordinates: io.ArrayType<io.ArrayType<io.NumberType>>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"LineString">;
    coordinates: io.ArrayType<io.ArrayType<io.NumberType>>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const MultiLineStringIO: io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"MultiLineString">;
    coordinates: io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"MultiLineString">;
    coordinates: io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const PolygonIO: io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"Polygon">;
    coordinates: io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"Polygon">;
    coordinates: io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const MultiPolygonIO: io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"MultiPolygon">;
    coordinates: io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"MultiPolygon">;
    coordinates: io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const GeometryCollectionIO: io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"GeometryCollection">;
    geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"GeometryCollection">;
    geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const GeometryObjectIO: io.UnionType<[io.IntersectionType<[io.InterfaceType<{
    type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
    coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
    coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>, io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"GeometryCollection">;
    geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"GeometryCollection">;
    geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>], (io.InterfaceOf<{
    type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
    coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>) | (io.InterfaceOf<{
    type: io.LiteralType<"GeometryCollection">;
    geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>)>;
export declare const PropertiesIO: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
    [key: string]: any;
} | null>;
export declare const FeatureIO: io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"Feature">;
    geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>, io.IntersectionType<[io.InterfaceType<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>], (io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>)>, io.NullType], (io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | null>;
    properties: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
        [key: string]: any;
    } | null>;
}>, io.PartialType<{
    id: io.UnionType<[io.StringType, io.NumberType], string | number>;
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"Feature">;
    geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>, io.IntersectionType<[io.InterfaceType<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>], (io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>)>, io.NullType], (io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | null>;
    properties: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
        [key: string]: any;
    } | null>;
}> & io.PartialOf<{
    id: io.UnionType<[io.StringType, io.NumberType], string | number>;
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const PartialFeatureIO: <T>(propType: io.Type<T>, name: string) => io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"Feature">;
    geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>, io.IntersectionType<[io.InterfaceType<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>], (io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>)>, io.NullType], (io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | null>;
    properties: io.Type<T>;
}>, io.PartialType<{
    id: io.UnionType<[io.StringType, io.NumberType], string | number>;
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"Feature">;
    geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>, io.IntersectionType<[io.InterfaceType<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>], (io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>)>, io.NullType], (io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | null>;
    properties: io.Type<T>;
}> & io.PartialOf<{
    id: io.UnionType<[io.StringType, io.NumberType], string | number>;
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare const FeatureCollectionIO: io.IntersectionType<[io.InterfaceType<{
    type: io.LiteralType<"FeatureCollection">;
    features: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
        type: io.LiteralType<"Feature">;
        geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.IntersectionType<[io.InterfaceType<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>], (io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>)>, io.NullType], (io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | null>;
        properties: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
            [key: string]: any;
        } | null>;
    }>, io.PartialType<{
        id: io.UnionType<[io.StringType, io.NumberType], string | number>;
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.LiteralType<"Feature">;
        geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.IntersectionType<[io.InterfaceType<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>], (io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>)>, io.NullType], (io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | null>;
        properties: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
            [key: string]: any;
        } | null>;
    }> & io.PartialOf<{
        id: io.UnionType<[io.StringType, io.NumberType], string | number>;
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>>;
}>, io.PartialType<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>], io.InterfaceOf<{
    type: io.LiteralType<"FeatureCollection">;
    features: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
        type: io.LiteralType<"Feature">;
        geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.IntersectionType<[io.InterfaceType<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>], (io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>)>, io.NullType], (io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | null>;
        properties: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
            [key: string]: any;
        } | null>;
    }>, io.PartialType<{
        id: io.UnionType<[io.StringType, io.NumberType], string | number>;
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.LiteralType<"Feature">;
        geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.IntersectionType<[io.InterfaceType<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>], (io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>)>, io.NullType], (io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | null>;
        properties: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
            [key: string]: any;
        } | null>;
    }> & io.PartialOf<{
        id: io.UnionType<[io.StringType, io.NumberType], string | number>;
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>>;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
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
