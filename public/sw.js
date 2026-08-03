const CACHE = "signal-nocturne-v1.0";
const SCOPE = self.registration.scope;
const CORE = [
  "", "documentation.html", "manifest.webmanifest", "favicon.svg", "icon-192.svg", "icon-512.svg",
  "docs/screens/play.svg", "docs/screens/editor.svg", "docs/screens/levels.svg", "docs/screens/validation.svg",
  "docs/screens/play-mobile.svg", "docs/screens/editor-mobile.svg", "docs/screens/levels-mobile.svg", "docs/screens/validation-mobile.svg",
  "docs/diagrams/architecture.svg", "docs/diagrams/simulation-tick.svg", "docs/diagrams/state-storage.svg",
  "docs/signal-nocturne-documentation-v27.pdf",
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
