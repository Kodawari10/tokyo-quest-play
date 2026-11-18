/* App shell for Tokyo Quest. Map tiles are a different origin and are not cached here. */
const CACHE = "tokyo-quest-v4";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/game.css",
  "./js/characters.js",
  "./js/world.js",
  "./js/scenes.js",
  "./js/game.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./fonts/zen-maru-medium.woff2",
  "./fonts/zen-maru-bold.woff2",
  "./css/cartoon-style.json",
  "./vendor/maplibre/maplibre-gl.css",
  "./vendor/maplibre/maplibre-gl.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  event.respondWith(caches.match(event.request, { ignoreSearch: true }).then((cached) => cached || fetch(event.request).then((res) => {
    if (res.ok) {
      const copy = res.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
    }
    return res;
  }).catch(() => caches.match("./index.html"))));
});
