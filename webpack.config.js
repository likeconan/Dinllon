var webpack = require('webpack');
var path = require('path');
var PROD = process.env.NODE_ENV === "production";
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({ filename: "bundle.css" });

const plguins = PROD
    ? [
        extractLess, new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack
            .optimize
            .UglifyJsPlugin()
    ]
    : [extractLess]

module.exports = {
    entry: ['./client/app.client.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'client')
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
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
    plugins: plguins
}