const rules = require('./rules')

module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-stylistic/config'],
    plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features'],
    rules,
}
