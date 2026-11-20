/* Chubby Japanese buildings for pins, cards, and landmark sprites.
   Original drawings. Not copied from any film. */
function houseSvg(inner) {
  return `<svg viewBox="0 0 64 72" aria-hidden="true">${inner}</svg>`;
}
function houseFace(x, y) {
  return `<ellipse cx="${x - 7}" cy="${y + 3}" rx="2.6" ry="1.3" fill="#f3a8b8"/>
    <ellipse cx="${x + 7}" cy="${y + 3}" rx="2.6" ry="1.3" fill="#f3a8b8"/>
    <circle cx="${x - 3.1}" cy="${y}" r="1.15" fill="#5c4652"/>
    <circle cx="${x + 3.1}" cy="${y}" r="1.15" fill="#5c4652"/>
    <path d="M${x - 1.6} ${y + 2.4} q1.6 1.5 3.2 0" fill="none" stroke="#c47a88" stroke-width="0.8" stroke-linecap="round"/>`;
}
function kawara(x, y, w, fill) {
  const m = x + w / 2;
  const r = x + w;
  const c = fill || "#c45c4a";
  return `<path d="M${x - 5} ${y + 7} Q${m} ${y - 12} ${r + 5} ${y + 7} L${r + 1} ${y + 13} Q${m} ${y - 2} ${x - 1} ${y + 13} Z" fill="${c}" stroke="#a8483c" stroke-width="1"/>
    <path d="M${x + 1} ${y + 9} Q${m} ${y} ${r - 1} ${y + 9}" fill="none" stroke="#f0d7a0" stroke-width="1" opacity=".9"/>`;
}
function shoji(x, y, w, h) {
  return `<g class="win"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5" fill="#f7e7c4" stroke="#e4c99a" stroke-width="0.7"/>
    <path d="M${x + w / 2} ${y} V${y + h} M${x} ${y + h / 2} H${x + w}" stroke="#e4c99a" stroke-width="0.6"/></g>`;
}
function noren(x, y, w, color) {
  const c = color || "#f28aaa";
  return `<path class="noren" d="M${x} ${y} h${w} v14 q${-w / 4} 4 ${-w / 2} 0 q${-w / 4} 4 ${-w / 2} 0 z" fill="${c}" stroke="#a8483c" stroke-width="0.6"/>`;
}

const HOUSE = {
  cross() {
    return houseSvg(`
      ${kawara(6, 16, 22, "#f4d2dc")}
      <rect x="8" y="26" width="18" height="22" rx="3" fill="#fff" stroke="#e7b8c4"/>
      ${shoji(12, 32, 10, 8)}
      ${kawara(34, 14, 22, "#d5ecff")}
      <rect x="36" y="24" width="18" height="24" rx="3" fill="#fff" stroke="#e7b8c4"/>
      ${houseFace(45, 34)}
      <rect x="28" y="48" width="8" height="14" rx="2" fill="#9ad7b0"/>
      <rect x="26" y="46" width="12" height="4" rx="1" fill="#5c4652"/>`);
  },
  rice() {
    return houseSvg(`
      <rect x="8" y="30" width="48" height="30" rx="4" fill="#fff" stroke="#e7b8c4" stroke-width="1.3"/>
      <rect x="6" y="22" width="52" height="12" rx="2" fill="#f28aaa"/>
      <path d="M6 22 h8 v12 H6z M22 22 h8 v12 h-8z M38 22 h8 v12 h-8z" fill="#fff"/>
      ${shoji(14, 40, 16, 12)}
      ${houseFace(44, 46)}
      <rect x="16" y="56" width="8" height="6" rx="1" fill="#8ed4a8"/>`);
  },
  train() {
    return houseSvg(`
      ${kawara(4, 16, 56, "#d7e4f2")}
      <rect x="10" y="28" width="44" height="28" rx="3" fill="#fff" stroke="#c5d4e4"/>
      ${shoji(16, 36, 12, 12)}
      <circle cx="44" cy="40" r="5" fill="#fff" stroke="#e7b8c4"/>
      <path d="M44 37 v6 M41 40 h6" stroke="#e07a4a" stroke-width="0.8"/>
      ${houseFace(44, 52)}
      <rect x="8" y="56" width="48" height="4" rx="1" fill="#e7c9a0"/>`);
  },
  can() {
    return houseSvg(`
      <rect x="18" y="14" width="28" height="46" rx="6" fill="#fff" stroke="#e7b8c4" stroke-width="1.3"/>
      <rect x="22" y="20" width="20" height="16" rx="3" fill="#d5ecff"/>
      <circle cx="28" cy="28" r="3" fill="#ff8b8b"/>
      <circle cx="36" cy="28" r="3" fill="#ffe7ae"/>
      ${houseFace(32, 44)}
      <rect x="26" y="52" width="12" height="4" rx="1" fill="#5c4652"/>`);
  },
  bowl() {
    return houseSvg(`
      ${kawara(8, 12, 48)}
      <rect x="12" y="24" width="40" height="28" rx="3" fill="#f4e2c4" stroke="#e0c4a0"/>
      ${noren(16, 24, 32, "#e15b5b")}
      ${houseFace(32, 46)}
      <ellipse cx="32" cy="62" rx="10" ry="4" fill="#fff" stroke="#e0c4a0"/>
      <ellipse class="steam-bit" cx="32" cy="56" rx="4" ry="2" fill="#fff" opacity=".8"/>`);
  },
  tree() {
    return houseSvg(`
      <ellipse cx="22" cy="28" rx="14" ry="12" fill="#8ed4a8"/>
      <ellipse cx="40" cy="26" rx="12" ry="11" fill="#6fbe86"/>
      <rect x="20" y="36" width="4" height="14" rx="1" fill="#c4844a"/>
      <rect x="38" y="34" width="4" height="16" rx="1" fill="#c4844a"/>
      <rect x="28" y="40" width="8" height="16" rx="1" fill="#d7d2c8"/>
      <rect x="26" y="36" width="12" height="6" rx="1" fill="#cfc8bc"/>
      <circle cx="32" cy="30" r="2" fill="#ffe7ae"/>
      ${houseFace(32, 58)}`);
  },
  torii() {
    return houseSvg(`
      <rect x="6" y="14" width="52" height="7" rx="2" fill="#e15b5b"/>
      <rect x="12" y="24" width="40" height="4" fill="#e15b5b"/>
      <rect x="16" y="18" width="6" height="40" rx="1" fill="#e15b5b"/>
      <rect x="42" y="18" width="6" height="40" rx="1" fill="#e15b5b"/>
      ${kawara(22, 30, 20, "#c45c4a")}
      <rect x="26" y="40" width="12" height="14" rx="2" fill="#f4e2c4" stroke="#e0c4a0"/>
      ${houseFace(32, 48)}`);
  },
  pagoda() {
    return houseSvg(`
      ${kawara(8, 8, 48)}
      ${kawara(12, 18, 40)}
      ${kawara(16, 28, 32)}
      ${kawara(20, 38, 24)}
      ${kawara(23, 48, 18)}
      <rect x="29" y="58" width="6" height="8" fill="#f4e2c4"/>
      ${houseFace(32, 34)}`);
  },
  tower() {
    return houseSvg(`
      <path d="M32 4 l6 12 h-12 z" fill="#f28a4a"/>
      <path d="M16 22 h32 l-4 36 H20 z" fill="#f7b56a" stroke="#e07a3a" stroke-width="1.1"/>
      <path d="M20 34 h24 M22 46 h20" stroke="#fff" stroke-width="1.2" opacity=".75"/>
      ${houseFace(32, 30)}
      <rect x="28" y="58" width="8" height="8" fill="#e7e2da"/>`);
  },
  skytree() {
    return houseSvg(`
      <path d="M32 2 L42 60 H22 Z" fill="#d7d6e4" stroke="#b7b4c8" stroke-width="1"/>
      <ellipse cx="32" cy="34" rx="14" ry="6" fill="#f7e7c4" stroke="#e4c99a"/>
      ${houseFace(32, 34)}
      <rect x="29" y="60" width="6" height="8" fill="#c9c6d4"/>`);
  },
  lantern() {
    return houseSvg(`
      ${kawara(6, 14, 52, "#8a5a4a")}
      <rect x="10" y="26" width="44" height="30" rx="2" fill="#f0d2b0" stroke="#c4926a"/>
      ${noren(16, 26, 32, "#6a4038")}
      <rect class="chochin" x="4" y="20" width="8" height="12" rx="3" fill="#e15b5b"/>
      <rect class="chochin" x="52" y="18" width="8" height="12" rx="3" fill="#ffb15a"/>
      ${houseFace(32, 46)}
      ${shoji(14, 40, 8, 8)}`);
  },
  cup() {
    return houseSvg(`
      ${kawara(8, 12, 48, "#6a4038")}
      <rect x="12" y="24" width="40" height="30" rx="3" fill="#f7efe4" stroke="#e0c4a0"/>
      ${shoji(16, 32, 14, 14)}
      ${houseFace(44, 42)}
      <ellipse class="steam-bit" cx="24" cy="28" rx="4" ry="2" fill="#fff" opacity=".75"/>`);
  },
  bath() {
    return houseSvg(`
      <rect x="30" y="6" width="6" height="14" rx="1" fill="#c4844a"/>
      <ellipse class="steam-bit" cx="33" cy="4" rx="5" ry="2.4" fill="#fff" opacity=".8"/>
      ${kawara(6, 16, 52)}
      <rect x="10" y="28" width="44" height="28" rx="3" fill="#f4e2c4" stroke="#e0c4a0"/>
      ${noren(18, 28, 28, "#3d7ea8")}
      ${houseFace(32, 48)}`);
  },
  soba() {
    return houseSvg(`
      <rect x="8" y="22" width="48" height="34" rx="4" fill="#fff6ea" stroke="#e0c4a0"/>
      <rect x="8" y="22" width="48" height="8" fill="#c45c4a"/>
      ${noren(14, 30, 36, "#f0d2b0")}
      ${houseFace(32, 46)}
      <rect x="18" y="56" width="28" height="6" rx="1" fill="#e7e2da"/>`);
  },
  bag() {
    return houseSvg(`
      ${kawara(4, 10, 56, "#f4d2dc")}
      <rect x="10" y="22" width="44" height="36" rx="3" fill="#fff" stroke="#e7b8c4"/>
      ${shoji(16, 30, 12, 16)}
      ${shoji(36, 30, 12, 16)}
      ${houseFace(32, 52)}
      <path d="M14 18 h6 l-1 6 h-4z M44 16 h6 l-1 6 h-4z" fill="#f28aaa"/>`);
  },
  shirt() {
    return houseSvg(`
      ${kawara(6, 14, 52, "#8a5a4a")}
      <rect x="12" y="26" width="40" height="30" rx="2" fill="#f0d2b0" stroke="#c4926a"/>
      ${noren(20, 26, 24, "#6a8a6a")}
      <path d="M8 20 h8 v8 h-3 l-2 6 h-3z" fill="#d5ecff"/>
      <path d="M48 18 h8 v8 h-3 l-2 8 h-3z" fill="#ffd0e0"/>
      ${houseFace(32, 48)}`);
  },
  cat() {
    return houseSvg(`
      ${kawara(8, 16, 48)}
      <rect x="14" y="28" width="36" height="26" rx="2" fill="#f4e2c4" stroke="#e0c4a0"/>
      ${noren(22, 28, 20, "#f28aaa")}
      <ellipse cx="12" cy="40" rx="7" ry="5" fill="#f0a050"/>
      <path d="M7 36 l2-6 3 4 M16 36 l-1-6 -3 4" fill="#f0a050"/>
      <circle cx="10" cy="40" r="0.8" fill="#5c4652"/>
      ${houseFace(36, 44)}`);
  },
  stream() {
    return houseSvg(`
      <path d="M4 40 Q20 32 32 40 T60 36" fill="none" stroke="#7ec4ea" stroke-width="4" stroke-linecap="round"/>
      <path d="M8 50 h16 l-2 8 H10 z" fill="#c4844a"/>
      <rect x="14" y="34" width="4" height="16" fill="#d7d2c8"/>
      <rect x="10" y="30" width="12" height="5" rx="1" fill="#cfc8bc"/>
      <circle cx="16" cy="26" r="2" fill="#ffe7ae"/>
      ${houseFace(46, 48)}
      <ellipse cx="44" cy="54" rx="10" ry="6" fill="#8ed4a8"/>`);
  },
  leaf() {
    return houseSvg(`
      <ellipse cx="32" cy="30" rx="18" ry="14" fill="#8ed4a8"/>
      <ellipse cx="18" cy="40" rx="10" ry="8" fill="#6fbe86"/>
      <rect x="28" y="36" width="8" height="14" fill="#d7d2c8"/>
      <rect x="24" y="32" width="16" height="6" rx="1" fill="#cfc8bc"/>
      ${houseFace(32, 56)}
      <circle cx="48" cy="22" r="3" fill="#f4b7c8"/>`);
  },
  arcade() {
    return houseSvg(`
      ${kawara(2, 10, 60, "#c45c4a")}
      <rect x="6" y="22" width="10" height="36" fill="#f4e2c4"/>
      <rect x="48" y="22" width="10" height="36" fill="#f4e2c4"/>
      ${noren(18, 24, 28, "#f28aaa")}
      ${houseFace(32, 46)}
      <rect x="20" y="58" width="24" height="4" fill="#e7e2da"/>`);
  },
  lane() {
    return houseSvg(`
      ${kawara(2, 18, 26, "#8a5a4a")}
      <rect x="6" y="30" width="20" height="26" fill="#f0d2b0" stroke="#c4926a"/>
      ${kawara(34, 12, 26)}
      <rect x="38" y="24" width="20" height="32" fill="#f4e2c4" stroke="#e0c4a0"/>
      <rect class="chochin" x="26" y="8" width="8" height="12" rx="3" fill="#e15b5b"/>
      ${houseFace(48, 40)}
      <path d="M4 16 H60" stroke="#8a7a72" stroke-width="0.6"/>`);
  },
  candy() {
    return houseSvg(`
      <rect x="16" y="16" width="32" height="42" rx="8" fill="#fff" stroke="#f3b7cc" stroke-width="1.4"/>
      <circle cx="26" cy="30" r="5" fill="#ffb7c8"/>
      <circle cx="38" cy="28" r="5" fill="#ffe7ae"/>
      <circle cx="32" cy="38" r="5" fill="#b7ead4"/>
      ${houseFace(32, 50)}
      <rect x="28" y="8" width="8" height="10" rx="2" fill="#f28aaa"/>`);
  },
  nagaya() {
    return houseSvg(`
      ${kawara(2, 14, 60, "#8a5a4a")}
      <rect x="4" y="26" width="56" height="32" fill="#f0d2b0" stroke="#c4926a"/>
      <rect x="10" y="34" width="8" height="16" fill="#6a4038"/>
      <rect x="28" y="34" width="8" height="16" fill="#6a4038"/>
      <rect x="46" y="34" width="8" height="16" fill="#6a4038"/>
      ${noren(8, 26, 12, "#f28aaa")}
      ${houseFace(32, 30)}`);
  },
  fence() {
    return houseSvg(`
      <path d="M8 28 v28 M18 24 v32 M28 28 v28 M38 24 v32 M48 28 v28 M56 24 v32" stroke="#7d9a62" stroke-width="3" stroke-linecap="round"/>
      <path d="M6 36 H58 M6 46 H58" stroke="#c4a35a" stroke-width="2"/>
      <ellipse cx="32" cy="20" rx="8" ry="4" fill="#8ed4a8"/>
      ${houseFace(32, 58)}`);
  },
  kura() {
    return houseSvg(`
      ${kawara(6, 10, 52, "#3a3538")}
      <rect x="10" y="22" width="44" height="36" rx="2" fill="#f7f4ee" stroke="#d9d0c4"/>
      <rect x="26" y="36" width="12" height="22" rx="1" fill="#6a4038"/>
      ${shoji(14, 30, 8, 10)}
      ${houseFace(46, 40)}`);
  },
  mansion() {
    return houseSvg(`
      <rect x="10" y="8" width="44" height="54" rx="3" fill="#f4e6dc" stroke="#e0c4b0"/>
      ${shoji(16, 16, 12, 10)}
      ${shoji(36, 16, 12, 10)}
      ${shoji(16, 32, 12, 10)}
      ${shoji(36, 32, 12, 10)}
      <path d="M14 28 h8 v6 h-3 l-2 5 h-3z" fill="#d5ecff"/>
      <path d="M40 44 h8 v6 h-3 l-2 5 h-3z" fill="#ffd0e0"/>
      ${houseFace(32, 54)}`);
  },
  pole() {
    return houseSvg(`
      <path d="M6 18 H58 M10 18 v6 M48 18 v8" stroke="#8a7a72" stroke-width="1.2" fill="none"/>
      <rect x="30" y="16" width="3" height="48" fill="#b7a89a"/>
      <rect class="chochin" x="8" y="22" width="7" height="10" rx="3" fill="#ffb15a"/>
      <rect x="18" y="40" width="10" height="16" rx="2" fill="#fff" stroke="#e7b8c4"/>
      ${houseFace(23, 48)}`);
  },
  koi() {
    return houseSvg(`
      <ellipse cx="32" cy="40" rx="22" ry="14" fill="#9fd4f2" stroke="#7eb8d4"/>
      <ellipse cx="24" cy="40" rx="6" ry="3" fill="#f28a4a"/>
      <ellipse cx="40" cy="44" rx="5" ry="2.4" fill="#fff"/>
      <path d="M8 28 h10 M46 24 h12" stroke="#7d9a62" stroke-width="2"/>
      <ellipse cx="14" cy="22" rx="6" ry="3" fill="#8ed4a8"/>
      ${houseFace(32, 58)}`);
  },
  gate() {
    return houseSvg(`
      <rect x="4" y="18" width="56" height="16" rx="2" fill="#e15b5b"/>
      <rect x="10" y="34" width="10" height="28" fill="#c45c4a"/>
      <rect x="44" y="34" width="10" height="28" fill="#c45c4a"/>
      <circle cx="18" cy="16" r="6" fill="#fff"/>
      <circle cx="46" cy="16" r="6" fill="#fff"/>
      ${houseFace(32, 26)}
      <rect class="chochin" x="28" y="36" width="8" height="14" rx="3" fill="#ffb15a"/>`);
  },
  brick() {
    return houseSvg(`
      ${kawara(4, 8, 56, "#6a4038")}
      <rect x="8" y="20" width="48" height="40" fill="#c46a5a" stroke="#a8483c"/>
      <path d="M8 32 H56 M8 44 H56 M20 20 V60 M32 20 V60 M44 20 V60" stroke="#e7b09a" stroke-width="0.7"/>
      <rect x="26" y="40" width="12" height="20" fill="#5c4652"/>
      ${houseFace(18, 28)}`);
  },
  scramble() {
    return houseSvg(`
      ${kawara(2, 12, 26, "#f4d2dc")}
      <rect x="4" y="24" width="22" height="28" rx="2" fill="#fff" stroke="#e7b8c4"/>
      ${kawara(34, 8, 26, "#d5ecff")}
      <rect x="36" y="20" width="22" height="32" rx="2" fill="#fff" stroke="#c5d4e4"/>
      <rect x="28" y="46" width="8" height="10" rx="1" fill="#9ad7b0"/>
      ${houseFace(16, 36)}
      ${houseFace(48, 34)}`);
  }
};

function landmarkSvg(kind) {
  if (kind === "torii") return HOUSE.torii();
  if (kind === "pagoda") return HOUSE.pagoda();
  if (kind === "tower") return HOUSE.tower();
  if (kind === "gate") return HOUSE.gate();
  if (kind === "brick") return HOUSE.brick();
  if (kind === "scramble") return HOUSE.scramble();
  if (kind === "park") return HOUSE.tree();
  if (kind === "alley") return HOUSE.lantern();
  if (kind === "village") return HOUSE.lane();
  return HOUSE.skytree();
}
