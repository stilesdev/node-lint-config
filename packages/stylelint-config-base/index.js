const rules = require('./rules')

module.exports = {
    extends: ['stylelint-config-standard'],
    plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features'],
    rules,
}
