export default {
  namespaced: true,
  state() {
    return {
      movies: [],
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },

  actions: {
    async searchMovies({ commit }, payload) {
      const { searchWord, page } = payload;
      try {
        const { Search } = await _request({ searchWord, page });
        commit('assignState', {
          movies: Search,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};

const OMDB_API_KEY = '7035c60c';
const API_END_POINT = 'https://www.omdbapi.com';
async function _request(options) {
  const { searchWord = '', page = 1 } = options;
  return await fetch(
    `${API_END_POINT}?apikey=${OMDB_API_KEY}&s=${searchWord}&page=${page}`
  ).then((res) => res.json());
}
