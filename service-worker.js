"use strict";var precacheConfig=[["/cryptopurr/index.html","b122e007f29dca5bc76bf33415d67387"],["/cryptopurr/static/css/main.afa7ada8.css","98bfb1f85dc4ebd306ba11d5d5d0416d"],["/cryptopurr/static/js/0.c1672c88.chunk.js","ed3007eee0ee174ef2ccd1fce97045bb"],["/cryptopurr/static/js/1.8caf2840.chunk.js","18e06bad6c8e91d25b44c3de7560fd3c"],["/cryptopurr/static/js/2.dc3fcd93.chunk.js","f1ec0f987f701367366f6c4977b33666"],["/cryptopurr/static/js/main.beab65db.js","c2b27bebf83ac8fa4321609da2a46b76"],["/cryptopurr/static/media/barbossa.78558846.svg","785588468b31d141235cf741e642c421"],["/cryptopurr/static/media/barbossa.ab3a5e3e.png","ab3a5e3ee22717a57e818d0b11f66356"],["/cryptopurr/static/media/ether-diamond.d0d979a9.gif","d0d979a9848e7f79db6b7ee187562d38"],["/cryptopurr/static/media/graph.0b8b2a9e.png","0b8b2a9e5b8df4c402656ff3ea692eaa"],["/cryptopurr/static/media/like.9907fd49.svg","9907fd490e8e437e7f14fe9b1b7f9cc4"],["/cryptopurr/static/media/locked.0e8fc0eb.svg","0e8fc0eb9776e9173d1cbe67906649dc"],["/cryptopurr/static/media/no.4d8c0d32.svg","4d8c0d3273f1fa626acbc8087213777f"],["/cryptopurr/static/media/noidentity.edf9d13c.svg","edf9d13c27825ee6bdcf43d1e7f2d4ef"],["/cryptopurr/static/media/paw.d1cf5245.svg","d1cf52455857a8227891497785d298b1"],["/cryptopurr/static/media/reply.1cdb5f29.svg","1cdb5f29e61f13e798b38d3536afdb64"],["/cryptopurr/static/media/testnet.0032104c.png","0032104c86494ee34dd6c803c4a9d591"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/cryptopurr/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});