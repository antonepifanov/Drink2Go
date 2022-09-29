import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'

const _dirname = typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default {
    mode: 'development',
    entry: './source/js/script.js',
    output: {
        path: path.resolve(_dirname, './build/js'),
        filename: 'script.min.js'
    },
    devtool: 'eval-source-map',
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin()
    ]
}
