import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import Movies from './Movies'
import MovieDetail from './MovieDetail'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      name: 'Movies',
      path: '/search',
      component: Movies,
    },
    {
      name: 'MovieDetail',
      path: '/detail',
      component: MovieDetail
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})