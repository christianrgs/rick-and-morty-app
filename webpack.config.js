const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// eslint-disable-next-line func-names
module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: isEnvDevelopment
        ? path.resolve(__dirname, 'public')
        : path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
          test: /.*\.(gif|svg|png|jpe?g)$/i,
          use: {
            loader: 'file-loader',
          },
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],
  };
};
