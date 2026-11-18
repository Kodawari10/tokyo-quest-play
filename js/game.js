const SAVE_KEY = "tokyo-quest-v1";
const M_LAT = 111320;
const WALK = 13;
const HURRY = 28;
const PRICE = { onigiri: 150, vending: 130, ramen: 420, dagashi: 80 };
const EARN = {
  scramble: 120, onigiri: 80, station: 200, vending: 50, ramen: 200, park: 160, shrine: 240, tower: 260, lion: 180, sento: 200,
  senso: 220, gacha: 40, nakamise: 160, hoppy: 180, ameyoko: 160, kanda: 200, yoko: 180
};
const HOURS = {
  lion: [11, 22, "The kissaten is dark. Records start at 11."],
  ramen: [11, 22, "The noren is still down. Ramen starts at 11."],
  sento: [12, 22, "The bath opens at noon."],
  nonbei: [17, 23, "This alley wakes up after 17:00."],
  golden: [17, 23, "Golden Gai is a night place. Come back after 17:00."],
  omoide: [17, 23, "The yakitori smoke starts in the evening."],
  harmonica: [17, 23, "The stools fill up after dark."],
  hoppy: [17, 23, "Hoppy Street lights its lanterns after 17:00."],
  yoko: [17, 23, "Under the tracks, the counters open at dusk."],
  yanaka: [8, 17, "Yanaka Ginza is a daytime shopping street."],
  shotengai: [8, 17, "The arcade opens in the morning."],
  dagashi: [8, 18, "The candy shop is a daytime stop."],
  depachika: [10, 20, "The food floor runs from 10."],
  nakamise: [9, 19, "Nakamise opens at 9 and closes by evening."],
  ameyoko: [8, 18, "Ameyoko is a morning and afternoon market."],
  senso: [6, 17, "The temple grounds are a daytime visit."],
  kanda: [9, 17, "The shrine on the hill is a daytime stop."],
  gacha: [10, 21, "The capsule machines open at 10."]
};
const CAPSULES = [
  { id: "shiba", name: "Shiba squeeze", nameJa: "柴犬", rare: false },
  { id: "lantern-cap", name: "Lantern", nameJa: "提灯", rare: false },
  { id: "onigiri-cap", name: "Onigiri", nameJa: "おにぎり", rare: false },
  { id: "train-cap", name: "Yamanote", nameJa: "山手線", rare: false },
  { id: "neko-cap", name: "Beckoning cat", nameJa: "招き猫", rare: false },
  { id: "tower-cap", name: "Tiny tower", nameJa: "タワー", rare: true },
  { id: "daruma", name: "Daruma", nameJa: "だるま", rare: true },
  { id: "kaminari", name: "Thunder gate", nameJa: "雷門", rare: true }
];
const CHARMS = [
  { id: "kotsu", name: "Safe travel", nameJa: "交通安全", perk: "Hurry is quicker." },
  { id: "kinun", name: "Money luck", nameJa: "金運", perk: "Quests pay a little more." },
  { id: "kaiun", name: "Open luck", nameJa: "開運", perk: "Rare capsules show up more." },
  { id: "kenko", name: "Health", nameJa: "健康", perk: "The bath pays a little extra." }
];
const FORTUNES = [
  { id: "daikichi", name: "大吉", line: "Great luck. The rest of the day leans your way." },
  { id: "chukichi", name: "中吉", line: "Good luck. Nothing flashy, everything fine." },
  { id: "kichi", name: "吉", line: "Luck enough. Keep walking." },
  { id: "shokichi", name: "小吉", line: "A small luck. It still counts." }
];
const BADGE_NAME = {
  secret: "ひみつ", night: "夜ふかし", collector: "カプセル", east: "東東京", daily: "今日", charm: "お守り"
};
const LANTERN_SPOTS = [
  [35.6599887, 139.7015062], [35.6940636, 139.7046894], [35.6930689, 139.6995016],
  [35.703743, 139.5792576], [35.6750484, 139.6994785], [35.7010379, 139.7405725],
  [35.71379, 139.794127], [35.714736, 139.79675], [35.672133, 139.760328]
];
const COACH = [
  "Arrows, WASD, or the pad. Shift or はや足 hurries. The streets under you are the real ones.",
  "Pink pins are everyday errands. Gold pins are local secrets. Walk up until a speech bubble appears.",
  "A finished quest names the real place. 📓 keeps it. ¥500 on the train board opens Asakusa, Ueno, Akihabara, and Ginza."
];
const TOYS = [
  { id: "omamori", name: "Omamori", nameJa: "お守り" },
  { id: "neko-charm", name: "Beckoning cat", nameJa: "招き猫チャーム" },
  { id: "train-pin", name: "Train pin", nameJa: "電車ピンズ" },
  { id: "onigiri-strap", name: "Onigiri strap", nameJa: "おにぎりストラップ" },
  { id: "lantern", name: "Tiny lantern", nameJa: "小さな提灯" }
];

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
  tab: "daily",
  yen: 800,
  hour: 9,
  stamps: [],
  toys: [],
  walked: 0,
  east: false,
  capsules: [],
  charms: [],
  charm: null,
  badges: [],
  streak: 0,
  lastDate: "",
  todayCount: 0,
  goalDone: "",
  coach: 0,
  bookTab: "places",
  rain: false
};

let map, player, poiMarkers = [], lanternMarkers = [], landmarkMarkers = [], audioCtx, locMap, musicTimer, timingFrame, rhythmTimer, performerFrame, rainGain;
let rhythmStep = 0;
let rhythmHits = 0;
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
function playableMissions() { return MISSIONS.filter((m) => !m.east || state.east); }
function everyday() { return playableMissions().filter((m) => !m.secret); }
function secrets() { return playableMissions().filter((m) => m.secret); }
function countDone(list) { return list.filter((m) => done(m.id)).length; }

function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !data.characterId || (data.version !== 1 && data.version !== 2 && data.version !== 3)) return null;
    return data;
  } catch (e) { return null; }
}
function save() {
  const data = {
    version: 3,
    characterId: state.characterId,
    lat: state.lat,
    lng: state.lng,
    facing: state.facing,
    completed: state.completed,
    activeId: state.activeId,
    muted: state.muted,
    introduced: state.introduced,
    tab: state.tab,
    yen: state.yen,
    hour: state.hour,
    stamps: state.stamps,
    toys: state.toys,
    east: !!state.east,
    capsules: state.capsules,
    charms: state.charms,
    charm: state.charm,
    badges: state.badges,
    streak: state.streak,
    lastDate: state.lastDate,
    todayCount: state.todayCount,
    goalDone: state.goalDone,
    coach: state.coach,
    rain: !!state.rain
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
  return playableMissions().find((m) => !done(m.id)) || null;
}
function unlockedPlace(p) {
  const st = STATIONS.find((s) => s.id === p.id);
  if (st && st.east && !state.east) return false;
  const m = missionById(p.mission);
  if (m && m.east && !state.east) return false;
  return true;
}
function grantBadge(id) {
  if (!state.badges) state.badges = [];
  if (state.badges.includes(id)) return;
  state.badges.push(id);
}
function rankName() {
  const n = state.stamps.length;
  if (n >= 12) return "地元";
  if (n >= 6) return "通";
  if (n >= 3) return "近所";
  return "見習い";
}
function hoursOf(mission) { return HOURS[mission.id] || null; }
function placeOpen(mission) {
  const h = hoursOf(mission);
  if (!h) return true;
  return state.hour >= h[0] && state.hour < h[1];
}
function giveToy(t) {
  if (!state.toys.some((x) => x.id === t.id)) state.toys.push(t);
}
function activeMission() { return missionById(state.activeId) || nextIncomplete() || MISSIONS[0]; }

function clamp() {
  state.lat = Math.min(BOUNDS.north, Math.max(BOUNDS.south, state.lat));
  state.lng = Math.min(BOUNDS.east, Math.max(BOUNDS.west, state.lng));
}

function initMap() {
  map = new maplibregl.Map({
    container: "map",
    style: "css/cartoon-style.json",
    center: [state.lng, state.lat],
    zoom: 16.4,
    minZoom: 12.5,
    maxZoom: 18.5,
    maxBounds: [[BOUNDS.west, BOUNDS.south], [BOUNDS.east, BOUNDS.north]],
    attributionControl: true,
    dragRotate: false,
    pitchWithRotate: false,
    keyboard: false,
    doubleClickZoom: false
  });
  map.addControl(new maplibregl.NavigationControl({ showCompass: false, visualizePitch: false }), "top-right");
  map.on("dragstart", () => { state.userPanned = true; });
  map.on("click", (e) => {
    if (state.busy) return;
    state.dest = { lat: e.lngLat.lat, lng: e.lngLat.lng };
    state.userPanned = false;
  });
  map.on("error", (ev) => {
    const msg = (ev && ev.error && ev.error.message) || "";
    console.error("map", msg);
    if (/style|ajax|network|failed/i.test(msg)) {
      const b = document.getElementById("banner");
      if (!b.hidden) return;
      b.hidden = false;
      b.textContent = "The cartoon map needs a network connection. Your stamps are still saved on this device.";
    }
  });
  const el = document.createElement("div");
  el.className = "char-marker";
  el.innerHTML = spriteHtml();
  player = new maplibregl.Marker({ element: el, anchor: "bottom" }).setLngLat([state.lng, state.lat]).addTo(map);
  map.on("zoom", syncZoomChrome);
  map.on("load", () => {
    buildMarkers();
    buildLandmarks();
    buildAtmosphere();
    applySky();
    syncZoomChrome();
    if (!state.introduced && state.coach < COACH.length) showCoach();
    const inner = document.querySelector(".maplibregl-ctrl-attrib-inner");
    if (inner && !/OpenStreetMap/.test(inner.textContent)) {
      inner.insertAdjacentHTML("beforeend", ' © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> © <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> <a href="https://openfreemap.org" target="_blank">OpenFreeMap</a>');
    }
  });
}

function spriteHtml() {
  return `<div class="sprite" id="sprite" style="transform:scaleX(${state.facing})"><div class="bob">${characterSvg(state.characterId)}</div></div>`;
}
function paintCharacter() {
  if (!player) return;
  const el = player.getElement();
  if (el) el.innerHTML = spriteHtml();
}

function visiblePlaces() {
  const out = [];
  for (const m of MISSIONS) {
    const places = placesFor(m.id).filter(unlockedPlace);
    if (!places.length) continue;
    if (!done(m.id) || m.repeat) out.push(...places);
    else {
      const keep = state.completed[m.id] && state.completed[m.id].placeId;
      const one = places.find((p) => p.id === keep) || places[0];
      if (one) out.push(one);
    }
  }
  return out;
}
function buildMarkers() {
  if (!map) return;
  poiMarkers.forEach((mk) => mk.remove());
  poiMarkers = [];
  const active = state.activeId;
  for (const p of visiblePlaces()) {
    const m = missionById(p.mission);
    const isDone = done(p.mission);
    const cls = ["pin", m.secret ? "secret" : "everyday", p.mission === active && !isDone ? "active" : "", isDone ? "done" : ""].join(" ");
    const el = document.createElement("button");
    el.type = "button";
    el.className = "pin-marker";
    const art = (HOUSE[m.glyph] || HOUSE.lane)();
    el.innerHTML = `<div class="${cls}">${art}<em class="pin-tag">${esc(p.nameJa)}</em></div>`;
    el.addEventListener("click", (ev) => {
      ev.stopPropagation();
      if (state.busy) return;
      state.activeId = p.mission;
      state.dest = { lat: p.lat, lng: p.lng };
      state.userPanned = false;
      renderQuest();
      renderHud();
      buildMarkers();
    });
    const marker = new maplibregl.Marker({ element: el, anchor: "bottom" }).setLngLat([p.lng, p.lat]).addTo(map);
    poiMarkers.push(marker);
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
    let speed = (state.hurry || state.keys.hurry) ? HURRY : WALK;
    if (state.charm === "kotsu" && (state.hurry || state.keys.hurry)) speed = 36;
    state.lat += (vy * speed * dt) / M_LAT;
    state.lng += (vx * speed * dt) / mLng(state.lat);
    clamp();
    if (Math.abs(vx) > 0.25) state.facing = vx > 0 ? 1 : -1;
    if (!state.userPanned) map.jumpTo({ center: [state.lng, state.lat] });
    state.walked += speed * dt;
    if (state.walked > 280) maybeEncounter();
    scheduleSave();
  }
  player.setLngLat([state.lng, state.lat]);
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
  const candidates = PLACES.filter((p) => unlockedPlace(p) && dist(here(), p) <= p.radius && (p.repeat || !done(p.mission)));
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
    : label + " · " + rankName();
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
  const pocket = document.getElementById("pocket");
  if (pocket) pocket.textContent = "¥" + state.yen + " · " + clockLabel();
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
    const hours = hoursOf(m);
    const shut = !done(m.id) && hours && !placeOpen(m) ? " · " + hours[0] + ":00" : "";
    const check = done(m.id) ? "✓ " : "";
    const tipBtn = done(m.id) && m.secret ? `<button class="btn tiny" data-tip="${m.id}">Tip</button>` : "";
    const walk = !done(m.id) ? `<button class="btn tiny" data-walk="${m.id}">歩く Walk</button>` : "";
    const ride = !done(m.id) && place && dist(here(), place) > 450 ? `<button class="btn tiny" data-ride-mission="${m.id}">電車 Train</button>` : "";
    return `<button class="quest-item${on}${dn}" data-mission="${m.id}">
      <span class="q-ico">${(HOUSE[m.glyph] || HOUSE.lane)()}</span>
      <span><span class="t">${check}${esc(m.titleJa)} ${badge}</span><span class="s">${esc(m.title)} · ${esc(m.areaJa)}${esc(shut)}</span></span>
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
  const rows = STATIONS.filter((s) => !s.east || state.east).map((s) => {
    const d = formatDist(dist(here(), s));
    return `<button class="train-row" data-station="${s.id}">
      <span><b>${esc(s.nameJa)}</b> ${esc(s.name)}<br><small style="color:var(--ink-soft)">${esc(s.line)}</small></span>
      <span class="dist">${esc(d)}</span>
    </button>`;
  }).join("");
  const pass = state.east ? "" : `<button class="btn primary" id="buy-east" type="button" style="width:100%;margin-bottom:8px">東東京パス ¥500</button>
    <p class="sub">Asakusa, Ueno, Akihabara, and Ginza. Real stations, a temple, a market, a capsule hall.</p>`;
  box.innerHTML = pass + rows;
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
    player.setLngLat([state.lng, state.lat]);
    const zoom = Math.max(16, Math.min(17.2, map.getZoom()));
    map.jumpTo({ center: [state.lng, state.lat], zoom });
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

function wardFor(place) {
  const blob = `${place.areaJa || ""} ${place.area || ""} ${place.nameJa || ""}`;
  const table = [
    [/渋谷|道玄坂|神南|スクランブル/, "Shibuya", "渋谷区"],
    [/神宮前|原宿|代々木|明治/, "Shibuya", "渋谷区"],
    [/新宿|神南/, "Shinjuku", "新宿区"],
    [/下北沢/, "Setagaya", "世田谷区"],
    [/豪徳寺|等々力/, "Setagaya", "世田谷区"],
    [/目黒|池尻/, "Meguro", "目黒区"],
    [/阿佐/, "Suginami", "杉並区"],
    [/吉祥寺/, "Musashino", "武蔵野市"],
    [/神楽坂/, "Shinjuku", "新宿区"],
    [/谷中|千駄木/, "Taito", "台東区"],
    [/虎ノ門|神谷|タワー|港/, "Minato", "港区"],
    [/浅草|上野|アメ|仲見|雷門/, "Taito", "台東区"],
    [/秋葉|神田/, "Chiyoda", "千代田区"],
    [/銀座|有楽|産直/, "Chuo", "中央区"]
  ];
  for (const [re, en, ja] of table) if (re.test(blob)) return { en, ja };
  return { en: "Tokyo", ja: "東京" };
}

function stampFrom(place, missionId) {
  const ward = wardFor(place);
  const station = nearestStation(place);
  return {
    missionId,
    placeId: place.id,
    name: place.name,
    nameJa: place.nameJa,
    area: place.areaJa || "",
    ward: ward.en,
    wardJa: ward.ja,
    station: station.name,
    stationJa: station.nameJa,
    lat: place.lat,
    lng: place.lng,
    osm: place.osm,
    at: Date.now()
  };
}

function rememberStamp(place, missionId) {
  state.stamps = state.stamps.filter((s) => s.missionId !== missionId);
  state.stamps.push(stampFrom(place, missionId));
}

function backfillStamps() {
  Object.keys(state.completed).forEach((id) => {
    if (state.stamps.some((s) => s.missionId === id)) return;
    const rec = state.completed[id];
    const place = placeById(rec.placeId) || placesFor(id)[0];
    if (place) rememberStamp(place, id);
  });
}

function clockLabel() {
  const h = state.hour;
  const part = h < 11 ? "朝" : h < 16 ? "昼" : h < 19 ? "夕" : "夜";
  return part + " " + h + ":00";
}

function applySky() {
  const el = document.getElementById("map");
  if (!el) return;
  const evening = state.hour >= 17 && state.hour < 19;
  const night = state.hour >= 19 || state.hour < 6;
  el.classList.toggle("evening", evening);
  el.classList.toggle("night", night);
  el.classList.toggle("rainy", !!state.rain);
  if (map && map.getLayer("dusk-wash")) {
    map.setPaintProperty("dusk-wash", "fill-opacity", evening ? 0.2 : 0);
    map.setPaintProperty("night-wash", "fill-opacity", night ? 0.5 : 0);
  }
  syncLanterns();
  syncLandmarks();
}
function syncLanterns() {
  lanternMarkers.forEach((mk) => mk.remove());
  lanternMarkers = [];
  if (!map) return;
  const on = state.hour >= 17 || state.hour < 6;
  if (!on) return;
  LANTERN_SPOTS.forEach(([lat, lng]) => {
    const el = document.createElement("div");
    el.className = "lantern-glow";
    lanternMarkers.push(new maplibregl.Marker({ element: el, anchor: "center" }).setLngLat([lng, lat]).addTo(map));
  });
}
const LANDMARKS = [
  { kind: "pagoda", name: "五重塔", lat: 35.7141, lng: 139.79604 },
  { kind: "torii", name: "大鳥居", lat: 35.67399, lng: 139.7014 },
  { kind: "tower", name: "東京タワー", lat: 35.65856, lng: 139.74544 },
  { kind: "skytree", name: "スカイツリー", lat: 35.71005, lng: 139.81071 }
];
function buildLandmarks() {
  if (!map || landmarkMarkers.length) return;
  LANDMARKS.forEach((spot) => {
    const el = document.createElement("div");
    el.className = "landmark";
    el.innerHTML = `${landmarkSvg(spot.kind)}<em>${spot.name}</em>`;
    landmarkMarkers.push(new maplibregl.Marker({ element: el, anchor: "bottom" }).setLngLat([spot.lng, spot.lat]).addTo(map));
  });
}
function syncLandmarks() {
  if (!map) return;
  const z = map.getZoom();
  const show = z >= 12.4 && z <= 15.6;
  landmarkMarkers.forEach((mk) => { mk.getElement().style.display = show ? "" : "none"; });
}
function syncZoomChrome() {
  const el = document.getElementById("map");
  if (!el || !map) return;
  el.classList.toggle("named", map.getZoom() >= 15.4);
  syncLandmarks();
}
function buildAtmosphere() {
  if (document.getElementById("atmosphere")) return;
  const root = document.createElement("div");
  root.id = "atmosphere";
  root.className = "atmosphere";
  root.setAttribute("aria-hidden", "true");
  let bits = "";
  for (let i = 0; i < 10; i++) {
    bits += `<i class="petal" style="left:${6 + i * 9}%;animation-delay:${i * 1.4}s;animation-duration:${14 + (i % 4)}s"></i>`;
    bits += `<i class="raindrop" style="left:${4 + i * 9.5}%;animation-delay:${(i % 6) * 0.25}s"></i>`;
  }
  root.innerHTML = bits;
  const canvasWrap = map.getCanvasContainer();
  if (canvasWrap && canvasWrap.parentNode) canvasWrap.parentNode.insertBefore(root, canvasWrap.nextSibling);
}
function cardHead(m, open) {
  const art = (HOUSE[m.glyph] || HOUSE.lane)();
  const seal = m.secret ? `<span class="badge">ひみつ</span>` : `<span class="badge everyday-badge">日常</span>`;
  const sign = open ? `<span class="noren-sign open">営業中 Open</span>` : `<span class="noren-sign shut">準備中 Closed</span>`;
  return `<div class="place-head">${art}<div class="noren-row">${sign}${seal}</div></div>`;
}

function closedReason(mission) {
  const h = hoursOf(mission);
  if (!h || placeOpen(mission)) return "";
  return h[2];
}

function maybeEncounter() {
  state.walked = 0;
  if (state.busy || Math.random() > 0.42) return;
  const pool = ["cat", "tourist"];
  if (state.hour >= 11 && state.hour < 21) pool.push("performer");
  if (state.hour >= 17) pool.push("matsuri");
  openEncounter(pool[Math.floor(Math.random() * pool.length)]);
}
function openEncounter(kind) {
  const copy = {
    cat: ["道の猫", "A cat is sitting in the lane, washing one ear.", "なでる Pet"],
    tourist: ["迷子", "Someone is turning a paper map upside down. They want the station.", "案内する Point the way"],
    performer: ["路上ライブ", "A case is open. Clap three times when the dot sits in the green.", "拍手する Clap"],
    matsuri: ["小さな祭り", "Two lanterns and a drum have taken over a side street.", "のぞく Peek"]
  }[kind];
  state.busy = true;
  document.getElementById("enc-title").textContent = copy[0];
  document.getElementById("enc-body").textContent = copy[1];
  document.getElementById("enc-yes").hidden = false;
  document.getElementById("enc-yes").textContent = copy[2];
  document.getElementById("enc-play").innerHTML = "";
  const box = document.getElementById("encounter");
  box.hidden = false;
  box.dataset.kind = kind;
}
function resolveEncounter(kind) {
  cancelAnimationFrame(performerFrame);
  if (kind === "cat") {
    state.yen += 40;
    giveToy({ id: "street-cat", name: "Street hello", nameJa: "道の猫" });
  } else if (kind === "tourist") {
    state.yen += 80;
  } else if (kind === "performer") {
    state.yen += 70;
    giveToy({ id: "clap", name: "Encore", nameJa: "アンコール" });
  } else if (kind === "matsuri") {
    state.yen += 100;
    giveToy({ id: "matsuri", name: "Little festival", nameJa: "小さな祭り" });
  }
  document.getElementById("encounter").hidden = true;
  state.busy = false;
  chime();
  renderHud();
  save();
}
function startPerformer() {
  document.getElementById("enc-yes").hidden = true;
  document.getElementById("enc-play").innerHTML = `<div class="timing"><div class="zone"></div><div class="dot" id="perf-dot"></div></div>
    <button class="btn primary" id="perf-tap" style="width:100%;margin-top:8px">いま Clap</button>
    <p class="sub" id="perf-count">0 / 3</p>`;
  let hits = 0;
  const t0 = performance.now();
  const dot = document.getElementById("perf-dot");
  const loop = (now) => {
    const phase = ((now - t0) % 1400) / 1400;
    const x = phase < 0.5 ? phase * 2 : (1 - phase) * 2;
    dot.style.left = (8 + x * 84) + "%";
    dot.dataset.x = String(x);
    performerFrame = requestAnimationFrame(loop);
  };
  performerFrame = requestAnimationFrame(loop);
  document.getElementById("perf-tap").onclick = () => {
    const x = Number(dot.dataset.x || 0);
    if (x > 0.42 && x < 0.58) {
      hits += 1;
      document.getElementById("perf-count").textContent = hits + " / 3";
      if (hits >= 3) resolveEncounter("performer");
    } else showToast("The beat slipped. Try the green gap.");
  };
}

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
  cancelAnimationFrame(timingFrame);
  const mission = missionById(place.mission);
  const why = closedReason(mission);
  showScene(mission);
  if (why) {
    document.querySelector("#scene .card").classList.add("notice");
    const opens = (hoursOf(mission) || [11])[0];
    document.getElementById("card-body").innerHTML = `${cardHead(mission, false)}<h3>${esc(mission.titleJa)}</h3><p>${esc(why)}</p>
      <button class="btn primary" id="wait-open" style="width:100%">${opens}時まで待つ Wait until ${opens}</button>`;
    document.getElementById("wait-open").onclick = () => {
      const h = hoursOf(mission);
      state.hour = h ? h[0] : 11;
      applySky();
      renderHud();
      openCard(place);
    };
    return;
  }
  renderCard();
}
function stopMinis() {
  clearTimeout(rhythmTimer);
  cancelAnimationFrame(timingFrame);
  cancelAnimationFrame(performerFrame);
}
function closeCard() {
  const place = cardPlace;
  const wasReward = cardMode === "reward";
  stopMinis();
  if (locMap) { locMap.remove(); locMap = null; }
  const card = document.querySelector("#scene .card");
  if (card) card.classList.remove("loc", "notice");
  cancelAnimationFrame(timingFrame);
  document.getElementById("scene").hidden = true;
  state.busy = false;
  cardPlace = null;
  clearTimeout(waitTimer);
  if (wasReward && place && map) {
    state.userPanned = false;
    map.flyTo({ center: [place.lng, place.lat], zoom: 16.7, duration: 1300 });
  }
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
    const stamp = state.stamps.find((s) => s.missionId === m.id) || stampFrom(cardPlace, m.id);
    body.parentElement.classList.add("loc");
    body.innerHTML = `
      ${cardHead(m, true)}
      <div class="stamp">${m.secret ? "ひみつ" : "済"}</div>
      <h3>${esc(stamp.nameJa)}</h3>
      <p class="sub">${esc(stamp.name)}</p>
      <p class="loc-line">${esc(stamp.wardJa)} ${esc(stamp.ward)} · ${esc(stamp.stationJa)} station</p>
      <div id="loc-map" class="loc-map"></div>
      <p class="osm-note">${esc(stamp.lat.toFixed(5))}, ${esc(stamp.lng.toFixed(5))} · OpenStreetMap ${esc(stamp.osm)} · +¥${EARN[m.id] ?? 170}</p>
      <button class="btn primary" id="card-continue" style="width:100%;margin-top:8px">地図で見る On the map</button>
      <p>${esc(state.rewardLine || m.reward || "")}</p>
      ${tip}
      ${extra}`;
    requestAnimationFrame(() => mountLocMap(cardPlace));
    return;
  }
  body.parentElement.classList.remove("loc");
  body.parentElement.classList.remove("notice");
  const badge = m.secret ? '<span class="badge">ひみつ Local secret</span>' : "";
  let controls = "";
  if (cardMode === "fortune" || m.kind === "fortune") {
    controls = `<p>${esc(m.promptJa || "おみくじ")}</p><p class="sub">${esc(m.prompt || "Draw a fortune.")}</p>
      <button class="btn primary" data-fortune="1" style="width:100%">おみくじを引く Draw</button>`;
  } else if (m.kind === "choice") {
    controls = `<p>${esc(m.promptJa)}</p><p class="sub">${esc(m.prompt)}</p><div class="choices">` +
      m.choices.map((c) => `<button class="choice" data-choice="${esc(c.id)}"><b>${esc(c.label)}</b><span>${esc(c.sub)}</span></button>`).join("") +
      "</div>";
  } else if (m.kind === "ritual") {
    const dots = m.steps.map((s, i) => `<div class="step-dot${i < ritual ? " on" : ""}"></div>`).join("");
    const step = m.steps[ritual];
    controls = `<p>${esc(m.promptJa)}</p><p class="sub">${esc(m.prompt)}</p><div class="steps">${dots}</div>
      <button class="btn primary" data-ritual="1" style="width:100%">${esc(step.label)} · ${esc(step.sub)}</button>`;
  } else if (m.kind === "timing" || m.kind === "thermo") {
    const ja = m.kind === "thermo" ? "ちょうどいい湯" : (m.promptJa || "ドアが閉まる");
    controls = `<p>${esc(ja)}</p><p class="sub">${esc(m.prompt || "")}</p>
      <div class="timing"><div class="zone"></div><div class="dot" id="timing-dot"></div></div>
      <button class="btn primary" id="timing-tap" style="width:100%">${m.kind === "thermo" ? "止める Stop" : "いま Now"}</button>`;
    requestAnimationFrame(() => runTiming(m.reward || "Nice timing."));
  } else if (m.kind === "rhythm") {
    controls = `<p>${esc(m.promptJa || "")}</p><p class="sub">${esc(m.prompt || "")}</p>
      <div class="rhythm">
        <button type="button" data-beat="0">す</button>
        <button type="button" data-beat="1">す</button>
        <button type="button" data-beat="2">る</button>
      </div>`;
    requestAnimationFrame(runRhythm);
  } else if (m.kind === "gacha") {
    controls = `<p>${esc(m.promptJa || "")}</p><p class="sub">${esc(m.prompt || "")} · 所持 ¥${state.yen}</p>
      <div class="capsule" id="capsule-stage">?</div>
      <button class="btn primary" id="gacha-pull" style="width:100%">まわす ¥200</button>`;
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
  const cost = priceOf(m.id);
  const costLine = cost ? `<p class="sub">¥${cost} · 所持 ¥${state.yen}</p>` : "";
  body.innerHTML = `
    ${cardHead(m, placeOpen(m))}
    <h3>${esc(m.titleJa)} ${badge}</h3>
    <p class="sub">${esc(cardPlace.nameJa)} · ${esc(cardPlace.name)}</p>
    ${costLine}
    ${controls}
    <p class="osm-note">Real place · OpenStreetMap ${esc(cardPlace.osm)}</p>`;
}

function mountLocMap(place) {
  const el = document.getElementById("loc-map");
  if (!el || !place) return;
  if (locMap) { locMap.remove(); locMap = null; }
  locMap = new maplibregl.Map({
    container: el,
    style: "css/cartoon-style.json",
    center: [place.lng, place.lat],
    zoom: 14.6,
    interactive: false,
    attributionControl: false
  });
  const pin = document.createElement("div");
  pin.className = "loc-pin";
  new maplibregl.Marker({ element: pin, anchor: "center" }).setLngLat([place.lng, place.lat]).addTo(locMap);
  locMap.on("load", () => locMap && locMap.resize());
}

function runTiming(successLine) {
  const dot = document.getElementById("timing-dot");
  const btn = document.getElementById("timing-tap");
  if (!dot || !btn) return;
  const t0 = performance.now();
  const loop = (now) => {
    const phase = ((now - t0) % 1600) / 1600;
    const x = phase < 0.5 ? phase * 2 : (1 - phase) * 2;
    dot.style.left = (8 + x * 84) + "%";
    dot.dataset.x = String(x);
    timingFrame = requestAnimationFrame(loop);
  };
  timingFrame = requestAnimationFrame(loop);
  btn.onclick = () => {
    const x = Number(dot.dataset.x || 0);
    if (x > 0.42 && x < 0.58) {
      cancelAnimationFrame(timingFrame);
      finish(successLine || "You slipped through just as the doors kissed shut.");
    } else {
      showToast("Not in the green. Try again.");
    }
  };
}
function runRhythm() {
  const buttons = [...document.querySelectorAll("[data-beat]")];
  if (!buttons.length) return;
  rhythmHits = 0;
  let i = 0;
  const tick = () => {
    rhythmStep = i;
    buttons.forEach((b, n) => b.classList.toggle("lit", n === i));
    i = (i + 1) % buttons.length;
    rhythmTimer = setTimeout(tick, 720);
  };
  tick();
}
function pullGacha() {
  if (state.yen < 200) {
    showToast("¥200 is needed. You have ¥" + state.yen + ".");
    return;
  }
  state.yen -= 200;
  const rare = state.charm === "kaiun" ? 0.45 : 0.18;
  const wantRare = Math.random() < rare;
  const pool = CAPSULES.filter((c) => c.rare === wantRare);
  const item = pool[Math.floor(Math.random() * pool.length)];
  const stage = document.getElementById("capsule-stage");
  if (state.capsules.includes(item.id)) {
    state.yen += 40;
    if (stage) stage.textContent = item.nameJa + " · again +¥40";
    showToast(item.nameJa + " again. ¥40 back.");
  } else {
    state.capsules.push(item.id);
    if (state.capsules.length >= 4) grantBadge("collector");
    if (stage) stage.textContent = item.nameJa + (item.rare ? " · rare" : "");
    chime();
  }
  renderHud();
  if (!done("gacha")) finish("The capsule was a " + item.name + ".");
  else save();
}
function drawFortune() {
  const slip = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
  let extra = "";
  const left = CHARMS.filter((c) => !state.charms.includes(c.id));
  if (left.length) {
    const c = left[Math.floor(Math.random() * left.length)];
    state.charms.push(c.id);
    if (!state.charm) state.charm = c.id;
    extra = " Omamori: " + c.nameJa + ". " + c.perk;
    grantBadge("charm");
  }
  state.yen += slip.id === "daikichi" ? 80 : 20;
  finish(slip.name + ". " + slip.line + extra);
}

function priceOf(id) { return PRICE[id] || 0; }

function noteDay() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = state.lastDate === yesterday ? (state.streak || 0) + 1 : 1;
    state.lastDate = today;
    state.todayCount = 0;
  }
  state.todayCount += 1;
  if (state.todayCount >= 3 && state.goalDone !== today) {
    state.goalDone = today;
    state.yen += 150;
    grantBadge("daily");
    showToast("今日の目標、3つ。 +¥150");
  }
}
function finish(detailLine) {
  const m = missionById(cardPlace.mission);
  const cost = priceOf(m.id);
  if (state.yen < cost) {
    showToast("¥" + cost + " is needed. You have ¥" + state.yen + ".");
    return;
  }
  state.yen -= cost;
  let pay = EARN[m.id] ?? 170;
  if (state.charm === "kinun") pay = Math.round(pay * 1.25);
  if (state.charm === "kenko" && m.id === "sento") pay += 40;
  state.yen += pay;
  if (m.secret) grantBadge("secret");
  if (state.hour >= 19) grantBadge("night");
  state.hour = state.hour >= 22 ? 8 : state.hour + 1;
  noteDay();
  if ((m.id === "onigiri" || m.id === "vending") && Math.random() < 0.55) {
    const left = TOYS.filter((t) => !state.toys.some((owned) => owned.id === t.id));
    if (left.length) state.toys.push(left[Math.floor(Math.random() * left.length)]);
  }
  applySky();
  const wasLastOfItsKind = m.secret
    ? countDone(secrets()) + 1 === secrets().length
    : countDone(everyday()) + 1 === everyday().length;
  state.completed[m.id] = { at: Date.now(), placeId: cardPlace.id, detail: detailLine || "" };
  rememberStamp(cardPlace, m.id);
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
    const beat = e.target.closest("[data-beat]");
    const pull = e.target.closest("#gacha-pull");
    const fortune = e.target.closest("[data-fortune]");
    if (choice) {
      const m = missionById(cardPlace.mission);
      const c = m.choices.find((x) => x.id === choice.dataset.choice);
      let line = c ? c.line : m.reward;
      if (m.want && c && c.id === m.want) {
        state.yen += 40;
        line += " The sign matches. +¥40.";
      }
      finish(line);
    } else if (beat) {
      if (Number(beat.dataset.beat) === rhythmStep) {
        rhythmHits += 1;
        if (rhythmHits >= 3) {
          clearTimeout(rhythmTimer);
          const m = missionById(cardPlace.mission);
          finish(m.reward || "You slurped on the beat.");
        }
      } else {
        rhythmHits = 0;
        showToast("Off the beat. Follow the glowing bowl.");
      }
    } else if (pull) {
      pullGacha();
    } else if (fortune) {
      drawFortune();
    } else if (ritualBtn) {
      const m = missionById(cardPlace.mission);
      ritual += 1;
      if (ritual >= m.steps.length) {
        if (m.fortune) { cardMode = "fortune"; renderCard(); }
        else finish(m.reward);
      } else renderCard();
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
    if (e.target.closest("#buy-east")) {
      if (state.east) return;
      if (state.yen < 500) {
        showToast("¥500 is needed. You have ¥" + state.yen + ".");
        return;
      }
      state.yen -= 500;
      state.east = true;
      grantBadge("east");
      save();
      renderHud();
      renderQuest();
      renderTrain();
      buildMarkers();
      showToast("East stations are on the board.");
      return;
    }
    const row = e.target.closest("[data-station]");
    if (!row) return;
    const st = STATIONS.find((s) => s.id === row.dataset.station);
    if (st) rideTo(st);
  });
  document.getElementById("btn-help").addEventListener("click", () => { renderMiniChars(); document.getElementById("help").hidden = false; });
  document.getElementById("help-close").addEventListener("click", () => { document.getElementById("help").hidden = true; });
  document.getElementById("btn-sound").addEventListener("click", () => {
    state.muted = !state.muted;
    if (state.muted) { clearTimeout(musicTimer); musicTimer = null; stopRain(); }
    else { startAmbient(); syncRain(); }
    renderHud(); save();
  });
  document.getElementById("btn-rain").addEventListener("click", () => {
    state.rain = !state.rain;
    applySky();
    syncRain();
    save();
  });
  document.getElementById("btn-book").addEventListener("click", () => renderBook());
  document.getElementById("book-tab-places").addEventListener("click", () => { state.bookTab = "places"; renderBook(); });
  document.getElementById("book-tab-toys").addEventListener("click", () => { state.bookTab = "toys"; renderBook(); });
  document.getElementById("book-close").addEventListener("click", () => { document.getElementById("book").hidden = true; });
  document.getElementById("book-list").addEventListener("click", (e) => {
    const charm = e.target.closest("[data-charm]");
    if (charm && state.charms.includes(charm.dataset.charm)) {
      state.charm = charm.dataset.charm;
      save();
      renderBook();
      return;
    }
    const row = e.target.closest("[data-stamp]");
    if (!row) return;
    const s = state.stamps.find((x) => x.missionId === row.dataset.stamp);
    if (!s || !map) return;
    document.getElementById("book").hidden = true;
    state.userPanned = false;
    map.flyTo({ center: [s.lng, s.lat], zoom: 16.7, duration: 1200 });
  });
  document.getElementById("enc-yes").addEventListener("click", () => {
    const kind = document.getElementById("encounter").dataset.kind;
    if (kind === "performer") { startPerformer(); return; }
    resolveEncounter(kind);
  });
  document.getElementById("enc-no").addEventListener("click", () => {
    cancelAnimationFrame(performerFrame);
    document.getElementById("encounter").hidden = true;
    state.busy = false;
  });
  document.getElementById("coach-next").addEventListener("click", () => {
    state.coach += 1;
    if (state.coach >= COACH.length) {
      state.introduced = true;
      document.getElementById("coach").hidden = true;
      save();
    } else showCoach();
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
    map.flyTo({ center: [state.lng, state.lat], zoom: map.getZoom(), duration: 700 });
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
    startAmbient();
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

function startAmbient() {
  if (state.muted || musicTimer) return;
  const ctx = audio();
  if (!ctx) return;
  const notes = [392, 440, 494, 523, 494, 440, 392];
  let i = 0;
  const tick = () => {
    if (state.muted) { musicTimer = null; return; }
    tone(ctx, notes[i % notes.length], ctx.currentTime, 0.7, 0.008);
    i += 1;
    musicTimer = setTimeout(tick, 1280);
  };
  tick();
}
function stopRain() {
  if (rainGain) { rainGain.gain.value = 0; rainGain.disconnect(); rainGain = null; }
}
function syncRain() {
  const btn = document.getElementById("btn-rain");
  if (btn) btn.classList.toggle("on", !!state.rain);
  if (state.rain && !state.muted) startRain();
  else stopRain();
}
function startRain() {
  const ctx = audio();
  if (!ctx || rainGain) return;
  const length = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < length; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.015 * white) / 1.015;
    data[i] = last;
  }
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 700;
  rainGain = ctx.createGain();
  rainGain.gain.value = 0.02;
  src.connect(filter);
  filter.connect(rainGain);
  rainGain.connect(ctx.destination);
  src.start();
}

function showCoach() {
  const el = document.getElementById("coach");
  if (!el) return;
  if (state.coach >= COACH.length) { el.hidden = true; return; }
  el.hidden = false;
  document.getElementById("coach-text").textContent = COACH[state.coach];
  document.getElementById("coach-next").textContent = state.coach === COACH.length - 1 ? "はじめる OK" : "つぎへ Next";
}
function renderBook() {
  const blurb = document.getElementById("book-blurb");
  const box = document.getElementById("book-list");
  document.getElementById("book-tab-places").classList.toggle("on", state.bookTab !== "toys");
  document.getElementById("book-tab-toys").classList.toggle("on", state.bookTab === "toys");
  if (state.bookTab === "toys") {
    blurb.textContent = rankName() + " · streak " + (state.streak || 0) + " · today " + (state.todayCount || 0) + "/3";
    const badges = (state.badges || []).map((id) => `<span class="badge">${esc(BADGE_NAME[id] || id)}</span>`).join("") || "<span class=\"sub\">No badges yet.</span>";
    const charms = CHARMS.map((c) => {
      const owned = state.charms.includes(c.id);
      return `<button class="toy${state.charm === c.id ? " on" : ""}" type="button" data-charm="${c.id}" ${owned ? "" : "disabled"}><b>${esc(c.nameJa)}</b><small>${owned ? esc(c.perk) : "—"}</small></button>`;
    }).join("");
    const caps = CAPSULES.map((c) => {
      const owned = state.capsules.includes(c.id);
      return `<div class="toy${owned ? " on" : ""}"><b>${owned ? esc(c.nameJa) : "?"}</b><small>${c.rare ? "rare" : "capsule"}</small></div>`;
    }).join("");
    const found = state.toys.map((t) => `<div class="toy on"><b>${esc(t.nameJa)}</b><small>found</small></div>`).join("");
    box.innerHTML = `<div class="badge-row">${badges}</div><p class="sub">Omamori. Tap one you own to carry it.</p><div class="toy-grid">${charms}</div><p class="sub">Gachapon</p><div class="toy-grid">${caps}</div><div class="toy-grid">${found}</div>`;
  } else {
    blurb.textContent = state.stamps.length + " places";
    box.innerHTML = state.stamps.map((s) => `<button class="train-row" data-stamp="${esc(s.missionId)}">
      <span><b>${esc(s.nameJa)}</b><br><small style="color:var(--ink-soft)">${esc(s.wardJa)} · ${esc(s.stationJa)}</small></span>
      <span class="dist">地図</span></button>`).join("") || "<p>No stamps yet. Finish a quest.</p>";
  }
  document.getElementById("book").hidden = false;
}
function startGame(fromSave) {
  backfillStamps();
  document.getElementById("select").hidden = true;
  document.getElementById("game").hidden = false;
  initMap();
  bind();
  renderHud();
  renderQuest();
  applySky();
  const desktop = window.matchMedia("(min-width: 900px)").matches;
  document.getElementById("quest").hidden = !desktop;
  if (fromSave) showToast("つづきから。 Stamps restored on this device.");
  syncRain();
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
    state.yen = 800;
    state.hour = 9;
    state.stamps = [];
    state.toys = [];
    state.east = false;
    state.capsules = [];
    state.charms = [];
    state.charm = null;
    state.badges = [];
    state.streak = 0;
    state.lastDate = "";
    state.todayCount = 0;
    state.goalDone = "";
    state.coach = 0;
    state.walked = 0;
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
      tab: data.tab || "daily",
      yen: data.yen ?? 800,
      hour: data.hour ?? 9,
      stamps: data.stamps || [],
      toys: data.toys || [],
      east: !!data.east,
      capsules: data.capsules || [],
      charms: data.charms || [],
      charm: data.charm || null,
      badges: data.badges || [],
      streak: data.streak || 0,
      lastDate: data.lastDate || "",
      todayCount: data.todayCount || 0,
      goalDone: data.goalDone || "",
      coach: data.coach ?? 99,
      rain: !!data.rain
    });
    backfillStamps();
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
    if (player) player.setLngLat([lng, lat]);
    if (map) map.jumpTo({ center: [lng, lat] });
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
