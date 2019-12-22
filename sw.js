/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/bell.mp3",
    "revision": "de20efa06b3b9d1e723ea3b7b0459e79"
  },
  {
    "url": "assets/bell.png",
    "revision": "94d9ff97f872e7810f97d43d52215608"
  },
  {
    "url": "images/icons/icon-1024.png",
    "revision": "910e4ed677825286d6e624c54646b1ed"
  },
  {
    "url": "images/icons/icon-120.png",
    "revision": "0b43850e3c8960ceceb8385553592162"
  },
  {
    "url": "images/icons/icon-152.png",
    "revision": "2616def69ca37d03d618e1039f20150d"
  },
  {
    "url": "images/icons/icon-167.png",
    "revision": "c6f65e189d348565d90067a56ab80968"
  },
  {
    "url": "images/icons/icon-180.png",
    "revision": "d55572d9eeb7a79b12da2b3f6776c4e7"
  },
  {
    "url": "index.html",
    "revision": "6568e90a27caa8efb19cd06870bfd123"
  },
  {
    "url": "main.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "manifest.json",
    "revision": "16377c5d64bef01f7ebb1c4799197b6c"
  },
  {
    "url": "style.css",
    "revision": "77170e8a3ed6e4906eb31bfe53134c42"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
