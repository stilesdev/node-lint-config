/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const rules = require('./rules')

module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        '@stilesdev/eslint-config-typescript',
        '@nuxt/eslint-config',
    ],
    rules,
}
