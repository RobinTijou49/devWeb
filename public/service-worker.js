const CACHE_NAME = 'devweb-v1'
const urlsToCache = ['/', '/index.html', '/manifest.json']

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
  self.skipWaiting()
})

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

// Stratégie Fetch: Network First, puis Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone la réponse
        const responseClone = response.clone()

        // Sauvegarde en cache
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone)
        })

        return response
      })
      .catch(() => {
        // Si le fetch échoue, utilise le cache
        return caches.match(event.request).then((response) => {
          return (
            response ||
            new Response('Mode offline', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain',
              }),
            })
          )
        })
      }),
  )
})
