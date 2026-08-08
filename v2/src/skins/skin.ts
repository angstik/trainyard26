/**
 * Gestion des skins (v2).
 *
 * Principes retenus :
 * - Skins IMPORTABLES : l'utilisateur fournit un fichier, rien n'est embarqué
 *   hormis le skin par défaut (celui de l'application elle-même).
 * - Skins PARTIELS autorisés : tout ce que le skin ne fournit pas retombe sur
 *   le skin par défaut. Un skin ne définissant qu'une couleur est valide.
 * - Les couleurs de TRAIN ne sont jamais modifiables : ce sont des données de
 *   jeu (identité des trains, règles de mélange), pas de la décoration.
 */

/** Variables d'habillage qu'un skin peut redéfinir. Liste blanche stricte. */
export const SKINNABLE_VARIABLES = [
  "skin-grid-dot",
  "skin-grid-dot-opacity",
  "skin-grid-dot-erase",
  "skin-grid-dot-erase-opacity",
  "skin-trim",
  "skin-building-dark",
  "skin-building-light",
  "skin-building-edge",
  "skin-rock-light",
  "skin-rock-dark",
  "skin-rock-edge",
  "skin-rail-bed",
  "skin-rail-sleeper",
  "skin-rail-sleeper-mid",
  "skin-rail-inner",
  "skin-loco-trim",
  "skin-loco-body-dark",
  "skin-loco-body-light",
] as const;

export type SkinnableVariable = (typeof SKINNABLE_VARIABLES)[number];

/** Éléments graphiques qu'un skin peut remplacer par un SVG. */
export const SKINNABLE_ASSETS = ["rock", "badge", "outlet", "station", "connector"] as const;
export type SkinnableAsset = (typeof SKINNABLE_ASSETS)[number];

/** Description lisible de chaque élément, reprise dans le modèle exporté. */
export const ASSET_DESCRIPTIONS: Record<SkinnableAsset, string> = {
  rock: "Le rocher (obstacle). SVG carré, étiré pour remplir la case.",
  badge: "Petit emblème du skin, affiché dans l'en-tête à côté du numéro de version. SVG carré, rendu à environ 14 px.",
  outlet: "La remise (départ des trains). SVG carré. Les points de couleur sont dessinés PAR-DESSUS par l'application, au centre : gardez cette zone lisible.",
  station: "La gare (arrivée des trains). SVG carré. Les points de couleur sont dessinés PAR-DESSUS par l'application, au centre : gardez cette zone lisible.",
  connector: "Le connecteur reliant un bâtiment à la voie. SVG carré, dessiné pointe vers le HAUT : l'application le fait pivoter vers chaque entrée active.",
};

/** Exemples minimaux mais fonctionnels, fournis dans le modèle exporté. */
export const ASSET_EXAMPLES: Record<SkinnableAsset, string> = {
  rock: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 78 L12 46 L34 22 L64 18 L86 40 L80 74 L50 88 Z" fill="#5a6268" stroke="#8b949b" stroke-width="3" stroke-linejoin="round"/></svg>',
  badge: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="#35ddf3"/></svg>',
  outlet: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="26" width="68" height="58" rx="4" fill="#26313a" stroke="#a8894e" stroke-width="3"/><path d="M10 30 L50 10 L90 30 Z" fill="#31404b" stroke="#a8894e" stroke-width="3" stroke-linejoin="round"/><rect x="38" y="56" width="24" height="28" rx="2" fill="#0d1418"/></svg>',
  station: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="26" width="68" height="58" rx="4" fill="#26313a" stroke="#a8894e" stroke-width="3"/><path d="M10 30 L50 10 L90 30 Z" fill="#31404b" stroke="#a8894e" stroke-width="3" stroke-linejoin="round"/><rect x="30" y="70" width="40" height="8" rx="2" fill="#a8894e"/></svg>',
  connector: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="42" y="0" width="16" height="52" fill="#3d4a52" stroke="#8b949b" stroke-width="2"/></svg>',
};

export type Skin = {
  name: string;
  author?: string;
  version?: string;
  /** Sous-ensemble quelconque des variables ci-dessus. */
  variables?: Partial<Record<SkinnableVariable, string>>;
  /** SVG en ligne, indexé par élément. */
  assets?: Partial<Record<SkinnableAsset, string>>;
};

/**
 * Produit un modèle de skin COMPLET : toutes les variables disponibles y
 * figurent, renseignées avec la valeur effectivement appliquée — celle du
 * skin en cours, ou celle du skin par défaut si le skin courant ne la
 * définit pas. Le fichier obtenu est donc à la fois un export du skin actif
 * et un point de départ exhaustif pour en écrire un nouveau.
 */
export function buildSkinTemplate(current: Skin | null): string {
  const computed = getComputedStyle(document.documentElement);
  const variables: Record<string, string> = {};
  for (const variable of SKINNABLE_VARIABLES) {
    const fromSkin = current?.variables?.[variable];
    const effective = (fromSkin ?? computed.getPropertyValue(`--${variable}`)).trim();
    if (effective) variables[variable] = effective;
  }

  const assets: Record<string, string> = {};
  for (const asset of SKINNABLE_ASSETS) {
    const svg = current?.assets?.[asset];
    if (svg) assets[asset] = svg;
  }

  // Catalogue des éléments : description + exemple fonctionnel, prêts à être
  // recopiés dans "assets". Placé sous une clé commençant par « _ », donc
  // ignoré à l'import : il documente sans rien appliquer.
  const catalogue: Record<string, unknown> = {};
  for (const asset of SKINNABLE_ASSETS) {
    catalogue[asset] = {
      description: ASSET_DESCRIPTIONS[asset],
      actif: Boolean(assets[asset]),
      exemple: ASSET_EXAMPLES[asset],
    };
  }

  const template: Record<string, unknown> = {
    name: current ? `${current.name} (copie)` : "Mon skin",
    author: current?.author ?? "",
    version: "1.0",
    _aide: [
      "COULEURS : toutes les variables disponibles sont dans « variables », renseignées avec la valeur actuellement appliquée.",
      "ÉLÉMENTS GRAPHIQUES : la section « assets » ne contient que les éléments actifs. Pour en activer un, copiez son « exemple » depuis « _elements_disponibles » vers « assets », puis remplacez le SVG par le vôtre.",
      "FORME ATTENDUE dans « assets » : chaque clé vaut DIRECTEMENT une chaîne SVG, sur une seule ligne, guillemets internes échappés en \\\". Pas d'objet imbriqué.",
      "EXEMPLE : \"assets\": { \"rock\": \"<svg viewBox=\\\"0 0 100 100\\\">…</svg>\" }",
      "Un skin peut être partiel : supprimez librement ce que vous ne souhaitez pas modifier.",
      "Les couleurs des trains ne sont pas modifiables (elles portent la logique du jeu).",
      "Les clés commençant par « _ » sont de l'aide : elles sont ignorées à l'import.",
    ],
    variables,
    assets,
    _elements_disponibles: catalogue,
  };

  return JSON.stringify(template, null, 2);
}

export const SKIN_STORAGE_KEY = "signal-nocturne-skin-v1";

/**
 * Assets du skin actif, accessibles aux composants de rendu définis au niveau
 * du module (ToolIcon, TerminalBuilding…) sans avoir à enfiler des props
 * jusqu'à eux. Mis à jour par App au moment du rendu, donc toujours cohérent
 * avec l'état affiché.
 */
let activeAssets: Partial<Record<SkinnableAsset, string>> = {};
export function setActiveSkinAssets(assets: Partial<Record<SkinnableAsset, string>>) {
  activeAssets = assets;
}
export function skinAsset(asset: SkinnableAsset): string | undefined {
  return activeAssets[asset];
}

/** Un skin ne doit pas pouvoir injecter de contenu actif via ses valeurs. */
function isSafeCssValue(value: string): boolean {
  if (value.length > 200) return false;
  return !/[<>{};]|url\s*\(|expression\s*\(|@import|javascript:/i.test(value);
}

/**
 * Un SVG de skin est nettoyé : on refuse tout ce qui pourrait exécuter du
 * code ou charger une ressource externe. Un skin importé vient d'un tiers,
 * il est traité comme non fiable.
 */
function isSafeSvg(svg: string): boolean {
  if (svg.length > 200_000) return false;
  if (!/^\s*<svg[\s>]/i.test(svg.trim())) return false;
  return !/<script|<foreignObject|<iframe|on\w+\s*=|javascript:|<!ENTITY|xlink:href\s*=\s*["']?(?!#)/i.test(svg);
}

export type SkinParseResult =
  | { ok: true; skin: Skin; ignored: string[] }
  | { ok: false; reason: string };

/**
 * Valide un skin fourni par l'utilisateur. Les entrées inconnues ou non
 * sûres sont IGNORÉES (et signalées) plutôt que de faire échouer l'import :
 * un skin partiel ou écrit pour une version ultérieure reste utilisable.
 */
export function parseSkin(raw: string): SkinParseResult {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return { ok: false, reason: "Fichier illisible : ce n'est pas du JSON valide." };
  }
  if (!data || typeof data !== "object") return { ok: false, reason: "Le fichier ne contient pas un objet de skin." };

  const source = data as Record<string, unknown>;
  const name = typeof source.name === "string" && source.name.trim() ? source.name.trim().slice(0, 60) : null;
  if (!name) return { ok: false, reason: "Le skin doit déclarer un nom (\"name\")." };

  const ignored: string[] = [];
  const variables: Partial<Record<SkinnableVariable, string>> = {};
  if (source.variables && typeof source.variables === "object") {
    for (const [key, value] of Object.entries(source.variables as Record<string, unknown>)) {
      if (key.startsWith("_")) continue; // clé d'aide : ignorée sans le signaler
      if (!SKINNABLE_VARIABLES.includes(key as SkinnableVariable)) { ignored.push(`variable inconnue : ${key}`); continue; }
      if (typeof value !== "string" || !isSafeCssValue(value)) { ignored.push(`valeur refusée : ${key}`); continue; }
      variables[key as SkinnableVariable] = value;
    }
  }

  const assets: Partial<Record<SkinnableAsset, string>> = {};
  if (source.assets && typeof source.assets === "object") {
    for (const [key, value] of Object.entries(source.assets as Record<string, unknown>)) {
      if (key.startsWith("_")) continue; // clé d'aide : ignorée sans le signaler
      if (!SKINNABLE_ASSETS.includes(key as SkinnableAsset)) { ignored.push(`élément inconnu : ${key}`); continue; }
      if (typeof value !== "string" || !isSafeSvg(value)) { ignored.push(`SVG refusé : ${key}`); continue; }
      assets[key as SkinnableAsset] = value;
    }
  }

  if (Object.keys(variables).length === 0 && Object.keys(assets).length === 0) {
    return { ok: false, reason: "Le skin ne contient aucune couleur ni aucun élément exploitable." };
  }

  return {
    ok: true,
    ignored,
    skin: {
      name,
      author: typeof source.author === "string" ? source.author.slice(0, 60) : undefined,
      version: typeof source.version === "string" ? source.version.slice(0, 20) : undefined,
      variables: Object.keys(variables).length ? variables : undefined,
      assets: Object.keys(assets).length ? assets : undefined,
    },
  };
}

/**
 * Applique un skin en surchargeant les variables sur <html>. Passer `null`
 * restaure intégralement le skin par défaut : toute variable posée est
 * retirée, donc les valeurs de la feuille de style reprennent la main.
 */
export function applySkin(skin: Skin | null) {
  const root = document.documentElement;
  for (const variable of SKINNABLE_VARIABLES) root.style.removeProperty(`--${variable}`);
  if (!skin?.variables) return;
  for (const [key, value] of Object.entries(skin.variables)) {
    root.style.setProperty(`--${key}`, value);
  }
}

export function loadStoredSkin(): Skin | null {
  try {
    const raw = window.localStorage.getItem(SKIN_STORAGE_KEY);
    if (!raw) return null;
    const parsed = parseSkin(raw);
    return parsed.ok ? parsed.skin : null;
  } catch {
    return null;
  }
}

export function storeSkin(skin: Skin | null) {
  try {
    if (skin) window.localStorage.setItem(SKIN_STORAGE_KEY, JSON.stringify(skin));
    else window.localStorage.removeItem(SKIN_STORAGE_KEY);
  } catch {
    // Stockage indisponible : le skin restera actif pour cette session.
  }
}
