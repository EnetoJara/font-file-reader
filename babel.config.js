"use strict";
module.exports = api => {

    const {NODE_ENV} = process.env;
    api.cache(() => NODE_ENV);
    api.env();

    return {
        presets: [
            "@babel/preset-typescript"
        ],
        plugins: [
            "@babel/plugin-transform-modules-commonjs"
        ]
    }
}
