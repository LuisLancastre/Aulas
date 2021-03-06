module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceeType: "module",
    },
    rules: {
        "no-unused-vars": 0,
    },
}