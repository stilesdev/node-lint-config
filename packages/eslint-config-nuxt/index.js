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
        '@stilesdev/eslint-config-base',
        '@nuxt/eslint-config',
    ],
    rules,
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
        {
            files: ['pages/**'],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
}
