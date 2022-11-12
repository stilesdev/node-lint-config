module.exports = {
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false, ignores: ['/^sm-/'] }],
    'vue/html-indent': ['error', 4],
    'vue/script-indent': ['error', 4, { baseIndent: 1, switchCase: 1 }],
    'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: 1 }],
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-model-argument': 'off',
}
