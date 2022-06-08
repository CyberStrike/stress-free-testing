module.exports = {
  root: true,
  env: {
    node: true,
    'cypress/globals': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    'plugin:cypress/recommended'
  ],
  plugins: ['vue', 'cypress'],
}
