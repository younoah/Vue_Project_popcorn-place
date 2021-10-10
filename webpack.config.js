const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename:''
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/, //.vue로 끝나는 모든 파일 찾기
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/, // .css 파일들
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: 'src/index.html',
      // path.resolve()를 통해 절대경로를 넣어줘야 하지만 기본적으로 자동으로 실행되게 해놔서 별도로 입력할 필요 없이, 경로만 잡아주면 된다.
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' },
        // to:''의 경우,output.path를 기본적으로 참조하기 때문에 dist에 둘 생각이면 생략해도 된다.
      ],
    }),

  ],
  devServer: {
    port: 8079,
    historyApiFallback: true
  }
}
// path.resolve()를 사용하면 절대경로로 잡힌다.
