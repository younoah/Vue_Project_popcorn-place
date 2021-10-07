export default {
  namespaced: true,
  state() {
    return {
      movieList: [],
      movieDetail: ''
    }
  },
  getters: {},
  mutations: {
    movieListState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },
    movieDetailState(state, payload){
      console.log(payload)
      state.movieDetail = payload.getDetail
    }
  },
  actions: {
    async getMovie({ commit }, title = '') {
      const getMovie = await fetch(
        `https://www.omdbapi.com?apikey=${VUE_APP_API_KEY}&s=${title}&page=3`
      ).then((res) => res.json())

      const movieList = getMovie.Search
      commit('movieListState', {
        movieList,
      })
    },

    async getDetail({ commit }, id = '') {
      const getDetail = await fetch(
        `https://www.omdbapi.com?apikey=${VUE_APP_API_KEY}&i=${id}&plot=full`
      ).then((res) => res.json())

      commit('movieDetailState', {
        getDetail,
      })
    },
  },
}
