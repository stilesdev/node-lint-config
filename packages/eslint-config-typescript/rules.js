module.exports = {
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            vars: 'all',
            varsIgnorePattern: '^_|^props$',
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
        },
    ],
}
