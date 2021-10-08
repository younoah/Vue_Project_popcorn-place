import * as Vue from 'vue';
import App from './App';
import router from 'routes';

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');
