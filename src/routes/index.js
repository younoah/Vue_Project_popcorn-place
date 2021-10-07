import {createRouter, createWebHistory} from 'vue-router'
import Home from './Home'
import NotFound from './NotFound'
import Movie from './Movie'

export default createRouter({
    history: createWebHistory(),
    scrollBehavior:()=>({top:0}),

    routes:[
        {
            path: '/',
            name:'Home',
            component:Home
        },
        {
            path:'/movie',
            name:'Movie',
            component:Movie
        },

        {
            path:'/:notFount(.*)',
            component:NotFound
        }
    ]
})