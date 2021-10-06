export default {
  namespaced: true,
  state() {
    return {
      movieList: [],
    }
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },
  },
  actions: {
    async getMovie({ commit }, title = '') {
      
      const getMovie = await fetch(
        `https://www.omdbapi.com?apikey=${VUE_APP_API_KEY}&s=${title}&page=3`
      ).then((res) => res.json())

      const movieList = getMovie.Search
      commit('assignState', {
        movieList,
      })
    },
  },
}
