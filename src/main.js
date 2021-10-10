import { createApp } from 'vue'
import App from '~/App'
import fetchPlugin from '~/plugins/fetch'

const app = createApp(App)
app.use(fetchPlugin)
app.mount('#app')
