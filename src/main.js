import * as Vue from 'vue'
import App from '~/App'
import store from '~/store'
import router from '~/routes'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = Vue.createApp(App)
app.use(store)
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
