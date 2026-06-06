/**
 * Enhanced PWA Service Worker with advanced caching strategies
 */

const CACHE_VERSION = 'v2.0.0';
const CACHE_NAMES = {
  main: `abdelkader-atia-main-${CACHE_VERSION}`,
  images: `abdelkader-atia-images-${CACHE_VERSION}`,
  api: `abdelkader-atia-api-${CACHE_VERSION}`,
  dynamic: `abdelkader-atia-dynamic-${CACHE_VERSION}`
};

const urlsToCache = [
  '/',
  '/index.html',
  '/index-en.html',
  '/404.html',
  '/privacy.html',
  '/terms.html',
  '/manifest.json',
  '/assets/css/style.css',
  '/assets/css/style.min.css',
  '/assets/js/main-ar.js',
  '/assets/js/main-ar.min.js',
  '/assets/js/main-en.js',
  '/assets/js/main-en.min.js',
  '/assets/js/chatbot-widget.js',
  '/assets/js/analytics-tracker.js',
  '/assets/js/structured-data.js'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAMES.main).then(cache => {
        return cache.addAll(urlsToCache);
      })
    ]).then(() => self.skipWaiting())
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!Object.values(CACHE_NAMES).includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - advanced caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // API calls - network first, fall back to cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Images - cache first, fall back to network
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(request, CACHE_NAMES.images));
    return;
  }

  // Default - cache first, fall back to network
  event.respondWith(cacheFirst(request, CACHE_NAMES.main));
});

// Network first strategy
function networkFirst(request) {
  return fetch(request)
    .then(response => {
      if (!response || response.status !== 200) {
        return caches.match(request);
      }
      const cache = caches.open(CACHE_NAMES.api);
      cache.then(c => c.put(request, response.clone()));
      return response;
    })
    .catch(() => caches.match(request));
}

// Cache first strategy
function cacheFirst(request, cacheName) {
  return caches.match(request, { cacheName })
    .then(response => {
      if (response) {
        return response;
      }
      return fetch(request)
        .then(response => {
          if (!response || response.status !== 200) {
            return response;
          }
          const cache = caches.open(cacheName);
          cache.then(c => c.put(request, response.clone()));
          return response;
        });
    })
    .catch(() => {
      if (request.destination === 'document') {
        return caches.match('/404.html');
      }
    });
}

// Push notification event
self.addEventListener('push', event => {
  let data = { title: 'Abdelkader Atia', body: 'New update available', icon: '/assets/images/icon.svg' };
  if (event.data) {
    try {
      data = event.data.json();
    } catch {
      data.body = event.data.text();
    }
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon || '/assets/images/icon.svg',
      badge: '/assets/images/icon.svg',
      vibrate: [200, 100, 200],
      tag: data.tag || 'default',
      data: { url: data.url || '/' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      const matchingClient = windowClients.find(c => c.url === urlToOpen);
      if (matchingClient) {
        return matchingClient.focus();
      }
      return clients.openWindow(urlToOpen);
    })
  );
});

// Message passing
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
