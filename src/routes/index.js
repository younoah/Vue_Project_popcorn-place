import { createRouter, createWebHistory } from 'vue-router';
import Home from 'components/Homepage/Home';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
});