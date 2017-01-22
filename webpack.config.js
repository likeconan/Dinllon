var webpack = require('webpack');
var PROD = process.env.NODE_ENV === "production";
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: ['./client/app.client.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : [],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader"),
                include: /(client)/
            }
        ]

    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ],
    debug: true
}