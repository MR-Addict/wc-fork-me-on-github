import dts from "vite-plugin-dts";
import { defineConfig, UserConfig } from "vite";

const webConfig: UserConfig = {
  base: "./",
  root: "web",
};

const pkgConfig: UserConfig = {
  plugins: [dts({ tsconfigPath: "tsconfig.pkg.json" })],
  build: {
    lib: {
      formats: ["es"],
      fileName: "index",
      entry: "src/index.ts",
    },
  },
};

export default defineConfig(({ mode }) => {
  if (mode === "web") return webConfig;
  if (mode === "pkg") return pkgConfig;
  throw new Error(`Unknown mode: ${mode}`);
});
