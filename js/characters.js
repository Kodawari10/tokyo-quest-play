/* Original chibi sprites for Tokyo Quest. Not based on any copyrighted character. */
const CHARACTERS = [
  {
    id: "hana",
    name: "Hana",
    nameJa: "はな",
    blurb: "A flower clip and a soft cardigan. She always finds the bakery."
  },
  {
    id: "ren",
    name: "Ren",
    nameJa: "れん",
    blurb: "Hoodie, backpack, and a book for the train."
  },
  {
    id: "mikan",
    name: "Mikan",
    nameJa: "みかん",
    blurb: "An orange cat who follows the warmest patch of sun."
  },
  {
    id: "mochi",
    name: "Mochi",
    nameJa: "もち",
    blurb: "A shiba with a snack radar and a red bandana."
  },
  {
    id: "pao",
    name: "Pao",
    nameJa: "パオ",
    blurb: "A round panda. Professional picnic planner."
  },
  {
    id: "usagi",
    name: "Usagi",
    nameJa: "うさぎ",
    blurb: "A bunny with a bow, always first to hear the train."
  },
  {
    id: "pon",
    name: "Pon",
    nameJa: "ポン",
    blurb: "A tanuki who knows every side street."
  }
];

function svgWrap(inner) {
  return `<svg viewBox="0 0 120 150" aria-hidden="true">${inner}</svg>`;
}

function eyes(y) {
  return `<g class="blink-eye">
    <ellipse cx="45" cy="${y}" rx="10" ry="11.5" fill="#fff"/>
    <ellipse cx="75" cy="${y}" rx="10" ry="11.5" fill="#fff"/>
    <ellipse cx="46.2" cy="${y + 1.6}" rx="5.4" ry="6.4" fill="#4a3942"/>
    <ellipse cx="76.2" cy="${y + 1.6}" rx="5.4" ry="6.4" fill="#4a3942"/>
    <circle cx="48.6" cy="${y - 1.6}" r="2.3" fill="#fff"/>
    <circle cx="78.6" cy="${y - 1.6}" r="2.3" fill="#fff"/>
    <circle cx="43.4" cy="${y + 4}" r="1.05" fill="#fff"/>
    <circle cx="73.4" cy="${y + 4}" r="1.05" fill="#fff"/>
  </g>`;
}

function blush(y) {
  return `<ellipse cx="32" cy="${y}" rx="7.5" ry="3.8" fill="#ff8eab" opacity=".82"/>
    <ellipse cx="88" cy="${y}" rx="7.5" ry="3.8" fill="#ff8eab" opacity=".82"/>`;
}

function smile(y) {
  return `<path d="M54 ${y}c2.4 3.4 9.6 3.4 12 0" stroke="#e08a8a" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
}

function shadow() {
  return `<ellipse cx="64" cy="144" rx="28" ry="5.5" fill="#e7c9bf" opacity=".5"/>`;
}

function animalEyes(x, y, iris) {
  const c = iris || "#3a2a24";
  return `<g class="blink-eye">
    <ellipse cx="${x}" cy="${y}" rx="4.6" ry="5.2" fill="#fff"/>
    <ellipse cx="${x + 0.6}" cy="${y + 0.7}" rx="2.5" ry="2.9" fill="${c}"/>
    <circle cx="${x + 1.5}" cy="${y - 0.8}" r="1.15" fill="#fff"/>
  </g>`;
}

const SPRITES = {
  hana: svgWrap(`
    ${shadow()}
    <path d="M44 112c2 12 6 18 16 18s14-6 16-18c-6 4-10 4-16 4s-10 0-16-4z" fill="#ff8fb8"/>
    <rect x="50" y="100" width="20" height="16" rx="8" fill="#ffe08a"/>
    <ellipse cx="40" cy="108" rx="6" ry="5" fill="#ffe3cf"/>
    <ellipse cx="80" cy="108" rx="6" ry="5" fill="#ffe3cf"/>
    <ellipse cx="52" cy="132" rx="7" ry="3.6" fill="#fff"/>
    <ellipse cx="70" cy="132" rx="7" ry="3.6" fill="#fff"/>
    <ellipse cx="60" cy="64" rx="40" ry="36" fill="#ff9ec4"/>
    <circle cx="60" cy="68" r="32" fill="#ffe3cf"/>
    <ellipse cx="60" cy="46" rx="28" ry="14" fill="#ff8fb3"/>
    <ellipse cx="34" cy="62" rx="10" ry="16" fill="#ff8fb3"/>
    <ellipse cx="86" cy="62" rx="10" ry="16" fill="#ff8fb3"/>
    ${eyes(66)}
    ${blush(78)}
    ${smile(84)}
    <g transform="translate(92,42)">
      <circle r="7" fill="#ff6b9d"/>
      <circle r="3" fill="#ffe08a"/>
    </g>
  `),
  ren: svgWrap(`
    ${shadow()}
    <circle cx="34" cy="108" r="10" fill="#f0a07a"/>
    <path d="M46 108c1 14 6 20 14 20s13-6 14-20c-5 4-9 5-14 5s-9-1-14-5z" fill="#5e6d8d"/>
    <rect x="48" y="96" width="24" height="18" rx="9" fill="#8fd0f2"/>
    <rect x="54" y="102" width="12" height="8" rx="3" fill="#d9f1fb"/>
    <ellipse cx="50" cy="132" rx="8" ry="4" fill="#3e4a62"/>
    <ellipse cx="72" cy="132" rx="8" ry="4" fill="#3e4a62"/>
    <ellipse cx="60" cy="62" rx="38" ry="34" fill="#6b4636"/>
    <circle cx="60" cy="66" r="31" fill="#ffe3cf"/>
    <ellipse cx="60" cy="44" rx="26" ry="13" fill="#6b4636"/>
    <ellipse cx="36" cy="58" rx="9" ry="14" fill="#6b4636"/>
    <ellipse cx="84" cy="58" rx="9" ry="14" fill="#6b4636"/>
    ${eyes(64)}
    ${blush(76)}
    ${smile(82)}
  `),
  mikan: svgWrap(`
    ${shadow()}
    <path d="M22 108c-16-6-18-28-4-34 10-4 18 6 16 16-2 8-6 16-12 18z" fill="#e8873a"/>
    <path d="M18 86c2 6 2 10 0 14M24 82c2 7 1 12-1 16" stroke="#c46228" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="58" cy="96" rx="28" ry="12" fill="#c96a2e" opacity=".35"/>
    <ellipse cx="62" cy="104" rx="32" ry="18" fill="#f0a04a"/>
    <ellipse cx="66" cy="112" rx="18" ry="10" fill="#fff6ee"/>
    <path d="M46 92c6-8 14-6 16 2M58 88c4-8 12-4 10 4" stroke="#c46228" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M40 112c2 16 6 26 4 28-6-2-10-12-8-22z" fill="#e8873a"/>
    <path d="M52 114c2 16 4 24 2 26-6 0-8-10-6-22z" fill="#f0a04a"/>
    <path d="M78 108c1 16 4 26 2 28-6-1-8-12-6-24z" fill="#f0a04a"/>
    <path d="M90 106c2 16 5 26 3 28-6 0-8-12-6-24z" fill="#e8873a"/>
    <ellipse cx="42" cy="138" rx="6" ry="3" fill="#fff6ee"/>
    <ellipse cx="54" cy="138" rx="5" ry="3" fill="#fff6ee"/>
    <ellipse cx="80" cy="136" rx="5" ry="3" fill="#fff6ee"/>
    <ellipse cx="92" cy="134" rx="5" ry="3" fill="#fff6ee"/>
    <ellipse cx="96" cy="78" rx="18" ry="15" fill="#f0a04a"/>
    <path d="M84 68l6-16 8 12z" fill="#f0a04a"/>
    <path d="M108 66l6-14-2 16z" fill="#f0a04a"/>
    <path d="M86 66l5-10 5 8z" fill="#ffd0c4"/>
    <path d="M108 64l4-8 2 10z" fill="#ffd0c4"/>
    <path d="M90 70c3 4 6 4 8 0M100 68c2 4 5 4 7 0" stroke="#c46228" stroke-width="1.4" fill="none"/>
    <ellipse cx="106" cy="84" rx="9" ry="6" fill="#fff6ee"/>
    ${animalEyes(98, 76, "#c47a20")}
    <ellipse cx="112" cy="84" rx="2.2" ry="1.6" fill="#e09090"/>
    <path d="M112 86 v3" stroke="#e09090" stroke-width="1"/>
    <path d="M108 86h12M106 90h10M110 82h10" stroke="#c9b2a4" stroke-width="0.8" stroke-linecap="round"/>
    <ellipse cx="90" cy="84" rx="4" ry="2.2" fill="#ffb3c4" opacity=".7"/>
  `),
  mochi: svgWrap(`
    ${shadow()}
    <path d="M34 78c-16-2-22-20-8-28 8-4 16 2 18 10 1 6-2 14-10 18z" fill="#e07a32"/>
    <path d="M30 64c4 4 6 8 4 12" stroke="#fff8f0" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="62" cy="100" rx="32" ry="18" fill="#e07a32"/>
    <ellipse cx="58" cy="92" rx="22" ry="8" fill="#c4682e" opacity=".45"/>
    <ellipse cx="70" cy="108" rx="16" ry="10" fill="#fff8f0"/>
    <path d="M48 86 q6 4 4 10" stroke="#b85a28" stroke-width="1.3" fill="none" opacity=".6"/>
    <path d="M40 108c2 18 6 28 4 30-7-2-10-14-8-26z" fill="#e07a32"/>
    <path d="M52 112c1 16 4 24 2 26-6 0-8-12-6-24z" fill="#c4682e"/>
    <path d="M78 106c1 18 4 28 2 30-6-1-8-14-6-26z" fill="#e07a32"/>
    <path d="M90 104c2 18 5 28 3 30-6 0-9-14-7-28z" fill="#c4682e"/>
    <ellipse cx="42" cy="138" rx="6" ry="3.2" fill="#fff8f0"/>
    <ellipse cx="54" cy="138" rx="5" ry="3" fill="#fff8f0"/>
    <ellipse cx="80" cy="136" rx="5" ry="3" fill="#fff8f0"/>
    <ellipse cx="92" cy="134" rx="5" ry="3" fill="#fff8f0"/>
    <path d="M78 92c8-6 18-4 20 4-8 2-16 0-20-4z" fill="#e23b3b"/>
    <ellipse cx="98" cy="74" rx="16" ry="14" fill="#e07a32"/>
    <path d="M88 64l4-14 10 10z" fill="#e07a32"/>
    <path d="M108 62l8-12-2 14z" fill="#e07a32"/>
    <path d="M90 62l3-8 6 6z" fill="#fff8f0"/>
    <path d="M108 60l5-7 2 8z" fill="#fff8f0"/>
    <ellipse cx="108" cy="80" rx="10" ry="7" fill="#fff8f0"/>
    ${animalEyes(96, 72)}
    <ellipse cx="114" cy="80" rx="2.6" ry="1.8" fill="#2c2420"/>
    <ellipse cx="88" cy="80" rx="4" ry="2.2" fill="#ffb3c4" opacity=".75"/>
  `),
  pao: svgWrap(`
    ${shadow()}
    <ellipse cx="62" cy="104" rx="34" ry="18" fill="#f7f4ef"/>
    <path d="M40 92c8-10 28-14 36-4 4 6-8 10-18 12-10 1-16-2-18-8z" fill="#2c2c2c"/>
    <path d="M36 108c0 18 4 28 2 30-8-2-10-14-8-28z" fill="#2c2c2c"/>
    <path d="M50 112c0 16 3 24 1 26-7 0-8-12-6-24z" fill="#2c2c2c"/>
    <path d="M78 106c1 18 4 28 2 30-7-1-9-14-7-28z" fill="#2c2c2c"/>
    <path d="M92 102c2 18 6 30 3 32-8 0-10-16-8-30z" fill="#2c2c2c"/>
    <ellipse cx="98" cy="78" rx="18" ry="16" fill="#f7f4ef"/>
    <circle cx="88" cy="64" r="7" fill="#2c2c2c"/>
    <circle cx="110" cy="62" r="7" fill="#2c2c2c"/>
    <ellipse cx="92" cy="78" rx="7" ry="8" fill="#2c2c2c"/>
    <ellipse cx="106" cy="76" rx="6.5" ry="7.5" fill="#2c2c2c"/>
    <g class="blink-eye">
      <ellipse cx="92" cy="78" rx="2.6" ry="3" fill="#4a3a32"/>
      <ellipse cx="106" cy="76" rx="2.4" ry="2.8" fill="#4a3a32"/>
      <circle cx="93" cy="77" r="0.9" fill="#fff"/>
      <circle cx="107" cy="75" r="0.9" fill="#fff"/>
    </g>
    <ellipse cx="112" cy="86" rx="5" ry="3.4" fill="#f7f4ef"/>
    <ellipse cx="116" cy="86" rx="2" ry="1.5" fill="#2c2c2c"/>
    <ellipse cx="84" cy="88" rx="3.5" ry="2" fill="#ffb3c4" opacity=".7"/>
  `),
  usagi: svgWrap(`
    ${shadow()}
    <ellipse cx="30" cy="108" rx="10" ry="8" fill="#fff"/>
    <ellipse cx="28" cy="106" rx="6" ry="5" fill="#fff6f8"/>
    <ellipse cx="48" cy="112" rx="16" ry="14" fill="#f3eee8"/>
    <ellipse cx="66" cy="102" rx="28" ry="16" fill="#fff"/>
    <ellipse cx="62" cy="96" rx="18" ry="7" fill="#efe8e2" opacity=".8"/>
    <path d="M46 112c2 16 8 26 6 28-8-2-12-12-10-24z" fill="#f7f4ef"/>
    <path d="M78 108c1 16 4 26 2 28-6 0-8-12-6-24z" fill="#fff"/>
    <path d="M90 104c2 16 4 26 2 28-6 0-8-12-6-26z" fill="#f7f4ef"/>
    <ellipse cx="48" cy="138" rx="7" ry="3.4" fill="#ffd0e0"/>
    <ellipse cx="80" cy="136" rx="4.5" ry="2.6" fill="#ffd0e0"/>
    <ellipse cx="92" cy="134" rx="4.5" ry="2.6" fill="#ffd0e0"/>
    <ellipse cx="98" cy="78" rx="16" ry="14" fill="#fff"/>
    <path d="M90 62c2-36 8-48 12-50 5 8 6 32 4 50z" fill="#fff"/>
    <path d="M108 60c2-34 6-44 8-46 4 8 4 30 2 46z" fill="#fff"/>
    <path d="M94 60c1-28 4-36 6-38 2 8 2 24 1 38z" fill="#ffd0e0"/>
    <path d="M110 58c1-26 3-34 5-36 2 8 2 22 1 36z" fill="#ffd0e0"/>
    <path d="M112 48c6 2 8 8 4 10-4-1-6-4-4-10z" fill="#ff8fb8"/>
    ${animalEyes(96, 76, "#5c4652")}
    <ellipse cx="110" cy="84" rx="8" ry="5" fill="#fff"/>
    <path d="M112 82c2 2 4 2 5 0" stroke="#e09090" stroke-width="1.3" fill="none"/>
    <ellipse cx="116" cy="83" rx="1.8" ry="1.3" fill="#e09090"/>
    <path d="M114 86h10M112 89h8" stroke="#e7d0c8" stroke-width="0.8" stroke-linecap="round"/>
    <ellipse cx="86" cy="82" rx="3.6" ry="2" fill="#ffb3c4" opacity=".75"/>
  `),
  pon: svgWrap(`
    ${shadow()}
    <path d="M18 100c-8-18 6-34 20-28 8 4 10 16 6 26-4 6-16 10-26 2z" fill="#7a6248"/>
    <path d="M22 84c4 6 6 10 4 16M30 80c3 7 3 12 0 18" stroke="#d2c0a4" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".7"/>
    <ellipse cx="24" cy="108" rx="6" ry="5" fill="#4a3428"/>
    <ellipse cx="60" cy="102" rx="32" ry="18" fill="#9a7a52"/>
    <ellipse cx="56" cy="94" rx="20" ry="7" fill="#c4a574" opacity=".55"/>
    <path d="M48 96c4 5 8 4 10-1M62 92c3 6 8 5 8-1" stroke="#5c4030" stroke-width="1.2" fill="none" opacity=".45"/>
    <ellipse cx="72" cy="110" rx="12" ry="8" fill="#efe2d0"/>
    <path d="M40 112c2 16 6 26 4 28-8-2-10-14-8-26z" fill="#3d2a22"/>
    <path d="M52 114c1 14 4 22 2 24-6 0-8-10-6-22z" fill="#5a4030"/>
    <path d="M78 108c1 16 5 26 3 28-7-1-9-14-7-26z" fill="#3d2a22"/>
    <path d="M90 104c2 16 5 26 3 28-7 0-9-14-7-26z" fill="#5a4030"/>
    <ellipse cx="96" cy="76" rx="16" ry="13" fill="#9a7a52"/>
    <path d="M86 66c2-8 8-10 10-4z" fill="#7a6248"/>
    <path d="M104 64c4-8 10-8 10-2z" fill="#7a6248"/>
    <ellipse cx="108" cy="82" rx="9" ry="6" fill="#efe2d0"/>
    <path d="M86 72c10 6 18 8 24 4-8 4-16 4-24-4z" fill="#3d2a22" opacity=".85"/>
    ${animalEyes(96, 74)}
    <ellipse cx="114" cy="82" rx="2.4" ry="1.6" fill="#2c2420"/>
    <ellipse cx="84" cy="82" rx="3.4" ry="2" fill="#e7b2a4" opacity=".55"/>
  `)
};

function characterById(id) {
  return CHARACTERS.find((c) => c.id === id) || CHARACTERS[0];
}

function characterSvg(id) {
  return SPRITES[id] || SPRITES.hana;
}
