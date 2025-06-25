
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('mario-touch').then(cache => {
      return cache.addAll(['./', './index.html', './touch-game.js', './manifest.json']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
