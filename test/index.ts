
import * as io from 'io-ts';
import { Feature, FeatureCollectionIO, FeatureIO, PartialFeatureIO } from '../src';

export const geojsonLine: any = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [
                        -54.4921875,
                        39.36827914916014,
                    ],
                    [
                        18.984375,
                        59.712097173322924,
                    ],
                    [
                        33.3984375,
                        1.4061088354351594,
                    ],
                    [
                        -36.9140625,
                        12.211180191503997,
                    ],
                    [
                        -54.140625,
                        37.71859032558816,
                    ],
                    [
                        82.265625,
                        -10.833305983642491,
                    ],
                ],
            },
        },
    ],
};

export const geojsonMissingProperties: any = {
    'type': 'FeatureCollection',
    'features': [{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [0, 0],
        },
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'LineString',
            'coordinates': [[4e6, -2e6], [8e6, 2e6]],
        },
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'LineString',
            'coordinates': [[4e6, 2e6], [8e6, -2e6]],
        },
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Polygon',
            'coordinates': [[[-5e6, -1e6], [-4e6, 1e6], [-3e6, -1e6]]],
        },
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'MultiLineString',
            'coordinates': [
                [[-1e6, -7.5e5], [-1e6, 7.5e5]],
                [[1e6, -7.5e5], [1e6, 7.5e5]],
                [[-7.5e5, -1e6], [7.5e5, -1e6]],
                [[-7.5e5, 1e6], [7.5e5, 1e6]],
            ],
        },
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'MultiPolygon',
            'coordinates': [
                [[[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6], [-3e6, 6e6]]],
                [[[-2e6, 6e6], [-2e6, 8e6], [0, 8e6], [0, 6e6]]],
                [[[1e6, 6e6], [1e6, 8e6], [3e6, 8e6], [3e6, 6e6]]],
            ],
        },
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'GeometryCollection',
            'geometries': [{
                'type': 'LineString',
                'coordinates': [[-5e6, -5e6], [0, -5e6]],
            }, {
                'type': 'Point',
                'coordinates': [4e6, -5e6],
            }, {
                'type': 'Polygon',
                'coordinates': [[[1e6, -6e6], [2e6, -4e6], [3e6, -6e6]]],
            }],
        },
    }],
};


export const featureGood: Feature = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [0, 0],
    },
    properties: null,
};

export const featureBad: any = {
    type: 'Feature',
    geometry: {
        type: 'Feature',
        coordinates: [0, 0],
    },
    properties: null,
};


export const MyPropType = io.interface({
    a: io.string,
    b: io.number,
});

export const MyFeatureType = PartialFeatureIO(MyPropType, 'MyFeatureType');
export type MFT = io.TypeOf<typeof MyFeatureType>;

export const myFeatureBad: any = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [0, 0],
    },
    properties: {
        a: 1,
        b: 'a',
    },
};
export const myFeatureGood: MFT = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [0, 0],
    },
    properties: {
        a: 'a',
        b: 1,
    },
};


const good = (msg: string) => () => console.log(`GOOD ${msg}`);
const bad = (msg: string) => () => { throw (new Error(`BAD ${msg}`)); };

FeatureCollectionIO.decode(geojsonLine).fold(
    bad('Line did not validate but it should'),
    good('geojsonLine validates as it should'),
);

FeatureCollectionIO.decode(geojsonMissingProperties).fold(
    good('geojsonMissingProperties fails to validate as it should'),
    bad('missingProperties should not validate but it did'),
);

FeatureIO.decode(featureGood).fold(
    bad('featureGood should validate'),
    good('featureGood validates as it should'),
);

FeatureIO.decode(featureBad).fold(
    good('featureBad fails to validate as it should'),
    bad('featureBad should not validate'),
);

MyFeatureType.decode(myFeatureGood).fold(
    bad('myFeatureGood should validate'),
    good('myFeatureGood validates as it should'),
);

MyFeatureType.decode(myFeatureBad).fold(
    good('myFeatureBad fails to validate as it should'),
    bad('myFeatureBad should not validate'),
);

