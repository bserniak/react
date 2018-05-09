'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (env) {
    env = env || {development: true};
    process.env.BABEL_ENV = 'production';
    var config = {
        devtool: 'source-map',
        entry: [
            require.resolve('./src/polyfills.ts'),
            require.resolve('./src/Index.tsx'),
        ],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.web.js', '.js', '.json', '.web.jsx', '.jsx', '.scss', '.css'],
            alias: {
                'react-native': 'react-native-web',
            }
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [require.resolve("babel-loader"), require.resolve("awesome-typescript-loader")]
                },
                {
                    test: /\.(ts|tsx)$/,
                    enforce: 'pre',
                    exclude: /src(\/|\\)api/,
                    loader: require.resolve('tslint-loader'),
                    options: {
                        "emitErrors": true,
                        "failOnHint": true,
                    }
                },
                {
                    exclude: [
                        /\.html$/,
                        /\.(js|jsx)$/,
                        /\.(ts|tsx)$/,
                        /\.css$/,
                        /\.scss$/,
                        /\.json$/,
                        /\.bmp$/,
                        /\.gif$/,
                        /\.jpe?g$/,
                        /\.png$/,
                    ],
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: require.resolve('url-loader'),
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        require.resolve('style-loader'),
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                importLoaders: 1,
                                modules: true,
                                camelCase: true,
                                localIdentName: '[name]_[local]_[hash:base64:5]'
                            },
                        },
                        require.resolve("sass-loader"),
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        require.resolve('style-loader'),
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                importLoaders: 1
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(['dist'], {}),
            env.production ? new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }) : function() {},
            env.production ? new webpack.optimize.UglifyJsPlugin({
                compress: env.production ? {
                    screw_ie8: true,
                    warnings: false
                } : false,
                comments: false,
                sourceMap: !env.production
            }) : function() {},
            new CopyWebpackPlugin([
                { from: './public/icons', to: "icons" },
            ], {}),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                configDirectory: "/",
            })
        ]
    };
    return config;
};
