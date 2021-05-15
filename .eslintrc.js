module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'js-snip'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'standard'
  ],
  rules: {
    'js-snip/no-inner-text': 'error'
  }
}
