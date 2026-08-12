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
  // Dimensionnement des illustrations d'un skin (gares, remises, rocher).
  "skin-icon-scale",
  // Dimensionnement propre à la locomotive : elle se déplace et doit rester
  // lisible sans masquer la voie, son ratio est donc réglable séparément.
  "skin-loco-scale",
  // Pointillé des rails eux-mêmes, et son décalage de phase.
  "skin-rail-dasharray",
  "skin-rail-dashoffset",
] as const;

export type SkinnableVariable = (typeof SKINNABLE_VARIABLES)[number];

/** Éléments graphiques qu'un skin peut remplacer par un SVG. */
export const SKINNABLE_ASSETS = ["rock", "badge", "outlet", "station", "connector", "loco", "patterns"] as const;
export type SkinnableAsset = (typeof SKINNABLE_ASSETS)[number];

/** Description lisible de chaque élément, reprise dans le modèle exporté. */
export const ASSET_DESCRIPTIONS: Record<SkinnableAsset, string> = {
  rock: "Le rocher (obstacle). SVG carré, étiré pour remplir la case.",
  badge: "Petit emblème du skin, affiché dans l'en-tête à côté du numéro de version. SVG carré, rendu à environ 14 px.",
  outlet: "La remise (départ des trains). SVG carré. Les points de couleur sont dessinés PAR-DESSUS par l'application, au centre : gardez cette zone lisible.",
  station: "La gare (arrivée des trains). SVG carré. Les points de couleur sont dessinés PAR-DESSUS par l'application, au centre : gardez cette zone lisible.",
  connector: "Le connecteur reliant un bâtiment à la voie. SVG carré, dessiné pointe vers le HAUT : l'application le fait pivoter vers chaque entrée active.",
  patterns: "Bibliothèque de motifs du skin : un <svg> ne contenant que des <defs> avec des <pattern>/<linearGradient> nommés par un id. Ils sont injectés une fois dans la page, puis référençables depuis les variables de couleur par url(#mon-id) — par exemple pour texturer le ballast ou les traverses.",
  loco: "La locomotive. SVG carré, dessinée NEZ VERS LE HAUT (l'application la fait pivoter selon sa direction). IMPORTANT : les parties devant prendre la couleur du train doivent utiliser fill=\"currentColor\" ou stroke=\"currentColor\". NE PAS mettre de style=\"color:…\" sur la balise <svg> : cette déclaration l'emporterait sur la couleur du train et figerait la locomotive dans une seule teinte. Prévoyez une zone de couleur assez grande pour rester identifiable en mouvement.",
};

/** Exemples minimaux mais fonctionnels, fournis dans le modèle exporté. */
export const ASSET_EXAMPLES: Record<SkinnableAsset, string> = {
  rock: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 78 L12 46 L34 22 L64 18 L86 40 L80 74 L50 88 Z" fill="#5a6268" stroke="#8b949b" stroke-width="3" stroke-linejoin="round"/></svg>',
  badge: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="#35ddf3"/></svg>',
  outlet: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="26" width="68" height="58" rx="4" fill="#26313a" stroke="#a8894e" stroke-width="3"/><path d="M10 30 L50 10 L90 30 Z" fill="#31404b" stroke="#a8894e" stroke-width="3" stroke-linejoin="round"/><rect x="38" y="56" width="24" height="28" rx="2" fill="#0d1418"/></svg>',
  station: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="26" width="68" height="58" rx="4" fill="#26313a" stroke="#a8894e" stroke-width="3"/><path d="M10 30 L50 10 L90 30 Z" fill="#31404b" stroke="#a8894e" stroke-width="3" stroke-linejoin="round"/><rect x="30" y="70" width="40" height="8" rx="2" fill="#a8894e"/></svg>',
  connector: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="42" y="0" width="16" height="52" fill="#3d4a52" stroke="#8b949b" stroke-width="2"/></svg>',
  patterns: '<svg xmlns="http://www.w3.org/2000/svg"><defs><pattern id="skin-gravier" width="24" height="24" patternUnits="userSpaceOnUse"><rect width="24" height="24" fill="#15191a"/><circle cx="6" cy="7" r="2" fill="#2f363a"/><circle cx="17" cy="4" r="1.6" fill="#3b4348"/><circle cx="12" cy="14" r="2.2" fill="#262d31"/><circle cx="20" cy="18" r="1.8" fill="#343c41"/><circle cx="4" cy="19" r="1.5" fill="#2a3135"/></pattern></defs></svg>',
  loco: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="52" rx="30" ry="40" fill="currentColor" stroke="#0d1114" stroke-width="3"/><circle cx="39" cy="28" r="6.5" fill="#fff"/><circle cx="61" cy="28" r="6.5" fill="#fff"/><circle cx="39" cy="27" r="3" fill="#0d1114"/><circle cx="61" cy="27" r="3" fill="#0d1114"/></svg>',
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
    if (fromSkin) {
      // Défini par le skin : actif, sous son vrai nom.
      variables[variable] = fromSkin;
      continue;
    }
    // Non défini : proposé sous un nom préfixé « _ » (donc inactif) avec la
    // valeur par défaut. Retirer le « _ » suffit à le prendre en main. Même
    // mécanisme que pour les éléments graphiques.
    const fallback = computed.getPropertyValue(`--${variable}`).trim();
    if (fallback) variables[`_${variable}`] = fallback;
  }

  // Section « assets » : les éléments réellement actifs sous leur vrai nom,
  // et pour tous les autres le dessin standard sous un nom préfixé « _ »
  // (donc inactif). Il suffit de retirer le « _ » pour activer le standard,
  // de remplacer le SVG par le sien, ou de supprimer la ligne.
  const assets: Record<string, string> = {};
  for (const asset of SKINNABLE_ASSETS) {
    const svg = current?.assets?.[asset];
    if (svg) assets[asset] = svg;
    else assets[`_${asset}`] = ASSET_EXAMPLES[asset];
  }

  // Catalogue documentaire : description et contraintes de chaque élément.
  const catalogue: Record<string, unknown> = {};
  for (const asset of SKINNABLE_ASSETS) {
    catalogue[asset] = {
      description: ASSET_DESCRIPTIONS[asset],
      actif: Boolean(current?.assets?.[asset]),
      viewBox_conseille: asset === "badge" ? "0 0 24 24" : "0 0 100 100",
    };
  }

  // Taille réelle d'une case sur l'appareil ayant produit ce fichier : utile
  // pour calibrer l'épaisseur des traits et la lisibilité des détails, que le
  // viewBox seul ne permet pas d'apprécier.
  const board = document.querySelector(".board");
  const cellPx = board ? Math.round((board.getBoundingClientRect().width / 7) * 10) / 10 : null;

  const template: Record<string, unknown> = {
    name: current ? `${current.name} (copie)` : "Mon skin",
    author: current?.author ?? "",
    version: "1.0",
    _aide: [
      "COULEURS : dans « variables », les entrées sous leur vrai nom sont ACTIVES (définies par ce skin). Celles préfixées « _ » montrent la valeur par défaut sans l'appliquer : retirez le « _ » pour prendre la main dessus, ou supprimez la ligne.",
      "ÉLÉMENTS GRAPHIQUES : dans « assets », les entrées sous leur vrai nom sont ACTIVES. Celles préfixées « _ » sont le dessin standard, INACTIF : retirez le « _ » pour l'activer, remplacez le SVG par le vôtre, ou supprimez la ligne.",
      "FORME ATTENDUE : chaque clé vaut DIRECTEMENT une chaîne SVG, sur une seule ligne, guillemets internes échappés en \\\". Pas d'objet imbriqué.",
      "TAILLE : le SVG est étiré pour remplir sa zone, il n'y a donc pas de taille maximale en pixels. Ce qui compte est le viewBox (voir « _elements_disponibles ») et la finesse des traits, à calibrer avec « _rendu ». « skin-icon-scale » ajuste globalement les illustrations (défaut 105%, borné entre 80% et 120%).",
      "TEXTURES : déclarez vos motifs dans l'élément « patterns » (un <svg> ne contenant que des <defs>), puis référencez-les depuis une variable de couleur par url(#mon-id) — par exemple \"skin-rail-bed\": \"url(#skin-gravier)\". Seules les références locales (#id) sont autorisées, jamais une ressource externe.",
      "RAILS : « skin-rail-dasharray » et « skin-rail-dashoffset » pilotent le pointillé de la couche rails (défaut « none » = trait continu). Utile pour une voie discontinue ou une suite d'empreintes.",
      "Un skin peut être partiel : supprimez librement ce que vous ne souhaitez pas modifier.",
      "Les couleurs des trains ne sont pas modifiables (elles portent la logique du jeu).",
      "Les clés commençant par « _ » sont ignorées à l'import.",
    ],
    _rendu: {
      taille_case_px: cellPx,
      commentaire: cellPx
        ? `Sur l'appareil ayant produit ce fichier, une case du plateau mesure environ ${cellPx} px de côté. Un SVG en viewBox 0 0 100 100 y est réduit d'environ ${Math.round((cellPx / 100) * 100) / 100}× : un trait plus fin que ${Math.round((100 / cellPx) * 10) / 10} unités de viewBox rendra moins d'un pixel et disparaîtra.`
        : "Taille de case indisponible (plateau non affiché au moment de l'export).",
      locomotive_px: cellPx ? Math.round(cellPx * 0.11 * 10) / 10 : null,
      badge_px: 14,
    },
    variables,
    assets,
    _elements_disponibles: catalogue,
  };

  return JSON.stringify(template, null, 2);
}

/** Signature d'un flux gzip : 0x1f 0x8b. */
function looksGzipped(bytes: Uint8Array): boolean {
  return bytes.length > 2 && bytes[0] === 0x1f && bytes[1] === 0x8b;
}

async function gunzip(bytes: Uint8Array): Promise<string> {
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Ce navigateur ne sait pas décompresser le format gzip.");
  }
  const stream = new Blob([bytes as BlobPart]).stream().pipeThrough(new DecompressionStream("gzip"));
  return await new Response(stream).text();
}

/**
 * Lit un skin fourni sous n'importe quelle forme : JSON en clair, fichier
 * gzip, ou base64 d'un gzip (ce que produit un copier-coller de fichier
 * compressé). Renvoie toujours du texte JSON.
 */
export async function readSkinPayload(input: ArrayBuffer | string): Promise<string> {
  if (typeof input !== "string") {
    const bytes = new Uint8Array(input);
    return looksGzipped(bytes) ? await gunzip(bytes) : new TextDecoder().decode(bytes);
  }

  const trimmed = input.trim();
  if (trimmed.startsWith("{")) return trimmed; // JSON en clair

  // Sinon, on tente d'y voir du base64 (gzip collé sous forme de texte).
  const compact = trimmed.replace(/\s+/g, "");
  if (/^[A-Za-z0-9+/=]+$/.test(compact) && compact.length > 16) {
    try {
      const binary = atob(compact);
      const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
      if (looksGzipped(bytes)) return await gunzip(bytes);
      const decoded = new TextDecoder().decode(bytes).trim();
      if (decoded.startsWith("{")) return decoded;
    } catch {
      // Pas du base64 exploitable : on laisse la validation JSON rendre l'erreur.
    }
  }
  return trimmed;
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

/**
 * Un skin ne doit pas pouvoir injecter de contenu actif via ses valeurs.
 * `url(#identifiant)` est toléré — et uniquement cette forme : elle référence
 * un motif déclaré par le skin lui-même dans son asset `patterns`. Toute
 * autre forme d'`url()` (donc toute ressource externe) reste refusée.
 */
function isSafeCssValue(value: string): boolean {
  if (value.length > 200) return false;
  if (/[<>{};]|expression\s*\(|@import|javascript:/i.test(value)) return false;
  // On retire les références locales avant de rechercher un url() résiduel.
  const withoutLocalRefs = value.replace(/url\(\s*['"]?#[A-Za-z][\w-]*['"]?\s*\)/g, "");
  return !/url\s*\(/i.test(withoutLocalRefs);
}

/** Bornes des valeurs numériques, pour éviter des réglages inexploitables. */
const CLAMPED_VARIABLES: Partial<Record<SkinnableVariable, { min: number; max: number; unit: string }>> = {
  "skin-icon-scale": { min: 70, max: 150, unit: "%" },
  "skin-loco-scale": { min: 50, max: 200, unit: "%" },
};

/** Ramène une valeur bornée dans son intervalle. Retourne null si illisible. */
function clampVariable(key: SkinnableVariable, value: string): string | null {
  const bounds = CLAMPED_VARIABLES[key];
  if (!bounds) return value;
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) return null;
  const clamped = Math.min(bounds.max, Math.max(bounds.min, parsed));
  return `${clamped}${bounds.unit}`;
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
  // Un nom vide ne doit pas empêcher l'import : le modèle exporté part d'un
  // nom vide, et l'oubli est fréquent. On retombe sur un libellé neutre.
  const declared = typeof source.name === "string" ? source.name.trim().slice(0, 60) : "";
  const name = declared || "Skin sans nom";

  const ignored: string[] = [];
  const variables: Partial<Record<SkinnableVariable, string>> = {};
  if (source.variables && typeof source.variables === "object") {
    for (const [key, value] of Object.entries(source.variables as Record<string, unknown>)) {
      if (key.startsWith("_")) continue; // clé d'aide : ignorée sans le signaler
      if (!SKINNABLE_VARIABLES.includes(key as SkinnableVariable)) { ignored.push(`variable inconnue : ${key}`); continue; }
      if (typeof value !== "string" || !isSafeCssValue(value)) { ignored.push(`valeur refusée : ${key}`); continue; }
      const bounded = clampVariable(key as SkinnableVariable, value);
      if (bounded === null) { ignored.push(`valeur illisible : ${key}`); continue; }
      variables[key as SkinnableVariable] = bounded;
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
