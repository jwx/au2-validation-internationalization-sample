/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {ProvidePlugin, IgnorePlugin} = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const fs = require('fs');

// config helpers:
const ensureArray = (config) => config && (Array.isArray(config) ? config : [config]) || [];
const when = (condition, config, negativeConfig) =>
  condition ? ensureArray(config) : ensureArray(negativeConfig);

// primary config
const outDir = path.resolve(__dirname, 'dist');

const cssRules = [
  {loader: 'css-loader'},
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          require('autoprefixer')(),
          require('cssnano')()
        ]
      }
    }
  }
];

const sassRules = [
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        includePaths: ['node_modules']
      }
    }
  }
];

module.exports = ({production, azureDev, apache, iis, extractCss, analyze, tests} = {}) => ({
  target: 'web',
  mode: production ? 'production' : 'development',
  devtool: production ? undefined : 'eval-source-map',
  entry: {
    entry: './src/main.ts'
  },
  output: {
    path: outDir,
    filename: production ? '[name].[contenthash].bundle.js' : '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: outDir,
    historyApiFallback: true,
    overlay: true,
    port: 9001,
    stats: 'minimal'
  },
  module: {
    rules: [
      // CSS required in JS/TS files should use the style-loader that auto-injects it into the website
      // only when the issuer is a .js/.ts file, so the loaders are not applied inside html templates
      {
        test: /\.css$/i,
        use: extractCss ? [{
          loader: MiniCssExtractPlugin.loader
        }, ...cssRules
        ] : ['style-loader', ...cssRules],
        issuer: /\.[tj]s$/i
      },
      {
        test: /\.css$/i,
        // CSS required in templates cannot be extracted safely
        // because Aurelia would try to require it again in runtime
        use: cssRules,
        issuer: /\.html?$/i
      },
      {
        test: /\.scss$/,
        use: extractCss ? [{
          loader: MiniCssExtractPlugin.loader
        }, ...cssRules, ...sassRules
        ] : ['style-loader', ...cssRules, ...sassRules],
        issuer: /\.[tj]s$/i
      },
      {
        test: /\.scss$/,
        use: [...cssRules, ...sassRules],
        issuer: /\.html?$/i
      },
      {test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: {limit: 8192}},
      {
        test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: {limit: 10000, mimetype: 'application/font-woff2'}
      },
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: {limit: 10000, mimetype: 'application/font-woff'}
      },
      {test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader'},
      {test: /\.ts$/i, use: ['ts-loader', '@aurelia/webpack-loader'], exclude: /node_modules/},
      {test: /[/\\]src[/\\].+\.html$/i, use: '@aurelia/webpack-loader', exclude: /node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'}),
    analyze && new BundleAnalyzerPlugin(),
    // ref: https://webpack.js.org/plugins/mini-css-extract-plugin/
    ...when(extractCss, new MiniCssExtractPlugin({ // updated to match the naming conventions for the js files
      filename: production ? 'css/[name].[contenthash].bundle.css' : 'css/[name].[hash].bundle.css',
      chunkFilename: production ? 'css/[name].[contenthash].chunk.css' : 'css/[name].[hash].chunk.css'
    })),
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
    ...when(!tests, new CopyWebpackPlugin({
      patterns: [
        {from: 'locales', to: 'locales'}
      ]
    }))
  ].filter(p => p)
})
