import { createRouter, createWebHistory } from 'vue-router';
import Home from '~/views/Home';
import NotFound from '~/views/NotFound';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/movies',
    //   name: 'movies',
    //   component: SearchResult,
    //   // children: [
    //   //   {
    //   //     path: ':id',
    //   //     name: 'movieDetailModal',
    //   //     component: movieDetailModal,
    //   //   },
    //   // ],
    // },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
