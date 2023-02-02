module.exports = {
    indentation: [ 4, { baseIndentLevel: 1 } ],
    'plugin/no-unsupported-browser-features': [
        true,
        {
            browsers: require('@stilesdev/browserslist-config'),
            severity: 'warning',
            ignore: [ 'css3-cursors' ],
        },
    ],
}
