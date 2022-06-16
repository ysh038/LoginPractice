const path = require("path");
const webpack = require("webpack");

module.exports = {
    name: "number-baseball",
    mode: "development",
    devtool: "eval",

    resolve: {
        extensions: [".js", ".jsx"],
    },
    entry: {
        app: ["./client"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                // babel 옵션
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    browsers: ["> 5% in KR"],
                                },
                                debug: true,
                            },
                        ],
                        "@babel/preset-react",
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "react-hot-loader/babel",
                    ],
                },
            },
        ],
    },
    plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
        publicPath: "/dist/",
    },
};
