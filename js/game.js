const SAVE_KEY = "tokyo-quest-v1";
const M_LAT = 111320;
const WALK = 13;
const HURRY = 28;

const GLYPH = {
  cross: '<svg viewBox="0 0 24 24"><path d="M4 8h16M4 16h16M8 4v16M16 4v16" stroke="#f28aaa" stroke-width="2" fill="none"/></svg>',
  rice: '<svg viewBox="0 0 24 24"><path d="M12 4c4 3 6 6 6 9a6 6 0 1 1-12 0c0-3 2-6 6-9z" fill="#fff6e8" stroke="#e0b04a" stroke-width="1.6"/><path d="M12 8v4" stroke="#e07a4a" stroke-width="1.4"/></svg>',
  train: '<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="12" rx="4" fill="#d5ecff" stroke="#5c4652" stroke-width="1.4"/><circle cx="8" cy="18" r="1.6" fill="#5c4652"/><circle cx="16" cy="18" r="1.6" fill="#5c4652"/></svg>',
  can: '<svg viewBox="0 0 24 24"><rect x="8" y="3" width="8" height="18" rx="2" fill="#ff8b8b" stroke="#5c4652" stroke-width="1.2"/><path d="M8 7h8" stroke="#fff" stroke-width="1.4"/></svg>',
  bowl: '<svg viewBox="0 0 24 24"><path d="M5 10h14c0 5-3 8-7 8s-7-3-7-8z" fill="#fff1dc" stroke="#e07a28" stroke-width="1.4"/><path d="M8 7c1 1 2 1 3 0M13 7c1 1 2 1 3 0" stroke="#e07a28" fill="none"/></svg>',
  tree: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5" fill="#8ed4a8"/><rect x="11" y="13" width="2" height="6" fill="#c4844a"/></svg>',
  torii: '<svg viewBox="0 0 24 24"><path d="M4 7h16M6 7v12M18 7v12M4 11h16" stroke="#e15b5b" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  tower: '<svg viewBox="0 0 24 24"><path d="M12 3l2 4h-4zM8 9h8l2 10H6z" fill="#f28a4a" stroke="#5c4652" stroke-width="1"/></svg>',
  lantern: '<svg viewBox="0 0 24 24"><rect x="8" y="5" width="8" height="12" rx="3" fill="#ffb15a" stroke="#5c4652" stroke-width="1.2"/><path d="M12 3v2M12 17v3" stroke="#5c4652"/></svg>',
  cup: '<svg viewBox="0 0 24 24"><path d="M6 8h10v5a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z" fill="#fff" stroke="#5c4652"/><path d="M16 9h2a2 2 0 0 1 0 4h-2" fill="none" stroke="#5c4652"/></svg>',
  bath: '<svg viewBox="0 0 24 24"><path d="M5 12h14v3a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" fill="#d5ecff" stroke="#5c4652"/><path d="M8 12V8a2 2 0 0 1 4 0" fill="none" stroke="#5c4652"/></svg>',
  soba: '<svg viewBox="0 0 24 24"><path d="M7 8h10v8a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3z" fill="#fff6e8" stroke="#5c4652"/><path d="M9 5v3M12 4v4M15 5v3" stroke="#c4844a"/></svg>',
  bag: '<svg viewBox="0 0 24 24"><path d="M7 9h10l-1 10H8z" fill="#ffd0e0" stroke="#5c4652"/><path d="M9 9V7a3 3 0 0 1 6 0v2" fill="none" stroke="#5c4652"/></svg>',
  shirt: '<svg viewBox="0 0 24 24"><path d="M8 6l4 2 4-2 3 3-3 2v9H8V11L5 9z" fill="#d5ecff" stroke="#5c4652"/></svg>',
  cat: '<svg viewBox="0 0 24 24"><path d="M6 10l2-5 4 3 4-3 2 5v6a6 6 0 0 1-12 0z" fill="#ffb15a"/><circle cx="10" cy="12" r="1" fill="#5c4652"/><circle cx="14" cy="12" r="1" fill="#5c4652"/></svg>',
  stream: '<svg viewBox="0 0 24 24"><path d="M4 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0" stroke="#67b7d6" stroke-width="2" fill="none"/><path d="M4 18c2-3 4-3 6 0s4 3 6 0 4-3 6 0" stroke="#8ed4a8" stroke-width="2" fill="none"/></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M5 16c6-1 10-6 12-12-6 2-11 6-12 12z" fill="#8ed4a8" stroke="#5c4652"/></svg>',
  arcade: '<svg viewBox="0 0 24 24"><path d="M4 16V9l8-4 8 4v7" fill="#fff" stroke="#5c4652"/><path d="M8 16v-4h3v4M13 16v-4h3v4" stroke="#f28aaa"/></svg>',
  lane: '<svg viewBox="0 0 24 24"><path d="M4 18l6-12M14 6l6 12M9 12h6" stroke="#c4841d" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
  candy: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="#ff8fb8" stroke="#5c4652"/><path d="M7 7L4 4M17 17l3 3M17 7l3-3M7 17l-3 3" stroke="#f28aaa" stroke-width="1.6"/></svg>'
};

const state = {
  characterId: null,
  lat: START.lat,
  lng: START.lng,
  facing: 1,
  completed: {},
  activeId: "scramble",
  muted: false,
  introduced: false,
  hurry: false,
  dest: null,
  keys: {},
  busy: false,
  userPanned: false,
  tab: "daily"
};

let map, player, markerLayer, audioCtx;
let lastTs = 0;
let saveTimer = 0;
let movedSinceSave = false;
let waitTimer = 0;
let ritual = 0;
let cardPlace = null;
let cardMode = "play";

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function mLng(lat) { return M_LAT * Math.cos(lat * Math.PI / 180); }
function dist(a, b) {
  const lat = ((a.lat + b.lat) / 2) * Math.PI / 180;
  const dy = (a.lat - b.lat) * M_LAT;
  const dx = (a.lng - b.lng) * M_LAT * Math.cos(lat);
  return Math.hypot(dx, dy);
}
function here() { return { lat: state.lat, lng: state.lng }; }
function formatDist(m) {
  if (m < 950) return Math.max(1, Math.round(m)) + " m";
  return (m / 1000).toFixed(1) + " km";
}
function done(id) { return !!state.completed[id]; }
function everyday() { return MISSIONS.filter((m) => !m.secret); }
function secrets() { return MISSIONS.filter((m) => m.secret); }
function countDone(list) { return list.filter((m) => done(m.id)).length; }

function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || data.version !== 1 || !data.characterId) return null;
    return data;
  } catch (e) { return null; }
}
function save() {
  const data = {
    version: 1,
    characterId: state.characterId,
    lat: state.lat,
    lng: state.lng,
    facing: state.facing,
    completed: state.completed,
    activeId: state.activeId,
    muted: state.muted,
    introduced: state.introduced,
    tab: state.tab
  };
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch (e) { /* ignore quota */ }
  movedSinceSave = false;
}
function scheduleSave() {
  movedSinceSave = true;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(save, 1500);
}

function audio() {
  if (state.muted) return null;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  if (!audioCtx) audioCtx = new AC();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function tone(ctx, freq, t, dur, gain) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(ctx.destination);
  o.start(t); o.stop(t + dur + 0.02);
}
function chime() {
  const ctx = audio();
  if (!ctx) return;
  const t = ctx.currentTime;
  [523, 659, 784, 1046].forEach((f, i) => tone(ctx, f, t + i * 0.08, 0.22, 0.05));
}

function nearestPlace(missionId, from) {
  const list = placesFor(missionId);
  if (!list.length) return null;
  return list.reduce((best, p) => dist(from, p) < dist(from, best) ? p : best);
}
function nearestStation(from) {
  return STATIONS.reduce((best, s) => dist(from, s) < dist(from, best) ? s : best);
}
function nextIncomplete() {
  return MISSIONS.find((m) => !done(m.id)) || null;
}
function activeMission() { return missionById(state.activeId) || nextIncomplete() || MISSIONS[0]; }

function clamp() {
  state.lat = Math.min(BOUNDS.north, Math.max(BOUNDS.south, state.lat));
  state.lng = Math.min(BOUNDS.east, Math.max(BOUNDS.west, state.lng));
}

function initMap() {
  map = L.map("map", {
    keyboard: false,
    zoomControl: false,
    attributionControl: true,
    minZoom: 13,
    maxZoom: 19,
    maxBounds: L.latLngBounds([BOUNDS.south, BOUNDS.west], [BOUNDS.north, BOUNDS.east]),
    maxBoundsViscosity: 0.85,
    doubleClickZoom: false
  }).setView([state.lat, state.lng], 18);
  L.control.zoom({ position: "topright" }).addTo(map);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  let tileFailed = false;
  tiles.on("tileerror", () => {
    if (tileFailed) return;
    tileFailed = true;
    const b = document.getElementById("banner");
    b.hidden = false;
    b.textContent = "Map tiles need a network connection. Your stamps are still saved on this device.";
  });
  map.on("dragstart", () => { state.userPanned = true; });
  map.on("click", (e) => {
    if (state.busy) return;
    state.dest = { lat: e.latlng.lat, lng: e.latlng.lng };
    state.userPanned = false;
  });

  markerLayer = L.layerGroup().addTo(map);
  const icon = L.divIcon({
    className: "char-marker",
    html: spriteHtml(),
    iconSize: [76, 76],
    iconAnchor: [38, 68]
  });
  player = L.marker([state.lat, state.lng], { icon, zIndexOffset: 1000, interactive: false }).addTo(map);
  buildMarkers();
  requestAnimationFrame(() => map.invalidateSize());
}

function spriteHtml() {
  return `<div class="sprite" id="sprite" style="transform:scaleX(${state.facing})"><div class="bob">${characterSvg(state.characterId)}</div></div>`;
}
function paintCharacter() {
  if (!player) return;
  player.setIcon(L.divIcon({
    className: "char-marker",
    html: spriteHtml(),
    iconSize: [76, 76],
    iconAnchor: [38, 68]
  }));
}

function visiblePlaces() {
  const out = [];
  for (const m of MISSIONS) {
    const places = placesFor(m.id);
    if (!done(m.id)) out.push(...places);
    else {
      const keep = state.completed[m.id] && state.completed[m.id].placeId;
      const one = places.find((p) => p.id === keep) || places[0];
      if (one) out.push(one);
    }
  }
  return out;
}
function buildMarkers() {
  if (!markerLayer) return;
  markerLayer.clearLayers();
  const active = state.activeId;
  for (const p of visiblePlaces()) {
    const m = missionById(p.mission);
    const isDone = done(p.mission);
    const cls = ["pin", m.secret ? "secret" : "everyday", p.mission === active && !isDone ? "active" : "", isDone ? "done" : ""].join(" ");
    const html = `<div class="${cls}"><span>${GLYPH[m.glyph] || ""}</span></div>`;
    const icon = L.divIcon({ className: "pin-marker", html, iconSize: [34, 34], iconAnchor: [17, 30] });
    const marker = L.marker([p.lat, p.lng], { icon, zIndexOffset: p.mission === active ? 500 : 100 });
    marker.on("click", (ev) => {
      L.DomEvent.stop(ev);
      if (state.busy) return;
      state.activeId = p.mission;
      state.dest = { lat: p.lat, lng: p.lng };
      state.userPanned = false;
      renderQuest();
      renderHud();
      buildMarkers();
    });
    marker.addTo(markerLayer);
  }
}

function step(dt) {
  if (!map) return;
  let vx = 0, vy = 0;
  if (!state.busy) {
    if (state.keys.left) vx -= 1;
    if (state.keys.right) vx += 1;
    if (state.keys.up) vy += 1;
    if (state.keys.down) vy -= 1;
    if (vx || vy) {
      state.dest = null;
      const len = Math.hypot(vx, vy);
      vx /= len; vy /= len;
    } else if (state.dest) {
      const dx = (state.dest.lng - state.lng) * mLng(state.lat);
      const dy = (state.dest.lat - state.lat) * M_LAT;
      const d = Math.hypot(dx, dy);
      if (d < 2.2) state.dest = null;
      else { vx = dx / d; vy = dy / d; }
    }
  }
  const moving = !!(vx || vy);
  if (moving) {
    const speed = (state.hurry || state.keys.hurry) ? HURRY : WALK;
    state.lat += (vy * speed * dt) / M_LAT;
    state.lng += (vx * speed * dt) / mLng(state.lat);
    clamp();
    if (Math.abs(vx) > 0.25) state.facing = vx > 0 ? 1 : -1;
    if (!state.userPanned) map.setView([state.lat, state.lng], map.getZoom(), { animate: false });
    scheduleSave();
  }
  player.setLatLng([state.lat, state.lng]);
  const sp = document.getElementById("sprite");
  if (sp) {
    sp.classList.toggle("walking", moving);
    sp.style.transform = `scaleX(${state.facing})`;
  }
  updateBubble();
  updateCompass();
  updateArea();
}

function nearbyPlace() {
  const candidates = PLACES.filter((p) => !done(p.mission) && dist(here(), p) <= p.radius);
  if (!candidates.length) return null;
  const preferred = candidates.filter((p) => p.mission === state.activeId);
  const pool = preferred.length ? preferred : candidates;
  return pool.reduce((best, p) => dist(here(), p) < dist(here(), best) ? p : best);
}

function updateBubble() {
  const el = document.getElementById("bubble");
  if (state.busy) { el.hidden = true; return; }
  const p = nearbyPlace();
  if (!p) { el.hidden = true; el.dataset.place = ""; return; }
  const m = missionById(p.mission);
  el.hidden = false;
  el.dataset.place = p.id;
  document.getElementById("bubble-ja").textContent = p.nameJa;
  document.getElementById("bubble-en").textContent = p.name + (m.secret ? " · local secret" : "");
  document.getElementById("bubble-go").textContent = m.verbJa + " " + m.verb;
}
function updateCompass() {
  const m = activeMission();
  const target = m && nearestPlace(m.id, here());
  const el = document.getElementById("compass");
  if (!m || !target || done(m.id) && !nextIncomplete()) {
    if (countDone(MISSIONS) === MISSIONS.length) {
      el.hidden = false;
      document.getElementById("compass-title").textContent = "All stamps collected";
      document.getElementById("compass-dist").textContent = "日常もひみつも、コンプリート";
      document.getElementById("arrow").style.transform = "none";
      return;
    }
  }
  const mission = done(m.id) ? nextIncomplete() : m;
  if (!mission) { el.hidden = true; return; }
  const place = nearestPlace(mission.id, here());
  if (!place) { el.hidden = true; return; }
  el.hidden = false;
  const narrow = window.matchMedia("(max-width: 860px)").matches;
  document.getElementById("compass-title").textContent = narrow ? mission.titleJa : mission.titleJa + " · " + mission.title;
  const placeName = narrow ? place.nameJa : place.name;
  document.getElementById("compass-dist").textContent = formatDist(dist(here(), place)) + " · " + placeName;
  const lat = ((state.lat + place.lat) / 2) * Math.PI / 180;
  const dy = (place.lat - state.lat) * M_LAT;
  const dx = (place.lng - state.lng) * M_LAT * Math.cos(lat);
  const deg = Math.atan2(dx, dy) * 180 / Math.PI;
  document.getElementById("arrow").style.transform = `rotate(${deg}deg)`;
}
function updateArea() {
  const s = nearestStation(here());
  const d = dist(here(), s);
  const label = d < 1200 ? s.nameJa + " " + s.name : "東京 Tokyo";
  const narrow = window.matchMedia("(max-width: 860px)").matches;
  const text = narrow
    ? label + " · " + countDone(everyday()) + "/" + everyday().length + " · " + countDone(secrets()) + "/" + secrets().length
    : label;
  const el = document.getElementById("area-label");
  if (el.textContent !== text) el.textContent = text;
}

function renderHud() {
  const c = characterById(state.characterId);
  document.getElementById("who-name").textContent = c.nameJa + " " + c.name;
  document.getElementById("score-daily").textContent = countDone(everyday()) + "/" + everyday().length;
  document.getElementById("score-secret").textContent = countDone(secrets()) + "/" + secrets().length;
  document.getElementById("btn-sound").textContent = state.muted ? "🔇" : "🔔";
  document.getElementById("btn-hurry").classList.toggle("on", state.hurry);
}

function renderQuest() {
  const list = document.getElementById("quest-list");
  const items = state.tab === "secret" ? secrets() : everyday();
  document.getElementById("tab-daily").classList.toggle("on", state.tab === "daily");
  document.getElementById("tab-secret").classList.toggle("on", state.tab === "secret");
  list.innerHTML = items.map((m) => {
    const place = nearestPlace(m.id, here());
    const d = place ? formatDist(dist(here(), place)) : "";
    const on = m.id === state.activeId ? " on" : "";
    const dn = done(m.id) ? " done" : "";
    const badge = m.secret ? '<span class="badge">ひみつ</span>' : "";
    const check = done(m.id) ? "✓ " : "";
    const tipBtn = done(m.id) && m.secret ? `<button class="btn tiny" data-tip="${m.id}">Tip</button>` : "";
    const walk = !done(m.id) ? `<button class="btn tiny" data-walk="${m.id}">歩く Walk</button>` : "";
    const ride = !done(m.id) && place && dist(here(), place) > 450 ? `<button class="btn tiny" data-ride-mission="${m.id}">電車 Train</button>` : "";
    return `<button class="quest-item${on}${dn}" data-mission="${m.id}">
      <span>${GLYPH[m.glyph] || ""}</span>
      <span><span class="t">${check}${esc(m.titleJa)} ${badge}</span><span class="s">${esc(m.title)} · ${esc(m.areaJa)}</span></span>
      <span class="dist" data-dist="${m.id}">${esc(d)}</span>
    </button>
    <div class="row-actions">${walk}${ride}${tipBtn}</div>`;
  }).join("");
}
function refreshDists() {
  document.querySelectorAll("[data-dist]").forEach((el) => {
    const place = nearestPlace(el.dataset.dist, here());
    if (place) el.textContent = formatDist(dist(here(), place));
  });
}

function openSheet(id) {
  document.getElementById(id).hidden = false;
}
function closeSheet(id) {
  const el = document.getElementById(id);
  if (id === "quest" && window.matchMedia("(min-width: 900px)").matches) return;
  el.hidden = true;
}

function renderTrain() {
  const box = document.getElementById("train-list");
  box.innerHTML = STATIONS.map((s) => {
    const d = formatDist(dist(here(), s));
    return `<button class="train-row" data-station="${s.id}">
      <span><b>${esc(s.nameJa)}</b> ${esc(s.name)}<br><small style="color:var(--ink-soft)">${esc(s.line)}</small></span>
      <span class="dist">${esc(d)}</span>
    </button>`;
  }).join("");
}

function rideTo(station) {
  document.getElementById("train").hidden = true;
  document.getElementById("quest").hidden = window.matchMedia("(max-width: 899px)").matches;
  const anim = document.getElementById("train-anim");
  document.getElementById("train-anim-label").textContent = station.nameJa + "  ·  " + station.name;
  anim.hidden = false;
  state.busy = true;
  state.dest = null;
  setTimeout(() => {
    state.lat = station.lat;
    state.lng = station.lng;
    state.userPanned = false;
    clamp();
    player.setLatLng([state.lat, state.lng]);
    const zoom = Math.max(17, Math.min(18, map.getZoom()));
    map.setView([state.lat, state.lng], zoom, { animate: false });
    anim.hidden = true;
    state.busy = false;
    save();
    updateBubble();
    updateCompass();
    renderQuest();
    const ctx = audio();
    if (ctx) tone(ctx, 660, ctx.currentTime, 0.12, 0.04);
  }, 1100);
}

function placeById(id) { return PLACES.find((p) => p.id === id); }

function showScene(mission) {
  const art = document.getElementById("scene-art");
  try { art.innerHTML = renderScene(mission.id); }
  catch (err) { art.innerHTML = ""; }
  const scene = document.getElementById("scene");
  scene.classList.remove("go");
  scene.hidden = false;
}
function openCard(place) {
  cardPlace = place;
  cardMode = "play";
  ritual = 0;
  state.busy = true;
  state.dest = null;
  clearTimeout(waitTimer);
  showScene(missionById(place.mission));
  renderCard();
}
function closeCard() {
  document.getElementById("scene").hidden = true;
  state.busy = false;
  cardPlace = null;
  clearTimeout(waitTimer);
}
function renderCard() {
  const m = missionById(cardPlace.mission);
  const body = document.getElementById("card-body");
  if (cardMode === "reward") {
    const allDaily = countDone(everyday()) === everyday().length;
    const allSecret = countDone(secrets()) === secrets().length;
    let extra = "";
    if (allDaily && allSecret) extra = "<p><b>Everyday and every local secret.</b> Tokyo kept the good stuff in the side streets.</p>";
    else if (m.secret && allSecret) extra = "<p><b>Every local secret, found.</b> You walk like someone who lives here.</p>";
    else if (!m.secret && allDaily) extra = "<p><b>Daily errands complete.</b> The ひみつ tab is still glowing.</p>";
    const tip = m.tip ? `<div class="tip"><strong>ひみつ · ${esc(m.tipTitle || "Local tip")}</strong><p>${esc(m.tip)}</p></div>` : "";
    const placeLine = cardPlace.nameJa === m.titleJa
      ? esc(cardPlace.name)
      : `${esc(cardPlace.nameJa)} · ${esc(cardPlace.name)}`;
    body.innerHTML = `
      <div class="stamp">${m.secret ? "ひみつ" : "済"}</div>
      <h3>${esc(m.titleJa)}</h3>
      <p class="sub">${placeLine}</p>
      <p>${esc(state.rewardLine || m.reward || "")}</p>
      ${tip}
      ${extra}
      <p class="osm-note">Real place · OpenStreetMap ${esc(cardPlace.osm)}</p>
      <button class="btn primary" id="card-continue" style="width:100%;margin-top:8px">つづける Continue</button>`;
    return;
  }
  const badge = m.secret ? '<span class="badge">ひみつ Local secret</span>' : "";
  let controls = "";
  if (m.kind === "choice") {
    controls = `<p>${esc(m.promptJa)}</p><p class="sub">${esc(m.prompt)}</p><div class="choices">` +
      m.choices.map((c) => `<button class="choice" data-choice="${esc(c.id)}"><b>${esc(c.label)}</b><span>${esc(c.sub)}</span></button>`).join("") +
      "</div>";
  } else if (m.kind === "ritual") {
    const dots = m.steps.map((s, i) => `<div class="step-dot${i < ritual ? " on" : ""}"></div>`).join("");
    const step = m.steps[ritual];
    controls = `<p>${esc(m.promptJa)}</p><p class="sub">${esc(m.prompt)}</p><div class="steps">${dots}</div>
      <button class="btn primary" data-ritual="1" style="width:100%">${esc(step.label)} · ${esc(step.sub)}</button>`;
  } else if (m.kind === "wait") {
    controls = `<div class="light" id="light"></div><p id="wait-label">${esc(m.waitTextJa)}</p><p class="sub">${esc(m.waitText)}</p>
      <button class="btn primary" data-confirm="1" id="wait-btn" disabled style="width:100%">${esc(m.buttonJa)} ${esc(m.button)}</button>`;
    clearTimeout(waitTimer);
    waitTimer = setTimeout(() => {
      const btn = document.getElementById("wait-btn");
      const light = document.getElementById("light");
      const label = document.getElementById("wait-label");
      if (!btn) return;
      btn.disabled = false;
      if (light) light.classList.add("go");
      document.getElementById("scene").classList.add("go");
      if (label) label.textContent = "あお信号。いまわたる";
    }, m.waitMs || 2000);
  } else {
    controls = `<p>${esc(m.promptJa || "")}</p><p class="sub">${esc(m.prompt || m.blurb)}</p>
      <button class="btn primary" data-confirm="1" style="width:100%">${esc(m.buttonJa || m.verbJa)} ${esc(m.button || m.verb)}</button>`;
  }
  body.innerHTML = `
    <h3>${esc(m.titleJa)} ${badge}</h3>
    <p class="sub">${esc(cardPlace.nameJa)} · ${esc(cardPlace.name)}</p>
    ${controls}
    <p class="osm-note">Real place · OpenStreetMap ${esc(cardPlace.osm)}</p>`;
}

function finish(detailLine) {
  const m = missionById(cardPlace.mission);
  const wasLastOfItsKind = m.secret
    ? countDone(secrets()) + 1 === secrets().length
    : countDone(everyday()) + 1 === everyday().length;
  state.completed[m.id] = { at: Date.now(), placeId: cardPlace.id, detail: detailLine || "" };
  state.rewardLine = detailLine || m.reward || "";
  if (state.activeId === m.id) {
    const n = nextIncomplete();
    if (n) state.activeId = n.id;
  }
  cardMode = "reward";
  save();
  chime();
  burst();
  renderCard();
  renderHud();
  renderQuest();
  buildMarkers();
  if (wasLastOfItsKind) { /* reward card already mentions it */ }
}

function burst() {
  const root = document.getElementById("burst");
  root.innerHTML = "";
  const colors = ["#ffb7c8", "#ffe7ae", "#c9f0df", "#d5ecff", "#f28aaa", "#f0c36a"];
  for (let i = 0; i < 16; i++) {
    const el = document.createElement("i");
    const ang = (Math.PI * 2 * i) / 16;
    const r = 80 + (i % 4) * 24;
    el.style.background = colors[i % colors.length];
    el.style.setProperty("--x", Math.cos(ang) * r + "px");
    el.style.setProperty("--y", Math.sin(ang) * r + "px");
    root.appendChild(el);
  }
  setTimeout(() => { root.innerHTML = ""; }, 800);
}

function openTip(missionId) {
  const m = missionById(missionId);
  const placeId = state.completed[missionId] && state.completed[missionId].placeId;
  cardPlace = placeById(placeId) || placesFor(missionId)[0];
  state.rewardLine = m.reward || "";
  cardMode = "reward";
  state.busy = true;
  showScene(m);
  renderCard();
}

function showToast(text) {
  const t = document.getElementById("toast");
  t.hidden = false;
  t.textContent = text;
  setTimeout(() => { t.hidden = true; }, 4600);
}

function bind() {
  document.getElementById("bubble-go").addEventListener("click", () => {
    const id = document.getElementById("bubble").dataset.place;
    const p = placeById(id);
    if (p) openCard(p);
  });
  document.getElementById("card-x").addEventListener("click", closeCard);
  document.getElementById("card-body").addEventListener("click", (e) => {
    const choice = e.target.closest("[data-choice]");
    const confirmBtn = e.target.closest("[data-confirm]");
    const ritualBtn = e.target.closest("[data-ritual]");
    const cont = e.target.closest("#card-continue");
    if (choice) {
      const m = missionById(cardPlace.mission);
      const c = m.choices.find((x) => x.id === choice.dataset.choice);
      finish(c ? c.line : m.reward);
    } else if (ritualBtn) {
      const m = missionById(cardPlace.mission);
      ritual += 1;
      if (ritual >= m.steps.length) finish(m.reward);
      else renderCard();
    } else if (confirmBtn && !confirmBtn.disabled) {
      const m = missionById(cardPlace.mission);
      finish(m.reward);
    } else if (cont) closeCard();
  });

  document.getElementById("tab-daily").addEventListener("click", () => { state.tab = "daily"; renderQuest(); save(); });
  document.getElementById("tab-secret").addEventListener("click", () => { state.tab = "secret"; renderQuest(); save(); });
  document.getElementById("quest-list").addEventListener("click", (e) => {
    const tip = e.target.closest("[data-tip]");
    const walk = e.target.closest("[data-walk]");
    const ride = e.target.closest("[data-ride-mission]");
    const item = e.target.closest("[data-mission]");
    if (tip) { openTip(tip.dataset.tip); return; }
    if (walk) {
      const place = nearestPlace(walk.dataset.walk, here());
      state.activeId = walk.dataset.walk;
      if (place) { state.dest = { lat: place.lat, lng: place.lng }; state.userPanned = false; }
      if (window.matchMedia("(max-width: 899px)").matches) document.getElementById("quest").hidden = true;
      renderQuest(); buildMarkers();
      return;
    }
    if (ride) {
      const place = nearestPlace(ride.dataset.rideMission, here());
      if (place) rideTo(nearestStation(place));
      return;
    }
    if (item) {
      state.activeId = item.dataset.mission;
      renderQuest(); renderHud(); buildMarkers(); updateCompass();
    }
  });

  document.getElementById("btn-quest").addEventListener("click", () => {
    const q = document.getElementById("quest");
    q.hidden = !q.hidden;
    if (!q.hidden) renderQuest();
  });
  document.getElementById("quest-close").addEventListener("click", () => { document.getElementById("quest").hidden = true; });
  document.getElementById("btn-train").addEventListener("click", () => { renderTrain(); document.getElementById("train").hidden = false; });
  document.getElementById("train-close").addEventListener("click", () => { document.getElementById("train").hidden = true; });
  document.getElementById("train-list").addEventListener("click", (e) => {
    const row = e.target.closest("[data-station]");
    if (!row) return;
    const st = STATIONS.find((s) => s.id === row.dataset.station);
    if (st) rideTo(st);
  });
  document.getElementById("btn-help").addEventListener("click", () => { renderMiniChars(); document.getElementById("help").hidden = false; });
  document.getElementById("help-close").addEventListener("click", () => { document.getElementById("help").hidden = true; });
  document.getElementById("btn-sound").addEventListener("click", () => {
    state.muted = !state.muted;
    renderHud(); save();
  });
  document.getElementById("btn-hurry").addEventListener("click", () => {
    state.hurry = !state.hurry;
    renderHud();
  });
  document.getElementById("btn-reset").addEventListener("click", () => {
    if (confirm("Erase stamps and start this day over?")) {
      localStorage.removeItem(SAVE_KEY);
      location.reload();
    }
  });
  document.getElementById("btn-recenter").addEventListener("click", () => {
    state.userPanned = false;
    map.setView([state.lat, state.lng], map.getZoom(), { animate: true });
  });

  document.getElementById("mini-chars").addEventListener("click", (e) => {
    const b = e.target.closest("[data-char]");
    if (!b) return;
    state.characterId = b.dataset.char;
    paintCharacter();
    renderHud();
    renderMiniChars();
    save();
  });

  const keyMap = {
    ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right",
    w: "up", a: "left", s: "down", d: "right",
    W: "up", A: "left", S: "down", D: "right"
  };
  window.addEventListener("keydown", (e) => {
    if (e.key === "Shift") { state.keys.hurry = true; return; }
    if (e.key === "Escape") { closeCard(); document.getElementById("train").hidden = true; document.getElementById("help").hidden = true; return; }
    if (e.key === "Enter") {
      const bubble = document.getElementById("bubble");
      if (!state.busy && !bubble.hidden) {
        const p = placeById(bubble.dataset.place);
        if (p) openCard(p);
      }
      return;
    }
    const k = keyMap[e.key];
    if (!k) return;
    state.keys[k] = true;
    state.userPanned = false;
    e.preventDefault();
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === "Shift") state.keys.hurry = false;
    const k = keyMap[e.key];
    if (k) state.keys[k] = false;
  });
  window.addEventListener("blur", () => { state.keys = {}; });

  document.querySelectorAll(".dpad button").forEach((btn) => {
    const dir = btn.dataset.dir;
    const down = (e) => { e.preventDefault(); state.keys[dir] = true; state.userPanned = false; };
    const up = (e) => { e.preventDefault(); state.keys[dir] = false; };
    btn.addEventListener("pointerdown", down);
    btn.addEventListener("pointerup", up);
    btn.addEventListener("pointerleave", up);
    btn.addEventListener("pointercancel", up);
  });

  window.addEventListener("pagehide", () => { if (state.characterId) save(); });
  setInterval(refreshDists, 500);
}

function renderMiniChars() {
  const box = document.getElementById("mini-chars");
  box.innerHTML = CHARACTERS.map((c) =>
    `<button data-char="${c.id}" class="${c.id === state.characterId ? "on" : ""}" title="${esc(c.name)}">${characterSvg(c.id)}</button>`
  ).join("");
}

function frame(ts) {
  const dt = Math.min(0.05, lastTs ? (ts - lastTs) / 1000 : 0);
  lastTs = ts;
  step(dt);
  requestAnimationFrame(frame);
}

function startGame(fromSave) {
  document.getElementById("select").hidden = true;
  document.getElementById("game").hidden = false;
  initMap();
  bind();
  renderHud();
  renderQuest();
  const desktop = window.matchMedia("(min-width: 900px)").matches;
  document.getElementById("quest").hidden = !desktop;
  if (!state.introduced) {
    state.introduced = true;
    save();
    showToast("Arrows or WASD to walk, Shift to hurry, or tap the map. Pins are real places.");
  } else if (fromSave) {
    showToast("つづきから。 Stamps restored on this device.");
  }
  requestAnimationFrame(frame);
}

function bootSelect() {
  const grid = document.getElementById("char-grid");
  grid.innerHTML = CHARACTERS.map((c) =>
    `<button class="char-card" data-pick="${c.id}"><div>${characterSvg(c.id)}</div><div class="nm">${esc(c.name)}</div><div class="ja">${esc(c.nameJa)}</div></button>`
  ).join("");
  const saved = load();
  const cont = document.getElementById("btn-continue");
  if (saved) {
    cont.hidden = false;
    const c = characterById(saved.characterId);
    const n = saved.completed ? Object.keys(saved.completed).length : 0;
    cont.textContent = `つづきから Continue · ${c.name} · ${n} stamps`;
  }
  let picked = saved ? saved.characterId : null;
  function select(id) {
    picked = id;
    document.querySelectorAll(".char-card").forEach((el) => el.classList.toggle("selected", el.dataset.pick === id));
    const c = characterById(id);
    document.getElementById("preview").innerHTML = `${characterSvg(c.id)}<div><h2>${esc(c.nameJa)} ${esc(c.name)}</h2><p>${esc(c.blurb)}</p></div>`;
    document.getElementById("btn-start").disabled = false;
  }
  grid.addEventListener("click", (e) => {
    const b = e.target.closest("[data-pick]");
    if (b) select(b.dataset.pick);
  });
  if (picked) select(picked);
  document.getElementById("btn-start").addEventListener("click", () => {
    if (!picked) return;
    if (saved && Object.keys(saved.completed || {}).length && !confirm("Start a new day? Stamps on this device will reset.")) return;
    state.characterId = picked;
    state.lat = START.lat;
    state.lng = START.lng;
    state.completed = {};
    state.activeId = "scramble";
    state.introduced = false;
    save();
    startGame(false);
  });
  cont.addEventListener("click", () => {
    const data = load();
    if (!data) return;
    Object.assign(state, {
      characterId: data.characterId,
      lat: data.lat,
      lng: data.lng,
      facing: data.facing || 1,
      completed: data.completed || {},
      activeId: data.activeId || "scramble",
      muted: !!data.muted,
      introduced: true,
      tab: data.tab || "daily"
    });
    startGame(true);
  });
}

window.TQ = {
  preview(missionId) {
    const place = placesFor(missionId)[0];
    if (!place) return;
    if (!state.characterId) state.characterId = "mochi";
    openCard(place);
  },
  get state() { return state; },
  setPos(lat, lng) {
    state.lat = lat; state.lng = lng; state.dest = null; state.userPanned = false;
    if (player) player.setLatLng([lat, lng]);
    if (map) map.setView([lat, lng], map.getZoom(), { animate: false });
  },
  places: () => PLACES,
  missions: () => MISSIONS
};

bootSelect();

if ("serviceWorker" in navigator && location.protocol.startsWith("http") && !location.search.includes("nosw=1")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
