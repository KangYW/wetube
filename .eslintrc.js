module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": "off"
  }
};
