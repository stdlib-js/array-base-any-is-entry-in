"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=c(function(x,u){
var v=require('@stdlib/array-base-assert-is-accessor-array/dist'),g=require('@stdlib/array-base-resolve-getter/dist'),f=require('@stdlib/assert-has-property/dist');function h(e,r,n){var s,t;if(n===void 0){for(t=0;t<e.length;t++)if(s=e[t],f(s,r)&&s[r]===n)return!0;return!1}for(t=0;t<e.length;t++)if(e[t][r]===n)return!0;return!1}function a(e,r,n){var s,t,i;if(s=g(e),n===void 0){for(i=0;i<e.length;i++)if(t=s(e,i),f(t,r)&&t[r]===n)return!0;return!1}for(i=0;i<e.length;i++)if(s(e,i)[r]===n)return!0;return!1}function d(e,r,n){return v(e)?a(e,r,n):h(e,r,n)}u.exports=d
});var l=o();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
