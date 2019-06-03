const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require(path.resolve(__dirname, 'config/theme.json'))

module.exports = (env, options) => {
  console.log('env: ')
  console.log(env)
  console.log('options: ')
  console.log(options)

  if (options.mode === 'production') {
    process.env.NODE_ENV = 'production'
  }
  return ({
    entry: { 
      theme: './theme/src/index.js',
      head: './theme/src/head.js',
    },
    output: {
      path: path.resolve(__dirname, 'wp-content/themes/', config.slug),
      filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            // options: {
            //   presets: ['@babel/preset-env']
            // }
          }
        },
        {
          test: /\.(css|pcss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    purgecss: options.mode === 'production' ? { content: ['./theme/public/templates/**/*.twig'] } : false,
                    cssnano: options.mode === 'production' ? {} : false
                  }
                }
              }
            },
          ]
        },
        {
          test: /\.svg$/,
          use: {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
              publicPath: '../',
            },
          },
        },
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css',
      }),
      new CleanWebpackPlugin(path.resolve(__dirname, 'wp-content/themes/', config.slug)),
      new CopyWebpackPlugin([
        {from: 'theme/public', to: ''},
        {from: 'theme/vendor', to: 'vendor'}
      ]),
    ]
  })
}