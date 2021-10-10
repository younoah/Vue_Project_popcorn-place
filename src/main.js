import * as Vue from 'vue';
import App from './App';
import store from '~/store';
import router from 'routes';
import fetchUrl from '~/plugins/fetch';

const app = Vue.createApp(App);

app.use(fetchUrl);
app.use(store);
app.use(router);
app.mount('#app');
