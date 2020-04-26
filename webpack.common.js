const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
    console.log('NODE_ENV: ', process.env.NODE_ENV);
    return {
        entry: {
            main: path.resolve(__dirname, "./src/")
        },
        output: {
            path: path.join(__dirname, './build'),
            filename: '[name].[hash:8].js',
            chunkFilename: '[id].[hash:8].js'
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.ts', '.scss'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss?$/, use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack']
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new CopyWebpackPlugin([
                { from: 'public/assets', to: './' }
            ]),
            new webpack.DefinePlugin({
                'process.env': JSON.stringify({
                    NODE_ENV: process.env.NODE_ENV
                }),
            })
        ]
    }
};
