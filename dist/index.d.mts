import * as geojson from 'geojson';
import { Geometry, Polygon, MultiPolygon, GeometryCollection, Point } from 'geojson';
import * as kysely from 'kysely';
import { ExpressionBuilder, ReferenceExpression } from 'kysely';

type SRID = number;

interface Options {
    validate: boolean;
    additionalParameters: any[];
}
interface OptionsAsGeoJSON extends Options {
    maxDecimalDigits?: number;
    options?: number;
}
declare function asGeoJSON<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, column: ReferenceExpression<DB, TB>, options?: Partial<OptionsAsGeoJSON>): kysely.ExpressionWrapper<DB, TB, string>;
interface OptionsFromGeoText extends Options {
    srid?: SRID;
}
declare function geomFromGeoJSON<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, value: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function geomFromText<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, value: string, options?: Partial<OptionsFromGeoText>): kysely.ExpressionWrapper<DB, TB, string>;
interface OptionsArea extends Options {
    useSpheroid?: boolean;
}
declare function area<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, value: Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<OptionsArea>): kysely.ExpressionWrapper<DB, TB, string>;
declare function asText<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, column: ReferenceExpression<DB, TB>): kysely.ExpressionWrapper<DB, TB, string>;
declare function boundary<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, value: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function buffer<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, value: Geometry | ReferenceExpression<DB, TB>, radius: number, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function centroid<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, value: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function contains<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function covers<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function crosses<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function dWithin<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Geometry | ReferenceExpression<DB, TB>, geomB: Geometry | ReferenceExpression<DB, TB>, distance: number, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function difference<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function disjoint<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function distance<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, number>;
declare function distanceSphere<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Point | ReferenceExpression<DB, TB>, geomB: Point | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, number>;
declare function equals<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function expand<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, value: Geometry | ReferenceExpression<DB, TB>, unitsToExpand: number, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function geoHash<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, value: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function intersection<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function intersects<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function isValid<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function makeValid<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function maxDistance<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, number>;
declare function overlaps<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function srid<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, number>;
declare function scale<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, xFactor: number, yFactor: number, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function segmentize<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, maxLength: number, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function setSRID<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, srid: SRID, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function simplify<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, tolerance: number, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function simplifyPreserveTopology<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, tolerance: number, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function transform<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, srid: SRID, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function translate<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, deltaX: number, deltaY: number, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function union<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB?: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, string>;
declare function within<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geomA: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, geomB: Exclude<Geometry, GeometryCollection> | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, boolean>;
declare function x<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, number>;
declare function y<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, number>;
declare function z<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, number>;
declare function m<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>, geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options>): kysely.ExpressionWrapper<DB, TB, number>;
declare function stf<DB, TB extends keyof DB>(eb: ExpressionBuilder<DB, TB>): {
    asGeoJSON: (column: ReferenceExpression<DB, TB>, options?: Partial<OptionsAsGeoJSON> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    geomFromGeoJSON: (value: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    geomFromText: (value: string, options?: Partial<OptionsFromGeoText> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    area: (value: Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<OptionsArea> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    asText: (column: ReferenceExpression<DB, TB>) => kysely.ExpressionWrapper<DB, TB, string>;
    boundary: (value: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    buffer: (value: Geometry | ReferenceExpression<DB, TB>, radius: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    centroid: (value: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    contains: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    covers: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    crosses: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    dWithin: (geomA: Geometry | ReferenceExpression<DB, TB>, geomB: Geometry | ReferenceExpression<DB, TB>, distance: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    difference: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    disjoint: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    distance: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, number>;
    distanceSphere: (geomA: Point | ReferenceExpression<DB, TB>, geomB: Point | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, number>;
    equals: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    expand: (value: Geometry | ReferenceExpression<DB, TB>, unitsToExpand: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    geoHash: (value: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    intersection: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    intersects: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    isValid: (geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    makeValid: (geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    maxDistance: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, number>;
    overlaps: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    srid: (geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, number>;
    scale: (geom: Geometry | ReferenceExpression<DB, TB>, xFactor: number, yFactor: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    segmentize: (geom: Geometry | ReferenceExpression<DB, TB>, maxLength: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    setSRID: (geom: Geometry | ReferenceExpression<DB, TB>, srid: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    simplify: (geom: Geometry | ReferenceExpression<DB, TB>, tolerance: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    simplifyPreserveTopology: (geom: Geometry | ReferenceExpression<DB, TB>, tolerance: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    transform: (geom: Geometry | ReferenceExpression<DB, TB>, srid: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    translate: (geom: Geometry | ReferenceExpression<DB, TB>, deltaX: number, deltaY: number, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    union: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB?: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB> | undefined, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, string>;
    within: (geomA: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, geomB: Point | geojson.MultiPoint | geojson.LineString | geojson.MultiLineString | Polygon | MultiPolygon | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, boolean>;
    x: (geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, number>;
    y: (geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, number>;
    z: (geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, number>;
    m: (geom: Geometry | ReferenceExpression<DB, TB>, options?: Partial<Options> | undefined) => kysely.ExpressionWrapper<DB, TB, number>;
};

declare let defaultOptions: Options;
declare function setDefaultOptions(options: Partial<Options>): void;

export { type Options, type OptionsArea, type OptionsAsGeoJSON, type OptionsFromGeoText, area, asGeoJSON, asText, boundary, buffer, centroid, contains, covers, crosses, dWithin, defaultOptions, difference, disjoint, distance, distanceSphere, equals, expand, geoHash, geomFromGeoJSON, geomFromText, intersection, intersects, isValid, m, makeValid, maxDistance, overlaps, scale, segmentize, setDefaultOptions, setSRID, simplify, simplifyPreserveTopology, srid, stf, transform, translate, union, within, x, y, z };
