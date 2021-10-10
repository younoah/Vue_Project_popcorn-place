export default {
  install(app, options) {
    app.config.globalProperties.$fetch = (url, opts) => {
      return fetch(url, opts).then(res => res.json())
    }
  }
}
