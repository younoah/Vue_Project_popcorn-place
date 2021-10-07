export default {
  namespaced: true,
  state() {
    return {
      movieList: [],
      movieDetail: '',
    }
  },
  mutations: {
    movieListState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },
    movieDetailState(state, { getDetail }) {
      // 선택 요구사항 높은 해상도 사용
      if (getDetail){
        console.log(getDetail.Poster)
        getDetail.Poster = getDetail.Poster.replace('SX300', 'SX500')
      }
      state.movieDetail = getDetail
    },
  },
  actions: {
    async getMovie({ commit }, { title, cnt }) {
      const getMovie = await fetch(
        `https://www.omdbapi.com?apikey=${VUE_APP_API_KEY}&s=${title}&page=${cnt}`
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
