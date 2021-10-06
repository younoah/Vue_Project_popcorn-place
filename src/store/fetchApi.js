export default {
  namespaced: true,
  state() {
    return {
      movieList: [],
    }
  },
  getters: {},
  mutations: {
    assignState(state, payload){
      console.log(payload)
      Object.keys(payload).forEach(key=>{
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async getMovie({commit}) {
      const getMovie = await fetch(
        'https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3'
      ).then((res) => res.json())

      const movieList = getMovie.Search
      commit('assignState', {
        movieList,
      })
    },
  },
}