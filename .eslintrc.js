module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'quote-props': 0,
    'keyword-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-v-html': 0,
    'arrow-parens': 0
  }
}
