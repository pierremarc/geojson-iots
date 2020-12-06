import * as io from 'io-ts';
import { Feature } from '../src';
export declare const geojsonLine: any;
export declare const geojsonMissingProperties: any;
export declare const featureGood: Feature;
export declare const featureBad: any;
export declare const MyPropType: io.TypeC<{
    a: io.StringC;
    b: io.NumberC;
}>;
export declare const MyFeatureType: io.IntersectionC<[io.TypeC<{
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
    properties: io.Type<{
        a: string;
        b: number;
    }, {
        a: string;
        b: number;
    }, unknown>;
}>, io.PartialC<{
    id: io.UnionC<[io.StringC, io.NumberC]>;
    bbox: io.UnionC<[io.ArrayC<io.ArrayC<io.NumberC>>, io.ArrayC<io.ArrayC<io.ArrayC<io.NumberC>>>]>;
}>]>;
export declare type MFT = io.TypeOf<typeof MyFeatureType>;
export declare const myFeatureBad: any;
export declare const myFeatureGood: MFT;
