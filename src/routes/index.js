import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './Home'
import MovieDetail from './MovieDetail'
import NotFound from './NotFound'

export default createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/',
      component:Home,
      name:'home'
    },
    {
      path:'/:imdbID',
      component:MovieDetail,
      name:'movieDetail'
    },
    {
      path:'/:notFound(.*)',
      component:NotFound
    }
  ]
})
