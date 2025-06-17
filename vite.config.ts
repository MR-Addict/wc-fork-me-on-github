import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "web") {
    return {
      base: "./",
      root: "example",
    };
  }

  return {
    plugins: [dts()],
    build: {
      lib: {
        formats: ["es"],
        fileName: "index",
        entry: "src/index.ts",
      },
    },
  };
});
