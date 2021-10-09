import { createRouter, createWebHistory } from 'vue-router';
import SearchResult from './SearchResult';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({top:0}),
  routes: [
    {
      path: '/:keyword',
      component: SearchResult,
    }
  ]
});