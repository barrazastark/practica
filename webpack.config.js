const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname + "/build"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: [ "@babel/preset-env" ]
                }
                }
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            }
        ]
    }
}