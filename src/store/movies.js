export default {
  namespaced: true,
  state() {
    return {
      movies: []
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
    async searchMovies({ commit }) {
      const { Search } = await _request()

      commit('assignState', {
        movies: Search
      })
    },
  }
}

async function _request(url) {
  try {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${API_ENDPOINT}${url}`)

    if (!res.ok) {
      throw new Error('API 호출 에러')
    }

    return await res.json()
  } catch (e) {
    console.log(e.message)
  }
}
