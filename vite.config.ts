import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";

// Publie le fichier VERSION de la racine du projet dans la sortie de build,
// afin que l'application déployée puisse le récupérer pour comparer sa propre
// version à celle actuellement en ligne. Le fichier reste la source unique du
// numéro de version (il est aussi importé à la compilation par App.tsx).
function emitVersionFile(): Plugin {
  return {
    name: "emit-version-file",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "VERSION",
        source: fs.readFileSync(new URL("./VERSION", import.meta.url), "utf8"),
      });
    },
  };
}

// base: "./" makes every built asset URL relative, so the exact same build
// works whether it's served at the domain root or under a GitHub Pages
// project subpath (https://<user>.github.io/<repo>/) without configuration.
export default defineConfig({
  base: "./",
  plugins: [react(), emitVersionFile()],
  build: {
    outDir: "dist",
  },
});
