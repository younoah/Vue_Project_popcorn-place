import { createRouter, createWebHistory } from 'vue-router';
import Home from 'components/Homepage/Home';
import MovieInfo from 'components/MovieInfo';
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie/info/:id',
            component: MovieInfo
        }
    ]
});