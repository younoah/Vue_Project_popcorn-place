import { createRouter, createWebHistory } from 'vue-router'
import MovieList from './MovieList'
import NotFound from './NotFound'
import Home from './Home'

export default createRouter({
    history: createWebHistory(),
    scrollBehavior: () =>  ({top: 0}),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            name: 'MovieTitle',
            path: '/movieList/:title/:page',
            component: MovieList,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})