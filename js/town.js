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
  nagaya: "lane",
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
  fence: "koi"
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

function clearClusters() {
  clusterMarkers.forEach((mk) => mk.remove());
  clusterMarkers = [];
  clusterKey = "";
}

function syncTown() {
  if (!map) return;
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
