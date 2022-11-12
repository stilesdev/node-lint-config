/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const rules = require('./rules')

module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    extends: [
        '@stilesdev/eslint-config-typescript',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript',
    ],
    rules,
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
}
