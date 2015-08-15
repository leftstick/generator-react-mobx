'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('release', function(callback) {
    var path = require('path');
    var replace = require('gulp-replace');
    var config = require('./webpack.config');
    var myConfig = Object.create(config);

    require('rimraf').sync('build/');

    myConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));

    gulp.src(['img/*', 'favicon.ico'], {'base': '.'})
        .pipe(gulp.dest('build/'));

    webpack(myConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[webpack]', stats.toString());
        gulp.src(['index.html'], {'base': '.'})
            .pipe(replace('common.bundle.js', stats.hash + '.common.bundle.js'))
            .pipe(replace('index.bundle.js', stats.hash + '.index.bundle.js'))
            .pipe(gulp.dest('build/'))
            .on('end', callback);
    });
});


gulp.task('dev', function(callback) {
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.config');
    var myConfig = Object.create(config);
    myConfig.devtool = 'sourcemap';
    myConfig.debug = true;
    myConfig.output.filename = myConfig.output.filename.replace(/\[hash\]\./, '');
    myConfig.output.chunkFilename = myConfig.output.chunkFilename.replace(/\[hash\]\./, '');

    myConfig.plugins.pop();
    myConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin('common.bundle.js'));

    new WebpackDevServer(webpack(myConfig), {
        historyApiFallback: true,
        publicPath: '/js/'
    }).listen(8080, 'localhost', function(err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});
