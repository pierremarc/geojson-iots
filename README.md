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
