/**
 * package javascript
 * @file webpack.config.js
 * @author Aidan
 * @mail webaidandai@gmail.com
 */

let precss = require('precss'),
  autoprefixer = require('autoprefixer');
  
module.exports = {
    entry: "./asset/javascript/dev/entry.js",
    output: {
        path: './asset/javascript/',
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader",
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};