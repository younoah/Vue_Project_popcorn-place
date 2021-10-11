import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies,
      children: [
        {
          path: ':id',
          name: 'movieDetailModal',
          component: movieDetailModal,
        },
      ],
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
