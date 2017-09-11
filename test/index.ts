
import * as io from 'io-ts';
import { Feature, FeatureCollectionIO, FeatureIO } from '../src';

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


export const f: Feature = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [0, 0],
    },
    properties: null,
};


const good = <T>(a: T) => a;
const bad = (msg: string) => () => { throw (new Error(msg)); };

export const line = io.validate(geojsonLine, FeatureCollectionIO).fold(
    bad('Line did not validate but it should'),
    good,
);

export const missingProperties = io.validate(geojsonMissingProperties, FeatureCollectionIO).fold(
    good,
    bad('missingProperties should not validate but it did'),
);

export const feature = io.validate(f, FeatureIO).fold(
    bad('Should validate'),
    good,
);
