"use strict";var precacheConfig=[["/index.html","cb57bc68e227dde74c0678a01cc8bb4a"],["/static/css/main.fe6e7af7.css","4ce4d86afd4dc3cf9bcc7001c59f3e81"],["/static/js/main.e7f453cb.js","4b06d53ba2c9295aa83882068fe9a917"],["/static/media/MainCover.1b2ce6a6.png","1b2ce6a6d1dba8ebf36d08d13a18c5eb"],["/static/media/MainFace.7534aa04.png","7534aa04ad46ca1fb5f1e8fa64670ee1"],["/static/media/encryption.d68fee7b.png","d68fee7b3d6c90a9bd10de6cec0d09d8"],["/static/media/pic0.bfcb2761.png","bfcb2761accb35c03efb0ea5bf020ca9"],["/static/media/pic1.03bf5b90.png","03bf5b90a5bcecca29ec11dfd370b07b"],["/static/media/pic2.add1ab51.png","add1ab51d3fef74c78b67d3db01b0ee6"],["/static/media/pic3.bbeb9aec.png","bbeb9aec865d1e6ff2f23d22f1fce855"],["/static/media/pic4.0828ceed.png","0828ceed15de75930a76e2b05a67fe14"],["/static/media/pic5.ee44bb0a.png","ee44bb0a8bcdff8bc7157f1b83ed6b5f"],["/static/media/pic6.37592e60.png","37592e60c1aa39cab7eb472ca2788ebd"],["/static/media/talon_resume.cfe07a10.pdf","cfe07a1044f6dbad8793096d1ed7a6db"],["/static/media/wpm.3501b6d1.png","3501b6d1a110d2e262cd629f82151a3b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
