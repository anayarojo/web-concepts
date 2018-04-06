const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "index": path.resolve(__dirname, 'src/index.js'),
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css')
    ],
    devServer: {
        port: 9000,
        historyApiFallback: {
            index: 'public/index.html',
        },
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2'],
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: "stylus-loader",
                            options: {
                                use: [
                                    require("nib"),
                                    require("rupture")
                                ],
                                import: [
                                    "~nib/lib/nib/index.styl",
                                    "~rupture/rupture/index.styl",
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]',
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use: {
                    loader: 'url-loader'
                }
            },
        ]
    }
}