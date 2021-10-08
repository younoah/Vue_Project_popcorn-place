import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import NotFound from './NotFound'
export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/:notFount(.*)',
      component: NotFound,
    },
  ],
})
