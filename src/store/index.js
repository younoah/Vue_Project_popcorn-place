import { createStore } from 'vuex';
import { API } from '~/api';

export default createStore({
  state: () => {
    return {
      movies: [],
      currentMovie: {},
      isShowModal: false,
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
      const movies = result.Search;
      commit('assignState', {
        movies,
      });
      console.log('결과', state.movies);
    },
    async getMovieDetail({ commit }, id) {
      const currentMovie = await API.getMovieDetail(id);
      commit('assignState', {
        currentMovie,
      });
    },
  },
});
