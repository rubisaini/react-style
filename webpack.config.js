/**
 * Created by intelligrape on 9/5/17.
 */
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry : './src/main.js' ,

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [

                        {
                            loader: "css-loader"
                        },
                         {
                            loader: "sass-loader"
                        }],
                })
            }
        ]
    }, output: {
        filename: './src/index.js'
    },
    devServer:{
            contentBase: './',
            port: 9000,
            historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]

};

module.exports = config;