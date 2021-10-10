// node.js의 환경에서 실시하는 것이기 때문에 ES6 문법 불가.
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
// const {
//   BundleAnalyzerPlugin,
// } = require('webpack-bundle-analyzer');

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 최종 결과를 내어주는 기능을 웹팩이 하지 않을 경우, 절대경로가 아니면 꼬일 수 있다.
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                @use "sass:color";
                @use "sass:list";
                @use "sass:map";
                @use "sass:math";
                @use "sass:meta";
                @use "sass:selector";
                @use "sass:string";
                @import "~bootstrap/scss/bootstrap";
              `,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      // favicon: './src/static/favicon.png',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/static' }],
    }),
    new DotenvWebpack(),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static', // 분석결과를 파일로 저장
    //   reportFilename: 'docs/size_dev.html', // 분설결과 파일을 저장할 경로와 파일명 지정
    //   defaultSizes: 'parsed',
    //   openAnalyzer: true, // 웹팩 빌드 후 보고서파일을 자동으로 열지 여부
    //   generateStatsFile: true, // 웹팩 stats.json 파일 자동생성
    //   statsFilename: 'docs/stats_dev.json', // stats.json 파일명 rename
    // }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
