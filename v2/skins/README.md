# Format des skins — Signal Nocturne v2

Un skin est un fichier **JSON** chargé depuis l'application : mode Éditeur →
**Import/Export** → section *Apparence*. Il est conservé d'une session à
l'autre, et se retire à tout moment par « Revenir au skin par défaut ».

## Principes

- **Un skin peut être partiel.** Tout ce qu'il ne fournit pas conserve
  l'apparence par défaut. Un skin ne définissant qu'une seule couleur est
  parfaitement valide.
- **Les couleurs des trains ne sont pas modifiables.** Elles portent la
  logique du jeu (identité des trains, règles de mélange) : les laisser
  skinnables rendrait des niveaux illisibles ou insolubles. Toute tentative
  de les redéfinir est ignorée, sans faire échouer l'import.
- **Les entrées inconnues sont ignorées, pas rejetées.** Un skin écrit pour
  une version ultérieure reste utilisable sur une version antérieure.

## Structure

```json
{
  "name": "Nom du skin",
  "author": "Facultatif",
  "version": "Facultatif",
  "variables": { "skin-trim": "#c87f3a" },
  "assets": { "rock": "<svg viewBox=\"0 0 100 100\">…</svg>" }
}
```

Seul `name` est obligatoire, avec au moins une entrée dans `variables` ou
`assets`.

## Variables disponibles

| Variable | Rôle |
|---|---|
| `skin-grid-dot` | Points du quadrillage |
| `skin-grid-dot-opacity` | Opacité de ces points |
| `skin-grid-dot-erase` | Points du quadrillage en mode gomme |
| `skin-grid-dot-erase-opacity` | Opacité en mode gomme |
| `skin-trim` | **Liseré unique** des gares et remises |
| `skin-building-dark` / `skin-building-light` | Corps des bâtiments |
| `skin-building-edge` | Arêtes des bâtiments |
| `skin-rock-light` / `skin-rock-dark` | Dégradé du rocher |
| `skin-rock-edge` | Liseré du rocher |
| `skin-rail-bed` | Ballast de la voie |
| `skin-rail-sleeper` | Traverses (parties extérieures) |
| `skin-rail-sleeper-mid` | Traverses (partie centrale, entre les rails) |
| `skin-rail-inner` | Entre-rail |
| `skin-loco-trim` | Liseré de la locomotive |
| `skin-loco-body-dark` / `skin-loco-body-light` | Carrosserie |

Les valeurs sont des couleurs CSS (`#rrggbb`, `rgb()`, `hsl()`…). Les
fonctions chargeant une ressource externe (`url()`) sont refusées.

## Éléments graphiques (`assets`)

Éléments actuellement remplaçables :

| Clé | Élément |
|---|---|
| `rock` | Le rocher (obstacle). SVG carré, étiré pour remplir la case. |
| `outlet` | La remise (départ des trains). SVG carré. |
| `station` | La gare (arrivée des trains). SVG carré. |
| `connector` | Le connecteur reliant un bâtiment à la voie. Dessiné **pointe vers le haut** : l'application le fait pivoter vers chaque entrée active. |
| `badge` | Emblème du skin, affiché dans l'en-tête à côté du numéro de version (≈ 14 px). Permet d'identifier d'un coup d'œil l'habillage en cours. |

### Ce qui reste piloté par l'application

Sur les gares et remises, deux choses ne sont **pas** dans l'image et sont
dessinées par-dessus :

- **les points de couleur** (séquence de trains attendue ou émise), au centre
  du bâtiment — ils portent de l'information de jeu, un skin ne doit pas
  pouvoir les masquer. Gardez cette zone centrale lisible ;
- **les connecteurs**, dont le nombre dépend des entrées actives (1 à 4 pour
  une gare) et dont l'orientation est calculée. Un skin en fournit le dessin,
  jamais le placement.

### Forme attendue

Chaque clé de `assets` vaut **directement une chaîne SVG**, sur une seule
ligne, guillemets internes échappés en `\"`. Pas d'objet imbriqué :

```json
"assets": {
  "rock": "<svg viewBox=\"0 0 100 100\">…</svg>",
  "badge": "<svg viewBox=\"0 0 24 24\">…</svg>"
}
```

Le SVG est fourni **en ligne**, sous forme de chaîne. Il doit :
- commencer par `<svg`, de préférence avec un `viewBox` (il est étiré pour
  remplir la case, carrée) ;
- ne contenir ni `<script>`, ni gestionnaire d'événement (`onclick`…), ni
  référence externe. Ces contenus sont refusés : un skin importé provient
  d'un tiers et n'est pas considéré comme fiable.

Gares, remises et locomotives suivront dans une prochaine étape ; ils
demandent des surcouches dynamiques (connecteurs orientables, points de
couleur, zone de teinte du train) qui restent à définir.

## Partir d'un modèle

Le plus simple pour créer un skin est d'utiliser le bouton
**« Exporter le skin / modèle complet »** dans la même section de
l'application. Le fichier obtenu contient :

- **toutes** les variables disponibles, renseignées avec la valeur
  actuellement appliquée (celle du skin en cours, ou celle du skin par défaut) ;
- la liste des éléments graphiques remplaçables, avec leur description ;
- vos éventuels SVG déjà en place.

Il sert donc à la fois d'export du skin actif et de point de départ exhaustif.
Supprimez ensuite librement les entrées que vous ne souhaitez pas modifier :
un skin partiel est valide. Les champs commençant par `_` sont de l'aide, ils
sont ignorés à l'import.

## Exemple

[`exemple-cuivre.json`](./exemple-cuivre.json) — un jeu complet de couleurs
chaudes, à charger tel quel pour vérifier le fonctionnement.
