if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const o=e=>s(e,r),f={module:{uri:r},exports:c,require:o};i[r]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-c11f15a2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-cb1ac900.js",revision:null},{url:"assets/index-d45bb987.css",revision:null},{url:"index.html",revision:"164675b40066058d718d231cb570ac91"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/favicon.png",revision:"6275052b6cf906f322b5d224dfd0a2f0"},{url:"manifest.webmanifest",revision:"29a4699e1a003af9aabe4fc90340ac6e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(woff2|woff|ttf)/,new e.CacheFirst({cacheName:"file-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
