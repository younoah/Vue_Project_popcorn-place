import { createRouter, createWebHistory } from 'vue-router';
import SearchResults from './SearchResults';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: SearchResults,
      children: [
        {
          name: 'SearchResults',
          path: 'search/:keyword',
          component: SearchResults
        }
      ]
    }
  ]
});
