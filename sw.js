const CACHE_NAME = 'minhacompra-v5';

const ASSETS = [
  '/minhascompras/index.html',
  '/minhascompras/manifest.json',
  '/minhascompras/icon-192.png',
  '/minhascompras/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap',
  'https://cdn.jsdelivr.net/npm/@zxing/library@0.20.0/+esm'
];

// Instalação: faz cache de tudo
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Tenta cachear cada asset individualmente (falha silenciosa por item)
      return Promise.allSettled(
        ASSETS.map(url => cache.add(url).catch(() => console.warn('Cache falhou:', url)))
      );
    }).then(() => self.skipWaiting())
  );
});

// Ativação: limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first, fallback para rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Só cacheia respostas válidas
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline e não tem cache: retorna página offline simples
        if (event.request.destination === 'document') {
          return caches.match('/minhascompras/index.html');
        }
      });
    })
  );
});
