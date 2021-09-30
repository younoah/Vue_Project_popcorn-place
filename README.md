# Boilerplate for Vue + Webpack

## Usage

```bash
npm i
npm run dev
npm run build
```

## How it was created

### Install packages

```bash
npm i vue@next
```

```bash
npm i -D webpack webpack-cli webpack-dev-server \
  vue-loader@next @vue/compiler-sfc html-webpack-plugin \
  css-loader vue-style-loader sass sass-loader \
  copy-webpack-plugin
```

### Configure webpack

`webpack.config.js`:

```js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ]
}

```

### Add npm scripts

```json
{
  "scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
}
```
