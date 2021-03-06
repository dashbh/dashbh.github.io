const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js')();
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true
            })
        ]
    },
    plugins: [
        new WorkboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true
        }),
        new MiniCssExtractPlugin()
    ]
});
