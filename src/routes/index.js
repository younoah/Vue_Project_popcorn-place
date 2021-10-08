import { createRouter, createWebHistory } from 'vue-router';
import Movie from './Movie';
import Info from './Info';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),

  routes: [
    {
      name: 'Movie',
      path: '/',
      component: Movie,
    },
    {
      name: 'Info',
      path: '/info/:id',
      component: Info,
    },
  ],
});
