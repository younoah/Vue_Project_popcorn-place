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
      if (payload.movieList) {
        const newlist = payload.movieList
        state.movieList = [...state.movieList, ...newlist]
      } else {
        state.movieList = []
      }
    },
    initMovieList(state) {
      state.movieList = []
    },
    movieDetailState(state, { getDetail }) {
      // 선택 요구사항 높은 해상도 사용
      if (getDetail) {
        getDetail.Poster = getDetail.Poster.replace('SX300', 'SX500')
      }
      state.movieDetail = getDetail
    },
  },
  actions: {
    async getMovie({ commit }, options) {
      if (options.title) {
        const getMovie = await fetch('/.netlify/functions/getMovie', {
          method: 'POST',
          body: JSON.stringify(options),
        }).then((res) => res.json())

        const movieList = getMovie.Search
        commit('movieListState', {
          movieList,
        })
      }
    },

    async getDetail({ commit }, options) {
      options = { id: options }
      const getDetail = await fetch('/.netlify/functions/getDetail', {
        method: 'POST',
        body: JSON.stringify(options),
      }).then((res) => res.json())

      commit('movieDetailState', {
        getDetail,
      })
    },
  },
}
