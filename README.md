# Signal Nocturne — v1.0 (build statique)

Version 100 % statique de Signal Nocturne, destinée à la publication sur un
dépôt GitHub public et à un hébergement type GitHub Pages. Aucune dépendance
serveur : pas de Worker, pas de base de données, pas d'authentification.

Le dossier [`../signal-nocturne-v27`](../signal-nocturne-v27) — la version de
travail sur socle Next.js/vinext/Cloudflare — n'a pas été modifié. Ce dossier
`v1.0` est une reconstruction indépendante, portant le même moteur de jeu, la même UI et le même contenu (niveaux, textes, audio, documentation), sur un
socle Vite + React classique sans rendu serveur.

## Ce qui a été repris à l'identique (aucun changement de comportement)

- `src/App.tsx` — copie de `app/page.tsx` (uniquement la directive `"use
  client"` retirée, inutile hors Next.js ; le composant racine est renommé
  `Home` → `App`).
- `src/levels/*.ts`, `src/rail-motion.ts` — copies strictement identiques
  (contenu des niveaux non touché).
- `src/index.css` — copie de `app/globals.css`.
- `public/audio/`, `public/docs/`, `public/documentation.html`,
  `public/favicon.svg`, `public/icon-*.svg` — copies identiques.

## Ce qui a été adapté (uniquement pour la portabilité statique)

- **`public/manifest.webmanifest`** : `start_url`/`scope`/icônes passés en
  chemins relatifs (`./`) au lieu d'absolus (`/`), pour fonctionner sous un
  sous-chemin GitHub Pages (`https://<user>.github.io/<repo>/`) sans
  configuration. Libellés `v27` retirés (version affichée devient générique).
- **`public/sw.js`** : mêmes règles de cache que la version v27, mais
  résolues via `self.registration.scope` au lieu de chemins absolus, pour la
  même raison de portabilité. Nom de cache renommé `signal-nocturne-v1.0`.
- **`vite.config.ts`** : `base: "./"` — build à assets relatifs, portable
  quel que soit le sous-répertoire de publication.
- Remplacement du socle Next.js (`next.config.ts`, `worker/`, `db/`,
  `.openai/`, `chatgpt-auth.ts`, polices `next/font`) par un projet Vite
  minimal : `index.html`, `src/main.tsx`, `vite.config.ts`, `tsconfig*.json`,
  `eslint.config.js`. Les polices `next/font` (Geist) n'étaient pas utilisées
  dans `globals.css` (police réelle : `"Arial Narrow", "Roboto Condensed",
  system-ui`) : leur retrait n'a aucun impact visuel.

## Développement local

```bash
npm ci
npm run dev       # serveur de dev Vite
npm run build     # build statique -> dist/
npm run preview   # sert dist/ localement pour vérification
```

## Déploiement

Le workflow `.github/workflows/deploy-pages.yml` build ce dossier et publie
`dist/` sur GitHub Pages à chaque push sur `main`. Il est écrit pour un dépôt
public **dédié** dont la racine est ce dossier (pas de préfixe `application/`
dans les chemins). Prérequis côté dépôt : activer Pages → Source = "GitHub
Actions" dans les paramètres du dépôt.

Ce dossier reste synchronisé depuis le dépôt privé (monorepo) via
`git subtree push` — voir la procédure de synchronisation dans la
documentation du dépôt privé. Le dépôt public ne reçoit que ce sous-arbre
(fichiers + historique de ce dossier uniquement), jamais le reste du
monorepo.
