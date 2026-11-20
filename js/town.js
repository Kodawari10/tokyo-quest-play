/* Lived-in blocks near real neighborhoods. Sprites are decoration, not extra quests.
   Offsets are meters east / north of a verified center so they sit beside the pin. */
function townOffset(lat, lng, eastM, northM) {
  return {
    lat: lat + northM / 111320,
    lng: lng + eastM / (111320 * Math.cos(lat * Math.PI / 180))
  };
}

const CLUSTER_HOUSE = {
  machiya: "lane",
  nagaya: "nagaya",
  kura: "kura",
  mansion: "mansion",
  pole: "pole",
  garden: "koi",
  sento: "bath",
  kissaten: "cup",
  arcade: "arcade",
  vend: "can",
  shrine: "torii",
  izakaya: "lantern",
  temple: "pagoda",
  fence: "fence"
};

const QUARTERS = [
  { id: "shibuya", lat: 35.6595, lng: 139.7016, row: [["mansion", -55, 48], ["vend", -18, 62], ["kissaten", 42, 36], ["pole", 18, 78], ["machiya", 70, -24]] },
  { id: "golden", lat: 35.69406, lng: 139.70469, row: [["izakaya", -40, 28], ["izakaya", 24, 36], ["pole", -10, 60], ["machiya", 48, -18], ["vend", -48, -10]] },
  { id: "yanaka", lat: 35.72766, lng: 139.76697, row: [["machiya", -46, 22], ["kura", 20, 40], ["shrine", 52, -16], ["pole", -12, 58], ["garden", 8, -36]] },
  { id: "nezu", lat: 35.72, lng: 139.76076, row: [["shrine", -30, 24], ["machiya", 36, 18], ["kura", 10, -32], ["pole", -40, -8]] },
  { id: "asakusa", lat: 35.7124, lng: 139.7965, row: [["temple", -36, 20], ["arcade", 28, 34], ["izakaya", 60, -12], ["machiya", -20, -28], ["pole", 8, 56]] },
  { id: "ueno", lat: 35.7142, lng: 139.7732, row: [["garden", -24, 16], ["kura", 30, 22], ["machiya", -40, -18], ["pole", 12, -30]] },
  { id: "kagura", lat: 35.7015, lng: 139.7412, row: [["machiya", -32, 20], ["kissaten", 28, 26], ["izakaya", 8, -28], ["pole", -16, 48]] },
  { id: "shimokita", lat: 35.6616, lng: 139.6685, row: [["mansion", -28, 30], ["machiya", 34, 16], ["vend", 8, -26], ["pole", -20, 52]] }
];

let clusterMarkers = [];
let clusterKey = "";
let critterMarkers = [];
let critterAt = null;
let trainMarker = null;
let trainT = 0;

function critterSvg(kind) {
  if (kind === "cat") return `<svg viewBox="0 0 32 24"><ellipse cx="16" cy="16" rx="10" ry="6" fill="#f0a050"/><path d="M8 10 l3 4 2-3z M22 10 l-2 4 -2-3z" fill="#f0a050"/></svg>`;
  if (kind === "bird") return `<svg viewBox="0 0 32 20"><ellipse cx="14" cy="12" rx="6" ry="4" fill="#5c4652"/><path d="M18 10 l8 -4 -6 4z" fill="#5c4652"/></svg>`;
  if (kind === "bike") return `<svg viewBox="0 0 36 24"><circle cx="8" cy="16" r="5" fill="none" stroke="#5c4652"/><circle cx="26" cy="16" r="5" fill="none" stroke="#5c4652"/><path d="M8 16 L16 8 L26 16" fill="none" stroke="#5c4652"/></svg>`;
  return `<svg viewBox="0 0 36 24"><rect x="6" y="8" width="22" height="10" rx="4" fill="#f4e2c4" stroke="#e0c4a0"/><circle cx="12" cy="18" r="3" fill="#5c4652"/><circle cx="24" cy="18" r="3" fill="#5c4652"/></svg>`;
}

function syncCritters() {
  if (!map || map.getZoom() < 16) {
    critterMarkers.forEach((m) => m.remove());
    critterMarkers = [];
    critterAt = null;
    return;
  }
  const h = here();
  if (critterAt && dist(h, critterAt) < 70 && critterMarkers.length) return;
  critterMarkers.forEach((m) => m.remove());
  critterMarkers = [];
  critterAt = { lat: h.lat, lng: h.lng };
  [["cat", 28, 18], ["bird", -36, 22], ["bike", 16, -30], ["scooter", -22, -16]].forEach(([kind, e, n]) => {
    const at = townOffset(h.lat, h.lng, e, n);
    const el = document.createElement("div");
    el.className = "critter " + kind;
    el.innerHTML = critterSvg(kind);
    critterMarkers.push(new maplibregl.Marker({ element: el, anchor: "center" }).setLngLat([at.lng, at.lat]).addTo(map));
  });
}

function syncTrain() {
  if (!map) return;
  if (!trainMarker) {
    const el = document.createElement("div");
    el.className = "mini-train";
    el.textContent = "🚃";
    trainMarker = new maplibregl.Marker({ element: el, anchor: "center" }).setLngLat([139.702, 35.659]).addTo(map);
  }
  trainT = (trainT + 0.00035) % 1;
  const lat = 35.6565 + trainT * 0.01;
  const lng = 139.7012 + Math.sin(trainT * Math.PI) * 0.002;
  trainMarker.setLngLat([lng, lat]);
  const show = map.getZoom() <= 16.2;
  trainMarker.getElement().style.display = show ? "" : "none";
}

function clearClusters() {
  clusterMarkers.forEach((mk) => mk.remove());
  clusterMarkers = [];
  clusterKey = "";
}

function syncTown() {
  if (!map) return;
  syncCritters();
  syncTrain();
  const z = map.getZoom();
  if (z < 15.8) {
    if (clusterKey) clearClusters();
    return;
  }
  const hereNow = here();
  const near = QUARTERS.filter((q) => dist(hereNow, q) < 1400)
    .sort((a, b) => dist(hereNow, a) - dist(hereNow, b))
    .slice(0, 2);
  const key = near.map((q) => q.id).join(",");
  if (key === clusterKey) return;
  clearClusters();
  clusterKey = key;
  near.forEach((q) => {
    q.row.forEach(([kind, eastM, northM]) => {
      const at = townOffset(q.lat, q.lng, eastM, northM);
      const el = document.createElement("div");
      el.className = "cluster";
      const house = CLUSTER_HOUSE[kind] || "lane";
      el.innerHTML = (HOUSE[house] || HOUSE.lane)();
      clusterMarkers.push(new maplibregl.Marker({ element: el, anchor: "bottom" }).setLngLat([at.lng, at.lat]).addTo(map));
    });
  });
}
