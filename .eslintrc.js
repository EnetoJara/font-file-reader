module.exports = {
    root: true,
    plugins: [
        'eslint-plugin',
        '@typescript-eslint',
        'import',
        'eslint-comments',
    ],
    parser: "@typescript-eslint/parser",
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        //
        // our plugin :D
        //
        "space-before-function-paren": ["error", "always"],
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "keyword-spacing": [
            "error",
            {
                before: true,
                after: true
            }
        ],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "always"],
        "comma-spacing": [
            "error",
            {
                before: false,
                after: true
            }
        ],
        "object-curly-spacing": [
            "error",
            "always",
            {
                arraysInObjects: false
            }
        ],
        "template-curly-spacing": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "block-spacing": ["error", "always"],
        "no-else-return": "error",
        "no-nested-ternary": "error",
        "require-await": "error",
        "arrow-spacing": [
            "error",
            {
                before: true,
                after: true
            }
        ],
        "prefer-const": "error",
        "no-var": "error",
        "no-use-before-define": "error",
        "linebreak-style": ["error", "unix"],
        "@typescript-eslint/consistent-type-assertions": 0,
        "@typescript-eslint/unbound-method": 0,
        "@typescript-eslint/no-var-requires": 0,
        "no-dupe-args": "error",
        "no-inner-declarations": "error",
        "no-irregular-whitespace": "error",
        "no-unexpected-multiline": "error",
        "no-unsafe-finally": "error",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "consistent-return": "error",
        curly: "error",
        eqeqeq: "error",
        "no-else-return": "error",
        "require-await": "error",
        "no-shadow": "error",
        "no-unused-vars": "error",
        "no-use-before-define": "error",
        "callback-return": "error",
        "array-bracket-spacing": "error",
        "block-spacing": "error",
        camelcase: "error",
        "capitalized-comments": "error",
        "key-spacing": "error",
        "padding-line-between-statements": "error",
        "newline-per-chained-call": "error",
        "space-before-blocks": "error",
        "spaced-comment": "error",
        "no-this-before-super": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-spread": "error",
        "template-curly-spacing": "error",

        "padding-line-between-statements": ["error",
            { blankLine: "any", prev: "*", next: "*" },
            { blankLine: "always", prev: "*", next: ["return"] },
            { blankLine: "always", prev: "directive", next: "*" },
            { blankLine: "always", prev: "directive", next: "*" },

            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            { blankLine: "never", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
            { blankLine: "always", prev: "export", next: ["const", "let", "var", "function"] }
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/unbound-method': 'off',

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': [
            'error',
            { allow: ['arrowFunctions'] },
        ],

        //
        // eslint base
        //

        'comma-dangle': ['error', 'always-multiline'],
        'constructor-super': 'off',
        curly: ['error', 'all'],
        'no-mixed-operators': 'error',
        'no-console': 'error',
        'no-process-exit': 'error',

        //
        // eslint-plugin-eslint-comment
        //

        // require a eslint-enable comment for every eslint-disable comment
        'eslint-comments/disable-enable-pair': [
            'error',
            {
                allowWholeFile: true,
            },
        ],
        // disallow a eslint-enable comment for multiple eslint-disable comments
        'eslint-comments/no-aggregating-enable': 'error',
        // disallow duplicate eslint-disable comments
        'eslint-comments/no-duplicate-disable': 'error',
        // disallow eslint-disable comments without rule names
        'eslint-comments/no-unlimited-disable': 'error',
        // disallow unused eslint-disable comments
        'eslint-comments/no-unused-disable': 'error',
        // disallow unused eslint-enable comments
        'eslint-comments/no-unused-enable': 'error',
        // disallow ESLint directive-comments
        'eslint-comments/no-use': [
            'error',
            {
                allow: [
                    'eslint-disable',
                    'eslint-disable-line',
                    'eslint-disable-next-line',
                    'eslint-enable',
                ],
            },
        ],

        //
        // eslint-plugin-import
        //

        // disallow non-import statements appearing before import statements
        'import/first': 'error',
        // Require a newline after the last import/require in a group
        'import/newline-after-import': 'error',
        // Forbid import of modules using absolute paths
        'import/no-absolute-path': 'error',
        // disallow AMD require/define
        'import/no-amd': 'error',
        // forbid default exports
        'import/no-default-export': 'error',
        // Forbid the use of extraneous packages
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                peerDependencies: true,
                optionalDependencies: false,
            },
        ],
        // Forbid mutable exports
        'import/no-mutable-exports': 'error',
        // Prevent importing the default as if it were named
        'import/no-named-default': 'error',
        // Prohibit named exports
        'import/no-named-export': 'off', // we want everything to be a named export
        // Forbid a module from importing itself
        'import/no-self-import': 'error',
        // Require modules with a single export to use a default export
        'import/prefer-default-export': 'off', // we want everything to be named
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',

        ecmaFeatures: {
            jsx: false,
        },
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    }
};
