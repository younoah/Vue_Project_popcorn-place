import { createStore } from 'vuex'
import movieList from './movieList'
export default createStore({
    modules: {
        movieList
    }
})