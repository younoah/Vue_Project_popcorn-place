export default {
  namespaced: true,
  state() {
    return {
      searchWord: '',
      movies: [],
      page: 0,
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });

      console.log(state);
    },
    initPage(state) {
      state.page = 1;
      console.log(state);
    },
    increasePage(state) {
      state.page++;
      console.log(state);
    },
  },

  actions: {
    async searchMovies({ commit, state }, payload) {
      const { searchWord, page } = payload;
      try {
        const { Search } = await _request({ searchWord, page });
        commit('assignState', {
          searchWord,
          movies:
            searchWord === state.searchWord
              ? [...state.movies, ...Search]
              : Search,
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
  const { searchWord = '', page = 0 } = options;
  return await fetch(
    `${API_END_POINT}?apikey=${OMDB_API_KEY}&s=${searchWord}&page=${page}`
  ).then((res) => res.json());
}
