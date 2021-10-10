import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import Page from './Page'
import NotFound from './NotFound'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            name:'Home',
            path:'/',
            component: Home
        },
        {
            name: 'Page',
            path: '/page/:id',
            component: Page
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})
