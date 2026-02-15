const CACHE_NAME = "tooz-water-v1";

const FILES_TO_CACHE = [
  "index.html",
  "page1.html",
  "page2.html",
  "page3.html",
  "page4.html",
  "page5.html",
  "manifest.json",
  "icon.png"
];

// عند التثبيت
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// عند الطلب
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});