if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SVI-KypH-jjhrzr_RlPxz/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/SVI-KypH-jjhrzr_RlPxz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/396-e46c4fbbc1d7d4c5.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/472-c6d45453a808521a.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/501-bb0afb0e47d167b0.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/512-92499d9f1e54a9bb.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/691-92015bd74a62e500.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/994-0b1348231300beda.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/app/%5Bslug%5D/not-found-47a2ee824d43c9d2.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/app/%5Bslug%5D/page-9a6e4aa8c9be1fa0.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/app/_not-found-91a68671b7abb9a3.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/app/about/page-58b09470d384e3d8.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/app/layout-74f0a837f03c9d4b.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/app/page-26e462dd5408eae0.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/app/page/%5Bpage%5D/page-2430936700dbf1c1.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/fd9d1056-d7047eb27e3f28d0.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/main-app-4f1c9ac53d014ab7.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/main-b58b8e67e9f21f49.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8aa774df4558fe34.js",revision:"SVI-KypH-jjhrzr_RlPxz"},{url:"/_next/static/css/5d4f3d63e34f1afc.css",revision:"5d4f3d63e34f1afc"},{url:"/_next/static/css/c84d13a4c906b51a.css",revision:"c84d13a4c906b51a"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/admin/config.yml",revision:"93e3c490f2b415df40e7fb67ca8c8546"},{url:"/admin/index.html",revision:"5038bb09ad789a4c5262d37e65df3f85"},{url:"/assets/images/Logo.png",revision:"86da2d54a4fefe27a39b233e28f2bd68"},{url:"/assets/images/christopher-gower-m_hrflhgabo-unsplash.jpg",revision:"483610db40e2c64662f4e0f5c7be8554"},{url:"/assets/images/download.avif",revision:"adfb9d4f080615a97103d377986c204f"},{url:"/assets/images/image-post.jpg",revision:"f5a290debe2558ac7f5298d430e081fa"},{url:"/assets/images/profile.jpg",revision:"676422b28df2d2c313368550e80f78e7"},{url:"/manifest.json",revision:"e8df6a5114c3025318840dc26ce3729a"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
