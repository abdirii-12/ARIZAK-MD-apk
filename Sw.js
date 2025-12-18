// SIMPLE SERVICE WORKER THAT WORKS
self.addEventListener('install', function(event) {
  console.log('Service Worker: Installed');
  // Skip waiting so it activates immediately
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker: Activated');
  // Claim clients immediately
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Just pass through - no caching issues
  event.respondWith(fetch(event.request));
});
