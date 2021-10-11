import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import About from './About';
import Docs from './Docs';
import DocsId from './DocsId';
import LogIn from './LogIn';
import NotFound from './NotFound';

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
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: true,
      },
    },
    // {
    //   path: '/documents/:id',
    //   component: Docs,
    // },
    {
      path: '/documents',
      name: 'documents',
      component: Docs,
      children: [
        {
          path: ':id',
          name: 'docsId',
          component: DocsId,
        },
      ],
    },
    {
      path: '/login',
      component: LogIn,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
