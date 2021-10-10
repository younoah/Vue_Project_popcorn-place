import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/routes/Home';
import Movie from '@/routes/Movie';
import NotFound from '@/routes/NotFound';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:movieId',
      component: Movie,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
