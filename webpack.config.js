const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    devServer: {
        contentBase: './docs',
        open: true
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'docs')
    },
    plugins:[new HtmlWebpackPlugin({
        template: 'src/index.html'
    })],
    resolve: {
        alias: {
            image: path.resolve(__dirname,'src/image')
        }
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/images'
                    }
                }
            },
            {
                test: /\.(gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/images'
                        }
                    }
                ]
            }
        ]
    }
}