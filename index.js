// ApothecaryDle : ton appli d'origine (HTML et code inchangés), livrée en plugin.
// Ses données sont dans le dossier du plugin, que NeoBase sauvegarde (synchro cloud et sauvegardes) ; à la première ouverture elle reprend ce que tu avais dans NeoBase.
// Elle demande l'accès complet pour utiliser les outils d'interface de NeoBase. NeoBase ne l'ouvre que si elle est signée.
const HTML = "";
/*CSS-MOVED*/ const CSS = `.mdRow{display:grid;grid-template-columns:repeat(var(--n),46px);gap:6px}
.mdCell{height:46px;display:grid;place-items:center;font:18px var(--title);color:#fff;background:#160d30;box-shadow:inset 0 0 0 2px #3a2a6e}
.mdCell.typed{box-shadow:inset 0 0 0 2px var(--lilac)}
.mdCell.ghost{color:#5e4d85}
.mdCell.flip{animation:mdFlip .45s both}
.gSel{width:auto;font-size:14px;padding:6px 10px;margin-right:8px}
.shGrid td.num{text-align:right}
.mdClue{display:flex;flex-direction:column;gap:8px}
.mdHint{--fill:var(--field);padding:10px 14px;color:var(--lilac);font-size:15px}
.mdEmoji{--fill:var(--field);padding:14px;font-size:34px;letter-spacing:6px;text-align:center}
.mdForm{position:relative}
.mdInput{width:100%;font-size:16px;padding:12px 14px}
.mdSug{position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:5;--fill:#120922;display:flex;flex-direction:column;padding:4px;max-height:340px;overflow-y:auto}
.mdSugItem{all:unset;cursor:var(--cp,pointer);display:flex;justify-content:space-between;gap:12px;padding:8px 10px;color:#fff;font-size:15px}
.mdSugItem:hover,.mdSugItem.on{background:rgba(var(--mgr),.22)}
.mdSugItem .hint{font-size:12px}
.mdSugItem .n{display:flex;align-items:center;gap:10px}
.mdSugItem img{width:30px;height:30px;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.sysCard.mdWin{flex-direction:row;align-items:center;gap:18px}
.mdWin b{color:#ffd07a;font-size:17px}
.mdWinTxt{display:flex;flex-direction:column;gap:6px;min-width:0}
.mdWinImg{width:104px;height:104px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 3px #ffd07a,4px 4px 0 3px rgba(0,0,0,.45)}
.mdPix{width:240px;height:240px;align-self:center;image-rendering:pixelated;box-shadow:0 0 0 3px var(--field),6px 6px 0 3px rgba(0,0,0,.45)}
.mdGuesses{display:flex;flex-direction:column;gap:6px;overflow-x:auto}
.mdRow{display:grid;gap:6px}
.mdRow.head{position:sticky;top:0}
.mdH{font:7px var(--title);letter-spacing:1px;color:var(--muted);text-align:center;padding:4px 0}
.mdCell{display:flex;align-items:center;justify-content:center;gap:4px;min-height:54px;padding:6px;text-align:center;font-size:12px;overflow-wrap:break-word;hyphens:auto;min-width:0;color:#fff;background:#2a1d52;box-shadow:inset 0 -3px 0 rgba(0,0,0,.35);animation:mdFlip .35s steps(4) backwards}
.mdCell.who{background:#1c1238;font-weight:bold;justify-content:flex-start;gap:8px;text-align:left}
.mdCell.who img{width:40px;height:40px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.mdCell.wide img{width:32px;height:32px}
.mdCell.ok{background:#2f8f5a}
.mdCell.part{background:#c0862a}
.mdCell.no{background:#9a2a44}
.mdCell i{font-style:normal;font-size:18px;color:#ffd07a}
.mdCell.wide{justify-content:flex-start;padding:10px 14px;min-height:0;font-size:15px}
.mdRow .mdCell:nth-child(2){animation-delay:.05s}
.mdRow .mdCell:nth-child(3){animation-delay:.1s}
.mdRow .mdCell:nth-child(4){animation-delay:.15s}
.mdRow .mdCell:nth-child(5){animation-delay:.2s}
.mdRow .mdCell:nth-child(6){animation-delay:.25s}
.mdRow .mdCell:nth-child(7){animation-delay:.3s}
.mdRow .mdCell:nth-child(8){animation-delay:.35s}
.mdRow .mdCell:nth-child(9){animation-delay:.4s}

/* habillage v1.2 */
.dleWrap{--dle:#ff5ad9;gap:14px}
.dleWrap .agHead{padding:14px 18px;background:linear-gradient(90deg,color-mix(in srgb,var(--dle) 32%,#0d0820),transparent 85%);box-shadow:inset 5px 0 0 var(--dle)}
.dleWrap .agHead .label{font-size:16px;letter-spacing:2px;color:#fff;text-shadow:3px 3px 0 rgba(0,0,0,.55)}
.dleWrap .agHead .hint{color:color-mix(in srgb,var(--dle) 55%,#fff)}
.dleWrap .agNav button,.dleWrap .row button{letter-spacing:1px}
.dleWrap .mdInput{background:#0d0820;border:3px solid var(--dle);box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 16px color-mix(in srgb,var(--dle) 30%,transparent);transition:box-shadow .15s}
.dleWrap .mdInput:focus{outline:none;box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 26px color-mix(in srgb,var(--dle) 60%,transparent)}
.dleWrap .mdSug{border:3px solid var(--dle);box-shadow:6px 6px 0 rgba(0,0,0,.55)}
.dleWrap .mdSugItem{padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.07)}
.dleWrap .mdSugItem img{width:38px;height:38px}
.dleWrap .mdSugItem:hover,.dleWrap .mdSugItem.on{background:color-mix(in srgb,var(--dle) 28%,transparent)}
.dleWrap .mdHint,.dleWrap .mdEmoji{box-shadow:inset 4px 0 0 var(--dle),0 0 0 3px rgba(0,0,0,.35)}
.dleWrap .mdGuesses{gap:8px;padding:6px 0}
.dleWrap .mdH{background:#160d30;color:#fff;border-bottom:3px solid var(--dle);padding:7px 2px;font-size:7px}
.dleWrap .mdRow{gap:6px}
.dleWrap .mdRow:not(.head) .mdCell{font-weight:bold;text-shadow:1px 1px 0 rgba(0,0,0,.5);box-shadow:inset 0 3px 0 rgba(255,255,255,.2),inset 0 -4px 0 rgba(0,0,0,.4),0 0 0 2px rgba(0,0,0,.55)}
.dleWrap .mdCell.who{background:linear-gradient(#2a1d52,#1c1238);border-left:4px solid var(--dle)}
.dleWrap .mdCell.who img{width:46px;height:46px;box-shadow:0 0 0 2px var(--dle),3px 3px 0 2px rgba(0,0,0,.5)}
.dleWrap .mdCell.ok{background:linear-gradient(#45c27b,#2f8f5a)}
.dleWrap .mdCell.part{background:linear-gradient(#e8aa42,#c0862a)}
.dleWrap .mdCell.no{background:linear-gradient(#cc3f5e,#9a2a44)}
.dleWrap .mdCell.wide{font-size:16px}
.dleWrap .sysCard.mdWin{background:linear-gradient(135deg,#34265f,#160d30);border:3px solid #ffd07a;box-shadow:0 0 0 3px #000,0 0 30px rgba(255,208,122,.35);padding:16px}
.dleWrap .mdWinImg{width:124px;height:124px}
.dleWrap .mdWin b{font-size:19px;text-shadow:3px 3px 0 rgba(0,0,0,.5)}
.dleWrap .mdPix{box-shadow:0 0 0 3px var(--dle),6px 6px 0 3px rgba(0,0,0,.5)}
`;  // le style de ce plugin (il utilise les variables du thème de NeoBase)
export default async function (ctx) {
  const view = ctx.view;
  if (!ctx.host) { view.textContent = "Ce plugin doit être approuvé par NeoBase pour s'ouvrir."; return; }
  const host = ctx.host, { el, toast, sfx, ask, newTab, pixIcon, PIX, WX } = host;
  const folder = ctx.folder, legacy = ctx.legacy || {};
  ctx.host.addStyle(CSS);
  view.innerHTML = HTML;
  const $ = id => id === "dle_apothecarydle" ? view : (view.querySelector('#' + id) || document.getElementById(id));  // les identifiants de ta vue d'abord, puis ceux de la page (fenêtres, menus)
  const doc = async n => { try { return await folder.read(n); } catch { return null; } };
  const __icon = () => ctx.icon;  // l'icône de ce plugin
  const __asset = async (rel, type) => URL.createObjectURL(new Blob([Uint8Array.from(atob(await neo.pluginFileRead(ctx.id, rel)), c => c.charCodeAt(0))], { type }));  // un fichier livré avec le plugin
  const __imgs = {};  // les portraits livrés avec le plugin
  await Promise.all(["ah-duo.webp","ailan.webp","anshi.webp","ayla.webp","aylin.webp","bakin.webp","baryou.webp","basen.webp","changsha.webp","chou-u.webp","chue.webp","dahai.webp","en-en.webp","fengming.webp","fengxian.webp","fuyou.webp","gaoshun.webp","guen.webp","guiyuan.webp","gyoku-ou.webp","gyokuen.webp","gyokujun.webp","gyokuyou.webp","hongniang.webp","jazgul.webp","jinshi.webp","joka.webp","junjie.webp","kanan.webp","kokuyou.webp","kounen.webp","l-ancien-empereur.webp","l-empereur.webp","l-imperatrice-regnante.webp","la-patronne.webp","la-pretresse-de-shaoh.webp","lahan.webp","lakan.webp","lakou.webp","le-chat-maomao.webp","le-frere-de-lahan.webp","li-medecin.webp","lihaku.webp","lihua.webp","lingli.webp","lishu.webp","liu.webp","luomen.webp","maamei.webp","maomao.webp","meimei.webp","onsou.webp","pairin.webp","rikuson.webp","sanfan.webp","sazen.webp","shenlu.webp","shenmei.webp","shikyou.webp","shishou.webp","shisui.webp","sotei.webp","suirei.webp","suiren.webp","taihou.webp","tairan.webp","taomei.webp","tianyu.webp","ujun.webp","ukyou.webp","uryuu.webp","xiaohong.webp","xiaolan.webp","xing.webp","yakou.webp","yao.webp","yinghua.webp","yo.webp","you-medecin.webp","zulin.webp"].map(async n => { __imgs[n] = await __asset('img/' + n, /.png$/.test(n) ? 'image/png' : /.webp$/.test(n) ? 'image/webp' : 'image/jpeg'); }));
  const LEGACY_GAMES = {"top":["apothecarydle"],"best":"^$"};
  let games = await doc('games');
  if (games == null) {  // première ouverture : tu retrouves tes records et tes parties d'avant
    const old = legacy.api ? await legacy.api('games').catch(() => null) : null; games = { best: {} };
    if (old) { const re = new RegExp(LEGACY_GAMES.best); for (const [k, v] of Object.entries(old.best || {})) if (re.test(k)) games.best[k] = v; for (const k of LEGACY_GAMES.top) if (old[k] !== undefined) games[k] = old[k]; await folder.write('games', games); }
  }
  games = { best: {}, ...games };
  let gamesTimer = null;
  const saveGames = () => { clearTimeout(gamesTimer); gamesTimer = setTimeout(() => { gamesTimer = null; folder.write('games', games).catch(() => {}); }, 500); };
  const best = (k, v, higher = true) => { const b = games.best[k]; if (b == null || (higher ? v > b : v < b)) { games.best[k] = v; saveGames(); return true; } return false; };
  const gstore = (k, init) => (games[k] ??= init);  // la section d'un jeu
function gameLoop(st, appKey, update, draw) {
  cancelAnimationFrame(st.raf);
  const STEP = 1000 / 60; let acc = 0, last = performance.now();
  const frame = t => {
    if (!view.classList.contains('on')) { st.raf = 0; if (st.mode === 'play') st.mode = 'pause'; return; }  // leaving the tab pauses the game
    st.raf = requestAnimationFrame(frame);
    acc += Math.min(200, t - last); last = t;
    while (acc >= STEP) { if (st.mode === 'play') update(); st.tick++; acc -= STEP; }
    draw();
  };
  st.raf = requestAnimationFrame(frame);
}
function gameText(g, w, lines, y0) {  // centred pixel-font lines over a dark band
  g.fillStyle = 'rgba(11,3,28,.72)'; g.fillRect(0, y0 - 14, w, lines.length * 14 + 14);
  g.textAlign = 'center';
  lines.forEach(([text, color, size], i) => { g.fillStyle = color; g.font = (size || 8) + 'px "Press Start 2P", monospace'; g.fillText(text, w / 2, y0 + i * 14); });
  g.textAlign = 'left';
}
const px = (g, color, x, y, w = 1, h = 1) => { g.fillStyle = color; g.fillRect(Math.round(x), Math.round(y), w, h); };
function sprite(g, rows, x, y, pal) { rows.forEach((r, j) => { for (let i = 0; i < r.length; i++) { const c = pal[r[i]]; if (c) px(g, c, x + i, y + j); } }); }
  // ---- ton code d'origine ----
/* NeoDle: the "-dle" games (guess a character of a series). One engine, each series registers itself from web/dle/<series>.js with dleRegister():
   its columns (eq: same value, set: lists that can overlap, num / ord: numbers or ordered labels with ↑ ↓ arrows), its characters and its pools.
   Modes: Classique (columns compared), Indices (hints one after the other), Emoji (when the characters have emojis), Image (the portrait, less pixelated after each wrong guess).
   A daily challenge per mode (the same for everyone) and free games, saved in games.<key> (synced). Portraits: web/dle/img/<series>/ (from the series' Fandom wiki). */

const DLES = {};
const DLE_MODES = {classic: 'Classique', hints: 'Indices', emoji: 'Emoji', image: 'Image'};
const DLE_GENDER = {F: 'Femme', M: 'Homme', V: 'Variable', N: 'Aucun', '?': 'Inconnu'};
const dleDay = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const dleHash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const dleNorm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9぀-鿿]+/g, ' ').trim();
const dleImg = (g, c) => c.img ? (__imgs[c.img] || '') : '';

/* ---------- comparing a guess with the answer, column by column ---------- */
function dleCompare(g, guess, ans) {
  return g.cols.map(col => {
    const a = guess[col.id], b = ans[col.id], show = v => v == null || v === '' ? '?' : col.type === 'ord' ? col.labels[v] : col.map ? col.map[v] ?? v : (col.pre || '') + v + (col.unit || '');
    if (col.type === 'set') {
      const A = a || [], B = b || [], S = new Set(A), same = A.length === B.length && B.every(x => S.has(x));
      return {k: col.k, v: A.join(', ') || col.none || 'Aucun', r: same ? 'ok' : B.some(x => S.has(x)) ? 'part' : 'no'};
    }
    if (col.type === 'num' || col.type === 'ord') {
      if (a === b) return {k: col.k, v: show(a), r: 'ok'};
      if (a == null || b == null) return {k: col.k, v: show(a), r: 'no'};
      return {k: col.k, v: show(a), r: col.near && Math.abs(a - b) <= col.near ? 'part' : 'no', arrow: b > a ? '↑' : '↓'};
    }
    return {k: col.k, v: show(a), r: a === b ? 'ok' : 'no'};
  });
}

/* ---------- the save: games.<key> ---------- */
const dleSave = g => gstore(g.key, {days: {}, stats: {}, free: null, pool: 'main', mode: 'classic'});
const dlePool = (g, p) => g.chars.filter(c => c.t <= (g.pools[p] || g.pools.main).t);
const dleFits = (c, mode) => mode === 'emoji' ? !!c.em : mode === 'image' ? !!c.img : mode === 'hints' ? c.h.length > 0 : true;
function dleDaily(g, mode, day = dleDay()) {  // the same character for everyone on a given day, among the main pool
  const pool = dlePool(g, 'all').filter(c => dleFits(c, mode));
  return pool[dleHash(g.key + ':' + mode + ':' + day) % pool.length];
}
function dleState(g, mode, daily) {  // the game being played: today's challenge of this mode, or the free game
  const s = dleSave(g);
  if (!g.pools[s.pool]) s.pool = 'all';  // a pool that no longer exists (MonogatariDle's « extrême »)
  if (daily) { const day = dleDay(), d = (s.days[day] ||= {}); return d[mode] ||= {ans: dleDaily(g, mode, day).n, guesses: [], won: false}; }
  const pool = dlePool(g, s.pool).filter(c => dleFits(c, mode));
  if (!s.free || s.free.mode !== mode || s.free.pool !== s.pool || !pool.some(c => c.n === s.free.ans))
    s.free = {mode, pool: s.pool, ans: pool[Math.floor(Math.random() * pool.length)].n, guesses: [], won: false};
  return s.free;
}
function dleRecord(g, mode, daily, won, tries) {
  const st = (dleSave(g).stats[mode] ||= {played: 0, wins: 0, streak: 0, bestStreak: 0, tries: 0, lastDay: ''});
  st.played++; if (won) { st.wins++; st.tries += tries; }
  if (daily) {
    const y = new Date(); y.setDate(y.getDate() - 1);
    st.streak = won ? (st.lastDay === dleDay(y) ? st.streak + 1 : 1) : 0; st.bestStreak = Math.max(st.bestStreak, st.streak); st.lastDay = dleDay();
  }
}

/* ---------- the portrait of the Image mode: drawn on a few big pixels, more of them after each wrong guess ---------- */
const DLE_PIX = [6, 9, 13, 18, 26, 38, 56, 90];
function dlePixel(cv, src, cells) {
  const im = new Image();
  im.onload = () => {
    const S = cv.width, side = Math.min(im.width, im.height), sx = (im.width - side) / 2, sy = im.height > im.width ? 0 : (im.height - side) / 2;  // square crop, the top of tall portraits (the face)
    const ctx = cv.getContext('2d'); ctx.imageSmoothingEnabled = cells >= S;
    if (cells >= S) { ctx.drawImage(im, sx, sy, side, side, 0, 0, S, S); return; }
    const t = document.createElement('canvas'); t.width = t.height = cells;
    const tc = t.getContext('2d'); tc.drawImage(im, sx, sy, side, side, 0, 0, cells, cells);
    ctx.drawImage(t, 0, 0, cells, cells, 0, 0, S, S);
  };
  im.src = src;
}

/* ---------- the page of one game ---------- */
const dleChar = (g, n) => g.chars.find(c => c.n === n);
function dleRender(g) {
  if (!games) return;
  const u = g.ui, s = dleSave(g), st = dleState(g, u.mode, u.daily), ans = dleChar(g, st.ans) || g.chars[0], tries = st.guesses.length;
  for (const b of u.modes.children) b.classList.toggle('on', b.dataset.m === u.mode);
  u.dailyBtn.classList.toggle('main', u.daily); u.freeBtn.classList.toggle('main', !u.daily);
  u.pool.value = s.pool; u.pool.disabled = u.daily;
  const stats = s.stats[u.mode];
  u.info.textContent = (u.daily ? 'Défi du jour · ' : 'Partie libre · ' + g.pools[s.pool].l + ' · ') + dlePool(g, u.daily ? 'all' : s.pool).filter(c => dleFits(c, u.mode)).length + ' personnages'
    + (stats ? ' · série ' + stats.streak + ' (record ' + stats.bestStreak + ') · ' + stats.wins + ' / ' + stats.played + ' gagnées' : '');
  // what the mode shows before the guesses
  const top = u.clue; top.replaceChildren();
  if (u.mode === 'hints') {
    const shown = st.won ? ans.h.length : Math.min(ans.h.length, 1 + tries);
    top.append(el('span', 'label', 'Indices · ' + shown + ' / ' + ans.h.length), ...ans.h.slice(0, shown).map((h, i) => el('div', 'mdHint px', (i + 1) + '. ' + h)));
  } else if (u.mode === 'emoji') {
    const e = [...ans.em.matchAll(/\p{Extended_Pictographic}(‍\p{Extended_Pictographic}|️)*/gu)].map(m => m[0]), shown = st.won ? e.length : Math.min(e.length, 1 + tries);
    top.append(el('span', 'label', 'Emojis · ' + shown + ' / ' + e.length), el('div', 'mdEmoji px', e.slice(0, shown).join(' ') + ' ' + '❔'.repeat(e.length - shown)));
  } else if (u.mode === 'image') {
    const lv = st.won ? DLE_PIX.length : Math.min(tries, DLE_PIX.length), cv = el('canvas', 'mdPix');
    cv.width = cv.height = 240;
    top.append(el('span', 'label', st.won ? 'Portrait' : 'Portrait · netteté ' + (lv + 1) + ' / ' + (DLE_PIX.length + 1)), cv);
    dlePixel(cv, dleImg(g, ans), lv >= DLE_PIX.length ? 240 : DLE_PIX[lv]);
  } else {
    top.append(el('span', 'hint', 'Vert : pareil · orange : en partie' + (g.cols.some(c => c.near) ? ' ou proche' : '') + ' · rouge : différent · ' + g.arrows));
    if (!st.won && tries >= 6 && ans.va) top.append(el('div', 'mdHint px', 'Indice (6 essais) : voix japonaise ' + ans.va));
    if (!st.won && tries >= 10 && ans.h.length) top.append(el('div', 'mdHint px', 'Indice (10 essais) : ' + ans.h.at(-1)));
  }
  // the input, or the win banner
  u.form.style.display = st.won ? 'none' : '';
  u.win.style.display = st.won ? '' : 'none';
  if (st.won) {
    const next = new Date(), txt = el('div', 'mdWinTxt'); next.setHours(24, 0, 0, 0);
    txt.append(el('b', '', 'Bravo ! C\'était ' + ans.n), el('span', 'hint', [ans.jp, 'trouvé en ' + tries + ' essai' + (tries > 1 ? 's' : ''), g.tiers[ans.t], ans.va && 'voix : ' + ans.va].filter(Boolean).join(' · ')),
      el('span', 'hint', u.daily ? 'Prochain défi dans ' + Math.ceil((next - Date.now()) / 3600e3) + ' h. Une partie libre en attendant ?' : 'Clique sur « Nouvelle partie » pour recommencer.'));
    u.win.replaceChildren(...(ans.img ? [Object.assign(el('img', 'mdWinImg'), {src: dleImg(g, ans), alt: ''})] : []), txt);
  }
  u.newBtn.style.display = u.daily ? 'none' : '';
  // the guesses, the last one first
  const list = u.guesses, cols = g.cols.length, grid = {gridTemplateColumns: '1.5fr repeat(' + cols + ',1fr)', minWidth: 150 + cols * 104 + 'px'};
  list.replaceChildren();
  if (u.mode === 'classic' && tries) { const hr = el('div', 'mdRow head'); Object.assign(hr.style, grid); hr.append(el('span', 'mdH', 'Personnage'), ...g.cols.map(c => el('span', 'mdH', c.k))); list.append(hr); }
  for (const name of [...st.guesses].reverse()) {
    const c = dleChar(g, name); if (!c) continue;
    const who = el('span', 'mdCell who' + (c.n === ans.n ? ' ok' : '') + (u.mode === 'classic' ? '' : ' wide ' + (c.n === ans.n ? 'ok' : 'no')));
    if (c.img) who.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    who.append(el('span', '', c.n + (u.mode === 'classic' ? '' : c.n === ans.n ? ' ✓' : ' ✗')));
    if (u.mode === 'classic') {
      const row = el('div', 'mdRow'); Object.assign(row.style, grid); row.append(who);
      for (const r of dleCompare(g, c, ans)) { const cell = el('span', 'mdCell ' + r.r, r.v); if (r.arrow) cell.append(el('i', '', r.arrow)); cell.title = r.k; row.append(cell); }
      list.append(row);
    } else list.append(who);
  }
}
function dleGuess(g, name) {
  const u = g.ui, st = dleState(g, u.mode, u.daily), c = dleChar(g, name);
  if (!c || st.won || st.guesses.includes(c.n)) return;
  st.guesses.push(c.n);
  if (c.n === st.ans) { st.won = true; dleRecord(g, u.mode, u.daily, true, st.guesses.length); sfx('launch'); } else sfx('click');
  saveGames(); u.input.value = ''; dleSuggest(g); dleRender(g);
}
function dleSuggest(g) {
  const u = g.ui, q = dleNorm(u.input.value), st = dleState(g, u.mode, u.daily);
  const pool = dlePool(g, u.daily ? 'all' : dleSave(g).pool).filter(c => !st.guesses.includes(c.n) && dleFits(c, u.mode));
  const hits = q ? pool.filter(c => (c.key ||= dleNorm([c.n, c.n.split(' ').reverse().join(' '), c.jp, ...(c.al || [])].join(' '))).includes(q)).slice(0, 8) : [];
  u.sug.replaceChildren(...hits.map((c, i) => {
    const b = el('button', 'mdSugItem' + (i === u.sel ? ' on' : '')), name = el('span', 'n');
    if (c.img) name.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    name.append(c.n); b.append(name, el('span', 'hint', c.jp || ''));
    b.onmousedown = e => { e.preventDefault(); dleGuess(g, c.n); }; return b;
  }));
  u.sug.style.display = hits.length ? '' : 'none'; u.hits = hits;
}
function dleRegister(g) {
  console.assert(g.chars.every(c => c.n && Array.isArray(c.h) && g.tiers[c.t] && g.cols.every(col => col.type !== 'set' || Array.isArray(c[col.id] || []))) && new Set(g.chars.map(c => c.n)).size === g.chars.length, g.key + ': well-formed, unique names');
  DLES[g.key] = g;
  const modes = Object.keys(DLE_MODES).filter(m => g.chars.some(c => dleFits(c, m)));
  // the view is already in index.html (tabs reopened at launch can be created before this script runs), else it is added here
  const v = $('dle_' + g.key) || el('div', 'appView'), w = el('div', 'appWrap'), head = el('div', 'agHead'), nav = el('div', 'agNav');
  if (!v.id) { v.id = 'dle_' + g.key; $('musicApp').before(v); }
  v.append(w);
  w.classList.add('dleWrap'); w.style.setProperty('--dle', '#8ee8a0');  // la couleur de la série
  const u = g.ui = {mode: 'classic', daily: true, info: el('span', 'hint'), dailyBtn: el('button', 'btn px', 'DÉFI DU JOUR'), freeBtn: el('button', 'btn px', 'PARTIE LIBRE'), pool: el('select', 'f gSel'), newBtn: el('button', 'btn px', 'NOUVELLE PARTIE'),
    modes: el('div', 'row'), clue: el('div', 'mdClue'), form: el('div', 'mdForm'), input: el('input', 'f mdInput'), sug: el('div', 'mdSug px'), win: el('div', 'sysCard px mdWin'), guesses: el('div', 'mdGuesses')};
  u.pool.title = 'Personnages possibles en partie libre';
  Object.assign(u.input, {placeholder: 'Nom d\'un personnage de ' + g.series + '…', spellcheck: false, autocomplete: 'off'});
  u.sug.style.display = 'none'; u.win.style.display = 'none';
  nav.append(u.dailyBtn, u.freeBtn, u.pool, u.newBtn); head.append(el('span', 'label', g.name), u.info, nav); u.form.append(u.input, u.sug);
  w.append(head, u.modes, u.clue, u.form, u.win, u.guesses, el('div', 'hint', g.about));
  u.input.oninput = () => { u.sel = 0; dleSuggest(g); };
  u.input.onkeydown = e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); u.sel = Math.max(0, Math.min((u.hits?.length || 1) - 1, (u.sel || 0) + (e.key === 'ArrowDown' ? 1 : -1))); dleSuggest(g); }
    if (e.key === 'Enter' && u.hits?.length) { e.preventDefault(); dleGuess(g, u.hits[u.sel || 0].n); }
    if (e.key === 'Escape') u.sug.style.display = 'none';
  };
  u.input.onblur = () => setTimeout(() => u.sug.style.display = 'none', 100);
  u.modes.append(...modes.map(k => { const b = el('button', 'tab px', DLE_MODES[k]); b.dataset.m = k; b.onclick = () => { u.mode = k; dleSave(g).mode = k; dleRender(g); }; return b; }));
  u.pool.append(...Object.entries(g.pools).map(([k, p]) => { const o = el('option', '', p.l + ' (' + dlePool(g, k).length + ')'); o.value = k; return o; }));
  u.pool.onchange = () => { dleSave(g).pool = u.pool.value; saveGames(); dleRender(g); };
  u.dailyBtn.onclick = () => { u.daily = true; dleRender(g); };
  u.freeBtn.onclick = () => { u.daily = false; dleRender(g); };
  u.newBtn.onclick = () => { const s = dleSave(g); if (s.free && !s.free.won && s.free.guesses.length) dleRecord(g, s.free.mode, false, false, 0); s.free = null; saveGames(); dleRender(g); u.input.focus(); };
}
function dleOpen(key) { const g = DLES[key], m = games?.[key]?.mode; if (m && g.ui.modes.querySelector('[data-m="' + m + '"]')) g.ui.mode = m; dleRender(g); setTimeout(() => g.ui.input.focus(), 50); }

/* ApothecaryDle: the characters of The Apothecary Diaries (Les Carnets de l'apothicaire, Kusuriya no Hitorigoto, Natsu Hyuuga), up to the latest light novels.
   Data from the series' wiki (kusuriya-no-hitorigoto.fandom.com): clan, places, roles, age at their first appearance, status, first light novel volume; portraits from the wiki. */
dleRegister({key: 'apothecarydle', name: 'ApothecaryDle', series: 'Les Carnets de l\'apothicaire', dir: 'apothecary',
  tiers: {1: 'Principal', 2: 'Secondaire', 3: 'Mineur / mentionné'},
  pools: {main: {l: 'Personnages principaux', t: 1}, more: {l: 'Principaux et secondaires', t: 2}, all: {l: 'Tous (jusqu\'aux derniers romans)', t: 3}},
  cols: [
    {id: 'g', k: 'Genre', type: 'eq', map: DLE_GENDER}, {id: 'cl', k: 'Clan', type: 'set'}, {id: 'li', k: 'Lieu', type: 'set'}, {id: 'fo', k: 'Fonction', type: 'set', none: '—'},
    {id: 'a', k: 'Âge (début)', type: 'num', unit: ' ans', near: 3}, {id: 's', k: 'Statut', type: 'eq'}, {id: 'v', k: '1er tome', type: 'num', pre: 'Tome '},
  ],
  arrows: '↑ : le personnage à trouver est plus âgé ou apparaît dans un tome plus tardif, ↓ : l\'inverse.',
  about: 'Devine le personnage des Carnets de l\'apothicaire. Classique : chaque essai compare genre, clan, lieu, fonction, âge à sa première apparition (orange : à 3 ans près), statut et premier tome du light novel où il apparaît. Indices, Emoji et Image : un indice de plus à chaque essai raté. Attention, les personnages des derniers romans peuvent révéler des secrets de l\'histoire.',
  chars: [
    {n: "Maomao",t: 1,g: "F",cl: ["La"],li: ["Quartier des plaisirs","Palais intérieur","Palais extérieur"],fo: ["Apothicaire","Servante","Dame de compagnie"],a: 17,s: "Vivant",v: 1,em: "🐱💊☠️🧪📜",h: ["Elle a des taches de rousseur… qu'elle se dessine elle-même.","Elle teste les poisons sur son propre bras.","Elle a été enlevée puis vendue comme servante au palais.","Elle a grandi dans une maison close et son père adoptif est un ancien médecin du palais.","Voix japonaise : Aoi Yūki."],jp: "猫猫",va: "Aoi Yūki",img: "maomao.webp"},
    {n: "Jinshi",t: 1,g: "M",cl: ["Ka"],li: ["Palais intérieur","Palais extérieur"],fo: ["Eunuque","Famille impériale","Fonctionnaire"],a: 19,s: "Vivant",v: 1,em: "🌙✨👑🍯🐝",h: ["Il est d'une beauté qui trouble tout le palais.","Il dirige le palais intérieur et se fait passer pour un eunuque.","Il rend visite à l'apothicaire avec des plantes rares pour qu'elle résolve des énigmes.","Il est officiellement le frère cadet de l'Empereur, mais en réalité son fils.","Voix japonaise : Takeo Ōtsuka."],jp: "壬氏",va: "Takeo Ōtsuka",al: ["Ka Zuigetsu","Zuigetsu"],img: "jinshi.webp"},
    {n: "Gaoshun",t: 1,g: "M",cl: ["Ma"],li: ["Palais intérieur","Palais extérieur"],fo: ["Fonctionnaire"],a: 36,s: "Vivant",v: 1,em: "🧔‍♂️📋🛡️🙇",h: ["Il est toujours calme et très poli.","Il sert un très beau jeune homme comme assistant.","Il a été au service de l'Empereur avant.","Il est le père de Basen, Baryou et Maamei.","Voix japonaise : Katsuyuki Konishi."],jp: "高順",va: "Katsuyuki Konishi",img: "gaoshun.webp"},
    {n: "Gyokuyou",t: 1,g: "F",cl: ["You"],li: ["Palais intérieur"],fo: ["Concubine","Impératrice"],a: 19,s: "Vivant",v: 1,em: "💎👶🌹🔴",h: ["Elle a les cheveux roux et les yeux verts.","Elle vit au pavillon de Jade.","Sa fille a failli mourir à cause d'une poudre blanche.","Elle est la favorite de l'Empereur, puis devient impératrice.","Voix japonaise : Atsumi Tanezaki."],jp: "玉葉",va: "Atsumi Tanezaki",img: "gyokuyou.webp"},
    {n: "Lihua",t: 1,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Concubine"],a: null,s: "Vivant",v: 1,em: "🌸💧🤒👶",h: ["Elle vit au pavillon de Cristal.","Elle a perdu un fils à cause d'un poison dans le maquillage.","L'apothicaire l'a soignée pendant des semaines.","C'est la « Sage Concubine »."],jp: "梨花",img: "lihua.webp"},
    {n: "Lishu",t: 1,g: "F",cl: ["U"],li: ["Palais intérieur"],fo: ["Concubine"],a: 14,s: "Vivant",v: 1,em: "🧒💎🐟😢",h: ["C'est la plus jeune des grandes concubines.","Ses servantes la traitent mal.","Elle est allergique au poisson.","Elle a été la concubine de l'ancien Empereur avant celle de son fils.","Voix japonaise : Hina Kino."],jp: "里樹",va: "Hina Kino",img: "lishu.webp"},
    {n: "Ah-Duo",t: 1,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Concubine"],a: 35,s: "Vivant",v: 1,em: "🎭👘🌙🏯",h: ["Elle a l'allure d'un homme et charme les femmes.","Elle a été la première concubine de l'Empereur, son amie d'enfance.","Elle quitte le pavillon du Grenat au début de l'histoire.","Elle est la vraie mère de Jinshi.","Voix japonaise : Yūko Kaida."],jp: "阿多",va: "Yūko Kaida",img: "ah-duo.webp"},
    {n: "L'Empereur",t: 1,g: "M",cl: ["Ka"],li: ["Palais intérieur","Palais extérieur"],fo: ["Famille impériale"],a: 34,s: "Vivant",v: 1,em: "👑🧔🍑😏",h: ["Il a une barbe et aime les femmes à forte poitrine.","Il a plusieurs grandes concubines.","Il est l'ami d'enfance d'Ah-Duo.","Il est le souverain de Li.","Voix japonaise : Daichi Endō."],va: "Daichi Endō",img: "l-empereur.webp"},
    {n: "Lakan",t: 1,g: "M",cl: ["La"],li: ["Palais extérieur"],fo: ["Militaire"],a: 40,s: "Vivant",v: 2,em: "🧐♟️🍊🎯",h: ["Il porte un monocle.","Il ne reconnaît pas les visages, il les voit comme des pièces de jeu.","C'est un stratège militaire redouté, champion de go et de shogi.","Il est le père biologique de Maomao.","Voix japonaise : Takuya Kirimoto."],jp: "羅漢",va: "Takuya Kirimoto",img: "lakan.webp"},
    {n: "Luomen",t: 1,g: "M",cl: ["La"],li: ["Quartier des plaisirs","Palais intérieur"],fo: ["Médecin","Apothicaire","Eunuque"],a: 65,s: "Vivant",v: 1,em: "👴🌿📚💊",h: ["Il boite d'une jambe.","C'est un ancien médecin du palais, devenu eunuque.","Il a été chassé du palais après la mort d'enfants impériaux.","Il a élevé Maomao.","Voix japonaise : Hiroshi Yanaka."],jp: "羅門",va: "Hiroshi Yanaka",img: "luomen.webp"},
    {n: "Shisui",t: 1,g: "F",cl: ["Shi"],li: ["Palais intérieur"],fo: ["Servante","Concubine"],a: 17,s: "Vivant",v: 2,em: "🐛🦗😄🎭",h: ["Elle adore les insectes.","Elle travaille à la lingerie avec Maomao et Xiaolan.","Elle a une double vie.","C'est aussi Loulan, la Concubine Pure fille du Premier ministre.","Voix japonaise : Asami Seto."],jp: "子翠",va: "Asami Seto",al: ["Loulan"],img: "shisui.webp"},
    {n: "Xiaolan",t: 1,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Servante"],a: 15,s: "Vivant",v: 1,em: "😊🗞️🍬👧",h: ["Elle adore les rumeurs.","C'est la première amie de Maomao au palais.","Elle ne sait pas bien lire au début.","Maomao lui apprend à lire avant la fin de son contrat.","Voix japonaise : Misaki Kuno."],jp: "小蘭",va: "Misaki Kuno",img: "xiaolan.webp"},
    {n: "Lihaku",t: 1,g: "M",cl: [],li: ["Palais extérieur"],fo: ["Militaire"],a: 25,s: "Vivant",v: 1,em: "💪🐕😤🌸",h: ["Il est grand et musclé, et a l'air d'un gros chien.","Il est officier de la garde.","Il tombe amoureux d'une grande courtisane.","Il a offert une épingle à cheveux à Maomao à la fête du jardin.","Voix japonaise : Kenji Akabane."],jp: "李白",va: "Kenji Akabane",img: "lihaku.webp"},
    {n: "Basen",t: 1,g: "M",cl: ["Ma"],li: ["Palais extérieur"],fo: ["Fonctionnaire","Militaire"],a: 19,s: "Vivant",v: 2,em: "💪😳🦆🗡️",h: ["Il est très fort mais très maladroit avec les femmes.","Il a un canard de compagnie.","Il sert Jinshi comme garde du corps.","Il est le fils cadet de Gaoshun.","Voix japonaise : Tatsumaru Tachibana."],jp: "馬閃",va: "Tatsumaru Tachibana",img: "basen.webp"},
    {n: "Suirei",t: 1,g: "F",cl: ["Shi","Ka"],li: ["Palais extérieur"],fo: ["Apothicaire","Dame de compagnie"],a: 19,s: "Vivant",v: 2,em: "💀💊🌺🌫️",h: ["Elle connaît une drogue qui fait croire à la mort.","Elle s'est déguisée en eunuque.","Elle descend de la famille impériale par sa mère.","C'est la demi-sœur de Loulan.","Voix japonaise : Kaori Nazuka."],jp: "翠苓",va: "Kaori Nazuka",img: "suirei.webp"},
    {n: "Lahan",t: 1,g: "M",cl: ["La"],li: ["Palais extérieur"],fo: ["Fonctionnaire"],a: 19,s: "Vivant",v: 4,em: "👓🧮💰🥔",h: ["Il porte des lunettes et adore les chiffres.","Il trouve que tout ce qui est beau doit être mesuré.","Il gère l'argent de sa famille.","C'est le fils adoptif de Lakan.","Voix japonaise : Toshiyuki Toyonaga."],jp: "羅半",va: "Toshiyuki Toyonaga",img: "lahan.webp"},
    {n: "Pairin",t: 1,g: "F",cl: [],li: ["Quartier des plaisirs"],fo: ["Courtisane"],a: 30,s: "Vivant",v: 1,em: "💃🍑💋🌹",h: ["C'est l'aînée des trois princesses de sa maison.","Elle est très sensuelle et adore la danse.","Elle tombe amoureuse d'un militaire.","Elle travaille à la maison Verdigris.","Voix japonaise : Ami Koshimizu."],jp: "白鈴",va: "Ami Koshimizu",img: "pairin.webp"},
    {n: "Meimei",t: 1,g: "F",cl: [],li: ["Quartier des plaisirs"],fo: ["Courtisane"],a: 30,s: "Vivant",v: 1,em: "♟️📖🎎",h: ["C'est la deuxième des trois princesses.","Elle est excellente au go et au shogi.","Elle joue souvent contre le stratège au monocle.","Elle est comme une grande sœur pour Maomao.","Voix japonaise : Megumi Han."],jp: "梅梅",va: "Megumi Han",img: "meimei.webp"},
    {n: "Joka",t: 1,g: "F",cl: ["Ka"],li: ["Quartier des plaisirs"],fo: ["Courtisane"],a: 30,s: "Vivant",v: 1,em: "📜✍️🎴🧊",h: ["C'est la plus jeune des trois princesses.","Elle est cultivée et connaît les classiques.","Elle est froide avec les clients.","Elle garde un secret sur sa naissance.","Voix japonaise : Hiroki Nanami."],jp: "女華",va: "Hiroki Nanami",img: "joka.webp"},
    {n: "La Patronne",t: 1,g: "F",cl: [],li: ["Quartier des plaisirs"],fo: ["Courtisane"],a: 70,s: "Vivant",v: 1,em: "👵💰🧾😠",h: ["Elle est très avare.","Elle dirige une maison de courtisanes.","Maomao l'appelle « la vieille ».","C'est la grand-mère de Maomao.","Voix japonaise : Kimiko Saitō."],va: "Kimiko Saitō",al: ["Madam","Madame","Obaba"],img: "la-patronne.webp"},
    {n: "Fengxian",t: 1,g: "F",cl: [],li: ["Quartier des plaisirs"],fo: ["Courtisane"],a: null,s: "Décédé",v: 2,em: "♟️🌸💔🩸",h: ["Elle était une grande courtisane, très forte au go.","Elle est tombée malade et est enfermée.","Elle a coupé un doigt de son bébé pour l'envoyer au père.","C'est la mère biologique de Maomao.","Voix japonaise : Hōko Kuwashima."],jp: "鳳仙",va: "Hōko Kuwashima",img: "fengxian.webp"},
    {n: "Hongniang",t: 2,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Dame de compagnie"],a: 30,s: "Vivant",v: 1,em: "📋😤👩‍💼",h: ["Elle dirige les dames de compagnie d'une concubine.","Elle travaille au pavillon de Jade.","Elle craint de ne jamais se marier.","C'est la première dame de Gyokuyou.","Voix japonaise : Megumi Toyoguchi."],jp: "紅娘",va: "Megumi Toyoguchi",img: "hongniang.webp"},
    {n: "Yinghua",t: 2,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Dame de compagnie"],a: null,s: "Vivant",v: 1,em: "🌸🧹👧",h: ["Elle travaille au pavillon de Jade.","Elle est l'une des trois servantes de Gyokuyou venues de l'Ouest.","Elle est inquiète pour Maomao quand celle-ci goûte du poison.","Elle est souvent avec Guiyuan et Ailan.","Voix japonaise : Rie Hikisaka."],jp: "桜花",va: "Rie Hikisaka",img: "yinghua.webp"},
    {n: "Guiyuan",t: 2,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Dame de compagnie"],a: null,s: "Vivant",v: 1,em: "🧹🍵👧",h: ["Elle travaille au pavillon de Jade.","Elle est l'une des trois servantes de Gyokuyou venues de l'Ouest.","Elle est très douce.","Elle est souvent avec Yinghua et Ailan.","Voix japonaise : Takako Tanaka."],jp: "貴園",va: "Takako Tanaka",img: "guiyuan.webp"},
    {n: "Ailan",t: 2,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Dame de compagnie"],a: null,s: "Vivant",v: 1,em: "🧹🍲👧",h: ["Elle travaille au pavillon de Jade.","Elle est la plus grande des trois servantes de Gyokuyou.","Elle cuisine et soigne.","Elle est souvent avec Yinghua et Guiyuan.","Voix japonaise : Misa Ishii."],jp: "愛藍",va: "Misa Ishii",img: "ailan.webp"},
    {n: "Guen",t: 2,g: "M",cl: [],li: ["Palais intérieur"],fo: ["Médecin","Eunuque"],a: null,s: "Vivant",v: 1,em: "🩺🤡🍡",h: ["Il est gentil mais pas très compétent.","C'est un eunuque.","Maomao l'appelle « le charlatan ».","C'est le médecin du palais intérieur.","Voix japonaise : Mitsuaki Kanuka."],jp: "虞淵",va: "Mitsuaki Kanuka",al: ["Le charlatan","Quack"],img: "guen.webp"},
    {n: "Kanan",t: 2,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Dame de compagnie"],a: null,s: "Vivant",v: 1,em: "🍽️🙇‍♀️💎",h: ["Elle goûte les plats de sa maîtresse.","Elle est la seule servante gentille avec elle.","Elle travaille au pavillon de Diamant.","Elle devient la première dame de Lishu.","Voix japonaise : Umeka Shōji."],jp: "河南",va: "Umeka Shōji",img: "kanan.webp"},
    {n: "Xing",t: 2,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Dame de compagnie"],a: 25,s: "Vivant",v: 3,em: "😒💄🔪",h: ["Elle était la première dame d'une concubine.","Elle est sa cousine.","Elle lui faisait du mal en cachette.","Elle a été renvoyée du pavillon de Cristal.","Voix japonaise : Sayaka Kinoshita."],jp: "杏",va: "Sayaka Kinoshita",al: ["Shin"],img: "xing.webp"},
    {n: "Fengming",t: 2,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Dame de compagnie"],a: null,s: "Décédé",v: 1,em: "🍯🐝🔥😭",h: ["Elle était très dévouée à sa maîtresse.","Elle travaillait au pavillon du Grenat.","Elle a donné du miel à un bébé sans savoir que c'était dangereux.","C'était la première dame d'Ah-Duo.","Voix japonaise : Noriko Hidaka."],jp: "風明",va: "Noriko Hidaka",img: "fengming.webp"},
    {n: "Fuyou",t: 2,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Concubine"],a: null,s: "Vivant",v: 1,em: "👻💃🌙🧱",h: ["On l'a prise pour un fantôme qui dansait la nuit sur les remparts.","Elle est somnambule… en apparence.","C'est une princesse d'un pays vassal.","Elle voulait retrouver son ami d'enfance.","Voix japonaise : Natsumi Kawaida."],jp: "芙蓉",va: "Natsumi Kawaida",img: "fuyou.webp"},
    {n: "Kounen",t: 3,g: "M",cl: [],li: ["Palais extérieur"],fo: ["Fonctionnaire"],a: 50,s: "Décédé",v: 1,em: "🍷⚔️❄️",h: ["C'était un ancien guerrier célèbre.","Il gérait les objets des rites.","Il est mort après avoir bu.","Sa mort semblait être un accident.","Voix japonaise : Hiroki Gotō."],jp: "浩然",va: "Hiroki Gotō",img: "kounen.webp"},
    {n: "Suiren",t: 2,g: "F",cl: [],li: ["Palais extérieur"],fo: ["Dame de compagnie"],a: 50,s: "Vivant",v: 2,em: "👵🍵😏",h: ["Elle est âgée mais pleine d'énergie.","Elle s'occupe de Jinshi depuis qu'il est bébé.","Elle a servi l'impératrice douairière.","C'est en réalité la grand-mère de Jinshi.","Voix japonaise : Mika Doi."],jp: "水蓮",va: "Mika Doi",img: "suiren.webp"},
    {n: "Anshi",t: 2,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Impératrice","Famille impériale"],a: 45,s: "Vivant",v: 1,em: "👵👑🌕",h: ["C'est l'impératrice douairière.","Elle a eu son premier enfant très jeune.","Elle croyait être maudite.","Elle est officiellement la mère de Jinshi.","Voix japonaise : Mamiko Noto."],jp: "安氏",va: "Mamiko Noto",al: ["Impératrice douairière","An-shi"],img: "anshi.webp"},
    {n: "Shenmei",t: 2,g: "F",cl: ["Shi"],li: ["Palais intérieur"],fo: ["Concubine","Chef de clan"],a: null,s: "Décédé",v: 4,em: "🦂🍷😈👑",h: ["Elle est d'une beauté cruelle.","Elle était la concubine de l'ancien Empereur.","Elle a épousé le Premier ministre.","C'est la mère de Loulan.","Voix japonaise : Rica Fukami."],jp: "神美",va: "Rica Fukami",img: "shenmei.webp"},
    {n: "Shishou",t: 2,g: "M",cl: ["Shi"],li: ["Palais extérieur"],fo: ["Fonctionnaire","Chef de clan"],a: 60,s: "Décédé",v: 2,em: "🧓📜⚔️🏰",h: ["Il est le Premier ministre.","Il a été favorisé par l'impératrice régnante.","Son clan a préparé une rébellion dans le Nord.","C'est le père de Loulan.","Voix japonaise : Cho."],jp: "子昌",va: "Cho",img: "shishou.webp"},
    {n: "L'ancien Empereur",t: 3,g: "M",cl: ["Ka"],li: ["Palais intérieur"],fo: ["Famille impériale"],a: null,s: "Décédé",v: 1,em: "👑🎨🧸",h: ["Il était faible face à sa mère.","Il aimait les très jeunes filles.","Il passait son temps à peindre.","C'est le père de l'Empereur actuel."],img: "l-ancien-empereur.webp"},
    {n: "L'Impératrice régnante",t: 3,g: "F",cl: ["Ka"],li: ["Palais intérieur","Palais extérieur"],fo: ["Impératrice"],a: null,s: "Décédé",v: 1,em: "👑⚖️🏛️",h: ["Elle a d'abord été une simple servante.","Elle a dirigé le pays à la place de son fils.","Elle a fait agrandir le palais intérieur.","C'est la grand-mère de l'Empereur actuel.","Voix japonaise : Sayuri Sadaoka."],va: "Sayuri Sadaoka",img: "l-imperatrice-regnante.webp"},
    {n: "Lingli",t: 2,g: "F",cl: ["Ka","You"],li: ["Palais intérieur"],fo: ["Famille impériale","Enfant"],a: 1,s: "Vivant",v: 1,em: "👶🎀🐱",h: ["C'est une toute petite fille.","Elle a les cheveux roux comme sa mère.","Elle a failli mourir à cause d'une poudre blanche.","C'est la princesse, fille de Gyokuyou.","Voix japonaise : Atsumi Tanezaki."],jp: "鈴麗",va: "Atsumi Tanezaki",img: "lingli.webp"},
    {n: "Taomei",t: 3,g: "F",cl: ["Ma"],li: ["Palais extérieur"],fo: ["Dame de compagnie","Chef de clan"],a: 45,s: "Vivant",v: 5,em: "👩‍👦‍👦💪🏠",h: ["Elle dirige sa famille en pratique.","Elle sert Jinshi.","Elle est très sévère avec ses fils.","C'est la femme de Gaoshun."],jp: "桃美",img: "taomei.webp"},
    {n: "Maamei",t: 3,g: "F",cl: ["Ma"],li: ["Palais extérieur"],fo: ["Dame de compagnie"],a: 23,s: "Vivant",v: 5,em: "📋🧾👩",h: ["Elle est très efficace.","Elle sert Jinshi.","Elle est l'aînée de sa fratrie.","C'est la fille de Gaoshun."],jp: "麻美",img: "maamei.webp"},
    {n: "Baryou",t: 2,g: "M",cl: ["Ma"],li: ["Palais extérieur"],fo: ["Fonctionnaire"],a: 22,s: "Vivant",v: 8,em: "🫣📄🤒",h: ["Il est fragile et timide.","Il ne parle qu'à travers un rideau.","Il est très doué pour le travail de bureau.","C'est le fils aîné de Gaoshun."],jp: "馬良",img: "baryou.webp"},
    {n: "Bakin",t: 3,g: "M",cl: ["Ma"],li: ["Palais extérieur"],fo: ["Fonctionnaire"],a: null,s: "Vivant",v: 14,em: "👨‍👧💼",h: ["Il fait partie du clan Ma par mariage.","Il a deux enfants.","Il apparaît tard dans les romans.","C'est le mari de Maamei."],jp: "馬琴",img: "bakin.webp"},
    {n: "Chue",t: 2,g: "F",cl: ["Mi"],li: ["Palais extérieur","Capitale de l'Ouest"],fo: ["Dame de compagnie","Espionne"],a: 22,s: "Vivant",v: 9,em: "🐦🃏🕵️‍♀️😜",h: ["Elle fait toujours des blagues.","C'est une espionne très douée.","Elle est mariée à un homme timide.","Elle porte le nom d'un oiseau (« moineau »)."],jp: "雀",img: "chue.webp"},
    {n: "Rikuson",t: 2,g: "M",cl: ["Yi"],li: ["Palais extérieur","Capitale de l'Ouest"],fo: ["Militaire"],a: 28,s: "Vivant",v: 5,em: "🙂🧾🎭",h: ["Il retient tous les visages.","Il a été l'assistant du stratège au monocle.","Sa famille a été massacrée.","Il part à la capitale de l'Ouest.","Voix japonaise : Kōki Uchiyama."],jp: "陸孫",va: "Kōki Uchiyama",img: "rikuson.webp"},
    {n: "Onsou",t: 3,g: "M",cl: [],li: ["Palais extérieur"],fo: ["Militaire"],a: null,s: "Vivant",v: 7,em: "🧑‍✈️😩",h: ["Il est militaire.","Il travaille pour un stratège difficile.","Il a une femme et un enfant.","Il remplace Rikuson auprès de Lakan.","Voix japonaise : Akinori Egoshi."],jp: "音操",va: "Akinori Egoshi",img: "onsou.webp"},
    {n: "Lakou",t: 3,g: "M",cl: ["La"],li: ["Campagne"],fo: ["Paysan"],a: null,s: "Vivant",v: 6,em: "🌾👨‍🌾",h: ["Il cultive la terre.","C'est le demi-frère cadet d'un grand stratège.","Il a deux fils.","C'est le père biologique de Lahan."],jp: "羅紅",img: "lakou.webp"},
    {n: "Le frère de Lahan",t: 2,g: "M",cl: ["La"],li: ["Campagne"],fo: ["Paysan"],a: 24,s: "Vivant",v: 6,em: "🥔🌾🦗😤",h: ["On ne connaît jamais son prénom.","Il veut juste être fermier.","Il a aidé à lutter contre les sauterelles.","C'est le grand frère de Lahan."],jp: "羅半兄",img: "le-frere-de-lahan.webp"},
    {n: "Gyokuen",t: 2,g: "M",cl: ["You"],li: ["Capitale de l'Ouest"],fo: ["Marchand","Fonctionnaire","Chef de clan"],a: null,s: "Vivant",v: 5,em: "💰🏜️👴",h: ["C'est un riche marchand.","Il gouverne la province de l'Ouest.","Il a beaucoup d'enfants et de concubines.","C'est le père de Gyokuyou.","Voix japonaise : Hiroshi Shirokuma."],jp: "玉袁",va: "Hiroshi Shirokuma",img: "gyokuen.webp"},
    {n: "Gyoku-ou",t: 2,g: "M",cl: ["You"],li: ["Capitale de l'Ouest"],fo: ["Fonctionnaire"],a: 42,s: "Décédé",v: 9,em: "🐦🎤🏜️",h: ["Il gouverne l'Ouest en l'absence de son père.","On le surnomme le « roi rossignol ».","Il ne s'entend pas avec sa demi-sœur devenue impératrice.","C'est le fils aîné de Gyokuen."],jp: "玉鶯",img: "gyoku-ou.webp"},
    {n: "Aylin",t: 2,g: "F",cl: [],li: ["Pays de Shaoh","Palais intérieur"],fo: ["Concubine"],a: 28,s: "Vivant",v: 3,em: "🌍💛💃",h: ["Elle a les cheveux dorés.","Elle vient d'un pays étranger.","Elle est venue comme envoyée avec sa cousine.","Elle devient concubine de rang moyen.","Voix japonaise : Yumi Hara."],jp: "愛凛",va: "Yumi Hara",img: "aylin.webp"},
    {n: "Ayla",t: 2,g: "F",cl: [],li: ["Pays de Shaoh"],fo: ["Fonctionnaire"],a: 28,s: "Vivant",v: 3,em: "🌍💛🪞",h: ["Elle a les cheveux dorés.","Elle est l'envoyée d'un pays étranger.","Elle est la cousine d'Aylin.","Elle vient de Shaoh.","Voix japonaise : Lynn."],jp: "姶良",va: "Lynn",img: "ayla.webp"},
    {n: "La Prêtresse de Shaoh",t: 2,g: "F",cl: [],li: ["Pays de Shaoh"],fo: ["Prêtresse"],a: 40,s: "Vivant",v: 7,em: "🔮👁️⚪",h: ["Elle fait des prophéties.","Elle est très âgée pour sa fonction.","Elle a les cheveux blancs.","Elle cache un secret sur son corps."],jp: "砂欧の巫女",img: "la-pretresse-de-shaoh.webp"},
    {n: "Sotei",t: 3,g: "F",cl: [],li: ["Pays de Shaoh"],fo: ["Prêtresse"],a: null,s: "Vivant",v: 7,em: "⚪🧚‍♀️🗡️",h: ["On la surnomme l'« Immortelle blanche ».","Elle a les cheveux blancs.","Elle devait devenir prêtresse.","Elle travaille pour Ayla.","Voix japonaise : Reina Ueda."],jp: "素貞",va: "Reina Ueda",img: "sotei.webp"},
    {n: "Jazgul",t: 3,g: "F",cl: [],li: ["Pays de Shaoh"],fo: ["Servante","Prêtresse"],a: 10,s: "Vivant",v: 7,em: "🤐👧⚪",h: ["C'est une enfant muette.","Elle était esclave.","Elle sert la prêtresse de Shaoh.","Elle devient prêtresse."],jp: "ジャズグル",img: "jazgul.webp"},
    {n: "Chou-u",t: 2,g: "M",cl: ["Shi"],li: ["Quartier des plaisirs"],fo: ["Enfant"],a: 9,s: "Vivant",v: 4,em: "👦✏️🐒",h: ["C'est un garçon turbulent.","Il a perdu la mémoire.","Il a survécu à la drogue qui fait croire à la mort.","Maomao s'occupe de lui.","Voix japonaise : Natsumi Fujiwara."],jp: "趙迂",va: "Natsumi Fujiwara",img: "chou-u.webp"},
    {n: "Sazen",t: 2,g: "M",cl: [],li: ["Quartier des plaisirs"],fo: ["Apothicaire"],a: null,s: "Vivant",v: 4,em: "🌿👨‍🌾🗡️",h: ["C'était un fermier, puis un garde.","Il a fui une rébellion.","Il est apprenti apothicaire.","Il garde la boutique de Maomao dans le quartier des plaisirs.","Voix japonaise : Tomoaki Maeno."],jp: "左膳",va: "Tomoaki Maeno",img: "sazen.webp"},
    {n: "Ukyou",t: 3,g: "M",cl: [],li: ["Quartier des plaisirs"],fo: ["Serviteur"],a: 40,s: "Vivant",v: 5,em: "🧔👊🏮",h: ["Il travaille dans une maison close.","Il est fort et sert de garde.","Il est le bras droit de la patronne.","Il dirige les serviteurs de la maison Verdigris.","Voix japonaise : Yoshiaki Hasegawa."],jp: "右叫",va: "Yoshiaki Hasegawa",img: "ukyou.webp"},
    {n: "Zulin",t: 3,g: "F",cl: [],li: ["Quartier des plaisirs"],fo: ["Courtisane","Enfant"],a: 10,s: "Vivant",v: 5,em: "👧🏮",h: ["C'est une apprentie.","Elle vit dans une maison close.","Sa mère est morte.","Sa grande sœur est courtisane à la maison Verdigris.","Voix japonaise : Harumi Momo."],jp: "梓琳",va: "Harumi Momo",img: "zulin.webp"},
    {n: "Kokuyou",t: 3,g: "M",cl: [],li: ["Quartier des plaisirs"],fo: ["Médecin"],a: 25,s: "Vivant",v: 6,em: "😷🩺🎭",h: ["Il a le visage marqué par la variole.","Il a été chassé de son village.","Il a perdu son frère jumeau.","Il travaille comme médecin à la maison Verdigris."],jp: "克用",img: "kokuyou.webp"},
    {n: "Shenlü",t: 3,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Servante"],a: 40,s: "Vivant",v: 3,em: "🌿🩺👵",h: ["Elle travaille dans une clinique.","Elle connaît les plantes.","Elle sert dans l'arrière-palais.","Elle est servante de la clinique du palais intérieur.","Voix japonaise : Masako Katsuki."],jp: "深緑",va: "Masako Katsuki",img: "shenlu.webp"},
    {n: "Yao",t: 2,g: "F",cl: [],li: ["Palais extérieur"],fo: ["Dame de compagnie"],a: 15,s: "Vivant",v: 7,em: "💁‍♀️📚😤",h: ["Elle est fière et très douée.","Elle est d'une bonne famille.","Elle est assistante médicale avec Maomao.","Sa dame de compagnie, En'en, la suit partout."],jp: "姚",img: "yao.webp"},
    {n: "En'en",t: 2,g: "F",cl: [],li: ["Palais extérieur"],fo: ["Dame de compagnie"],a: 19,s: "Vivant",v: 7,em: "🍳🥰📚",h: ["Elle cuisine très bien.","Elle est dévouée à sa maîtresse depuis l'enfance.","Elle ne supporte pas qu'un homme approche sa maîtresse.","Elle sert Yao."],jp: "燕燕",img: "en-en.webp"},
    {n: "Liu",t: 3,g: "M",cl: [],li: ["Palais extérieur"],fo: ["Médecin"],a: null,s: "Vivant",v: 7,em: "🩺📏🧓",h: ["Il est très exigeant.","C'est un médecin de haut rang.","Il travaille au palais extérieur.","Il fait passer des examens aux assistantes."],jp: "劉医官",al: ["Docteur Liu"],img: "liu.webp"},
    {n: "Li (médecin)",t: 3,g: "M",cl: [],li: ["Palais extérieur"],fo: ["Médecin"],a: null,s: "Vivant",v: 9,em: "🩺🧑‍⚕️",h: ["C'est un médecin de rang moyen.","Il travaille au palais extérieur.","Il accompagne l'expédition à l'Ouest.","Il apparaît dans le tome 9."],jp: "李医官",img: "li-medecin.webp"},
    {n: "You (médecin)",t: 3,g: "M",cl: [],li: ["Palais extérieur"],fo: ["Médecin"],a: null,s: "Vivant",v: 9,em: "🩺👨‍⚕️",h: ["C'est un médecin de haut rang.","Il travaille au palais extérieur.","Il part dans l'Ouest.","Il apparaît dans le tome 9."],jp: "楊医官",img: "you-medecin.webp"},
    {n: "Tianyu",t: 2,g: "M",cl: [],li: ["Palais extérieur"],fo: ["Médecin"],a: 25,s: "Vivant",v: 8,em: "😼🔪🩸",h: ["Il est apprenti médecin.","Il aime un peu trop découper.","Il appelle Maomao « Niang Niang ».","Il appartient à une famille de chirurgiens."],img: "tianyu.webp"},
    {n: "Uryuu",t: 3,g: "M",cl: ["U"],li: ["Palais extérieur"],fo: ["Chef de clan"],a: null,s: "Vivant",v: 5,em: "👨‍👧‍👧😓",h: ["Il a été chef de clan.","Il a eu deux femmes.","Il a trois enfants.","C'est le père de Lishu.","Voix japonaise : Naoki Bandō."],jp: "卯柳",va: "Naoki Bandō",img: "uryuu.webp"},
    {n: "Yakou",t: 3,g: "F",cl: ["U"],li: ["Palais extérieur"],fo: [],a: null,s: "Vivant",v: 5,em: "👩😠",h: ["Elle est l'aînée.","Elle n'aime pas sa demi-sœur.","Elle fait partie du clan U.","C'est la demi-sœur de Lishu."],jp: "夜光",img: "yakou.webp"},
    {n: "Ujun",t: 3,g: "M",cl: ["U","Mi"],li: ["Palais extérieur"],fo: ["Espion"],a: null,s: "Vivant",v: 14,em: "🧑🕵️",h: ["Il fait partie du clan U.","Il apprend auprès d'une espionne.","Il apparaît tard dans les romans.","C'est le demi-frère de Lishu."],jp: "卯純",img: "ujun.webp"},
    {n: "Taihou",t: 3,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Dame de compagnie","Servante"],a: null,s: "Décédé",v: 3,em: "👵🔥📜",h: ["Elle a servi une concubine cruelle.","Elle a travaillé à la clinique.","Sa fille était une princesse bannie.","C'est la grand-mère de Suirei.","Voix japonaise : Aya Hisakawa."],jp: "大宝",va: "Aya Hisakawa",img: "taihou.webp"},
    {n: "Le chat Maomao",t: 3,g: "F",cl: [],li: ["Palais intérieur"],fo: ["Animal"],a: 1,s: "Vivant",v: 3,em: "🐈🐾🎖️",h: ["C'est un animal.","Il est entré dans le palais intérieur par hasard.","L'Empereur lui a donné un rang officiel : « gardien contre les voleurs ».","Il porte le même nom que l'héroïne.","Voix japonaise : Rie Hikisaka."],jp: "猫の毛毛",va: "Rie Hikisaka",al: ["Mao Mao chat","Maomao chat"],img: "le-chat-maomao.webp"},
    {n: "Junjie",t: 3,g: "M",cl: [],li: ["Capitale de l'Ouest"],fo: ["Enfant"],a: 13,s: "Vivant",v: 12,em: "👦📜",h: ["C'est un garçon de 13 ans.","Il travaille dans un bureau de l'Ouest.","Il a été emmené à la capitale par erreur.","On le surnomme Haku'un."],jp: "俊杰",img: "junjie.webp"},
    {n: "Yo",t: 3,g: "F",cl: [],li: ["Palais intérieur","Palais extérieur"],fo: ["Servante","Dame de compagnie"],a: null,s: "Vivant",v: 14,em: "👧📚",h: ["Elle était servante au palais intérieur.","Elle étudie pour devenir dame de cour.","Elle devient assistante médicale.","Elle apparaît dans le tome 14."],jp: "妤",img: "yo.webp"},
    {n: "Changsha",t: 3,g: "F",cl: [],li: ["Palais intérieur","Palais extérieur"],fo: ["Servante","Dame de compagnie"],a: null,s: "Vivant",v: 14,em: "👧🩹",h: ["Elle était servante au palais intérieur.","Elle étudie pour devenir dame de cour.","Elle devient assistante médicale.","Elle apparaît dans le tome 14 avec Yo."],jp: "長紗",img: "changsha.webp"},
    {n: "Hulan",t: 3,g: "M",cl: ["You"],li: ["Capitale de l'Ouest"],fo: [],a: 18,s: "Vivant",v: 12,em: "🦊🧑",h: ["Il est jeune et malin.","Il fait partie du clan You.","C'est le troisième fils de son père.","C'est le fils de Gyoku-ou."],jp: "虎狼"},
    {n: "Feilong",t: 3,g: "M",cl: ["You"],li: ["Capitale de l'Ouest"],fo: [],a: 23,s: "Vivant",v: 12,em: "🐉🧑",h: ["Son nom veut dire « dragon volant ».","Il fait partie du clan You.","C'est le deuxième fils de son père.","C'est le fils de Gyoku-ou."],jp: "飛龍"},
    {n: "Shikyou",t: 3,g: "M",cl: ["You"],li: ["Capitale de l'Ouest"],fo: [],a: 25,s: "Vivant",v: 12,em: "🦉🧔",h: ["Il fait partie du clan You.","Il a un fils.","C'est le fils aîné de son père.","C'est le fils de Gyoku-ou."],jp: "鴟梟",img: "shikyou.webp"},
    {n: "Yinxing",t: 3,g: "F",cl: ["You"],li: ["Capitale de l'Ouest"],fo: [],a: 24,s: "Vivant",v: 11,em: "👩‍👧",h: ["Elle fait partie du clan You.","Elle a une fille.","Elle a été une héritière possible.","C'est la fille de Gyoku-ou."]},
    {n: "Xiaohong",t: 3,g: "F",cl: ["You"],li: ["Capitale de l'Ouest"],fo: ["Enfant"],a: 8,s: "Vivant",v: 11,em: "👧🍑",h: ["C'est une petite fille.","Elle fait partie du clan You.","Elle apparaît dans le chapitre « Fruits secs ».","C'est la fille de Yinxing."],img: "xiaohong.webp"},
    {n: "Gyokujun",t: 3,g: "M",cl: ["You"],li: ["Capitale de l'Ouest"],fo: ["Enfant"],a: null,s: "Vivant",v: 12,em: "👦😤",h: ["C'est un enfant gâté.","Il fait partie du clan You.","C'est le petit-fils de Gyoku-ou.","C'est le fils de Shikyou."],jp: "玉隼",img: "gyokujun.webp"},
    {n: "Dahai",t: 3,g: "M",cl: ["You"],li: ["Capitale de l'Ouest"],fo: [],a: null,s: "Vivant",v: 11,em: "🌊🧔",h: ["Son nom veut dire « grande mer ».","Il fait partie du clan You.","C'est le troisième fils de son père.","C'est le fils de Gyokuen."],img: "dahai.webp"},
    {n: "Sanfan",t: 3,g: "F",cl: ["La"],li: ["Palais extérieur"],fo: [],a: 22,s: "Vivant",v: 13,em: "3️⃣👩💘",h: ["Son nom veut dire « numéro trois ».","Elle a été recueillie par un stratège.","Elle est amoureuse de Lahan.","Elle apparaît dans le tome 13."],jp: "三番",img: "sanfan.webp"},
    {n: "Tairan",t: 3,g: "M",cl: [],li: ["Palais extérieur"],fo: ["Médecin"],a: null,s: "Vivant",v: 2,em: "🩺💘",h: ["C'est un médecin.","Il a été séduit par une apothicaire.","Il apparaît sans nom au début.","Suirei l'a manipulé."],jp: "泰然",img: "tairan.webp"},
  ]});  // (non indenté : les textes sur plusieurs lignes restent exactement les tiens)
  // ---- fin ----
  ctx.onOpen(() => { dleOpen('apothecarydle'); });
}
