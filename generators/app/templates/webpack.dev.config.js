'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build', 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: 'js/'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style/useable!css!postcss!'
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less!'
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ]
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file'
            }
        ]
    },
    postcss: function() {
        return [
            autoprefixer({browsers: ['last 5 versions']})
        ];
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'js', 'fw', 'lib')
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js')
    ]
};
