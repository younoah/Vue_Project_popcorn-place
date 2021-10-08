export default {
  namespaced: true,
  state() {
    return {
      isLoading: true,
      searchWord: '',
      movies: [],
      page: 0,
      info: {},
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    initPage(state) {
      state.page = 1;
    },
    increasePage(state) {
      state.page++;
    },
    startLoading(state) {
      state.isLoading = true;
      console.log(state.isLoading);
    },
    endLoading(state) {
      state.isLoading = false;
      console.log(state.isLoading);
    },
  },

  actions: {
    async searchMovies({ commit, state }, payload) {
      commit('startLoading');
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
      commit('endLoading');
    },

    async getMovieInfo({ commit }, payload) {
      commit('startLoading');
      const { id, plot } = payload;
      try {
        const info = await _request({ id, plot });
        commit('assignState', {
          info,
        });
        console.log(info);
      } catch (error) {
        console.error(error);
      }
      commit('endLoading');
    },
  },
};

const OMDB_API_KEY = '7035c60c';
const API_END_POINT = 'https://www.omdbapi.com';
async function _request(options) {
  const hasSearchWord = Object.keys(options).includes('searchWord');
  if (hasSearchWord) {
    const { searchWord = '', page = 0 } = options;
    return await fetch(
      `${API_END_POINT}?apikey=${OMDB_API_KEY}&s=${searchWord}&page=${page}`
    ).then((res) => res.json());
  } else {
    const { id = '', plot = 'full' } = options;
    return await fetch(
      `${API_END_POINT}?apikey=${OMDB_API_KEY}&i=${id}&plot=${plot}`
    ).then((res) => res.json());
  }
}
