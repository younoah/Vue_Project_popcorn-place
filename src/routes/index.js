import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import MoviesPage from './MoviesPage'
import MovieDetailPage from './MovieDetailPage'
import MovieLikePage from './MovieLikePage'
import NotFound from './NotFound'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movies-page',
            component: MoviesPage
        },
        {
            path: '/movie-detail-page',
            component: MovieDetailPage
        },
        {
            path: '/movie-like-page',
            component: MovieLikePage
        },
        {
            path: '/:notFound(.*)',
            component: NotFound 
        }
    ]
})