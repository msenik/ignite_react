/// <binding ProjectOpened='Watch - Development' />
"use strict";

module.exports = {
    entry: {
        "classwork_1/build/bundle": "./classwork_1/js/main.js",
        "classwork_2/build/bundle": "./classwork_2/js/main.js",
        "classwork_3/build/bundle": "./classwork_3/jsx/main.jsx",
        "homework_1/build/bundle": "./homework_1/js/main.js",
        "homework_2/build/bundle": "./homework_2/js/main.js",
        "homework_3/build/bundle": "./homework_3/js/main.jsx"
    } ,

    output: {
        filename: '[name].js'
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
