/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const browserslist = require('@stilesdev/browserslist-config')

module.exports = {
    plugins: [
        'compat',
    ],
    env: {
        browser: true,
    },
    rules: {
        'compat/compat': ['error', browserslist.join(',')],
    },
}
