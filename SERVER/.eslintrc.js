module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: [
    'vue',
  ],
  rules: {
  },
};
