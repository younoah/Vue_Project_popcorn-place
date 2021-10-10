export default {
  namespaced: true,
  state() {
    return {
      searchResults: []
    }
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async searchList({commit }) {
      const searchResults = await fetch('', {
        method: 'GET'
      }).then(res => res.json())
      console.log(searchResults)
      commit('assignState', {
        searchResults
      })
    },
    searchInfo() {

    }
  },
}
