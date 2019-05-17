const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /.svg/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true,
            svgo: {
              plugins: [{ removeTitle: false }],
              floatPrecision: 2,
            },
          },
        },
      ],
    });

    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
});
