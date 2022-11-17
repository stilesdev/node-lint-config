/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const rules = require('./rules')

module.exports = {
    extends: [
        'eslint:recommended',
    ],
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 'latest', // TODO: which version to target?
    },
    rules,
}
