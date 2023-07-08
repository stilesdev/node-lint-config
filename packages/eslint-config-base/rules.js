module.exports = {
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': 'warn',
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'brace-style': ['warn', '1tbs'],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': ['warn', { before: false, after: true }],
    eqeqeq: ['error', 'always'],
    'func-call-spacing': ['warn', 'never'],
    indent: ['warn', 4, { SwitchCase: 1 }],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multi-spaces': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unused-vars': [
        'error',
        {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
        },
    ],
    'object-curly-spacing': ['warn', 'always'],
    'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
    ],
    'prefer-template': ['error'],
    quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'quote-props': ['warn', 'as-needed'],
    semi: ['warn', 'never'],
    'space-before-function-paren': ['warn', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'space-infix-ops': 'warn',
    'template-curly-spacing': ['warn', 'never'],
}
