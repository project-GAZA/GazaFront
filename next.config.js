/** @type {import('next').NextConfig} */
const webpack = require('webpack');

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        IScroll: 'iscroll',
      }),
    );

    return config;
  },
};
