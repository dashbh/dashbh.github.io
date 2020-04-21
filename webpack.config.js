const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = (env, argv) => ({
    entry: {
        main: './src/index.tsx'
    },
    mode: "development",
    output: {
        path: path.join(__dirname, "build/"),
        filename: '[name].[hash:8].js',
        chunkFilename: '[id].[hash:8].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.ts', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/
            },
            {
                test: /\.scss?$/, use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        port: 3000
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        // Keep the runtime chunk separated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        // https://github.com/facebook/create-react-app/issues/5358
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'public/assets', to: './' }
        ]),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
});