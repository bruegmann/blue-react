var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "./doc");
var APP_DIR = path.resolve(__dirname, "./doc/src");

var config = {
    entry: APP_DIR + "/index.jsx",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.scss$/,
                include: APP_DIR,
                loader: ExtractTextPlugin.extract(
                    "css-loader!sass-loader"
                )
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|ico|jpeg|jpg)$/,
                loader: "file-loader?name=contents/[name]-[hash].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};

module.exports = config;