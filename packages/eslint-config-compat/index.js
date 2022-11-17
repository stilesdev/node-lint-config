/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    extends: [
        'plugin:compat/recommended',
    ],
    plugins: [
        'compat',
    ],
    env: {
        browser: true,
    },
}
