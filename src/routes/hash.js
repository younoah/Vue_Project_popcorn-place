import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import About from './About';
import Docs from './Docs';
import DocsId from './DocsId';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHashHistory(),
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
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
