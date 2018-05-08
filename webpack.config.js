const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"), //__dirname means the current directory
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            // ...
        })
    ]

}