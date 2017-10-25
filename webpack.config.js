const path = require('path')

const commonConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'electron_[name].js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    node: {
        __dirname: false
    }
}

module.exports = [
    Object.assign(
        {
          target: 'electron-main',
          entry: { main: './app.ts' }
        },
        commonConfig),
    Object.assign(
        {
          target: 'electron-renderer',
          entry: { gui: './src/ts/mainDocInterface.ts' }
        },
        commonConfig)
]