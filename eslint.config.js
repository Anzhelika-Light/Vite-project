// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

// export default tseslint.config(
//   eslint.configs.recommended,
//   ...tseslint.configs.recommended
//   // ...tseslint.configs.strict,
//   // ...tseslint.configs.stylistic
// );
export default tseslint.config(
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
  // {
  //   ignores: ["dist", "node_modules", "eslint.config.js"],
  // },
  // eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
  },
  { files: ["**/*.{ts,tsx}"] }
);
