import request from '@/util/request';

export default {
  namespaced: true,
  state() {
    return {
      isLoading: false,
      movieList: [],
      searchedTitle: '',
      errorMessage: '',
      details: {},
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.entries(payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
  },
  actions: {
    async getMovies({ state, commit }, { title = '' }) {
      try {
        if (!title || state.isLoading) return;
        commit('assignState', {
          isLoading: true,
        });
        const res = await request.get(
          `?apikey=${process.env.API_KEY}&s=${title}&page=10`,
        );
        commit('assignState', {
          movieList:
            res.data.Search?.sort(
              (a, b) => b.Year - a.Year,
            ) ?? [],
          searchedTitle: title,
          errorMessage: res.data.Error ?? '',
        });
      } catch (e) {
        console.log(e);
        commit('assignState', {
          searchedTitle: title,
          errorMessage:
            '죄송합니다! 서버에서 오류가 발생 중이에요! 😂',
          movieList: [],
        });
      } finally {
        commit('assignState', {
          isLoading: false,
        });
      }
    },
    async getMovieDetailsById(
      { state, commit },
      { id = '' },
    ) {
      try {
        if (!id || state.isLoading) return;
        commit('assignState', {
          isLoading: true,
        });
        const res = await request.get(
          `http://www.omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`,
        );
        if (res.data.Error) {
          alert(
            '오류가 발생했어요!\n다시 한 번 시도해주시겠어요?',
          );
          return;
        }
        commit('assignState', {
          details: res.data,
        });
      } catch (e) {
        alert(
          '죄송합니다! 서버에서 오류가 발생 중이에요! 😂',
        );
      } finally {
        commit('assignState', {
          isLoading: false,
        });
      }
    },
  },
};
