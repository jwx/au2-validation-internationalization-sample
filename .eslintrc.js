module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:promise/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "prefer-arrow",
    "promise",
    "simple-import-sort"
  ],
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple"
      }
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit",
        "overrides": {
          "constructors": "no-public"
        }
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "SwitchCase": 1
      }
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true,
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/semi": [
      "off",
      null
    ],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "error",
    "promise/prefer-await-to-then": "off",
    "promise/catch-or-return": "off",
    "promise/valid-params": "off",
    "arrow-body-style": "error",
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "camelcase": "off",
    // replaced with @typescript-eslint/camelcase
    "comma-dangle": "warn",
    "comma-spacing": "error",
    "complexity": "off",
    "constructor-super": "error",
    "curly": "off",
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": "error",
    "id-match": "error",
    "import/no-default-export": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "max-classes-per-file": "off",
    "max-len": [
      "error",
      {
        "code": 160
      }
    ],
    "new-parens": "error",
    "no-bitwise": "off",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "dir",
          "time",
          "timeEnd",
          "timeLog",
          "trace",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "debug",
          "info",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "prefer-arrow/prefer-arrow-functions": "error",
    "prefer-const": "off",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "quotes": "off",
    "radix": "error",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": []
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "always",
        "named": "never"
      }
    ],
    "spaced-comment": "off",
    "use-isnan": "error",
    "valid-typeof": "off"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}

