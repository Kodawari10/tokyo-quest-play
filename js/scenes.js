/* Original pastel scenes for each quest. One illustration per real place. */
function stage(id, top, bottom, inner) {
  const petals = [0, 1, 2, 3, 4].map((i) =>
    `<circle class="scene-petal" cx="${90 + i * 180}" cy="${24 + (i % 2) * 16}" r="3.2" fill="${i % 2 ? "#f4b7c8" : "#f6e2a8"}" style="animation-delay:${i * 1.6}s"/>`
  ).join("");
  return `<svg class="stage" viewBox="0 0 960 540" preserveAspectRatio="xMidYMin meet" role="img" aria-label="${id}">
    <defs><linearGradient id="sky-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${top}"/><stop offset="100%" stop-color="${bottom}"/>
    </linearGradient></defs>
    <rect width="960" height="540" fill="url(#sky-${id})"/>
    <ellipse cx="760" cy="36" rx="120" ry="46" fill="#ffe7ae" opacity=".35"/>
    <g class="far-hill"><ellipse cx="180" cy="500" rx="260" ry="70" fill="#fff" opacity=".28"/><ellipse cx="720" cy="510" rx="300" ry="80" fill="#fff6ea" opacity=".35"/></g>
    <g class="mid-hill"><ellipse cx="300" cy="430" rx="180" ry="36" fill="#f7e7c8" opacity=".55"/><ellipse cx="680" cy="440" rx="160" ry="30" fill="#e7f0d8" opacity=".5"/></g>
    ${cloud(150, 64, 1.05)} ${cloud(520, 78, 0.9)}
    ${inner}
    ${petals}
  </svg>`;
}

function heroWear() {
  const w = state.wear || "";
  if (w === "hat") return `<ellipse cx="80" cy="34" rx="52" ry="14" fill="#f28aaa"/><rect x="40" y="30" width="80" height="12" rx="4" fill="#e07a96"/>`;
  if (w === "scarf") return `<path d="M36 118 h88 q8 22 -18 30 h-24 q-6 -8 0 -16z" fill="#e07a4a"/>`;
  if (w === "umbrella") return `<path d="M150 10 q-46 22 -54 46 h108 q-8 -24 -54 -46z" fill="#f4b7c8" stroke="#e07a96"/><line x1="150" y1="56" x2="150" y2="150" stroke="#5c4652" stroke-width="3"/>`;
  if (w === "pack") return `<rect x="6" y="96" width="30" height="40" rx="8" fill="#7eb6d4"/>`;
  if (w === "happi") return `<path d="M30 100 h100 l8 50 H22z" fill="#e15b5b" opacity=".85"/>`;
  return "";
}
function hero(x, foot, scale) {
  const s = (scale || 1) * 0.55;
  const raw = characterSvg(state.characterId) || "";
  const inner = raw.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  const y = foot - 148 * s;
  return `<g transform="translate(${x},${y}) scale(${s})"><g class="hero-bob">${inner}${heroWear()}</g></g>`;
}

function cloud(x, y, s) {
  return `<g class="cloud" transform="translate(${x},${y}) scale(${s || 1})" opacity=".9">
    <ellipse cx="0" cy="8" rx="28" ry="14" fill="#fff"/>
    <ellipse cx="22" cy="10" rx="20" ry="12" fill="#fff"/>
    <ellipse cx="-16" cy="12" rx="16" ry="10" fill="#fff"/>
  </g>`;
}

function person(x, y, shirt, delay) {
  return `<g class="crowd" style="animation-delay:${delay}s">
    <rect x="${x - 11}" y="${y}" width="22" height="26" rx="9" fill="${shirt}"/>
    <circle cx="${x}" cy="${y - 10}" r="10" fill="#ffe3cf"/>
    <circle class="eye" cx="${x - 3}" cy="${y - 11}" r="1.3" fill="#5c4652"/>
    <circle class="eye" cx="${x + 3}" cy="${y - 11}" r="1.3" fill="#5c4652"/>
  </g>`;
}

function lantern(x, y, color, delay) {
  return `<g class="sway" style="animation-delay:${delay || 0}s">
    <line x1="${x}" y1="${y - 36}" x2="${x}" y2="${y}" stroke="#8a5a4a" stroke-width="2"/>
    <rect x="${x - 12}" y="${y}" width="24" height="32" rx="10" fill="${color}"/>
    <rect x="${x - 7}" y="${y + 8}" width="14" height="12" rx="4" fill="#fff6d0"/>
    <path d="M${x - 8} ${y + 32} h16 l-3 6 h-10z" fill="#c4844a"/>
  </g>`;
}

function tree(x, y, s, leaf) {
  return `<g transform="translate(${x},${y}) scale(${s || 1})">
    <rect x="-6" y="10" width="12" height="36" rx="4" fill="#c4844a"/>
    <circle class="leaf" cx="0" cy="0" r="26" fill="${leaf || "#8ed4a8"}"/>
    <circle cx="-14" cy="8" r="16" fill="${leaf || "#8ed4a8"}"/>
    <circle cx="16" cy="6" r="14" fill="${leaf || "#7dbe6a"}"/>
  </g>`;
}

function kitty(x, y, s, color) {
  return `<g transform="translate(${x},${y}) scale(${s || 1})">
    <ellipse cx="0" cy="16" rx="18" ry="12" fill="${color}" stroke="#e7d0c8" stroke-width="2"/>
    <path d="M14 8c10 2 14 10 8 14" fill="${color}" stroke="#e7d0c8" stroke-width="2"/>
    <circle cx="0" cy="0" r="13" fill="${color}" stroke="#e7d0c8" stroke-width="2"/>
    <path d="M-11 -2 L-8 -16 L-2 -4" fill="${color}" stroke="#e7d0c8" stroke-width="2"/>
    <path d="M11 -2 L8 -16 L2 -4" fill="${color}" stroke="#e7d0c8" stroke-width="2"/>
    <circle class="eye" cx="-4" cy="1" r="1.7" fill="#5c4652"/>
    <circle class="eye" cx="4" cy="1" r="1.7" fill="#5c4652"/>
    <path d="M-2 6 h4" stroke="#c46a4a" stroke-width="1.2" stroke-linecap="round"/>
  </g>`;
}

function steam(x, y, delay) {
  return `<g class="steam" style="animation-delay:${delay || 0}s">
    <ellipse cx="${x}" cy="${y}" rx="10" ry="6" fill="#fff" opacity=".75"/>
    <ellipse cx="${x + 8}" cy="${y - 16}" rx="7" ry="5" fill="#fff" opacity=".55"/>
  </g>`;
}

function sign(text) {
  const w = Math.max(148, text.length * 22 + 36);
  return `<g>
    <rect x="28" y="18" width="${w}" height="40" rx="20" fill="#fff" opacity=".92"/>
    <text x="46" y="45" fill="#5c4652" font-size="20" font-family="Zen Maru Gothic, sans-serif">${text}</text>
  </g>`;
}

const SCENE_BUILDERS = {
  scramble() {
    const crowd = [
      [250, 430, "#ffb7c8", 0], [300, 448, "#b7ead4", 0.2], [360, 424, "#ffe7ae", 0.4],
      [430, 450, "#d5ecff", 0.1], [500, 430, "#f0c36a", 0.3], [560, 448, "#e4d4ff", 0.5],
      [620, 426, "#ffd0b0", 0], [680, 446, "#ff8fb8", 0.25]
    ].map(([x, y, c, d]) => person(x, y, c, d)).join("");
    return stage("scramble", "#ffd6ea", "#d9ecff", `
      ${cloud(140, 70, 1)} ${cloud(640, 90, 1.2)}
      <rect x="40" y="150" width="150" height="250" rx="16" fill="#fff"/>
      <rect x="60" y="170" width="110" height="70" rx="8" fill="#d5ecff"/>
      <rect x="760" y="120" width="160" height="280" rx="70" fill="#ffb7c8"/>
      <rect x="785" y="150" width="110" height="50" rx="10" fill="#fff" opacity=".7"/>
      <rect x="0" y="390" width="960" height="150" fill="#d7dde6"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="${80 + i * 100}" y="400" width="46" height="120" rx="6" fill="#fff" opacity=".92"/>`).join("")}
      <g>
        <rect class="signal-red" x="700" y="250" width="22" height="22" rx="11" fill="#e15b5b"/>
        <rect class="signal-green" x="700" y="278" width="22" height="22" rx="11" fill="#9ad7b0" opacity=".35"/>
      </g>
      ${crowd}
      ${hero(150, 500, 1)}
      ${sign("スクランブル")}`);
  },
  onigiri() {
    const balls = ["#fff6e8", "#ffb7c8", "#c9f0df", "#ffe7ae", "#fff6e8", "#ffd0b0"];
    return stage("onigiri", "#fff6ea", "#ffe3ef", `
      <rect x="0" y="300" width="960" height="240" fill="#f3e2d4"/>
      <rect x="70" y="70" width="820" height="300" rx="24" fill="#fff"/>
      <rect x="70" y="70" width="820" height="54" rx="24" fill="#ffb7c8"/>
      <text x="96" y="106" fill="#5c4652" font-size="26" font-family="Zen Maru Gothic, sans-serif">コンビニ</text>
      <rect x="120" y="160" width="430" height="200" rx="16" fill="#fff8f2" stroke="#f0d8cc"/>
      ${balls.map((c, i) => {
        const cx = 160 + (i % 3) * 120;
        const cy = 250 + Math.floor(i / 3) * 70;
        return `<path d="M${cx} ${cy} l16 -34 h-32 z" fill="${c}" stroke="#e7c9a8" stroke-width="2"/>`;
      }).join("")}
      <rect x="600" y="180" width="220" height="220" rx="20" fill="#d5ecff" opacity=".85"/>
      <rect x="640" y="300" width="140" height="100" rx="10" fill="#b7ead4"/>
      ${hero(700, 470, 1.05)}
      ${sign("おにぎり")}`);
  },
  station() {
    return stage("station", "#d5ecff", "#fff6ea", `
      <rect x="0" y="250" width="960" height="40" fill="#c9d4e0"/>
      <rect x="0" y="360" width="960" height="180" fill="#e7e2da"/>
      <rect x="0" y="348" width="960" height="14" fill="#f0c36a"/>
      <g class="train">
        <rect x="40" y="180" width="520" height="110" rx="18" fill="#fff"/>
        <rect x="60" y="198" width="70" height="46" rx="8" fill="#d5ecff"/>
        <rect x="150" y="198" width="70" height="46" rx="8" fill="#d5ecff"/>
        <rect x="240" y="198" width="70" height="46" rx="8" fill="#d5ecff"/>
        <rect x="330" y="198" width="70" height="46" rx="8" fill="#d5ecff"/>
        <rect x="420" y="198" width="70" height="46" rx="8" fill="#ffd6ea"/>
        <circle cx="120" cy="292" r="10" fill="#5c4652"/>
        <circle cx="420" cy="292" r="10" fill="#5c4652"/>
      </g>
      <rect x="700" y="150" width="18" height="220" fill="#e7c9bf"/>
      <rect x="718" y="190" width="180" height="120" rx="12" fill="#fff" opacity=".8"/>
      ${hero(760, 500, 0.95)}
      ${sign("駅")}`);
  },
  vending() {
    return stage("vending", "#2a2440", "#ffb7c8", `
      <circle class="twinkle" cx="120" cy="60" r="3" fill="#fff"/>
      <circle class="twinkle" cx="200" cy="90" r="2" fill="#fff" style="animation-delay:.4s"/>
      <circle class="twinkle" cx="80" cy="120" r="2" fill="#fff" style="animation-delay:.8s"/>
      <rect x="0" y="400" width="960" height="140" fill="#3d3558"/>
      <rect x="300" y="120" width="200" height="300" rx="18" fill="#fff"/>
      <rect x="318" y="140" width="164" height="150" rx="10" fill="#d5ecff"/>
      <circle cx="360" cy="180" r="16" fill="#ff8b8b"/>
      <circle cx="400" cy="180" r="16" fill="#ffe7ae"/>
      <circle cx="440" cy="180" r="16" fill="#b7ead4"/>
      <circle cx="360" cy="230" r="16" fill="#e4d4ff"/>
      <circle cx="400" cy="230" r="16" fill="#ffb7c8"/>
      <circle cx="440" cy="230" r="16" fill="#c9e7ff"/>
      <rect x="350" y="310" width="100" height="36" rx="8" fill="#5c4652"/>
      <rect class="bobble" x="470" y="360" width="28" height="40" rx="6" fill="#ff8b8b"/>
      ${hero(620, 500, 1)}
      ${sign("自販機")}`);
  },
  ramen() {
    return stage("ramen", "#fff1dc", "#ffd6c0", `
      <rect x="0" y="0" width="960" height="70" fill="#e15b5b"/>
      <text x="70" y="46" fill="#fff" font-size="24" font-family="Zen Maru Gothic, sans-serif">一蘭</text>
      <rect x="80" y="250" width="520" height="40" rx="8" fill="#c4844a"/>
      <rect x="100" y="290" width="40" height="90" fill="#e7c9bf"/>
      <rect x="520" y="290" width="40" height="90" fill="#e7c9bf"/>
      <ellipse cx="320" cy="250" rx="110" ry="36" fill="#fff"/>
      <ellipse cx="320" cy="244" rx="90" ry="26" fill="#f0a050"/>
      ${steam(300, 200, 0)} ${steam(340, 190, 0.6)} ${steam(280, 210, 1)}
      <rect x="620" y="120" width="250" height="280" rx="16" fill="#fff6ea"/>
      ${hero(680, 490, 1)}
      ${sign("ラーメン")}`);
  },
  park() {
    return stage("park", "#d9f3ff", "#e7f8ef", `
      ${cloud(180, 70, 1.1)} ${cloud(700, 80, 0.9)}
      <ellipse cx="480" cy="470" rx="520" ry="160" fill="#b7ead4"/>
      <ellipse cx="300" cy="430" rx="180" ry="40" fill="#8ed4a8"/>
      ${tree(120, 250, 1.3, "#7dbe6a")} ${tree(820, 230, 1.5, "#6fbf8a")} ${tree(700, 280, 0.8, "#9adf9a")}
      <ellipse cx="430" cy="400" rx="70" ry="18" fill="#ffb7c8"/>
      <circle cx="400" cy="390" r="10" fill="#fff6e8"/>
      <circle cx="450" cy="392" r="8" fill="#ffe7ae"/>
      ${hero(500, 470, 1)}
      ${sign("代々木公園")}`);
  },
  shrine() {
    return stage("shrine", "#e7f6ef", "#d5ecff", `
      ${tree(80, 180, 1.6, "#2f6b4f")} ${tree(860, 170, 1.7, "#245c43")}
      <rect x="250" y="150" width="460" height="28" rx="6" fill="#e15b5b"/>
      <rect x="280" y="178" width="24" height="150" fill="#e15b5b"/>
      <rect x="656" y="178" width="24" height="150" fill="#e15b5b"/>
      <rect x="300" y="210" width="360" height="14" fill="#e15b5b"/>
      <rect x="360" y="250" width="240" height="120" rx="8" fill="#fff"/>
      <path d="M340 250 l140 -50 140 50" fill="#5c4652"/>
      <rect x="430" y="300" width="100" height="70" fill="#f3e2d4"/>
      <rect x="0" y="400" width="960" height="140" fill="#e7e0d4"/>
      ${hero(160, 500, 1)}
      ${sign("明治神宮")}`);
  },
  tower() {
    return stage("tower", "#ff8fb3", "#ffe7ae", `
      <circle cx="760" cy="120" r="46" fill="#fff3c4"/>
      ${[0, 1, 2, 3, 4].map((i) => `<circle class="twinkle" cx="${80 + i * 50}" cy="${40 + (i % 2) * 20}" r="2.5" fill="#fff" style="animation-delay:${i * 0.3}s"/>`).join("")}
      <rect x="0" y="430" width="960" height="110" fill="#6b4a5a"/>
      <g>
        <polygon points="470,40 520,430 420,430" fill="#f28a4a"/>
        <polygon points="455,180 485,180 490,210 450,210" fill="#fff6e8"/>
        <polygon points="448,250 492,250 500,290 440,290" fill="#fff6e8" opacity=".8"/>
        <rect x="430" y="400" width="100" height="40" fill="#e07a28"/>
      </g>
      ${hero(180, 500, 1.05)}
      ${sign("東京タワー")}`);
  },
  nonbei() {
    return stage("nonbei", "#3a2a38", "#ffb7c8", `
      <rect x="0" y="0" width="180" height="540" fill="#4a3040"/>
      <rect x="780" y="0" width="180" height="540" fill="#4a3040"/>
      <rect x="180" y="360" width="600" height="180" fill="#5c4652"/>
      ${lantern(260, 80, "#e15b5b", 0)} ${lantern(480, 60, "#f0c36a", 0.4)} ${lantern(680, 90, "#e15b5b", 0.2)}
      <rect x="230" y="250" width="160" height="90" rx="8" fill="#c4844a"/>
      <rect x="520" y="260" width="180" height="80" rx="8" fill="#a56a3d"/>
      <rect x="250" y="230" width="120" height="16" fill="#fff6e8"/>
      ${hero(360, 500, 1)}
      ${sign("のんべい横丁")}`);
  },
  lion() {
    return stage("lion", "#4a3a38", "#c9a48a", `
      <rect x="0" y="360" width="960" height="180" fill="#6b4636"/>
      <rect x="80" y="80" width="360" height="260" rx="12" fill="#3d2e2a"/>
      <circle cx="200" cy="180" r="50" fill="#2a201c"/>
      <circle cx="200" cy="180" r="18" fill="#5c4652"/>
      <text class="twinkle" x="300" y="160" fill="#ffe7ae" font-size="28">♪</text>
      <text class="twinkle" x="340" y="120" fill="#fff" font-size="20" style="animation-delay:.5s">♪</text>
      <rect x="520" y="250" width="140" height="16" rx="6" fill="#c4844a"/>
      <rect x="560" y="180" width="50" height="70" rx="8" fill="#fff"/>
      <ellipse cx="585" cy="176" rx="28" ry="10" fill="#fff"/>
      <ellipse cx="585" cy="170" rx="18" ry="8" fill="#6b3a2a"/>
      ${steam(585, 150, 0.2)}
      ${hero(720, 500, 0.95)}
      ${sign("名曲喫茶")}`);
  },
  sento() {
    return stage("sento", "#d5ecff", "#fff6ea", `
      <rect x="0" y="0" width="960" height="300" fill="#9fd6ff"/>
      <path d="M180 280 L360 80 L540 280 Z" fill="#fff"/>
      <path d="M360 120 L400 80 L430 140" fill="#ffd0e0"/>
      <rect x="80" y="300" width="800" height="160" rx="80" fill="#7ec8e8"/>
      ${steam(200, 280, 0)} ${steam(360, 260, 0.5)} ${steam(520, 290, 0.9)}
      <rect x="700" y="200" width="40" height="50" rx="6" fill="#c4844a"/>
      <ellipse cx="720" cy="198" rx="28" ry="10" fill="#e7c9bf"/>
      <rect x="0" y="430" width="960" height="110" fill="#f3e2d4"/>
      ${hero(640, 500, 1)}
      ${sign("銭湯")}`);
  },
  soba() {
    return stage("soba", "#fff6ea", "#e7e2da", `
      <rect x="0" y="0" width="960" height="200" fill="#d7dde6"/>
      <rect x="60" y="180" width="560" height="220" rx="8" fill="#fff"/>
      <rect x="80" y="210" width="200" height="16" fill="#c4844a"/>
      <ellipse cx="180" cy="250" rx="50" ry="16" fill="#fff6e8" stroke="#e7c9a8"/>
      <ellipse cx="300" cy="250" rx="50" ry="16" fill="#f0e0c0" stroke="#e7c9a8"/>
      ${steam(180, 220, 0)} ${steam(300, 214, 0.4)}
      <rect x="420" y="230" width="90" height="120" rx="8" fill="#5c4652"/>
      <rect x="436" y="250" width="58" height="20" rx="4" fill="#ffe7ae"/>
      <text x="80" y="150" fill="#5c4652" font-size="22" font-family="Zen Maru Gothic, sans-serif">立ち食いそば</text>
      ${hero(680, 490, 1)}
      ${sign("そば")}`);
  },
  omoide() {
    return stage("omoide", "#5c4038", "#ffd0b0", `
      <rect x="0" y="0" width="140" height="540" fill="#4a342c"/>
      <rect x="820" y="0" width="140" height="540" fill="#4a342c"/>
      ${lantern(240, 70, "#e15b5b", 0)} ${lantern(420, 50, "#f0c36a", 0.3)} ${lantern(620, 80, "#e15b5b", 0.15)}
      <rect x="220" y="280" width="200" height="70" rx="8" fill="#a56a3d"/>
      <path d="M250 250 l10 -40 M280 250 l8 -46 M310 250 l12 -36" stroke="#c4844a" stroke-width="4"/>
      ${steam(300, 230, 0)} ${steam(480, 240, 0.7)} ${steam(560, 220, 0.3)}
      <rect x="0" y="400" width="960" height="140" fill="#6b4636"/>
      ${hero(500, 500, 0.95)}
      ${sign("思い出横丁")}`);
  },
  golden() {
    const doors = ["#ffb7c8", "#ffe7ae", "#b7ead4", "#d5ecff", "#e4d4ff", "#ffd0b0"];
    return stage("golden", "#241c30", "#6b4a5a", `
      <rect x="40" y="80" width="880" height="360" rx="8" fill="#3a2a38"/>
      ${doors.map((c, i) => `<g>
        <rect x="${70 + i * 145}" y="140" width="120" height="220" rx="8" fill="${c}"/>
        <rect x="${100 + i * 145}" y="250" width="60" height="110" rx="6" fill="#5c4652"/>
        <circle cx="${160 + i * 145}" cy="310" r="4" fill="#ffe7ae"/>
      </g>`).join("")}
      ${lantern(160, 40, "#e15b5b", 0)} ${lantern(480, 30, "#f0c36a", 0.2)} ${lantern(760, 46, "#ff8fb8", 0.5)}
      ${hero(430, 500, 0.82)}
      ${sign("ゴールデン街")}`);
  },
  depachika() {
    return stage("depachika", "#fff", "#ffe3ef", `
      <rect x="0" y="0" width="960" height="80" fill="#f3e2d4"/>
      <rect x="40" y="140" width="250" height="160" rx="12" fill="#fff6e8" stroke="#f0d8cc"/>
      <rect x="60" y="160" width="90" height="50" rx="8" fill="#c9f0df"/>
      <rect x="160" y="160" width="100" height="50" rx="8" fill="#ffb7c8"/>
      <rect x="60" y="220" width="200" height="50" rx="8" fill="#ffe7ae"/>
      <rect x="320" y="140" width="250" height="160" rx="12" fill="#fff" stroke="#f0d8cc"/>
      <circle cx="390" cy="210" r="36" fill="#ffd0e0"/>
      <circle cx="470" cy="220" r="28" fill="#fff6e8"/>
      <rect x="600" y="160" width="80" height="220" rx="8" fill="#d5ecff"/>
      <polygon points="620,160 660,100 700,160" fill="#c9d4e0"/>
      ${hero(760, 490, 0.95)}
      ${sign("デパ地下")}`);
  },
  vintage() {
    return stage("vintage", "#efe6ff", "#fff6ea", `
      <rect x="40" y="80" width="560" height="340" rx="12" fill="#fff"/>
      <text x="70" y="130" fill="#5c4652" font-size="28" font-family="Zen Maru Gothic, sans-serif">古着</text>
      <rect x="80" y="180" width="16" height="180" fill="#c4844a"/>
      <rect x="220" y="180" width="16" height="180" fill="#c4844a"/>
      <path d="M88 200 h120" stroke="#5c4652"/>
      <path d="M110 200 v40" stroke="#7ec8f0" stroke-width="8"/>
      <path d="M150 200 v50" stroke="#ffb7c8" stroke-width="8"/>
      <path d="M190 200 v36" stroke="#ffe7ae" stroke-width="8"/>
      <rect x="300" y="200" width="240" height="180" rx="8" fill="#d5ecff"/>
      <circle cx="420" cy="270" r="40" fill="#fff" opacity=".5"/>
      ${hero(680, 490, 1)}
      ${sign("下北沢")}`);
  },
  neko() {
    const cats = [];
    for (let i = 0; i < 18; i++) cats.push(kitty(80 + (i % 9) * 70, 300 + Math.floor(i / 9) * 70, 0.7, i % 3 ? "#fff" : "#fff6e8"));
    return stage("neko", "#e7f6ef", "#fff6ea", `
      <rect x="250" y="40" width="460" height="30" fill="#5c4652"/>
      <path d="M230 70 l250 -40 250 40" fill="#6b4636"/>
      <rect x="300" y="70" width="360" height="140" fill="#fff"/>
      ${kitty(480, 150, 2.2, "#fff")}
      <path d="M500 130 q20 -30 10 -10" stroke="#e15b5b" stroke-width="4" fill="none"/>
      ${cats.join("")}
      ${hero(40, 500, 0.9)}
      ${sign("招き猫")}`);
  },
  valley() {
    return stage("valley", "#c9f0df", "#d5ecff", `
      ${tree(60, 120, 1.8, "#3d8f62")} ${tree(880, 100, 2, "#2f6b4f")} ${tree(200, 80, 1.2, "#6fbf8a")}
      <path d="M0 360 C 200 300, 300 420, 480 360 S 760 300, 960 380 L 960 540 L 0 540 Z" fill="#7ec8e8"/>
      <path d="M0 390 C 220 340, 320 450, 500 390 S 780 340, 960 410" fill="none" stroke="#fff" stroke-width="6" opacity=".7"/>
      <rect x="430" y="200" width="70" height="90" rx="8" fill="#d5ecff" opacity=".8"/>
      <path d="M450 200 v-40 M470 200 v-50 M490 200 v-30" stroke="#fff" stroke-width="4"/>
      <rect x="80" y="300" width="220" height="16" rx="8" fill="#c4844a"/>
      ${hero(120, 360, 0.85)}
      ${sign("等々力渓谷")}`);
  },
  sky() {
    return stage("sky", "#d5ecff", "#e7f8ef", `
      ${cloud(160, 80, 1.2)} ${cloud(620, 60, 1)}
      <ellipse cx="480" cy="360" rx="400" ry="90" fill="#8ed4a8"/>
      <path class="kite" d="M700 160 l20 30 l-20 10 z" fill="#ffb7c8"/>
      <path d="M710 190 q-40 40 -20 80" stroke="#5c4652" fill="none"/>
      <path d="M80 470 q80 -40 160 0 t160 0 t160 0 t160 0" fill="none" stroke="#c9d4e0" stroke-width="10"/>
      ${hero(360, 420, 1)}
      ${sign("天空庭園")}`);
  },
  shotengai() {
    return stage("shotengai", "#fff6ea", "#ffe3ef", `
      <path d="M40 80 Q 480 10 920 80 L 920 140 Q 480 70 40 140 Z" fill="#ffb7c8"/>
      <rect x="40" y="140" width="200" height="250" fill="#fff"/>
      <rect x="260" y="150" width="200" height="240" fill="#fff8f2"/>
      <rect x="480" y="140" width="200" height="250" fill="#fff"/>
      <rect x="700" y="160" width="200" height="230" fill="#fff8f2"/>
      <circle cx="120" cy="230" r="22" fill="#8ed4a8"/>
      <circle cx="170" cy="240" r="16" fill="#e15b5b"/>
      <rect x="300" y="200" width="120" height="70" rx="8" fill="#ffe7ae"/>
      <text x="80" y="120" fill="#5c4652" font-size="20" font-family="Zen Maru Gothic, sans-serif">パールセンター</text>
      <rect x="0" y="400" width="960" height="140" fill="#e7e0d4"/>
      ${hero(560, 500, 1)}
      ${sign("商店街")}`);
  },
  harmonica() {
    return stage("harmonica", "#fff1dc", "#ffd6c0", `
      <rect x="0" y="0" width="960" height="90" fill="#c4844a"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="${40 + i * 115}" y="40" width="16" height="28" rx="4" fill="#5c4652"/>`).join("")}
      <rect x="40" y="160" width="200" height="180" rx="8" fill="#fff"/>
      <rect x="280" y="180" width="180" height="160" rx="8" fill="#fff6e8"/>
      <path d="M80 220 l8 -36 M110 220 l10 -42" stroke="#c4844a" stroke-width="4"/>
      <rect x="500" y="170" width="180" height="170" rx="8" fill="#fff"/>
      ${hero(730, 490, 0.95)}
      ${sign("ハーモニカ横丁")}`);
  },
  yanaka() {
    return stage("yanaka", "#ffb7c8", "#ffe7ae", `
      <circle cx="780" cy="140" r="50" fill="#fff3c4"/>
      <rect x="40" y="200" width="180" height="180" fill="#fff"/>
      <rect x="240" y="220" width="160" height="160" fill="#fff8f2"/>
      <rect x="420" y="190" width="170" height="190" fill="#fff"/>
      ${kitty(100, 300, 0.9, "#fff")} ${kitty(300, 320, 0.7, "#ffd0b0")} ${kitty(470, 300, 0.8, "#5c4652")}
      <rect x="680" y="240" width="200" height="18" fill="#e7e0d4"/>
      <rect x="700" y="270" width="180" height="18" fill="#e7e0d4"/>
      <rect x="720" y="300" width="160" height="18" fill="#e7e0d4"/>
      <rect x="0" y="400" width="960" height="140" fill="#e7d6c8"/>
      ${hero(180, 500, 0.95)}
      ${sign("谷中銀座")}`);
  },
  dagashi() {
    const colors = ["#ff8b8b", "#ffe7ae", "#b7ead4", "#d5ecff", "#ffb7c8", "#f0c36a", "#e4d4ff", "#ffd0b0"];
    const boxes = [];
    for (let i = 0; i < 24; i++) {
      const x = 60 + (i % 8) * 70;
      const y = 90 + Math.floor(i / 8) * 70;
      boxes.push(`<rect x="${x}" y="${y}" width="58" height="54" rx="8" fill="${colors[i % colors.length]}"/>`);
    }
    return stage("dagashi", "#fff6ea", "#ffe3ef", `
      <rect x="30" y="60" width="620" height="300" rx="16" fill="#fff"/>
      ${boxes.join("")}
      <rect x="680" y="180" width="36" height="120" rx="8" fill="#f28aaa"/>
      <rect x="730" y="160" width="36" height="140" rx="8" fill="#ffe7ae"/>
      <rect x="780" y="190" width="36" height="110" rx="8" fill="#8ed4a8"/>
      ${hero(800, 500, 0.85)}
      ${sign("駄菓子")}`);
  },
  alleys() {
    return stage("alleys", "#efe6ff", "#f3e2d4", `
      <rect x="0" y="80" width="280" height="320" fill="#fff"/>
      <rect x="40" y="120" width="80" height="60" rx="6" fill="#d5ecff"/>
      <rect x="300" y="40" width="240" height="360" fill="#fff8f2"/>
      <path d="M300 40 l120 -30 120 30" fill="#6b4636"/>
      <rect x="560" y="120" width="300" height="280" fill="#fff"/>
      <rect x="620" y="200" width="70" height="90" fill="#ffb7c8"/>
      <rect x="200" y="400" width="560" height="18" rx="6" fill="#c9b8a8"/>
      <rect x="240" y="430" width="480" height="16" rx="6" fill="#b7a898"/>
      <rect x="280" y="458" width="400" height="14" rx="6" fill="#a89888"/>
      ${hero(400, 500, 0.9)}
      ${sign("神楽坂")}`);
  },
  inari() {
    return stage("inari", "#fff6ea", "#ffd6c0", `
      <rect x="0" y="40" width="300" height="420" fill="#d7dde6"/>
      <rect x="40" y="80" width="70" height="50" rx="4" fill="#fff"/>
      <rect x="140" y="100" width="70" height="40" rx="4" fill="#d5ecff"/>
      <rect x="660" y="20" width="300" height="440" fill="#c9d4e0"/>
      <rect x="700" y="70" width="80" height="46" rx="4" fill="#fff"/>
      <rect x="340" y="180" width="280" height="26" rx="4" fill="#e15b5b"/>
      <rect x="370" y="206" width="16" height="120" fill="#e15b5b"/>
      <rect x="574" y="206" width="16" height="120" fill="#e15b5b"/>
      <rect x="400" y="250" width="160" height="90" rx="6" fill="#fff"/>
      <path d="M390 250 l80 -36 80 36" fill="#5c4652"/>
      <rect x="0" y="420" width="960" height="120" fill="#e7e0d4"/>
      ${hero(180, 500, 0.95)}
      ${sign("伏見火防稲荷")}`);
  },
  senso() {
    return stage("senso", "#ffe7c2", "#f3b7c8", `
      <rect x="0" y="300" width="960" height="240" fill="#e7d3b0"/>
      <rect x="280" y="150" width="400" height="180" rx="8" fill="#c4513a"/>
      <rect x="320" y="200" width="320" height="130" fill="#f4e2c4"/>
      <path d="M250 150 L480 70 L710 150" fill="#5c4652"/>
      ${lantern(180, 120, "#e15b5b", 0)}
      ${lantern(780, 130, "#e15b5b", 0.4)}
      ${person(220, 400, "#d5ecff", 0)}
      ${person(700, 410, "#ffd0e0", 0.2)}
      ${hero(430, 500, 0.95)}
      ${sign("浅草寺")}`);
  },
  gacha() {
    return stage("gacha", "#d5ecff", "#ffe3ef", `
      <rect x="0" y="360" width="960" height="180" fill="#f7d7e4"/>
      <rect x="300" y="140" width="360" height="240" rx="24" fill="#fff"/>
      <circle cx="400" cy="230" r="36" fill="#ffb7c8"/>
      <circle cx="480" cy="250" r="36" fill="#ffe7ae"/>
      <circle cx="560" cy="230" r="36" fill="#c9f0df"/>
      <rect x="390" y="300" width="180" height="28" rx="14" fill="#f28aaa"/>
      ${hero(160, 500, 0.95)}
      ${sign("ガチャポン")}`);
  },
  nakamise() {
    return stage("nakamise", "#fff4ea", "#ffd6c4", `
      <rect x="0" y="300" width="960" height="240" fill="#e7d3b0"/>
      <rect x="40" y="160" width="200" height="160" fill="#c4513a"/>
      <rect x="720" y="150" width="200" height="170" fill="#e07a4a"/>
      <rect x="80" y="210" width="120" height="16" fill="#fff6d0"/>
      <rect x="760" y="200" width="120" height="16" fill="#fff6d0"/>
      ${lantern(300, 90, "#ffb15a", 0.2)}
      ${person(360, 400, "#fff", 0)}
      ${hero(500, 500, 0.95)}
      ${sign("仲見世")}`);
  },
  hoppy() {
    return stage("hoppy", "#2a2438", "#5c4652", `
      <rect x="0" y="340" width="960" height="200" fill="#3a3040"/>
      ${lantern(220, 80, "#e15b5b", 0)}
      ${lantern(480, 70, "#ffb15a", 0.3)}
      ${lantern(740, 90, "#e15b5b", 0.6)}
      <rect x="160" y="250" width="180" height="120" rx="8" fill="#6a4038"/>
      <rect x="620" y="240" width="180" height="130" rx="8" fill="#6a4038"/>
      ${hero(430, 500, 0.95)}
      ${sign("ホッピー通り")}`);
  },
  ameyoko() {
    return stage("ameyoko", "#fff6ea", "#f7c3d4", `
      <rect x="0" y="80" width="960" height="40" fill="#8a9bb0"/>
      <rect x="0" y="120" width="960" height="16" fill="#5c4652"/>
      <rect x="40" y="200" width="220" height="140" fill="#fff"/>
      <rect x="700" y="190" width="220" height="150" fill="#ffe7ae"/>
      <rect x="0" y="360" width="960" height="180" fill="#d7c4b0"/>
      ${person(300, 400, "#d5ecff", 0.1)}
      ${hero(480, 500, 0.95)}
      ${sign("アメ横")}`);
  },
  kanda() {
    return stage("kanda", "#ffe7f0", "#d5ecff", `
      <rect x="0" y="280" width="960" height="260" fill="#c9e6c0"/>
      <rect x="340" y="150" width="280" height="150" fill="#c4513a"/>
      <path d="M310 150 L480 80 L650 150" fill="#5c4652"/>
      <rect x="430" y="210" width="100" height="90" fill="#f4e2c4"/>
      ${hero(180, 500, 0.95)}
      ${sign("神田明神")}`);
  },
  yoko() {
    return stage("yoko", "#3a3044", "#6a5a68", `
      <rect x="0" y="40" width="960" height="70" fill="#5c6a7a"/>
      <rect x="0" y="110" width="960" height="18" fill="#2a2430"/>
      <rect x="80" y="220" width="240" height="140" rx="10" fill="#c4844a"/>
      <rect x="640" y="210" width="240" height="150" rx="10" fill="#8a5a4a"/>
      ${steam(200, 180, 0)}
      ${lantern(480, 140, "#ffb15a", 0.2)}
      ${hero(430, 500, 0.95)}
      ${sign("産直横丁")}`);
  },
  momiji() {
    return stage("momiji", "#ffe7c2", "#f0c4a0", `
      <ellipse cx="200" cy="220" rx="70" ry="50" fill="#e07a3a"/>
      <ellipse cx="300" cy="200" rx="50" ry="40" fill="#c45c4a"/>
      <ellipse cx="700" cy="210" rx="80" ry="50" fill="#f0a050"/>
      <rect x="240" y="250" width="16" height="80" fill="#8a5a4a"/>
      <rect x="680" y="250" width="16" height="90" fill="#8a5a4a"/>
      ${hero(430, 500, 0.95)}
      ${sign("新宿御苑")}`);
  },
  yakiimo() {
    return stage("yakiimo", "#fff1dc", "#f0c4a0", `
      <rect x="180" y="220" width="280" height="120" rx="16" fill="#f4e2c4" stroke="#c4844a"/>
      <rect x="200" y="180" width="240" height="50" rx="10" fill="#fff"/>
      <ellipse class="steam" cx="320" cy="160" rx="16" ry="8" fill="#fff" opacity=".8"/>
      ${hero(620, 500, 0.95)}
      ${sign("焼き芋")}`);
  },
  tori() {
    return stage("tori", "#fff6ea", "#f7c3d4", `
      <rect x="300" y="80" width="200" height="18" fill="#e15b5b"/>
      <rect x="330" y="98" width="14" height="80" fill="#e15b5b"/>
      <rect x="456" y="98" width="14" height="80" fill="#e15b5b"/>
      <path d="M180 300 h80 l10 -40 h-20 z" fill="#c4a35a"/>
      <path d="M640 280 h90 l12 -50 h-24 z" fill="#e7c48a"/>
      ${hero(430, 500, 0.95)}
      ${sign("酉の市")}`);
  },
  canal() {
    return stage("canal", "#d5ecff", "#fff6ea", `
      <rect x="0" y="300" width="960" height="80" fill="#9fd4f2"/>
      ${dressRoof(80, 80, 200, "#6a4038")}
      <rect x="100" y="140" width="180" height="120" fill="#f7efe4"/>
      ${hero(500, 500, 0.95)}
      ${sign("カナルカフェ")}`);
  }
};

function dressRoof(x, y, w, fill) {
  const m = x + w / 2;
  const r = x + w;
  return `<path d="M${x - 16} ${y + 18} Q${m} ${y - 28} ${r + 16} ${y + 18} L${r} ${y + 34} Q${m} ${y} ${x} ${y + 34} Z" fill="${fill || "#c45c4a"}" stroke="#a8483c" stroke-width="2"/>
    <path d="M${x} ${y + 22} Q${m} ${y + 4} ${r} ${y + 22}" fill="none" stroke="#f0d7a0" stroke-width="2" opacity=".85"/>`;
}
function dressTorii(x, y, s) {
  const k = s || 1;
  return `<g transform="translate(${x},${y}) scale(${k})">
    <rect x="0" y="0" width="120" height="14" rx="4" fill="#e15b5b"/>
    <rect x="14" y="22" width="92" height="8" fill="#e15b5b"/>
    <rect x="22" y="10" width="12" height="90" fill="#e15b5b"/>
    <rect x="86" y="10" width="12" height="90" fill="#e15b5b"/>
  </g>`;
}
function dressChochin(x, y, color) {
  return `<g class="sway">
    <line x1="${x + 8}" y1="${y - 16}" x2="${x + 8}" y2="${y}" stroke="#8a5a4a" stroke-width="2"/>
    <rect x="${x}" y="${y}" width="16" height="22" rx="6" fill="${color || "#e15b5b"}"/>
    <rect x="${x + 4}" y="${y + 6}" width="8" height="8" rx="2" fill="#ffe7ae"/>
  </g>`;
}
function dressNoren(x, y, w, color) {
  return `<path class="sway" d="M${x} ${y} h${w} v28 q${-w / 4} 8 ${-w / 2} 0 q${-w / 4} 8 ${-w / 2} 0 z" fill="${color || "#f28aaa"}"/>`;
}
function dressStone(x, y) {
  return `<g>
    <rect x="${x}" y="${y}" width="18" height="8" rx="2" fill="#d7d2c8"/>
    <rect x="${x + 4}" y="${y + 8}" width="10" height="22" fill="#cfc8bc"/>
    <circle cx="${x + 9}" cy="${y - 4}" r="4" fill="#ffe7ae"/>
  </g>`;
}
function sceneDress(id) {
  const shrine = new Set(["shrine", "kanda", "inari", "neko"]);
  const temple = id === "senso";
  const alley = new Set(["nonbei", "golden", "omoide", "hoppy", "harmonica", "yoko", "alleys"]);
  const bath = id === "sento";
  const eat = new Set(["ramen", "soba", "lion", "depachika"]);
  const green = new Set(["park", "valley", "sky"]);
  const market = new Set(["nakamise", "shotengai", "yanaka", "ameyoko", "dagashi"]);
  if (temple) return dressTorii(40, 70, 1.1) + dressRoof(250, 90, 180) + dressChochin(200, 40, "#e15b5b") + dressChochin(760, 50, "#ffb15a") + dressStone(860, 160);
  if (shrine.has(id)) return dressTorii(30, 80, 1) + dressStone(820, 150) + dressRoof(620, 70, 140);
  if (alley.has(id)) return dressChochin(80, 40, "#e15b5b") + dressChochin(180, 28, "#ffb15a") + dressChochin(800, 36, "#e15b5b") + dressRoof(40, 120, 160, "#8a5a4a") + dressNoren(70, 150, 70, "#6a4038");
  if (bath) return dressRoof(80, 60, 200) + dressNoren(120, 100, 90, "#3d7ea8") + `<ellipse class="steam" cx="200" cy="40" rx="16" ry="8" fill="#fff" opacity=".7"/>`;
  if (eat.has(id)) return dressNoren(40, 80, 80, "#e15b5b") + dressRoof(500, 40, 160, "#8a5a4a") + `<ellipse class="steam" cx="160" cy="70" rx="12" ry="6" fill="#fff" opacity=".75"/>`;
  if (green.has(id)) return dressStone(70, 120) + dressStone(840, 140) + `<ellipse cx="200" cy="80" rx="28" ry="16" fill="#8ed4a8"/>`;
  if (market.has(id)) return dressRoof(20, 70, 200) + dressRoof(700, 60, 180, "#e07a4a") + dressNoren(80, 110, 80) + dressChochin(640, 30, "#ffb15a");
  if (id === "station") return dressRoof(600, 40, 220, "#d7e4f2");
  if (id === "tower") return dressChochin(60, 40, "#ffb15a");
  if (id === "gacha") return dressRoof(40, 80, 140, "#f4d2dc");
  if (id === "onigiri") return `<rect x="40" y="40" width="70" height="16" rx="2" fill="#f28aaa"/><rect x="40" y="40" width="14" height="16" fill="#fff"/><rect x="68" y="40" width="14" height="16" fill="#fff"/>`;
  if (id === "vintage") return dressRoof(40, 80, 160, "#8a5a4a") + `<path d="M30 70 h16 v14 h-6 l-4 12 h-6z" fill="#d5ecff"/>`;
  return dressRoof(30, 70, 120, "#f4d2dc");
}
function renderScene(missionId) {
  const build = SCENE_BUILDERS[missionId] || SCENE_BUILDERS.scramble;
  return build().replace("</svg>", sceneDress(missionId) + "</svg>");
}
