var webpack = require('webpack');
var PROD = process.env.NODE_ENV === "production";
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({filename: "./bundle.css"});

module.exports = {
    entry: ['./client/app.client.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    plugins: PROD
        ? [
            new webpack
                .optimize
                .UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                })
        ]
        : [],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015', 'react', 'stage-0'
                    ],
                    plugins: ['babel-plugin-transform-class-properties', 'transform-decorators-legacy']
                }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.less$/,
                include: /(client)/,
                use: extractLess.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }, {
                            loader: "postcss-loader"
                        }, {
                            loader: "less-loader"
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]

    },
    plugins: [extractLess]
}