import * as io from 'io-ts';
import { Feature } from '../src';
export declare const geojsonLine: any;
export declare const geojsonMissingProperties: any;
export declare const featureGood: Feature;
export declare const featureBad: any;
export declare const MyPropType: io.InterfaceType<{
    a: io.StringType;
    b: io.NumberType;
}>;
export declare const MyFeatureType: io.IntersectionType<[io.InterfaceType<{
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
    properties: io.Type<io.InterfaceOf<{
        a: io.StringType;
        b: io.NumberType;
    }>>;
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
    properties: io.Type<io.InterfaceOf<{
        a: io.StringType;
        b: io.NumberType;
    }>>;
}> & io.PartialOf<{
    id: io.UnionType<[io.StringType, io.NumberType], string | number>;
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}>>;
export declare type MFT = io.TypeOf<typeof MyFeatureType>;
export declare const myFeatureBad: any;
export declare const myFeatureGood: MFT;
