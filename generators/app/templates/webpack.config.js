'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer?browsers=last 5 version!'
            },
            {
                test: /\.less$/,
                loader: 'style!css!autoprefixer?browsers=last 5 version!less!'
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file'
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname)
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js')
    ]
};
