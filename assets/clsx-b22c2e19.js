import{a as f}from"./@babel-5978d8d7.js";function a(r){var e,o,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(o=a(r[e]))&&(t&&(t+=" "),t+=o);else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function n(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=a(r))&&(t&&(t+=" "),t+=e);return t}const s=Object.freeze(Object.defineProperty({__proto__:null,clsx:n,default:n},Symbol.toStringTag,{value:"Module"})),i=f(s);export{n as c,i as r};
