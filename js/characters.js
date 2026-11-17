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

const SPRITES = {
  hana: svgWrap(`
    <ellipse cx="60" cy="138" rx="26" ry="7" fill="#e7c9bf" opacity=".55"/>
    <path d="M38 78c-8 10-6 28 2 36 8 4 18 2 22-4" fill="#ffd0e0"/>
    <path d="M46 96h28c4 10 2 22-2 28H48c-4-8-6-18-2-28z" fill="#ff8fb8"/>
    <path d="M48 74h28c6 2 10 12 8 22H42c-2-10 0-18 6-22z" fill="#ffe08a"/>
    <path d="M52 86h8M68 86h6" stroke="#f2c86a" stroke-width="2" stroke-linecap="round"/>
    <circle cx="52" cy="118" r="5" fill="#fff"/>
    <circle cx="70" cy="118" r="5" fill="#fff"/>
    <path d="M34 58c2-28 18-40 28-40s24 12 26 36c-8 4-16-6-26-6s-20 8-28 10z" fill="#ff8fb3"/>
    <circle cx="60" cy="52" r="24" fill="#ffe3cf"/>
    <path d="M40 48c4-16 12-22 20-22 10 0 18 8 22 20-8 2-14-6-20-6s-16 6-22 8z" fill="#ff8fb3"/>
    <circle cx="51" cy="54" r="3.2" fill="#4a3942"/>
    <circle cx="70" cy="54" r="3.2" fill="#4a3942"/>
    <circle cx="52.2" cy="52.8" r="1.1" fill="#fff"/>
    <circle cx="71.2" cy="52.8" r="1.1" fill="#fff"/>
    <path d="M56 62c2.4 2.4 6 2.4 8.4 0" stroke="#d98a8a" stroke-width="1.7" fill="none" stroke-linecap="round"/>
    <ellipse cx="44" cy="60" rx="4" ry="2.2" fill="#ffb3c4" opacity=".9"/>
    <ellipse cx="76" cy="60" rx="4" ry="2.2" fill="#ffb3c4" opacity=".9"/>
    <circle cx="86" cy="36" r="7" fill="#ff6b9d"/>
    <circle cx="86" cy="36" r="3" fill="#ffe08a"/>
  `),
  ren: svgWrap(`
    <ellipse cx="60" cy="138" rx="26" ry="7" fill="#e7c9bf" opacity=".55"/>
    <path d="M30 70c2 8 6 16 8 20 2-8 6-14 8-16" fill="#f0a07a"/>
    <path d="M40 78h40c8 2 12 16 8 30H36c-6-12-4-26 4-30z" fill="#8fd0f2"/>
    <path d="M52 84h16c2 6 2 12 0 16H52c-2-4-2-10 0-16z" fill="#d9f1fb"/>
    <path d="M44 108h14c2 8 1 16-1 20H42c-2-6-2-14 2-20z" fill="#5e6d8d"/>
    <path d="M66 108h14c4 6 4 14 2 20H64c-2-6-2-14 2-20z" fill="#5e6d8d"/>
    <ellipse cx="48" cy="128" rx="8" ry="4.5" fill="#3e4a62"/>
    <ellipse cx="76" cy="128" rx="8" ry="4.5" fill="#3e4a62"/>
    <path d="M36 46c4-22 16-32 26-32 12 0 22 10 24 28-6 6-14-2-22-2s-18 6-28 6z" fill="#6b4636"/>
    <circle cx="60" cy="54" r="23" fill="#ffe3cf"/>
    <path d="M40 48c6-14 14-20 22-20 8 0 16 6 20 16-8 1-12-6-18-6s-16 4-24 10z" fill="#6b4636"/>
    <circle cx="51" cy="56" r="3.1" fill="#4a3942"/>
    <circle cx="70" cy="56" r="3.1" fill="#4a3942"/>
    <circle cx="52.1" cy="54.8" r="1" fill="#fff"/>
    <circle cx="71.1" cy="54.8" r="1" fill="#fff"/>
    <path d="M56 64c2.2 2 5.4 2 7.6 0" stroke="#d98a8a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <ellipse cx="44" cy="62" rx="3.6" ry="2" fill="#ffb3c4"/>
    <ellipse cx="76" cy="62" rx="3.6" ry="2" fill="#ffb3c4"/>
  `),
  mikan: svgWrap(`
    <ellipse cx="60" cy="138" rx="26" ry="7" fill="#e7c9bf" opacity=".55"/>
    <path d="M78 96c16 4 22 18 16 28-8 2-16-4-18-14" fill="#ff9a3c"/>
    <path d="M82 100c6 2 10 8 8 14" stroke="#e07a28" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="100" rx="26" ry="24" fill="#ff9a3c"/>
    <ellipse cx="60" cy="106" rx="14" ry="14" fill="#fff1dc"/>
    <path d="M44 92c4 6 6 8 6 14M60 88c0 8 0 12 0 18M74 92c-4 6-4 10-4 16" stroke="#e07a28" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="60" cy="52" r="24" fill="#ff9a3c"/>
    <path d="M38 40l10 14H36z" fill="#ff9a3c"/>
    <path d="M82 40L72 54h12z" fill="#ff9a3c"/>
    <path d="M42 42l6 10H40z" fill="#ffd0b0"/>
    <path d="M78 42l-6 10h8z" fill="#ffd0b0"/>
    <ellipse cx="50" cy="54" rx="5" ry="6" fill="#fff"/>
    <ellipse cx="70" cy="54" rx="5" ry="6" fill="#fff"/>
    <circle cx="51" cy="55" r="2.6" fill="#4a3942"/>
    <circle cx="71" cy="55" r="2.6" fill="#4a3942"/>
    <circle cx="52" cy="54" r="1" fill="#fff"/>
    <circle cx="72" cy="54" r="1" fill="#fff"/>
    <path d="M56 62h8" stroke="#e07a28" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M58 64c1.4 2 3.2 2 4.6 0" stroke="#c46a4a" stroke-width="1.4" fill="none"/>
    <ellipse cx="42" cy="60" rx="3.4" ry="2" fill="#ffb3c4"/>
    <ellipse cx="78" cy="60" rx="3.4" ry="2" fill="#ffb3c4"/>
    <circle cx="60" cy="78" r="5" fill="#ffe08a" stroke="#e0b04a" stroke-width="1.4"/>
    <path d="M60 74v8M56 78h8" stroke="#e0b04a" stroke-width="1.2"/>
  `),
  mochi: svgWrap(`
    <ellipse cx="60" cy="138" rx="26" ry="7" fill="#e7c9bf" opacity=".55"/>
    <path d="M78 86c14-8 24 2 22 14-6 8-18 8-24 2" fill="#f4a259"/>
    <path d="M84 90c8-2 12 2 10 8" stroke="#fff3dd" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="102" rx="28" ry="24" fill="#f4a259"/>
    <ellipse cx="60" cy="110" rx="16" ry="14" fill="#fff6e8"/>
    <path d="M40 70c2-8 10-16 18-14 2 8-4 14-12 16" fill="#e23b3b"/>
    <circle cx="60" cy="54" r="26" fill="#f4a259"/>
    <ellipse cx="60" cy="62" rx="16" ry="12" fill="#fff6e8"/>
    <path d="M34 46l12 8-10 8z" fill="#f4a259"/>
    <path d="M86 46L74 54l10 8z" fill="#f4a259"/>
    <path d="M40 48l6 6-6 4z" fill="#fff6e8"/>
    <path d="M80 48l-6 6 6 4z" fill="#fff6e8"/>
    <path d="M48 52c2 4 4 4 6 0" stroke="#4a3942" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M66 52c2 4 4 4 6 0" stroke="#4a3942" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="60" rx="2.4" ry="1.8" fill="#4a3942"/>
    <path d="M54 66c3 3 9 3 12 0" stroke="#c46a4a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <ellipse cx="44" cy="60" rx="4" ry="2.2" fill="#ffb3c4"/>
    <ellipse cx="76" cy="60" rx="4" ry="2.2" fill="#ffb3c4"/>
  `),
  pao: svgWrap(`
    <ellipse cx="60" cy="138" rx="28" ry="7" fill="#e7c9bf" opacity=".55"/>
    <ellipse cx="60" cy="104" rx="30" ry="26" fill="#f7f4ef"/>
    <ellipse cx="38" cy="112" rx="8" ry="12" fill="#2c2c2c"/>
    <ellipse cx="82" cy="112" rx="8" ry="12" fill="#2c2c2c"/>
    <circle cx="46" cy="128" r="6" fill="#2c2c2c"/>
    <circle cx="74" cy="128" r="6" fill="#2c2c2c"/>
    <circle cx="60" cy="52" r="26" fill="#f7f4ef"/>
    <circle cx="40" cy="32" r="9" fill="#2c2c2c"/>
    <circle cx="80" cy="32" r="9" fill="#2c2c2c"/>
    <ellipse cx="48" cy="54" rx="8" ry="9" fill="#2c2c2c"/>
    <ellipse cx="72" cy="54" rx="8" ry="9" fill="#2c2c2c"/>
    <circle cx="49" cy="55" r="2.4" fill="#fff"/>
    <circle cx="73" cy="55" r="2.4" fill="#fff"/>
    <ellipse cx="60" cy="64" rx="3" ry="2.2" fill="#2c2c2c"/>
    <path d="M54 68c3 3 9 3 12 0" stroke="#c98b8b" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <ellipse cx="38" cy="66" rx="4" ry="2.3" fill="#ffb3c4"/>
    <ellipse cx="82" cy="66" rx="4" ry="2.3" fill="#ffb3c4"/>
  `),
  usagi: svgWrap(`
    <ellipse cx="60" cy="138" rx="26" ry="7" fill="#e7c9bf" opacity=".55"/>
    <ellipse cx="78" cy="112" rx="8" ry="6" fill="#fff"/>
    <ellipse cx="60" cy="104" rx="26" ry="24" fill="#fff"/>
    <path d="M44 70c-2-36 6-52 10-54 6 8 8 28 6 50" fill="#fff"/>
    <path d="M76 70c2-36-6-52-10-54-6 8-8 28-6 50" fill="#fff"/>
    <path d="M46 68c0-28 4-40 7-42 3 8 4 22 3 40" fill="#ffd0e0"/>
    <path d="M74 68c0-28-4-40-7-42-3 8-4 22-3 40" fill="#ffd0e0"/>
    <circle cx="60" cy="78" r="24" fill="#fff"/>
    <path d="M78 34c8 2 12 10 8 16-6-2-10-8-8-16z" fill="#ff8fb8"/>
    <circle cx="51" cy="80" r="3.2" fill="#4a3942"/>
    <circle cx="70" cy="80" r="3.2" fill="#4a3942"/>
    <circle cx="52.2" cy="78.8" r="1.1" fill="#fff"/>
    <circle cx="71.2" cy="78.8" r="1.1" fill="#fff"/>
    <path d="M56 88c2.4 2.2 6 2.2 8.4 0" stroke="#d98a8a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <ellipse cx="44" cy="86" rx="3.8" ry="2.1" fill="#ffb3c4"/>
    <ellipse cx="76" cy="86" rx="3.8" ry="2.1" fill="#ffb3c4"/>
  `),
  pon: svgWrap(`
    <ellipse cx="60" cy="138" rx="26" ry="7" fill="#e7c9bf" opacity=".55"/>
    <path d="M82 96c16 2 20 16 12 24-8-2-14-8-16-16" fill="#c4844a"/>
    <path d="M88 104c6 2 8 8 4 12M84 112c6 0 8 4 4 8" stroke="#5c4033" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="104" rx="28" ry="24" fill="#c4844a"/>
    <ellipse cx="60" cy="112" rx="16" ry="14" fill="#fff1dc"/>
    <circle cx="60" cy="56" r="25" fill="#c4844a"/>
    <path d="M36 48l12 10-8 8z" fill="#a56a3d"/>
    <path d="M84 48L72 58l8 8z" fill="#a56a3d"/>
    <path d="M42 52c6 10 12 14 18 14s12-4 18-14c-6 6-12 8-18 8s-12-2-18-8z" fill="#5c4033"/>
    <circle cx="50" cy="58" r="3.3" fill="#fff"/>
    <circle cx="70" cy="58" r="3.3" fill="#fff"/>
    <circle cx="51" cy="59" r="1.8" fill="#2c2420"/>
    <circle cx="71" cy="59" r="1.8" fill="#2c2420"/>
    <ellipse cx="60" cy="66" rx="3" ry="2.2" fill="#5c4033"/>
    <path d="M54 70c3 2.4 9 2.4 12 0" stroke="#8a4e3a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="42" cy="66" rx="3.6" ry="2" fill="#f0b0a8"/>
    <ellipse cx="78" cy="66" rx="3.6" ry="2" fill="#f0b0a8"/>
    <path d="M70 24c8-14 20-14 22-4-8 2-12 8-14 12-4-2-8-4-8-8z" fill="#7dbe6a"/>
    <path d="M80 20c4 6 4 10 2 14" stroke="#5d8f4c" stroke-width="1.2" fill="none"/>
  `)
};

function characterById(id) {
  return CHARACTERS.find((c) => c.id === id) || CHARACTERS[0];
}

function characterSvg(id) {
  return SPRITES[id] || SPRITES.hana;
}
