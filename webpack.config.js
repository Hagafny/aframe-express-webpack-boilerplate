var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./public/js/main.js",
    output: {
        path: __dirname + "/public/",
        filename: "bundle.js"
    }
};

