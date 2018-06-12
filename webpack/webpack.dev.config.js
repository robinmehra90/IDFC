var webpack = require('webpack');
var path = require('path');
var parentDir = path.join(__dirname, '../src/');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index:   path.join(parentDir, 'index.js'),
        vendor: [
            'react',
            'react-dom',
        ],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.(sass|scss|css)$/,
            use: [
                'isomorphic-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                // {
                //     loader: 'postcss-loader',
                //     options: {
                //         plugins: () => [require('autoprefixer')]
                //     }
                // },
                {
                    loader: 'sass-loader'
                }
            ]
        },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true
        }),
        new CopyWebpackPlugin([
            {from:'./src/public',to:'public'}
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process. env.NODE_ENV)
            }
        }),
],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}
