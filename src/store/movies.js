export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      isInit: true,
      keyword: '',
      suggestKeywords: ['moonlight', 'hidden', 'd\'Amélie', 'harold', 'vertigo', 'billboards', 'daniel', 'arrival', 'ghostbusters', 'spy', 'lady', 'killing', 'you were', 'roma', 'favourite', 'high life', 'the half']
    }
  },
  getters: {
    initKeyword(state) {
      return state.suggestKeywords[Math.floor(Math.random() * state.suggestKeywords.length)]
    }
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    changeKeyword(state, newKeyword) {
      state.keyword = newKeyword
    },
    offInitState(state) {
      state.isInit = false
    }
  },
  actions: {
    async searchMovies({ state, commit }, payload) {
      const { Search } = await _request(payload ? payload : state.keyword)

      commit('assignState', {
        movies: Search
      })
    },
  }
}

async function _request(keyword) {
  try {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${API_ENDPOINT}&s=${keyword}&page=1`)

    if (!res.ok) {
      throw new Error('API 호출 에러')
    }

    return await res.json()
  } catch (e) {
    console.log(e.message)
  }
}
