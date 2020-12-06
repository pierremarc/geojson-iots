(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "io-ts", "../src"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.myFeatureGood = exports.myFeatureBad = exports.MyFeatureType = exports.MyPropType = exports.featureBad = exports.featureGood = exports.geojsonMissingProperties = exports.geojsonLine = void 0;
    const io = require("io-ts");
    const src_1 = require("../src");
    exports.geojsonLine = {
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
    exports.geojsonMissingProperties = {
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
    exports.featureGood = {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [0, 0],
        },
        properties: null,
    };
    exports.featureBad = {
        type: 'Feature',
        geometry: {
            type: 'Feature',
            coordinates: [0, 0],
        },
        properties: null,
    };
    exports.MyPropType = io.interface({
        a: io.string,
        b: io.number,
    });
    exports.MyFeatureType = src_1.PartialFeatureIO(exports.MyPropType, 'MyFeatureType');
    exports.myFeatureBad = {
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
    exports.myFeatureGood = {
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
    const good = (msg) => () => console.log(`GOOD ${msg}`);
    const bad = (msg) => () => { throw (new Error(`BAD ${msg}`)); };
    src_1.FeatureCollectionIO.decode(exports.geojsonLine).fold(bad('Line did not validate but it should'), good('geojsonLine validates as it should'));
    src_1.FeatureCollectionIO.decode(exports.geojsonMissingProperties).fold(good('geojsonMissingProperties fails to validate as it should'), bad('missingProperties should not validate but it did'));
    src_1.FeatureIO.decode(exports.featureGood).fold(bad('featureGood should validate'), good('featureGood validates as it should'));
    src_1.FeatureIO.decode(exports.featureBad).fold(good('featureBad fails to validate as it should'), bad('featureBad should not validate'));
    exports.MyFeatureType.decode(exports.myFeatureGood).fold(bad('myFeatureGood should validate'), good('myFeatureGood validates as it should'));
    exports.MyFeatureType.decode(exports.myFeatureBad).fold(good('myFeatureBad fails to validate as it should'), bad('myFeatureBad should not validate'));
});
//# sourceMappingURL=index.js.map