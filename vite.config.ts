import { defineConfig } from "vite";

// If you deploy to https://<username>.github.io/<repo-name>/ (a project page),
// set `base` to "/<repo-name>/" — for example "/portfolio/".
//
// If you deploy to https://<username>.github.io/ directly (a user/org page,
// repo must be named exactly "<username>.github.io"), set `base` to "/".
export default defineConfig({
  base: "/portfolio/",
  build: {
    outDir: "dist",
  },
});
