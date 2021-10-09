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
        async readMovieList({commit, state}, payload){
            const { searchTitle, page } = payload
            state.isLoading = false
            const movieList = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${searchTitle}&page=${page}`, {
                    method: 'GET'
                }).then(res => res.json())
            if(movieList.Response === 'True'){
                commit('assignState', {
                    totalResults: movieList.totalResults,
                    movieList: movieList.Search,
                    searchTitle,
                    page,
                    isLoading: true
                })
            }else{
                state.movieList = []
                state.totalResults = ''
                state.searchTitle = ''
            }
        },
        async readMovieItem({ commit, state }, payload){
            const { searchId } = payload
            state.isLoading = false
            try{
                const selectedMovie = await fetch(`https://www.omdbapi.com?apikey=7035c60c&i=${searchId}&plot=short`, {
                    method: 'GET'
            }).then(res => res.json())
            commit('assignState', {
                selectedMovie,
                searchId,
                isLoading: true
            })
            } catch(error){
                router.push('/')
            }
        }
    }
}