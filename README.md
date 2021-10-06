# Boilerplate for Vue@4

## Usage

```bash
npm i
npm run dev
npm run build
```

## How it was created

### 01 [vue, webpack, webpack-dev-server]

> - `vue@4`
> - `webpack`: 번들러
> - `webpack-dev-server`: 개발서버

**Install:**

```bash
npm i vue@next
```

```bash
npm i -D webpack webpack-cli webpack-dev-server \
  vue-loader@next @vue/compiler-sfc \ 
  html-webpack-plugin \
  css-loader vue-style-loader sass sass-loader \
  copy-webpack-plugin
```

**Configure:**

`webpack.config.js`:

> - `alias`: 경로 별칭
> - `extensions`: 확장자 생략 설정
> - `plugins`: 스태틱 파일 복사

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

`package.json`:

```json
{
  "scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
}
```

### 02 [..., vuex, vue-router, babel]

> - `vuex`: 상태 전역 관리를 위한 스토어 
> - `vue-router`: 프로젝트 내에서 페이지 분리 및 관리를 위한 라우터
> - `babel`: 최신 JS 문법을 구형 브라우저에서도 동작하게 만드는 트랜스파일러

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

> `browserslist`: 현재 프로젝트의 브라우저 지원 목록 설정 (babel과 추후 설정할 postcss에서 사용)

```json
{
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ],
}
```

`webpack.config.js`:

> - `publicPath`: 빌드된 `index.html`에서 절대 경로로 스크립트를 불러오도록 지정 
> - `devServer`: 개발 서버에서 들어오는 요청을 `index.html`로 돌리도록 `historyApiFallback` 설정
> - `module`: JS 파일에 대한 babel 로더 추가

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

> 나중을 위해 알아두기: 전체 폴더에서 특정 하위 폴더만 제외하는 방법

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(axios|xxxx))/, // axios와 xxxx는 제외 하지 않고 나머지 node_modules를 제외한다
        use: 'babel-loader'
      }
    ]
  }
}
```

`babel.config.json`:

> - `@babel/plugin-transform-runtime`: preset-env가 polyfill을 넣을 때 발생하는 전역 오염 방지
> - `corejs`: 기본값인 버전 2와 달리 `Array.includes` 같은 더 최신의 JS 문법을 트랜스파일링 할 수 있도록 설정

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

### 03 [..., postcss, autoprefixer]

> - `postcss`: CSS 후처리 도구
> - `autoprefixer`: postcss의 플러그인으로서 CSS에 공급업체 접미사(vendor prefix)를 자동으로 붙여준다

**Install:**

```bash
npm i -D postcss autoprefixer postcss-loader
```

**Configure:**

`postcss.config.js`:

```js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

`webpack.config.js`:

> - `module`: 스타일에 대한 로더의 순서에는 로직이 담겨 있다. 먼저 css 전처리 도구인 `sass-loader` 이후에 css 후처리 도구 `postcss-loader`를 등록해준다. 후처리가 끝난 다음에 css를 불러오고 불러온 css를 `vue-style-loader`로 인라인 스타일을 주입한다.

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
          'postcss-loader',
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
