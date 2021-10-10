const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    resolve: { 
      extensions: ['.vue', '.js'], // 경로에서 해당 확장자는 생략이 가능.
      alias: {
        '~': path.resolve(__dirname, 'src') // ~라는 별칭으로 루트의 src 경로에서 찾기시작.
      }
    },
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath:'/',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.s?css$/,
          use: ['vue-style-loader', 'css-loader', 'postcss-loader',{
            loader: 'sass-loader',
            options:{
              additionalData: `
              @use "sass:color";
              @use "sass:list";
              @use "sass:map";
              @use "sass:math";
              @use "sass:meta";
              @use "sass:selector";
              @use "sass:string";
              @import "~/scss/_variables";
              `
            }
          }], 
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlPlugin({
        template: './src/index.html', //웹팩이 해석해야하는 html 파일이 어디있는지 명시함
      }),
      new CopyPlugin({
        patterns: [
          {from: 'static'}
        ]
      })
    ],
    devServer: {
      port: 8079,
      historyApiFallback: true
    }
  }
  