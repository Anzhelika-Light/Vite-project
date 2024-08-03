import Inspect from "vite-plugin-inspect";
import checker from "vite-plugin-checker";

export default {
  esbuild: {
    jsxFactory: "create",
    jsxInject: 'import { create } from "./12-create.js"',
  },
  plugins: [
    Inspect(),
    checker({
      typescript: true,
      eslint: {
        // for example, lint .ts and .tsx
        lintCommand: 'eslint "./**/*.{ts,tsx}"',
      },
    }),
  ],
};
