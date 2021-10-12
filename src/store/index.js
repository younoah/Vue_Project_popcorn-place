import { createStore } from 'vuex';
import { API } from '~/api';

export default createStore({
  state: () => {
    return {
      keyword: '',
      movies: [],
      currentMovie: {},
      isShowModal: false,
      isLoading: false,
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async getMovies({ state, commit }, payload) {
      const { keyword, pageNumber = 1 } = payload;
      const result = await API.getMovies(keyword, pageNumber);
      if (!result.Search) {
        commit('assignState', {
          movies: [],
          keyword,
        });
      } else {
        const movies = result.Search;
        commit('assignState', {
          movies,
          keyword,
        });
      }
      console.log('결과', state.movies);
    },
    async getMoreMovies({ state, commit }, payload) {
      const { keyword, pageNumber = 1 } = payload;
      const result = await API.getMovies(keyword, pageNumber);
      const movies = result.Search;
      commit('assignState', {
        movies: [...state.movies, ...movies],
        keyword,
      });
    },
    async getMovieDetail({ state, commit }, id) {
      console.log('getMovieDetail!');
      const currentMovie = await API.getMovieDetail(id);
      commit('assignState', {
        currentMovie,
      });
      console.log('결과', state.movies);
    },
  },
});
