/* Locals, dishes, and station stamps. They read the same save as the rest of the day. */
const STORIES = [
  { id: "aoi", name: "Aoi", nameJa: "あおい", role: "Konbini clerk", chapters: [
    { on: "onigiri", text: "Aoi looks up from the onigiri shelf.", choices: [
      { label: "The usual, please", reply: "She writes しゃけ on the sign and smiles.", flag: "usual", yen: 20 },
      { label: "Something new today", reply: "She slides over a flavor you have never tried.", flag: "new", yen: 20 }
    ]},
    { on: "vending", text: "Aoi asked for a can. The machine hums.", choices: [
      { label: "Coffee for Aoi", reply: "She saves it for her break.", flag: "coffee", yen: 30 },
      { label: "Coffee for Sato-san too", reply: "She nods. Sato-san will hear about you.", flag: "sato", yen: 30 }
    ]},
    { on: "dagashi", text: "Aoi heard you found the candy shop.", choices: [
      { label: "Bring her an umaibo", reply: "She eats it behind the counter, like a secret.", yen: 40 },
      { label: "Tell her the shop was quiet", reply: "She says quiet shops are the good ones.", yen: 20 }
    ]},
    { on: "shrine", text: "Aoi is off duty, standing by the torii.", choices: [
      { label: "Invite her to share a break with Sato", reply: "The two of them split one onigiri. That is the ending she wanted.", flag: "ending-share", toy: { id: "gift-aoi", name: "Apron pin", nameJa: "エプロンのピン" }, yen: 80 },
      { label: "Listen to the night-shift story", reply: "She tells you about the 2 a.m. regulars, and keeps the rest.", flag: "ending-night", toy: { id: "gift-aoi", name: "Apron pin", nameJa: "エプロンのピン" }, yen: 40 }
    ]}
  ]},
  { id: "sato", name: "Sato-san", nameJa: "佐藤さん", role: "Shotengai", chapters: [
    { on: "shotengai", text: "Sato-san is sweeping the arcade.", choices: [
      { label: "Sweep with her", reply: "She lends you the spare broom.", flag: "sweep", yen: 20 },
      { label: "Buy a mandarin from her friend", reply: "The paper bag is warm from the sun.", flag: "mikan", yen: 10 }
    ]},
    { on: "dagashi", text: "She wanted news from the dagashi shop.", choices: [
      { label: "Umaibo is still ¥10", reply: "She laughs. Some prices should never grow up.", yen: 30 },
      { label: "The cat was on the counter", reply: "She says that cat belongs to nobody and everybody.", flag: "cat", yen: 30 }
    ]},
    { on: "yanaka", text: "Sato-san asks what Yanaka felt like.", choices: [
      { label: "The stairs at dusk", reply: "She remembers walking them as a girl.", yen: 20 },
      { label: "Cats on every wall", reply: "She tells you Momo would approve.", flag: "momo", yen: 20 }
    ]},
    { on: "park", text: "She has one more thing, said quietly.", choices: [
      { label: "Ask about the waterside cafe", reply: "Canal Cafe, under Kagurazaka. Don't tell the slope.", rumor: "cafe", flag: "ending-cafe", toy: { id: "gift-sato", name: "Mandarin bag", nameJa: "みかんの袋" }, yen: 60 },
      { label: "Ask her to tell Aoi hello", reply: "She will. Aoi pretends not to expect it.", flag: "ending-aoi", toy: { id: "gift-sato", name: "Mandarin bag", nameJa: "みかんの袋" }, yen: 40 }
    ]}
  ]},
  { id: "ken", name: "Ken", nameJa: "けんさん", role: "Sento", chapters: [
    { on: "sento", text: "Ken looks up from the sento desk.", choices: [
      { label: "The hot bath", reply: "He says you will feel it in your ears.", flag: "hot", yen: 20 },
      { label: "The warm one", reply: "He says that is how regulars stay.", flag: "warm", yen: 20 }
    ]},
    { on: "park", text: "Ken asked about the trees.", choices: [
      { label: "They were kind", reply: "He folds a towel as if that were the answer.", yen: 30 },
      { label: "I fell asleep", reply: "He laughs. Then the bath worked.", flag: "nap", yen: 30 }
    ]},
    { on: "lion", text: "Haru at the kissaten told Ken you sat still for a whole record.", choices: [
      { label: "It was the quiet I wanted", reply: "Ken says quiet is a kind of cleanliness.", yen: 20 },
      { label: "I was still warm from the bath", reply: "He looks pleased, and a little proud.", yen: 20 }
    ]},
    { on: "onigiri", text: "Aoi says you look steamed, in a good way.", choices: [
      { label: "Credit Ken", reply: "The towel charm is yours. Ken would pretend it is nothing.", toy: { id: "gift-ken", name: "Towel charm", nameJa: "タオルのお守り" }, yen: 50 },
      { label: "Keep it between you and the bath", reply: "Ken never asks who talks about him.", toy: { id: "gift-ken", name: "Towel charm", nameJa: "タオルのお守り" }, yen: 30 }
    ]}
  ]},
  { id: "momo", name: "Momo", nameJa: "もも", role: "Shrine cat", chapters: [
    { on: "shrine", text: "A calico blocks the shrine step.", choices: [
      { label: "Pet her first", reply: "She allows exactly three pats.", flag: "pet", yen: 10 },
      { label: "Bow first", reply: "She waits, which is her kind of bow.", flag: "bow", yen: 10 }
    ]},
    { on: "neko", text: "Momo wanted news of the beckoning cats.", choices: [
      { label: "They were everywhere", reply: "She squints, satisfied.", yen: 30 },
      { label: "One looked like her", reply: "She pretends not to care.", flag: "twin", yen: 30 }
    ]},
    { on: "inari", text: "The little Inari is smaller than Momo's pride.", choices: [
      { label: "Leave her a story", reply: "She listens with her eyes half shut.", yen: 20 },
      { label: "Leave her a quiet minute", reply: "That was the better offering.", yen: 20 }
    ]},
    { on: "park", text: "Saki the photographer is trying not to scare her.", choices: [
      { label: "Let Saki take one photo", reply: "Momo stays. The picture is mostly tail.", flag: "photo", toy: { id: "gift-momo", name: "Calico bell", nameJa: "三毛の鈴" }, yen: 40 },
      { label: "Shoo the camera away", reply: "Momo stays longer, which is the reward.", toy: { id: "gift-momo", name: "Calico bell", nameJa: "三毛の鈴" }, yen: 20 }
    ]}
  ]},
  { id: "haru", name: "Haru", nameJa: "はる", role: "Kissaten", chapters: [
    { on: "lion", text: "Haru sets a cup down without asking twice.", choices: [
      { label: "Blend, and no talking", reply: "He turns the record up one notch.", flag: "quiet", yen: 20 },
      { label: "Cake set", reply: "The fork is small. The afternoon gets larger.", flag: "cake", yen: 20 }
    ]},
    { on: "park", text: "Haru asks if the park was quieter than his shop.", choices: [
      { label: "The park won", reply: "He accepts defeat with a nod.", yen: 20 },
      { label: "Your shop won", reply: "He hides a smile in the cup.", yen: 20 }
    ]},
    { on: "sento", text: "Ken told Haru you survived the bath.", choices: [
      { label: "Ken runs a kind room", reply: "Haru says Ken is his oldest customer.", flag: "ken", yen: 30 },
      { label: "I went for the quiet after", reply: "Haru says that is why the record exists.", yen: 20 }
    ]},
    { on: "shrine", text: "Haru is closing early.", choices: [
      { label: "Thank him for the silence", reply: "He gives you a paper coaster to keep.", toy: { id: "gift-haru", name: "Paper coaster", nameJa: "紙のコースター" }, yen: 40 },
      { label: "Ask what record was last", reply: "He names it, then refuses to spell it.", toy: { id: "gift-haru", name: "Paper coaster", nameJa: "紙のコースター" }, yen: 20 }
    ]}
  ]},
  { id: "gaku", name: "Gaku", nameJa: "がく", role: "Ramen", chapters: [
    { on: "ramen", text: "Gaku slides the bowl without a speech.", choices: [
      { label: "Slurp honestly", reply: "He grunts, which is praise.", flag: "slurp", yen: 20 },
      { label: "Say it needs more onion", reply: "He adds onion, offended and correct.", flag: "onion", yen: 10 }
    ]},
    { on: "vending", text: "Gaku wants a tea for after the bowl.", choices: [
      { label: "Leave it on his counter", reply: "He drinks it facing the wall.", yen: 20 },
      { label: "Drink it yourself", reply: "He shrugs. The bowl was enough.", yen: 10 }
    ]},
    { on: "station", text: "Gaku mentions the last train.", choices: [
      { label: "You will make it", reply: "He starts the next bowl faster.", yen: 20 },
      { label: "Missing it is also a plan", reply: "He says that is how regulars are born.", flag: "miss", yen: 30 }
    ]},
    { on: "onigiri", text: "Aoi says Gaku never comes into the shop.", choices: [
      { label: "Bring him an onigiri anyway", reply: "He eats it after close. The ending is warm rice.", toy: { id: "gift-gaku", name: "Bowl ticket", nameJa: "替え玉券" }, yen: 50 },
      { label: "Leave him to his pot", reply: "Aoi says that is respect.", toy: { id: "gift-gaku", name: "Bowl ticket", nameJa: "替え玉券" }, yen: 20 }
    ]}
  ]},
  { id: "saki", name: "Saki", nameJa: "さき", role: "Photographer", chapters: [
    { on: "park", text: "Saki is framing a tree, not the people.", choices: [
      { label: "Stand out of the shot", reply: "She thanks you without looking up.", flag: "aside", yen: 10 },
      { label: "Ask to be in it", reply: "You are a blur. She likes that.", flag: "blur", yen: 10 }
    ]},
    { on: "scramble", text: "The crossing is her favorite crowd.", choices: [
      { label: "Cross when she says", reply: "The picture is mostly coats and one red light.", yen: 30 },
      { label: "Wait on the curb", reply: "She says the waiting is the photo.", yen: 20 }
    ]},
    { on: "tower", text: "Saki wants the tower small in the corner.", choices: [
      { label: "Look up with her", reply: "Your neck complains. The photo is worth it.", yen: 20 },
      { label: "Watch the street instead", reply: "She admits the street is better.", yen: 20 }
    ]},
    { on: "shrine", text: "Momo will not pose. Saki is delighted.", choices: [
      { label: "Help her wait", reply: "The photo is one ear and a bell. She prints you a copy.", toy: { id: "gift-saki", name: "Tiny print", nameJa: "小さなプリント" }, yen: 40 },
      { label: "Tell her to let the cat be", reply: "She closes the camera. Momo stays.", toy: { id: "gift-saki", name: "Tiny print", nameJa: "小さなプリント" }, yen: 20 }
    ]}
  ]}
];
const LOCALS = STORIES;

const FESTIVALS = [
  { id: "shibuya", name: "Shibuya", nameJa: "渋谷", test: (p) => /渋谷|神宮前|道玄坂|代々木/.test((p.areaJa || "") + (p.nameJa || "")) },
  { id: "yanaka", name: "Yanaka", nameJa: "谷中", test: (p) => /谷中|千駄木/.test((p.areaJa || "") + (p.nameJa || "")) },
  { id: "shinjuku", name: "Shinjuku", nameJa: "新宿", test: (p) => /新宿/.test((p.areaJa || "") + (p.nameJa || "")) },
  { id: "asakusa", name: "Asakusa", nameJa: "浅草", test: (p) => /浅草|鷲/.test((p.areaJa || "") + (p.nameJa || "")) }
];
function isoWeek(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - day);
  const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((date - start) / 86400000) + 1) / 7);
  return date.getUTCFullYear() + "-W" + String(week).padStart(2, "0");
}
function festivalNow() {
  const week = isoWeek(new Date());
  if (!state.festival || state.festival.week !== week) {
    const n = Number(week.slice(-2)) || 0;
    const place = FESTIVALS[n % FESTIVALS.length];
    state.festival = { week: week, id: place.id, progress: 0, done: false };
  }
  return state.festival;
}
function festivalSpec() {
  const fest = festivalNow();
  return FESTIVALS.find((f) => f.id === fest.id) || FESTIVALS[0];
}
function noteFestival(place) {
  if (!place) return "";
  const fest = festivalNow();
  if (fest.done) return "";
  const spec = festivalSpec();
  if (!spec.test(place)) return "";
  fest.progress += 1;
  if (fest.progress >= 3) {
    fest.done = true;
    state.yen += 200;
    if (!state.ownedWear) state.ownedWear = [];
    if (!state.ownedWear.includes("happi")) state.ownedWear.push("happi");
    giveToy({ id: "happi", name: "Festival coat", nameJa: "法被" });
    return "done";
  }
  return "lantern";
}
function seasonId() {
  if (typeof state !== "undefined" && state.seasonPick) return state.seasonPick;
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
function taleOf(id) {
  if (!state.tales) state.tales = {};
  if (!state.tales[id]) state.tales[id] = { chapter: 0, log: [], flags: [] };
  return state.tales[id];
}
function storyOfferFor(missionId) {
  for (let n = 0; n < STORIES.length; n++) {
    const npc = STORIES[n];
    const prog = taleOf(npc.id);
    const chapter = npc.chapters[prog.chapter];
    if (chapter && chapter.on === missionId) return { npc: npc, index: prog.chapter, chapter: chapter };
  }
  return null;
}
function noteLocals(missionId) {
  const offer = storyOfferFor(missionId);
  state.storyOffer = offer;
  if (!offer) { state.speaker = ""; return ""; }
  state.speaker = offer.npc.id;
  return offer.npc.nameJa + ": " + offer.chapter.text;
}
function applyTale(choiceIndex) {
  const offer = state.storyOffer;
  if (!offer) return;
  const choice = offer.chapter.choices[choiceIndex];
  if (!choice) return;
  const prog = taleOf(offer.npc.id);
  prog.log.push(offer.chapter.text + " — " + choice.reply);
  if (choice.flag) prog.flags.push(choice.flag);
  if (choice.yen) state.yen += choice.yen;
  if (choice.toy) giveToy(choice.toy);
  if (choice.rumor) {
    if (!state.rumors) state.rumors = [];
    if (!state.rumors.includes(choice.rumor)) state.rumors.push(choice.rumor);
    if (typeof buildMarkers === "function") buildMarkers();
  }
  prog.chapter += 1;
  if (!state.locals) state.locals = {};
  state.locals[offer.npc.id] = Math.min(4, prog.chapter);
  state.rewardLine = (state.rewardLine || "") + " " + choice.reply;
  state.storyOffer = null;
  save();
  chime();
  renderHud();
}
function heartsOf(n) {
  const v = n || 0;
  let s = "";
  for (let i = 0; i < 4; i++) s += i < v ? "♥" : "♡";
  return s;
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
  return STORIES.map((npc) => {
    const prog = (state.tales && state.tales[npc.id]) || { chapter: 0, log: [] };
    const log = (prog.log || []).map((line) => `<small>${line}</small>`).join("") || "<small>Not yet.</small>";
    return `<div class="toy${prog.chapter >= 4 ? " on" : ""}"><b>${npc.nameJa}</b><small>${heartsOf(prog.chapter)} · ${npc.role} · ${prog.chapter}/4</small>${log}</div>`;
  }).join("");
}
