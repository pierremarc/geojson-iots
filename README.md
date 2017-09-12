# geojson-iots
Runtime types for GeoJSON as defined in [rfc7946](https://tools.ietf.org/html/rfc7946) made with [io-ts](https://github.com/gcanti/io-ts).

## install

```
npm install geojson-iots
```

## use

```ts
import * as io from 'io-ts';
import {FeatureCollectionIO, FeatureCollection} from 'geojson-iots';

const failure = () => {throw (new Error('Failed'));};
const success = <T>(a:T) => a;

const someGeoJSON: any= {/* data to be checked */};

const data: FeatureCollection = io.validate(someGeoJSON, FeatureCollectionIO).fold(failure, success);
```

## note

This module defines the following runtime types

```
DirecGeometryTypeIO
GeometryTypeIO
GeoJsonTypeIO
GeoJsonObjectIO
PositionIO
DirectGeometryObjectIO
GeometryObjectIO
PointIO
MultiPointIO
LineStringIO
MultiLineStringIO
PolygonIO
MultiPolygonIO
FeatureIO
FeatureCollectionIO
PropertiesIO
```

Their resulting Typescript types are of the same name minus the "IO" suffix.


# todo

It'd be useful to validate feature properties with a type parameter. Something like:
```ts

const PropTypeIO = io.interface({
    color: io.string,
    timestamp: io.number,
});

const MyTypeIO = FeatureCollectionIO(PropTypeIO);

io.validate({/* any */}, MyTypeIO);
```

Done with ```PartialFeatureIO```, but not used yet so I keep it here in the todo list. From the test file:
```ts
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

io.validate(myFeatureGood, MyFeatureType).fold(
    bad('myFeatureGood should validate'),
    good('myFeatureGood validates as it should'),
);

io.validate(myFeatureBad, MyFeatureType).fold(
    good('myFeatureBad fails to validate as it should'),
    bad('myFeatureBad should not validate'),
);
// logs
// GOOD myFeatureGood validates as it should
// GOOD myFeatureBad fails to validate as it should

```
