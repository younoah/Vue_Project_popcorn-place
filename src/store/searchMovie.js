import router from '~/routes'

export default {
  namespaced: true,
  state() {
    return {
      movieLists: [],
      maxPage: 0,
      movieDetails: {},
      isLoading: false,
      isInitialize: false,
      userTyping: '',
      currentPage: 0,
    }
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async readMovieLists({ state, commit }, payload) {
      if (!state.isInitialize) {
        let isInitialize = true
        commit('assignState', { isInitialize })
      }
      let isLoading = true
      commit('assignState', { isLoading })
      
      const { s, page = '' } = payload
      const movieLists = await _request({
        method: 'GET',
        option: `&s=${s}&page=${page}`
      })

      const maxPage = Math.ceil(parseInt(movieLists.totalResults, 10) / 10)
      const userTyping = s
      const currentPage = page
      commit('assignState', { movieLists, maxPage, userTyping, currentPage })
      
      if (movieLists.Response === 'True') {
        router.push({
          name: 'Movies',
          query: {
            search: s.trim(),
            page: page
          }
        })
      } else {
        router.push('/nothing', {
          params: {
            usertyping: s
          }
        })
      }
      
      isLoading = false
      commit('assignState', { isLoading })
    },
    async readMovieDetails({ commit }, payload) {
      let isLoading = true
      commit('assignState', { isLoading })
      const { i } = payload
      const movieDetails = await _request({
        method: 'GET',
        option: `&i=${i}&plot=full`
      })

      isLoading = false
      commit('assignState', { movieDetails, isLoading })
    },
    backToHome({ commit }) {
      const isInitialize = false
      commit('assignState', { isInitialize })
    }
  }
}

async function _request(options) {
  return fetch('/.netlify/functions/movieFinder', {
    method: 'POST',
    body: JSON.stringify(options)
  }).then(res => res.json())
}