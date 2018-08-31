var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 8080
    },
    output: {
        filename: 'index.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};