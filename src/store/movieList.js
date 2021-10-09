import router from '~/routes'

export default {
    namespaced: true,
    state(){
        return {
            movieList : [],
            selectedMovie: {},
            totalResults: '',
            searchTitle: '',
            searchId: '',
            page: 1,  
            isLoading: false    
        }
    }, 
    getters: {},
    mutations: {
        assignState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
    },
    actions: {
        async readMovieList({commit, state}, options){
            state.isLoading = false
            const movieList = await fetch('/.netlify/functions/getMovieList', {
                    method: 'POST',
                    body: JSON.stringify(options)
                }).then(res => res.json())
            state.isLoading = true
            if(movieList.Response === 'True'){
                commit('assignState', {
                    ...options,
                    totalResults: movieList.totalResults,
                    movieList: movieList.Search,
                })
            }else{
                state.movieList = []
                state.totalResults = ''
                state.searchTitle = ''
            }
        },
        async readMovieItem({ commit, state }, options){
            state.isLoading = false
            try{
                const selectedMovie = await fetch('/.netlify/functions/getMovieItem', {
                    method: 'POST',
                    body: JSON.stringify(options)
            }).then(res => res.json())
            commit('assignState', {
                ...options,
                selectedMovie,
                isLoading: true
            })
            } catch(error){
                router.push('/')
            }
        }
    }
}