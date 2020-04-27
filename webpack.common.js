const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    const isEnvProduction = process.env.NODE_ENV === 'production'; 
    console.log('NODE_ENV: ', process.env.NODE_ENV);
    return {
        entry: {
            main: path.resolve(__dirname, "./src/")
        },
        output: {
            path: path.join(__dirname, './build'),
            filename: isEnvProduction ? '[name].[contenthash:8].js' : '[name].[hash:8].js',
            chunkFilename: isEnvProduction ? '[name].[contenthash:8].js' : '[name].[hash:8].js'
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
                        isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
