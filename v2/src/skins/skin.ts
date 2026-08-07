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
export const SKINNABLE_ASSETS = ["rock"] as const;
export type SkinnableAsset = (typeof SKINNABLE_ASSETS)[number];

export type Skin = {
  name: string;
  author?: string;
  version?: string;
  /** Sous-ensemble quelconque des variables ci-dessus. */
  variables?: Partial<Record<SkinnableVariable, string>>;
  /** SVG en ligne, indexé par élément. */
  assets?: Partial<Record<SkinnableAsset, string>>;
};

export const SKIN_STORAGE_KEY = "signal-nocturne-skin-v1";

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
      if (!SKINNABLE_VARIABLES.includes(key as SkinnableVariable)) { ignored.push(`variable inconnue : ${key}`); continue; }
      if (typeof value !== "string" || !isSafeCssValue(value)) { ignored.push(`valeur refusée : ${key}`); continue; }
      variables[key as SkinnableVariable] = value;
    }
  }

  const assets: Partial<Record<SkinnableAsset, string>> = {};
  if (source.assets && typeof source.assets === "object") {
    for (const [key, value] of Object.entries(source.assets as Record<string, unknown>)) {
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
