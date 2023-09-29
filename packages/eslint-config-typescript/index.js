/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const rules = require('./rules')

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        '@stilesdev/eslint-config-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
    ],
    rules,
}
