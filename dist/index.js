"use strict";var De=Object.create;var c=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var ce=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty;var me=(e,o)=>{for(var r in o)c(e,r,{get:o[r],enumerable:!0})},S=(e,o,r,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of ue(o))!xe.call(e,n)&&n!==r&&c(e,n,{get:()=>o[n],enumerable:!(t=Te(o,n))||t.enumerable});return e};var de=(e,o,r)=>(r=e!=null?De(ce(e)):{},S(o||!e||!e.__esModule?c(r,"default",{value:e,enumerable:!0}):r,e)),ye=e=>S(c({},"__esModule",{value:!0}),e);var Oe={};me(Oe,{area:()=>g,asGeoJSON:()=>k,asText:()=>_,boundary:()=>v,buffer:()=>C,centroid:()=>N,contains:()=>w,covers:()=>J,crosses:()=>I,dWithin:()=>F,defaultOptions:()=>u,difference:()=>V,disjoint:()=>A,distance:()=>j,distanceSphere:()=>q,equals:()=>z,expand:()=>M,geoHash:()=>K,geomFromGeoJSON:()=>m,geomFromText:()=>W,intersection:()=>H,intersects:()=>$,isValid:()=>U,m:()=>fe,makePoint:()=>le,makeValid:()=>X,maxDistance:()=>Y,overlaps:()=>Z,scale:()=>Q,segmentize:()=>b,setDefaultOptions:()=>Pe,setSRID:()=>ee,simplify:()=>oe,simplifyPreserveTopology:()=>te,srid:()=>L,stf:()=>Ge,transform:()=>re,translate:()=>ne,union:()=>ie,within:()=>se,x:()=>Be,y:()=>ae,z:()=>pe});module.exports=ye(Oe);var a=require("kysely");var l=require("kysely"),G=de(require("wkx")),y=require("geojson-validation");function s(e){return Object.assign({},u,e)}function T(e){return e==null}function E(e){return typeof e=="string"}function P(e){return e?.isRawBuilder??!1}function O(e){return e instanceof l.ExpressionWrapper}function x(e){try{let o=E(e)?(0,y.isGeometryObject)(JSON.parse(e),!0):(0,y.isGeometryObject)(e,!0);if(o.length>0)throw new Error("Invalid GeoJSON geometry",{cause:o})}catch(o){throw new Error("Invalid GeoJSON geometry",{cause:o})}}function Ee(e){try{if(!G.Geometry.parse(e))throw new Error("Invalid WKT")}catch(o){throw new Error("Invalid WKT",{cause:o})}}function Se(e,o={}){let r=s(o);if(E(e)||P(e))return!1;if(O(e)){let t=e.toOperationNode();return l.ValueNode.is(t)?(r.validate&&x(t.value),!0):!1}return r.validate&&x(e),!0}function i(e,o,r={}){return Se(o,r)?m(e,o,r):o}function R(e,o={}){let r=s(o);if(E(e)||P(e))return e;if(O(e)){let t=e.toOperationNode();return l.ValueNode.is(t)&&r.validate&&x(t.value),e}return r.validate&&x(e),l.sql.val(JSON.stringify(e))}function h(e,o={}){return s(o).validate&&Ee(e),l.sql.val(e)}function B(e,o,r,t){return e.fn(o,[...r,...t.additionalParameters])}function f(e,o,r,t,n=[],p={}){let D=s(p);return B(e,o,[i(e,r,D),i(e,t,D),...n],D)}function k(e,o,r={}){let t=s(r),n=T(r.options)?[]:[a.sql.val(r.options)],p=n.length>0||!T(r.maxDecimalDigits)?[a.sql.val(t.maxDecimalDigits??9)]:[];return B(e,"ST_AsGeoJSON",[o,...p,...n],t)}function m(e,o,r={}){let t=s(r),n=R(o,t);return B(e,"ST_GeomFromGeoJSON",[n],t)}function W(e,o,r={}){let t=s(r),n=h(o,t);return B(e,"ST_GeomFromText",[n,...T(t.srid)?[]:[a.sql.val(t.srid)]],t)}function g(e,o,r={}){let t=s(r);return B(e,"ST_Area",[i(e,o,t),...T(t.useSpheroid)?[]:[a.sql.val(t.useSpheroid)]],t)}function _(e,o){return e.fn("ST_AsText",[o])}function v(e,o,r={}){let t=s(r);return B(e,"ST_Boundary",[i(e,o,t)],t)}function C(e,o,r,t={}){let n=s(t);return B(e,"ST_Buffer",[i(e,o,n),a.sql.val(r)],n)}function N(e,o,r={}){let t=s(r);return B(e,"ST_Centroid",[i(e,o,t)],t)}function w(e,o,r,t={}){return f(e,"ST_Contains",o,r,[],t)}function J(e,o,r,t={}){return f(e,"ST_Covers",o,r,[],t)}function I(e,o,r,t={}){return f(e,"ST_Crosses",o,r,[],t)}function F(e,o,r,t,n={}){return f(e,"ST_DWithin",o,r,[a.sql.val(t)],n)}function V(e,o,r,t={}){let n=s(t);return B(e,"ST_Difference",[i(e,o,n),i(e,r,n)],n)}function A(e,o,r,t={}){return f(e,"ST_Disjoint",o,r,[],t)}function j(e,o,r,t={}){let n=s(t);return B(e,"ST_Distance",[i(e,o,n),i(e,r,n)],n)}function q(e,o,r,t={}){let n=s(t);return B(e,"ST_DistanceSphere",[i(e,o,n),i(e,r,n)],n)}function z(e,o,r,t={}){return f(e,"ST_Equals",o,r,[],t)}function M(e,o,r,t={}){let n=s(t);return B(e,"ST_Expand",[i(e,o,n),a.sql.val(r)],n)}function K(e,o,r={}){let t=s(r);return B(e,"ST_GeoHash",[i(e,o,t)],t)}function H(e,o,r,t={}){let n=s(t);return B(e,"ST_Intersection",[i(e,o,n),i(e,r,n)],n)}function $(e,o,r,t={}){return f(e,"ST_Intersects",o,r,[],t)}function U(e,o,r={}){let t=s(r);return B(e,"ST_IsValid",[i(e,o,t)],t)}function X(e,o,r={}){let t=s(r);return B(e,"ST_MakeValid",[i(e,o,t)],t)}function Y(e,o,r,t={}){let n=s(t);return B(e,"ST_MaxDistance",[i(e,o,n),i(e,r,n)],n)}function Z(e,o,r,t={}){return f(e,"ST_Overlaps",o,r,[],t)}function L(e,o,r={}){let t=s(r);return B(e,"ST_SRID",[i(e,o,t)],t)}function Q(e,o,r,t,n={}){let p=s(n);return B(e,"ST_Scale",[i(e,o,p),a.sql.val(r),a.sql.val(t)],p)}function b(e,o,r,t={}){let n=s(t);return B(e,"ST_Segmentize",[i(e,o,n),a.sql.val(r)],n)}function ee(e,o,r,t={}){let n=s(t);return B(e,"ST_SetSRID",[i(e,o,n),a.sql.val(r)],n)}function oe(e,o,r,t={}){let n=s(t);return B(e,"ST_Simplify",[i(e,o,n),a.sql.val(r)],n)}function te(e,o,r,t={}){let n=s(t);return B(e,"ST_SimplifyPreserveTopology",[i(e,o,n),a.sql.val(r)],n)}function re(e,o,r,t={}){let n=s(t);return B(e,"ST_Transform",[i(e,o,n),a.sql.raw(`${parseInt(`${r}`)}::int`)],n)}function ne(e,o,r,t,n={}){let p=s(n);return B(e,"ST_Translate",[i(e,o,p),a.sql.val(r),a.sql.val(t)],p)}function ie(e,o,r,t={}){let n=s(t);return B(e,"ST_Union",[i(e,o,n),...r?[i(e,r,n)]:[]],n)}function se(e,o,r,t={}){return f(e,"ST_Within",o,r,[],t)}function Be(e,o,r={}){let t=s(r);return B(e,"ST_X",[i(e,o,t)],t)}function ae(e,o,r={}){let t=s(r);return B(e,"ST_Y",[i(e,o,t)],t)}function pe(e,o,r={}){let t=s(r);return B(e,"ST_Z",[i(e,o,t)],t)}function fe(e,o,r={}){let t=s(r);return B(e,"ST_M",[i(e,o,t)],t)}function le(e,o,r,t,n,p={}){let D=s(p),d=[a.sql.val(o),a.sql.val(r)];return t!==void 0&&d.push(a.sql.val(t)),n!==void 0&&d.push(a.sql.val(n)),B(e,"ST_MakePoint",d,D)}function Ge(e){return{asGeoJSON:(...o)=>k(e,...o),geomFromGeoJSON:(...o)=>m(e,...o),geomFromText:(...o)=>W(e,...o),area:(...o)=>g(e,...o),asText:(...o)=>_(e,...o),boundary:(...o)=>v(e,...o),buffer:(...o)=>C(e,...o),centroid:(...o)=>N(e,...o),contains:(...o)=>w(e,...o),covers:(...o)=>J(e,...o),crosses:(...o)=>I(e,...o),dWithin:(...o)=>F(e,...o),difference:(...o)=>V(e,...o),disjoint:(...o)=>A(e,...o),distance:(...o)=>j(e,...o),distanceSphere:(...o)=>q(e,...o),equals:(...o)=>z(e,...o),expand:(...o)=>M(e,...o),geoHash:(...o)=>K(e,...o),intersection:(...o)=>H(e,...o),intersects:(...o)=>$(e,...o),isValid:(...o)=>U(e,...o),makeValid:(...o)=>X(e,...o),maxDistance:(...o)=>Y(e,...o),overlaps:(...o)=>Z(e,...o),srid:(...o)=>L(e,...o),scale:(...o)=>Q(e,...o),segmentize:(...o)=>b(e,...o),setSRID:(...o)=>ee(e,...o),simplify:(...o)=>oe(e,...o),simplifyPreserveTopology:(...o)=>te(e,...o),transform:(...o)=>re(e,...o),translate:(...o)=>ne(e,...o),union:(...o)=>ie(e,...o),within:(...o)=>se(e,...o),x:(...o)=>Be(e,...o),y:(...o)=>ae(e,...o),z:(...o)=>pe(e,...o),m:(...o)=>fe(e,...o),makePoint:(...o)=>le(e,...o)}}var u={validate:!0,additionalParameters:[]};function Pe(e){u={...u,...e}}0&&(module.exports={area,asGeoJSON,asText,boundary,buffer,centroid,contains,covers,crosses,dWithin,defaultOptions,difference,disjoint,distance,distanceSphere,equals,expand,geoHash,geomFromGeoJSON,geomFromText,intersection,intersects,isValid,m,makePoint,makeValid,maxDistance,overlaps,scale,segmentize,setDefaultOptions,setSRID,simplify,simplifyPreserveTopology,srid,stf,transform,translate,union,within,x,y,z});
