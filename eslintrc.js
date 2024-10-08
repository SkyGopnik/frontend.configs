const generatePathGroup = (name) => {
  return [`/^${name}/`, `/.\\_${name}/`, `/.\\/${name}/`];
};

// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "import-helpers",
    "@typescript-eslint",
    "unused-imports"
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-tag-spacing": 2,
    "no-extra-boolean-cast": "off",
    quotes: ["error", "double"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/ban-ts-comment": "warn",
    "object-curly-spacing": ["error", "always"],
    "no-case-declarations": "off",
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: true
      }
    ],
    "@typescript-eslint/no-empty-function": "off",
    "react/react-in-jsx-scope": "off",
    "comma-dangle": ["error", "never"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/no-unescaped-entities": "off",
    "linebreak-style": ["error", "unix"],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "react-hooks/exhaustive-deps": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          "module",
          ...[
            "layouts",
            "pages",
            "components",
            "hooks",
            "functions",
            "utils",
            "assets",
            "constants",
            "types"
          ].reduce((acc, name) => acc.concat(generatePathGroup(name)), []),
          "parent",
          "sibling",
          "index"
        ],
        alphabetize: { order: "asc", ignoreCase: true }
      }
    ],
    "eol-last": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "react/jsx-newline": "error",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none"
      }
    ],
    "import/no-cycle": [2, { maxDepth: 1 }]
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      typescript: {
        alwaysTryTypes: true,
        project: ["tsconfig.json"]
      }
    }
  }
};
