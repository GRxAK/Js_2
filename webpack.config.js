module.exports = {
    entry: './js/script',
    output: {
        filename: './build.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
}