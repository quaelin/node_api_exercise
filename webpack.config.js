import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import webpack from 'webpack';

export default {
    mode: 'development',
    entry: './app/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './app/build')
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ]
};
