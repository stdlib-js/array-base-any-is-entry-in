"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=c(function(x,u){
var v=require('@stdlib/array-base-assert-is-accessor-array/dist'),g=require('@stdlib/array-base-resolve-getter/dist'),f=require('@stdlib/assert-has-property/dist');function h(e,r,t){var s,n;if(t===void 0){for(n=0;n<e.length;n++)if(s=e[n],f(s,r)&&s[r]===t)return!0;return!1}for(n=0;n<e.length;n++)if(e[n][r]===t)return!0;return!1}function a(e,r,t){var s,n,i;if(s=g(e),t===void 0){for(i=0;i<e.length;i++)if(n=s(e,i),f(n,r)&&n[r]===t)return!0;return!1}for(i=0;i<e.length;i++)if(s(e,i)[r]===t)return!0;return!1}function d(e,r,t){return v(e)?a(e,r,t):h(e,r,t)}u.exports=d
});var l=o();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
