import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            title: '',
            page: 1,
            movieList: [],
        };
    },
    mutations: {
        updateTitle(state, title) {
            state.title = title;
        },
        updatePage(state) {
            state.page += 1;
        },
        resetPage(state) {
            state.page = 1;
        },
        updateMovieList(state, newMovieList) {
            state.movieList = [...state.movieList, ...newMovieList];
        },
        initMovieList(state, newMovieList) {
            state.movieList = newMovieList;
        }
    },
    actions: {
        async getMovieList({ commit }, options) {
            const newMovieList = await fetch('/.netlify/functions/movielist',{
                method: 'POST',
                body: JSON.stringify(options)
            }).then(res => res.json());

            if(options.page === 1) {
                commit('initMovieList', newMovieList.Search);
                return; 
            }
            
            commit('updateMovieList', newMovieList.Search);
        }
    },

});