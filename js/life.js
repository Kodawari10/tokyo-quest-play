/* Locals, dishes, and station stamps. They read the same save as the rest of the day. */
const LOCALS = [
  {
    id: "aoi", name: "Aoi", nameJa: "あおい", role: "Konbini clerk",
    home: "onigiri", need: "vending",
    hello: "Aoi the clerk writes your usual on the sign.",
    ask: "She would like a canned coffee from a street machine.",
    thanks: "Aoi kept the coffee for her break and pinned a tiny apron on your bag."
  },
  {
    id: "sato", name: "Sato-san", nameJa: "佐藤さん", role: "Shotengai",
    home: "shotengai", need: "dagashi",
    hello: "Sato-san is sweeping in front of the arcade.",
    ask: "She wants news from the dagashi shop in Yanaka.",
    thanks: "She presses a sweet into your hand."
  },
  {
    id: "ken", name: "Ken", nameJa: "けんさん", role: "Sento",
    home: "sento", need: "park",
    hello: "Ken nods from the sento desk.",
    ask: "After the bath, he says, sit in a park and tell me the trees were kind.",
    thanks: "He lends you a small towel charm."
  },
  {
    id: "momo", name: "Momo", nameJa: "もも", role: "Shrine cat",
    home: "shrine", need: "neko",
    hello: "A calico is waiting on the shrine step.",
    ask: "Momo wants to hear about the beckoning cats at Gotokuji.",
    thanks: "She blinks, slowly. That is the whole gift."
  }
];

function seasonId() {
  const m = new Date().getMonth();
  if (m >= 2 && m <= 4) return "sakura";
  if (m >= 5 && m <= 7) return "natsu";
  if (m >= 8 && m <= 10) return "momiji";
  return "fuyu";
}
const SEASON_LABEL = { sakura: "桜", natsu: "夏祭り", momiji: "紅葉", fuyu: "初詣" };
function seasonLine() {
  const id = seasonId();
  if (id === "sakura") return "Petals are stuck to your sleeve.";
  if (id === "natsu") return "A festival drum is somewhere past the next block.";
  if (id === "momiji") return "The ginkgo leaves are the color of canned tea.";
  return "The lights along the avenue are already on.";
}

const WARDROBE = [
  { id: "hat", nameJa: "帽子", name: "Hat", price: 200 },
  { id: "scarf", nameJa: "マフラー", name: "Scarf", price: 180 },
  { id: "umbrella", nameJa: "傘", name: "Umbrella", price: 220 },
  { id: "pack", nameJa: "リュック", name: "Pack", price: 260 }
];

const STICKERS = [
  { id: "sakura", label: "桜" },
  { id: "cat", label: "猫" },
  { id: "rice", label: "おにぎり" },
  { id: "lantern", label: "提灯" },
  { id: "heart", label: "♥" }
];

function ownedDecor() {
  const items = [];
  (state.toys || []).forEach((t) => items.push({ id: t.id, nameJa: t.nameJa }));
  (state.capsules || []).forEach((id) => {
    const c = (typeof CAPSULES !== "undefined" ? CAPSULES : []).find((x) => x.id === id);
    if (c) items.push({ id: c.id, nameJa: c.nameJa });
  });
  (state.foods || []).forEach((f) => items.push({ id: "dish-" + f.id, nameJa: f.nameJa }));
  (state.charms || []).forEach((id) => {
    const c = (typeof CHARMS !== "undefined" ? CHARMS : []).find((x) => x.id === id);
    if (c) items.push({ id: c.id, nameJa: c.nameJa });
  });
  return items;
}

function renderHome() {
  if (!state.room) state.room = [];
  if (!state.photos) state.photos = [];
  if (!state.draft) state.draft = [];
  const view = document.getElementById("room-view");
  const shelf = document.getElementById("room-shelf");
  const blurb = document.getElementById("home-blurb");
  const album = document.getElementById("album");
  const stickers = document.getElementById("sticker-row");
  if (!view) return;
  blurb.textContent = "A one-room machiya. Tap something you own to set it on the shelf.";
  const placed = state.room.map((id) => {
    const item = ownedDecor().find((x) => x.id === id);
    return `<span class="room-item">${item ? item.nameJa : id}</span>`;
  }).join("") || `<span class="room-item faint">まだ何もない</span>`;
  const drafts = state.draft.map((s, i) => `<i class="sticker s-${s.id}" style="left:${12 + (i % 4) * 22}%;top:${18 + (i % 3) * 18}%">${STICKERS.find((x) => x.id === s.id).label}</i>`).join("");
  view.innerHTML = `<div class="room">
      <div class="room-window"></div>
      <div class="room-shelf-art">${placed}</div>
      <div class="photo-frame">${drafts}</div>
    </div>`;
  const clothes = WARDROBE.map((w) => {
    const owned = (state.ownedWear || []).includes(w.id);
    const on = state.wear === w.id;
    const label = on ? "wearing" : owned ? "wear" : "¥" + w.price;
    return `<button class="toy${on ? " on" : ""}" type="button" data-wear="${w.id}"><b>${w.nameJa}</b><small>${label}</small></button>`;
  }).join("");
  shelf.innerHTML = `<p class="sub">Clothes</p><div class="toy-grid">${clothes}</div>` + ownedDecor().map((item) => {
    const on = state.room.includes(item.id) ? " on" : "";
    return `<button class="toy${on}" type="button" data-decor="${item.id}"><b>${item.nameJa}</b><small>${on ? "on the shelf" : "put away"}</small></button>`;
  }).join("") || "<p>Finish a quest or turn a capsule first.</p>";
  stickers.innerHTML = STICKERS.map((s) => `<button class="btn tiny" type="button" data-sticker="${s.id}">${s.label}</button>`).join("");
  album.innerHTML = (state.photos || []).map((p, n) => `<div class="album-shot">${p.shot ? `<img alt="Kept scene" src="${p.shot}"/>` : ""}<b>写真 ${n + 1}</b><span>${(p.stickers || []).map((s) => (STICKERS.find((x) => x.id === s.id) || {}).label || "").join(" ")}</span></div>`).join("");
  const fold = document.getElementById("origami-box");
  if (fold) fold.hidden = true;
  document.getElementById("home").hidden = false;
}

function npcFace(id) {
  const skin = "#ffe3cf";
  if (id === "momo") {
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="36" r="18" fill="#f0a050"/><path d="M16 22 l8 10 4-8z M48 22 l-8 10 -4-8z" fill="#f0a050"/><circle cx="26" cy="36" r="2" fill="#5c4652"/><circle cx="38" cy="36" r="2" fill="#5c4652"/><ellipse cx="32" cy="42" rx="3" ry="2" fill="#e07a6a"/></svg>`;
  }
  const hair = id === "sato" ? "#cfc8bc" : id === "ken" ? "#5c4652" : "#3a3040";
  const extra = id === "aoi" ? `<rect x="18" y="44" width="28" height="10" rx="3" fill="#f28aaa"/>` : id === "ken" ? `<rect x="18" y="16" width="28" height="6" rx="2" fill="#fff"/>` : `<circle cx="24" cy="34" r="4" fill="none" stroke="#5c4652"/><circle cx="40" cy="34" r="4" fill="none" stroke="#5c4652"/>`;
  return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="28" r="14" fill="${hair}"/><circle cx="32" cy="36" r="16" fill="${skin}"/>${extra}<circle cx="26" cy="36" r="1.4" fill="#5c4652"/><circle cx="38" cy="36" r="1.4" fill="#5c4652"/><path d="M29 42 q3 3 6 0" fill="none" stroke="#c47a88" stroke-width="1"/></svg>`;
}
function npcChip(id) {
  const npc = LOCALS.find((n) => n.id === id);
  if (!npc) return "";
  const step = (state.locals && state.locals[id]) || 0;
  return `<div class="npc-line">${npcFace(id)}<p><b>${npc.nameJa}</b> ${heartsOf(step)}</p></div>`;
}
function heartsOf(n) {
  const v = n || 0;
  return (v >= 1 ? "♥" : "♡") + (v >= 2 ? "♥" : "♡");
}

function noteLocals(missionId) {
  if (!state.locals) state.locals = {};
  const lines = [];
  state.speaker = "";
  LOCALS.forEach((npc) => {
    const step = state.locals[npc.id] || 0;
    if (step >= 2) return;
    if (step === 0 && missionId === npc.home) {
      state.locals[npc.id] = 1;
      state.speaker = npc.id;
      lines.push(npc.hello + " " + npc.ask);
      if (done(npc.need)) {
        state.locals[npc.id] = 2;
        state.yen += 60;
        giveToy({ id: "gift-" + npc.id, name: npc.name + "'s gift", nameJa: npc.nameJa + "の贈り物" });
        lines.push(npc.thanks);
        if (npc.id === "sato") {
          if (!state.rumors) state.rumors = [];
          if (!state.rumors.includes("cafe")) {
            state.rumors.push("cafe");
            lines.push("She lowers her voice. Canal Cafe, under Kagurazaka, by the water.");
          }
        }
      }
      return;
    }
    if (step === 1 && missionId === npc.need) {
      state.locals[npc.id] = 2;
      state.speaker = npc.id;
      state.yen += 60;
      giveToy({ id: "gift-" + npc.id, name: npc.name + "'s gift", nameJa: npc.nameJa + "の贈り物" });
      lines.push(npc.thanks);
      if (npc.id === "sato" && !(state.rumors || []).includes("cafe")) {
        if (!state.rumors) state.rumors = [];
        state.rumors.push("cafe");
        lines.push("She lowers her voice. Canal Cafe, under Kagurazaka, by the water.");
      }
    }
  });
  return lines.join(" ");
}

const DISHES = {
  onigiri: ["おにぎり", "Onigiri"],
  ramen: ["ラーメン", "Ramen"],
  soba: ["立ちそば", "Standing soba"],
  vending: ["缶ジュース", "A can"],
  dagashi: ["駄菓子", "Dagashi"],
  depachika: ["デパ地下", "Depachika"],
  "taiyaki-street": ["たい焼き", "Taiyaki"]
};

function noteDish(missionId, detail) {
  if (!DISHES[missionId]) return;
  if (!state.foods) state.foods = [];
  if (state.foods.some((f) => f.id === missionId)) return;
  state.foods.push({ id: missionId, nameJa: DISHES[missionId][0], name: DISHES[missionId][1], detail: detail || "" });
}

function noteEki(place) {
  if (!place || place.mission !== "station") return false;
  if (!state.eki) state.eki = [];
  if (state.eki.includes(place.id)) return false;
  state.eki.push(place.id);
  state.yen += 30;
  return true;
}

function dishesHtml() {
  const owned = state.foods || [];
  const rows = Object.keys(DISHES).map((id) => {
    const have = owned.find((f) => f.id === id);
    return `<div class="toy${have ? " on" : ""}"><b>${DISHES[id][0]}</b><small>${have ? DISHES[id][1] : "not yet"}</small></div>`;
  }).join("");
  return rows;
}

function ekiHtml() {
  const got = state.eki || [];
  return STATIONS.map((s) => {
    const have = got.includes(s.id);
    const locked = s.east && !state.east;
    return `<button class="train-row" data-eki="${s.id}" ${locked ? "disabled" : ""}>
      <span><b>${have ? "駅印 " : ""}${s.nameJa}</b><br><small style="color:var(--ink-soft)">${s.name}${locked ? " · east pass" : ""}</small></span>
      <span class="dist">${have ? "済" : "—"}</span></button>`;
  }).join("") + `<p class="sub">${got.length} / ${STATIONS.length} station stamps. Each new gate pays ¥30.</p>`;
}

function passportHtml() {
  const wards = ["渋谷区", "新宿区", "世田谷区", "台東区", "千代田区", "中央区", "港区", "杉並区", "武蔵野市", "目黒区"];
  const got = new Set((state.stamps || []).map((s) => s.wardJa));
  return `<div class="passport">${wards.map((w) => `<span class="${got.has(w) ? "on" : ""}">${w}</span>`).join("")}</div>`;
}

function friendsHtml() {
  return LOCALS.map((npc) => {
    const step = (state.locals && state.locals[npc.id]) || 0;
    const blurb = step === 0 ? "Not yet." : step === 1 ? npc.ask : npc.thanks;
    return `<div class="toy${step >= 2 ? " on" : ""}"><b>${npc.nameJa}</b><small>${heartsOf(step)} · ${npc.role}</small><small>${blurb}</small></div>`;
  }).join("");
}
