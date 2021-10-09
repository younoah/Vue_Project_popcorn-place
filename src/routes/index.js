import { createRouter, createWebHistory } from 'vue-router'
import MoviesList from './MoviesList'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: MoviesList
    }
  ]
})
