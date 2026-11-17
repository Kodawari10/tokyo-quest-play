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
  return `<ellipse cx="60" cy="144" rx="22" ry="5.5" fill="#e7c9bf" opacity=".5"/>`;
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
    <path d="M76 98c14-2 22 8 16 16-8 2-16-2-18-10" fill="#ff9a3c"/>
    <ellipse cx="60" cy="104" rx="22" ry="16" fill="#ff9a3c"/>
    <ellipse cx="60" cy="108" rx="12" ry="9" fill="#fff1dc"/>
    <circle cx="60" cy="62" r="34" fill="#ff9a3c"/>
    <path d="M30 48l12 16h-16z" fill="#ff9a3c"/>
    <path d="M90 48l-12 16h16z" fill="#ff9a3c"/>
    <path d="M34 50l8 12h-12z" fill="#ffd0b0"/>
    <path d="M86 50l-8 12h12z" fill="#ffd0b0"/>
    <path d="M48 40c2 6 4 8 6 8M60 36c0 8 0 10 0 10M72 40c-2 6-4 8-6 8" stroke="#e07a28" stroke-width="2" fill="none" stroke-linecap="round"/>
    ${eyes(62)}
    <path d="M56 74h8" stroke="#e07a28" stroke-width="1.6" stroke-linecap="round"/>
    ${blush(74)}
    ${smile(78)}
    <circle cx="60" cy="90" r="5.5" fill="#ffe08a" stroke="#e0b04a" stroke-width="1.3"/>
    <path d="M60 86.5v7M56.5 90h7" stroke="#e0b04a" stroke-width="1.2"/>
  `),
  mochi: svgWrap(`
    ${shadow()}
    <path d="M80 92c16-10 26 0 22 12-8 6-18 4-24-2" fill="#f4a259"/>
    <path d="M88 96c8 0 12 4 8 8" stroke="#fff6e8" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="106" rx="20" ry="16" fill="#f4a259"/>
    <ellipse cx="60" cy="110" rx="11" ry="9" fill="#fff6e8"/>
    <path d="M36 86c4-10 14-14 20-8 0 8-8 12-16 12-2-1-4-2-4-4z" fill="#e23b3b"/>
    <circle cx="60" cy="60" r="36" fill="#f4a259"/>
    <path d="M28 50l14 12-12 6z" fill="#f4a259"/>
    <path d="M92 50L78 62l12 6z" fill="#f4a259"/>
    <path d="M34 52l8 8-8 4z" fill="#fff6e8"/>
    <path d="M86 52l-8 8 8 4z" fill="#fff6e8"/>
    <ellipse cx="60" cy="74" rx="16" ry="12" fill="#fff6e8"/>
    ${eyes(60)}
    <ellipse cx="60" cy="72" rx="3.2" ry="2.4" fill="#4a3942"/>
    ${blush(74)}
    ${smile(80)}
  `),
  pao: svgWrap(`
    ${shadow()}
    <ellipse cx="42" cy="124" rx="7" ry="10" fill="#2c2c2c"/>
    <ellipse cx="78" cy="124" rx="7" ry="10" fill="#2c2c2c"/>
    <ellipse cx="60" cy="118" rx="22" ry="16" fill="#f7f4ef"/>
    <circle cx="48" cy="134" r="6" fill="#2c2c2c"/>
    <circle cx="74" cy="134" r="6" fill="#2c2c2c"/>
    <circle cx="60" cy="62" r="36" fill="#f7f4ef"/>
    <circle cx="32" cy="36" r="11" fill="#2c2c2c"/>
    <circle cx="88" cy="36" r="11" fill="#2c2c2c"/>
    <ellipse cx="44" cy="64" rx="12" ry="13" fill="#2c2c2c"/>
    <ellipse cx="76" cy="64" rx="12" ry="13" fill="#2c2c2c"/>
    <g class="blink-eye">
      <ellipse cx="44" cy="64" rx="5.2" ry="6" fill="#fff"/>
      <ellipse cx="76" cy="64" rx="5.2" ry="6" fill="#fff"/>
      <ellipse cx="45" cy="65.5" rx="3" ry="3.4" fill="#2c2c2c"/>
      <ellipse cx="77" cy="65.5" rx="3" ry="3.4" fill="#2c2c2c"/>
      <circle cx="46.4" cy="62.4" r="1.7" fill="#fff"/>
      <circle cx="78.4" cy="62.4" r="1.7" fill="#fff"/>
    </g>
    <ellipse cx="60" cy="78" rx="3.4" ry="2.4" fill="#2c2c2c"/>
    ${blush(82)}
    ${smile(84)}
  `),
  usagi: svgWrap(`
    ${shadow()}
    <ellipse cx="82" cy="108" rx="8" ry="6" fill="#fff"/>
    <ellipse cx="60" cy="108" rx="20" ry="15" fill="#fff"/>
    <path d="M40 58c0-40 8-50 12-52 6 10 6 34 4 52" fill="#fff"/>
    <path d="M80 58c0-40-8-50-12-52-6 10-6 34-4 52" fill="#fff"/>
    <path d="M44 56c1-30 5-40 8-42 3 8 3 26 2 42" fill="#ffd0e0"/>
    <path d="M76 56c-1-30-5-40-8-42-3 8-3 26-2 42" fill="#ffd0e0"/>
    <circle cx="60" cy="78" r="32" fill="#fff"/>
    <path d="M86 40c8 1 12 8 8 14-6-1-10-6-8-14z" fill="#ff8fb8"/>
    ${eyes(76)}
    ${blush(88)}
    ${smile(94)}
  `),
  pon: svgWrap(`
    ${shadow()}
    <path d="M82 98c14 0 20 12 12 18-8 0-14-6-16-12" fill="#c4844a"/>
    <path d="M90 104c6 2 8 6 4 8M86 112c6 0 8 3 4 6" stroke="#5c4033" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="106" rx="22" ry="16" fill="#c4844a"/>
    <ellipse cx="60" cy="110" rx="12" ry="9" fill="#fff1dc"/>
    <circle cx="60" cy="64" r="35" fill="#c4844a"/>
    <path d="M30 52l14 12-10 8z" fill="#a56a3d"/>
    <path d="M90 52L76 64l10 8z" fill="#a56a3d"/>
    <ellipse cx="60" cy="74" rx="18" ry="14" fill="#fff1dc"/>
    <path d="M38 58c8 8 14 12 22 12s14-4 22-12c-8 6-14 8-22 8s-14-2-22-8z" fill="#6b4a38" opacity=".55"/>
    ${eyes(64)}
    <ellipse cx="60" cy="76" rx="3" ry="2.2" fill="#5c4033"/>
    ${blush(78)}
    ${smile(82)}
    <path d="M74 22c8-16 22-14 22-2-8 2-14 8-16 14-2-4-6-8-6-12z" fill="#7dbe6a"/>
    <path d="M84 16c3 6 3 10 1 14" stroke="#5d8f4c" stroke-width="1.3" fill="none"/>
  `)
};

function characterById(id) {
  return CHARACTERS.find((c) => c.id === id) || CHARACTERS[0];
}

function characterSvg(id) {
  return SPRITES[id] || SPRITES.hana;
}
