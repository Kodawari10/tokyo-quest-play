/* Original portraits for Tokyo Quest. Animals are gentle face studies, not copies of any character. */
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
    blurb: "An orange tabby who follows the warmest patch of sun."
  },
  {
    id: "mochi",
    name: "Mochi",
    nameJa: "もち",
    blurb: "A red shiba with a snack radar."
  },
  {
    id: "pao",
    name: "Pao",
    nameJa: "パオ",
    blurb: "A giant panda. Professional picnic planner."
  },
  {
    id: "usagi",
    name: "Usagi",
    nameJa: "うさぎ",
    blurb: "A rabbit, always first to hear the train."
  },
  {
    id: "pon",
    name: "Pon",
    nameJa: "ポン",
    blurb: "A tanuki who knows every side street."
  }
];

function svgWrap(inner) {
  return `<svg viewBox="0 0 160 160" aria-hidden="true">${inner}</svg>`;
}

function humanEyes(y) {
  return `<g class="blink-eye">
    <ellipse cx="58" cy="${y}" rx="11" ry="12.5" fill="#fff"/>
    <ellipse cx="102" cy="${y}" rx="11" ry="12.5" fill="#fff"/>
    <ellipse cx="60" cy="${y + 1.5}" rx="6" ry="7" fill="#4a3942"/>
    <ellipse cx="104" cy="${y + 1.5}" rx="6" ry="7" fill="#4a3942"/>
    <circle cx="63" cy="${y - 2}" r="2.4" fill="#fff"/>
    <circle cx="107" cy="${y - 2}" r="2.4" fill="#fff"/>
    <circle cx="56" cy="${y + 4}" r="1.1" fill="#fff"/>
    <circle cx="100" cy="${y + 4}" r="1.1" fill="#fff"/>
  </g>`;
}

function furTicks(strokes, color) {
  return strokes.map(([x, y, d]) =>
    `<path d="M${x} ${y} q${d} 2 ${d * 0.15} 8" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".7"/>`
  ).join("");
}

const SPRITES = {
  hana: svgWrap(`
    <ellipse cx="80" cy="148" rx="36" ry="7" fill="#e7c9bf" opacity=".45"/>
    <path d="M52 118c4 16 14 26 28 26s24-10 28-26c-10 8-18 10-28 10s-18-2-28-10z" fill="#ffe08a"/>
    <ellipse cx="80" cy="78" rx="52" ry="48" fill="#ff9ec4"/>
    <circle cx="80" cy="84" r="42" fill="#ffe3cf"/>
    <ellipse cx="80" cy="52" rx="36" ry="18" fill="#ff8fb3"/>
    <ellipse cx="46" cy="74" rx="12" ry="20" fill="#ff8fb3"/>
    <ellipse cx="114" cy="74" rx="12" ry="20" fill="#ff8fb3"/>
    ${humanEyes(82)}
    <ellipse cx="48" cy="98" rx="8" ry="4" fill="#ff8eab" opacity=".8"/>
    <ellipse cx="112" cy="98" rx="8" ry="4" fill="#ff8eab" opacity=".8"/>
    <path d="M72 104c3 4 13 4 16 0" stroke="#e08a8a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <g transform="translate(118,48)">
      <circle r="8" fill="#ff6b9d"/>
      <circle r="3.2" fill="#ffe08a"/>
    </g>
  `),
  ren: svgWrap(`
    <ellipse cx="80" cy="148" rx="36" ry="7" fill="#e7c9bf" opacity=".45"/>
    <path d="M54 116c6 18 14 28 26 28s20-10 26-28c-10 8-18 10-26 10s-16-2-26-10z" fill="#8fd0f2"/>
    <ellipse cx="80" cy="76" rx="50" ry="46" fill="#6b4636"/>
    <circle cx="80" cy="84" r="40" fill="#ffe3cf"/>
    <ellipse cx="80" cy="52" rx="34" ry="16" fill="#6b4636"/>
    <ellipse cx="48" cy="72" rx="11" ry="18" fill="#6b4636"/>
    <ellipse cx="112" cy="72" rx="11" ry="18" fill="#6b4636"/>
    ${humanEyes(82)}
    <ellipse cx="50" cy="98" rx="8" ry="4" fill="#ff8eab" opacity=".8"/>
    <ellipse cx="110" cy="98" rx="8" ry="4" fill="#ff8eab" opacity=".8"/>
    <path d="M72 104c3 4 13 4 16 0" stroke="#e08a8a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  `),
  mikan: svgWrap(`
    <ellipse cx="80" cy="150" rx="40" ry="6" fill="#e7c9bf" opacity=".35"/>
    <path d="M46 118c8 18 18 28 34 28s26-10 34-28c-12 10-22 12-34 12s-22-2-34-12z" fill="#f6c48a"/>
    <path d="M38 62l18 28-22 6z" fill="#e08a3a"/>
    <path d="M122 62l-18 28 22 6z" fill="#e08a3a"/>
    <path d="M46 66l12 18-14 4z" fill="#f3b7a4"/>
    <path d="M114 66l-12 18 14 4z" fill="#f3b7a4"/>
    <ellipse cx="80" cy="96" rx="52" ry="46" fill="#c96a2c"/>
    <ellipse cx="80" cy="98" rx="48" ry="42" fill="#f0a04c"/>
    <ellipse cx="80" cy="86" rx="28" ry="16" fill="#e07a30" opacity=".35"/>
    ${furTicks([[58, 78, 5], [74, 70, 3], [92, 70, -3], [108, 80, -5], [50, 98, 6], [112, 98, -6]], "#a35220")}
    <path d="M60 74c10 7 16 4 18-3M78 68c7 8 14 5 16-3" stroke="#a35220" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <ellipse cx="80" cy="112" rx="22" ry="14" fill="#fff6ee"/>
    <ellipse cx="62" cy="104" rx="10" ry="7" fill="#fff6ee" opacity=".85"/>
    <ellipse cx="98" cy="104" rx="10" ry="7" fill="#fff6ee" opacity=".85"/>
    <g class="blink-eye">
      <ellipse cx="62" cy="96" rx="7.4" ry="5.2" fill="#e8b04a"/>
      <ellipse cx="98" cy="96" rx="7.4" ry="5.2" fill="#e8b04a"/>
      <ellipse cx="62" cy="96.2" rx="1.5" ry="4.1" fill="#24160e"/>
      <ellipse cx="98" cy="96.2" rx="1.5" ry="4.1" fill="#24160e"/>
      <circle cx="64.2" cy="94" r="1.3" fill="#fff"/>
      <circle cx="100.2" cy="94" r="1.3" fill="#fff"/>
    </g>
    <path d="M80 108c-3 2-5 5-5 6 3 2 7 2 10 0 0-1-2-4-5-6z" fill="#e89aaa"/>
    <path d="M80 114c-2 3-2 5 0 6" stroke="#c47078" stroke-width="1.2" fill="none"/>
    <path d="M72 110h-26M74 115h-24M76 106h-22" stroke="#8a7568" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M88 110h26M86 115h24M84 106h22" stroke="#8a7568" stroke-width="1.3" stroke-linecap="round"/>
  `),
  mochi: svgWrap(`
    <ellipse cx="80" cy="150" rx="40" ry="6" fill="#e7c9bf" opacity=".35"/>
    <path d="M48 122c10 16 18 24 32 24s22-8 32-24c-12 8-22 10-32 10s-20-2-32-10z" fill="#fff8f0"/>
    <path d="M42 58l16 26-20 4z" fill="#d4723a"/>
    <path d="M118 58l-16 26 20 4z" fill="#d4723a"/>
    <path d="M48 62l10 16-12 3z" fill="#fff8f0"/>
    <path d="M112 62l-10 16 12 3z" fill="#fff8f0"/>
    <ellipse cx="80" cy="98" rx="50" ry="44" fill="#b85a28"/>
    <ellipse cx="80" cy="100" rx="46" ry="40" fill="#e07a32"/>
    <ellipse cx="80" cy="84" rx="24" ry="12" fill="#c4682e" opacity=".4"/>
    ${furTicks([[58, 82, 4], [74, 74, 2], [90, 74, -2], [106, 84, -4], [52, 100, 5]], "#9a4a1c")}
    <ellipse cx="58" cy="108" rx="14" ry="12" fill="#fff8f0"/>
    <ellipse cx="102" cy="108" rx="14" ry="12" fill="#fff8f0"/>
    <ellipse cx="80" cy="116" rx="20" ry="14" fill="#fff8f0"/>
    <g class="blink-eye">
      <ellipse cx="63" cy="96" rx="5.4" ry="4" fill="#fff6ee"/>
      <ellipse cx="97" cy="96" rx="5.4" ry="4" fill="#fff6ee"/>
      <ellipse cx="64" cy="96.2" rx="3.4" ry="3.5" fill="#4a2c1c"/>
      <ellipse cx="98" cy="96.2" rx="3.4" ry="3.5" fill="#4a2c1c"/>
      <ellipse cx="64.2" cy="96.6" rx="1.8" ry="2.2" fill="#1a100c"/>
      <ellipse cx="98.2" cy="96.6" rx="1.8" ry="2.2" fill="#1a100c"/>
      <circle cx="65.4" cy="94.8" r="0.9" fill="#fff"/>
      <circle cx="99.4" cy="94.8" r="0.9" fill="#fff"/>
    </g>
    <ellipse cx="80" cy="114" rx="5" ry="3.4" fill="#2c2420"/>
    <path d="M74 116c2 3 4 4 6 4s4-1 6-4" stroke="#2c2420" stroke-width="1.1" fill="none"/>
    <circle cx="70" cy="118" r="1.1" fill="#2c2420"/>
    <circle cx="90" cy="118" r="1.1" fill="#2c2420"/>
    <path d="M70 116h-18M72 120h-16M90 116h18M88 120h16" stroke="#b7a898" stroke-width="1.15" stroke-linecap="round"/>
  `),
  pao: svgWrap(`
    <ellipse cx="80" cy="150" rx="40" ry="6" fill="#e7c9bf" opacity=".35"/>
    <ellipse cx="80" cy="128" rx="36" ry="16" fill="#f4f1ec"/>
    <ellipse cx="80" cy="92" rx="48" ry="44" fill="#f7f4ef"/>
    <ellipse cx="80" cy="78" rx="22" ry="10" fill="#e7e2dc" opacity=".55"/>
    <circle cx="42" cy="52" r="14" fill="#1e1e1e"/>
    <circle cx="118" cy="52" r="14" fill="#1e1e1e"/>
    <ellipse cx="58" cy="96" rx="16" ry="18" fill="#1e1e1e"/>
    <ellipse cx="102" cy="96" rx="16" ry="18" fill="#1e1e1e"/>
    <ellipse cx="80" cy="118" rx="16" ry="12" fill="#f7f4ef"/>
    <ellipse cx="80" cy="112" rx="7" ry="5" fill="#f7f4ef"/>
    <ellipse cx="80" cy="116" rx="4.2" ry="3" fill="#1e1e1e"/>
    <g class="blink-eye">
      <ellipse cx="58" cy="98" rx="3.4" ry="3.6" fill="#3a2e28"/>
      <ellipse cx="102" cy="98" rx="3.4" ry="3.6" fill="#3a2e28"/>
      <circle cx="59.2" cy="96.8" r="1" fill="#fff"/>
      <circle cx="103.2" cy="96.8" r="1" fill="#fff"/>
    </g>
    <path d="M74 122c2 2 4 3 6 3s4-1 6-3" stroke="#c9b8b0" stroke-width="1.2" fill="none" stroke-linecap="round"/>
  `),
  usagi: svgWrap(`
    <ellipse cx="80" cy="152" rx="36" ry="6" fill="#e7c9bf" opacity=".3"/>
    <path d="M58 124c8 14 14 20 22 20s14-6 22-20c-8 6-14 8-22 8s-14-2-22-8z" fill="#fff"/>
    <path d="M58 36c2-28 10-34 14-34 6 6 8 24 6 40z" fill="#f7f4ef"/>
    <path d="M102 36c-2-28-10-34-14-34-6 6-8 24-6 40z" fill="#f4f0ea"/>
    <path d="M64 34c2-20 6-26 8-26 3 6 4 18 2 30z" fill="#f3c2cc"/>
    <path d="M96 34c-2-20-6-26-8-26-3 6-4 18-2 30z" fill="#f3c2cc"/>
    <ellipse cx="80" cy="96" rx="46" ry="40" fill="#e7e0d8"/>
    <ellipse cx="80" cy="98" rx="42" ry="36" fill="#fff"/>
    <ellipse cx="80" cy="84" rx="22" ry="12" fill="#f3eee8" opacity=".9"/>
    <ellipse cx="56" cy="108" rx="12" ry="9" fill="#fff"/>
    <ellipse cx="104" cy="108" rx="12" ry="9" fill="#fff"/>
    <g class="blink-eye">
      <ellipse cx="62" cy="98" rx="6.2" ry="6.6" fill="#f4e6d4"/>
      <ellipse cx="98" cy="98" rx="6.2" ry="6.6" fill="#f4e6d4"/>
      <ellipse cx="62" cy="98.2" rx="4.6" ry="5" fill="#a56b3c"/>
      <ellipse cx="98" cy="98.2" rx="4.6" ry="5" fill="#a56b3c"/>
      <ellipse cx="62" cy="98.6" rx="2.3" ry="2.8" fill="#2a1c12"/>
      <ellipse cx="98" cy="98.6" rx="2.3" ry="2.8" fill="#2a1c12"/>
      <circle cx="63.6" cy="96.2" r="1.2" fill="#fff"/>
      <circle cx="99.6" cy="96.2" r="1.2" fill="#fff"/>
    </g>
    <path d="M80 108c-2.4 2-4 4.2-4 5.2 2.4 2 5.6 2 8 0 0-1-1.6-3.2-4-5.2z" fill="#e7a0aa"/>
    <path d="M80 112 v5" stroke="#e09098" stroke-width="1"/>
    <path d="M76 114c2 3 6 3 8 0" stroke="#e09098" stroke-width="1" fill="none"/>
    <path d="M72 112h-22M74 117h-20M88 112h22M86 117h20" stroke="#c9b8b0" stroke-width="1.2" stroke-linecap="round"/>
  `),
  pon: svgWrap(`
    <ellipse cx="80" cy="150" rx="40" ry="6" fill="#e7c9bf" opacity=".35"/>
    <path d="M50 124c8 16 16 22 30 22s22-6 30-22c-10 8-20 10-30 10s-20-2-30-10z" fill="#efe2d0"/>
    <path d="M46 70c4-10 12-12 14-4 1 6-4 12-10 12-3 0-5-3-4-8z" fill="#6b5340"/>
    <path d="M114 70c-4-10-12-12-14-4-1 6 4 12 10 12 3 0 5-3 4-8z" fill="#6b5340"/>
    <ellipse cx="80" cy="98" rx="50" ry="42" fill="#6a5038"/>
    <ellipse cx="80" cy="100" rx="46" ry="38" fill="#9a7a52"/>
    <ellipse cx="80" cy="86" rx="26" ry="14" fill="#c4a574" opacity=".55"/>
    <ellipse cx="64" cy="92" rx="10" ry="6" fill="#c4a574" opacity=".55"/>
    <ellipse cx="98" cy="90" rx="9" ry="5" fill="#6a5038" opacity=".5"/>
    <ellipse cx="80" cy="78" rx="12" ry="6" fill="#d8c4a4" opacity=".4"/>
    ${furTicks([[58, 84, 5], [74, 76, 3], [96, 76, -3], [112, 86, -5], [52, 104, 6], [108, 108, -4]], "#4a3428")}
    <path d="M52 96c12 10 22 14 28 14s16-4 28-14c-8 8-18 12-28 12s-20-4-28-12z" fill="#3d2a22" opacity=".9"/>
    <ellipse cx="80" cy="116" rx="18" ry="12" fill="#efe2d0"/>
    <ellipse cx="62" cy="108" rx="8" ry="6" fill="#efe2d0" opacity=".7"/>
    <ellipse cx="98" cy="108" rx="8" ry="6" fill="#efe2d0" opacity=".7"/>
    <g class="blink-eye">
      <ellipse cx="66" cy="98" rx="5" ry="4.4" fill="#efe6d4"/>
      <ellipse cx="94" cy="98" rx="5" ry="4.4" fill="#efe6d4"/>
      <ellipse cx="66.3" cy="98.3" rx="2.8" ry="3" fill="#2a1c14"/>
      <ellipse cx="94.3" cy="98.3" rx="2.8" ry="3" fill="#2a1c14"/>
      <circle cx="67.4" cy="96.8" r="0.95" fill="#fff"/>
      <circle cx="95.4" cy="96.8" r="0.95" fill="#fff"/>
    </g>
    <ellipse cx="80" cy="114" rx="4.2" ry="3" fill="#2c2420"/>
    <path d="M74 118c2 2 4 3 6 3s4-1 6-3" stroke="#5c4030" stroke-width="1" fill="none"/>
    <path d="M72 114h-18M74 119h-16M88 114h18M86 119h16" stroke="#b7a890" stroke-width="1.2" stroke-linecap="round"/>
  `)
};

function characterById(id) {
  return CHARACTERS.find((c) => c.id === id) || CHARACTERS[0];
}

function characterSvg(id) {
  return SPRITES[id] || SPRITES.hana;
}
