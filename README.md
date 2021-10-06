# Boilerplate for Vue + Webpack

## Usage

```bash
npm i
npm run dev
npm run build
```

## How it was created

### [vue, webpack, webpack-dev-server]

**Install:**

```bash
npm i vue@next
```

```bash
npm i -D webpack webpack-cli webpack-dev-server \
  vue-loader@next @vue/compiler-sfc html-webpack-plugin \
  css-loader vue-style-loader sass sass-loader \
  copy-webpack-plugin
```

**Configure:**

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

**scripts:**

```json
{
  "scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
}
```

### [..., vuex, vue-router]

**Install:**

```bash
npm i vuex@next vue-router@4
```

```bash
npm i -D @babel/core @babel/preset-env \
  @babel/ plugin-transform-runtime @babel/runtime-corejs3 babel-loader
```

**Configure:**

`package.json`:

```json
{
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ],
}
```

`webpack.config.js`:

```js
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

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
    publicPath: '/',
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
  ],
  devServer: {
    historyApiFallback: true
  }
}

```

나중을 위해 알아두기:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(axios|xxxx))/, // axios와 xxxx는 제외 하지 않고 나머지 node_modules를 제외한다
        use: 'babel-loader'
      },
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
  }
}
```

`babel.config.json`:

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-transform-runtime", {
      "corejs": 3
    }]
  ]
}
```
