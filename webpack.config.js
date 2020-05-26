const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dest'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: path.resolve('node_modules'),
        loader: 'vue-loader',
        options: {
          js: 'babel-loader',
          postcss: 'postcss-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: path.resolve('node_modules'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
};

config.devServer = {
  contentBase: path.resolve(__dirname, 'public')
};

module.exports = config;
