import * as Vue from 'vue';
import App from './App';
import router from 'routes';
import fetchUrl from '~/plugins/fetch';

const app = Vue.createApp(App);

app.use(fetchUrl);
app.use(router);
app.mount('#app');
