module.exports = {
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'cypress'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ]
}
