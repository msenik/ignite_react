/// <binding ProjectOpened='Watch - Development' />
"use strict";

module.exports = {
    entry: './src/main.js',
    output: {
      path: __dirname + "/build",
      filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['react','es2015']
                }
            }
        ]
    }
};
