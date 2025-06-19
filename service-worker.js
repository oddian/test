const CACHE_NAME = 'pwa-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/add.html',
  '/manifest.json',
  '/db.js',
  '/recipes.js'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
