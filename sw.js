const CACHE_NAME = 'pdf-tools-v4';

const PRECACHE_URLS = [
  './',
  './index.html',
  './shared.css',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './unlock.html',
  './merge.html',
  './split.html',
  './resize.html',
  './watermark.html',
  './rotate.html',
  './pdf-to-img.html',
  './img-to-pdf.html',
  './passport.html',
  './img-convert.html',
  './metadata.html',
  './qr.html',
  './ocr.html',
  './color-picker.html',
  './hash.html',
  './bg-remove.html',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || event.request.method !== 'GET') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      });
    }).catch(() => {
      if (event.request.mode === 'navigate') return caches.match('./index.html');
    })
  );
});
