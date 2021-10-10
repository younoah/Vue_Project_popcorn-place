import { createStore } from 'vuex'
import router from '~/routes'
import createPersistedState from 'vuex-persistedstate'
import { API_END_POINT, API_KEY } from '../api'

export default createStore({
    plugins: [
        createPersistedState()
    ],
    state() {
        return {
            searchWord: '',
            movieList: [],
            selectedMovie: {},
            likeMovieList: [],
        }
    },
    getters: {
        movieListLength(state) {
            return state.movieList.length
        },
        likeMovieList(state) {
            return state.likeMovieList.length
        }
    },
    mutations: {
        addLikeMovieList(state, likeMovie) {
            state.likeMovieList.push(likeMovie)
        },
        removeLikeMovieList(state, removeMovieId) {
            const removeIdx = state.likeMovieList.findIndex(movie => movie.imdbID === removeMovieId)
            state.likeMovieList.splice(removeIdx, 1)
        },
        initializeMovieList(state) {
            state.movieList = []
        },
        updateSearchWord(state, newSearchWord) {
            state.searchWord = newSearchWord
            router.push('/movies-page')
        },
        updateMovieList(state, payload) {
            const { list, searchWord } = payload
            state.searchWord = searchWord

            if(list['Response'] !== 'False') {
                list['Search'].map(movie => {
                    state.movieList.push(movie)
                })
            }
            router.push('/movies-page')
        },
        updateSelectedMovie(state, payload) {
            state.selectedMovie = payload
            router.push('/movie-detail-page')
        }
    },
    actions: {
        async fetchList({ commit }, payload) {
            const { searchWord, pageNum } = payload
            const list = await fetch(`${API_END_POINT}?apikey=${API_KEY}&s=${searchWord}&page=${pageNum}`)
            .then(res => res.json())

            await commit('updateMovieList', { 
                list, 
                searchWord 
            })
        },
        async fetchMovie({ commit }, imdbID) {
            const movie = await fetch(`${API_END_POINT}?apikey=${API_KEY}&i=${imdbID}&plot=full`)
            .then(res => res.json())
            commit('updateSelectedMovie', movie)
        },
        isLike(context, id) {
            if (context.state.likeMovieList.length === 0) {
                return false
            }
            return context.state.likeMovieList.filter(movie => movie.imdbID === id).length
        }
    }
})