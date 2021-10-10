import {createApp} from 'vue'
import store from './store/index'
import router from '~/routes/index'
import App from '~/App'

const app=createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
