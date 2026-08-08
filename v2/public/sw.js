// Nom de cache PROPRE À LA v2 : le stockage de cache est partagé par origine
// (pas par chemin), donc un nom identique à celui de la v1 ferait que les deux
// versions se serviraient mutuellement des fichiers périmés.
const CACHE = "signal-nocturne-v2-2.2";
const SCOPE = self.registration.scope;
const CORE = [
  "", "manifest.webmanifest", "favicon.svg", "icon-192.svg", "icon-512.svg",
  "audio/unmute.m4a", "audio/switch.m4a", "audio/brake.m4a", "audio/explosion.m4a",
  "audio/split.m4a", "audio/paint.m4a", "audio/station.m4a", "audio/pass.m4a",
].map((path) => new URL(path, SCOPE).href);

const NAV_FALLBACK = new URL("", SCOPE).href;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(NAV_FALLBACK, copy));
          return response;
        })
        .catch(() => caches.match(NAV_FALLBACK))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (response.ok && new URL(event.request.url).origin === self.location.origin) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      }
      return response;
    }))
  );
});
