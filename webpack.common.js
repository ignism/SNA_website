const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require(path.resolve(__dirname, 'config/theme.json'))
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 

module.exports = {
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, 'wp-content/themes', config.slug)),
    new CopyWebpackPlugin([{
      from: 'theme/public',
      to: ''
    }, {
      from: 'theme/vendor',
      to: 'vendor'
    }]),
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ],

  module: {
    rules: [{
      // test: /\.js$/,
      // exclude: /(node_modules)/,
      // include: [path.resolve(__dirname, 'src')],

      // loader: 'babel-loader',
      // options: {
      //   plugins: ['syntax-dynamic-import'],
      //   presets: [
      //     [
      //       '@babel/preset-env', {
      //         modules: false
      //       }
      //     ]
      //   ]
      // }
      exclude: /node_modules/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader',

      options: {
        plugins: ['syntax-dynamic-import'],

        presets: [
          [
            '@babel/preset-env',
            {
              modules: false
            }
          ]
        ]
      },

      test: /\.js$/
    }, {
      test: /\.(css|pcss)$/,

      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: (resourcePath, context) => {
            // publicPath is the relative path of the resource to the context
            // e.g. for ./css/admin/main.css the publicPath will be ../../
            // while for ./css/main.css the publicPath will be ../
            return path.relative(path.dirname(resourcePath), context) + '/'
          }
        }
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader'
      }]
    }, {
      test: /\.(svg|png|jpg)$/,

      use: {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
          publicPath: '../'
        }
      }
    }]
  },

  entry: {
    theme: './theme/src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'wp-content/themes', config.slug),
    filename: 'js/[name].js'
  },

  mode: 'development',

  optimization: {
    // minimizer: [new UglifyJSPlugin({
    //   uglifyOptions: { ecma: 8 },
    // })],
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
}
