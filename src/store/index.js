import { createStore } from 'vuex';
import { fetchItems } from '/functions/fetchItems';
import { fetchDetails } from '/functions/fetchDetails';
import router from '~/routes';

export default createStore({
  state() {
    return {
      userInput: '',
      keyword: '',
      pageNumber: 0,
      results: [],
      selectedMovieId: '',
      selectedMovieDetails: {},
      modalStatus: false,
      isLoading: false
    };
  },
  getters: {},
  mutations: {
    initState(state) {
      state.pageNumber = 0;
      state.results = [];
    },
    saveUserInput(state, newInput) {
      state.userInput = newInput;
    },
    saveKeyword(state) {
      state.keyword = state.userInput;
    },
    updateResults(state, newResults) {
      state.results = [...state.results, ...newResults];
    },
    increasePageNumber(state) {
      state.pageNumber++;
    },
    saveSelectedMovieId(state, newSelectedMovieId) {
      state.selectedMovieId = newSelectedMovieId;
    },
    saveSelectedMovieDetails(state, newSelectedMovieDetails) {
      state.selectedMovieDetails = newSelectedMovieDetails;
    },
    changeModalStatus(state) {
      state.modalStatus = !state.modalStatus;
    },
    changeLoadingStatus(state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
    async fetchSearchResults({ commit, state }) {
      await commit('saveKeyword');

      if (state.keyword.length < 3) {
        alert('Please enter at least three letters.');
        return;
      }

      router.push({
        name: 'SearchResults',
        params: {
          keyword: state.keyword
        }
      });

      await commit('initState');
      await commit('changeLoadingStatus');
      await commit('increasePageNumber');

      const { Search } = await fetchItems(state.keyword, state.pageNumber);

      await commit('changeLoadingStatus');

      if (!Search) {
        return;
      }

      await commit('updateResults', Search);
    },
    async fetchNextSearchResults({ commit, state }) {
      await commit('changeLoadingStatus');
      await commit('increasePageNumber');

      const { Search } = await fetchItems(state.keyword, state.pageNumber);

      if (!Search) {
        alert('마지막 항목입니다.');
        return;
      }

      await commit('updateResults', Search);
      await commit('changeLoadingStatus');
    },
    async fetchSelectedMovieDetails({ commit, state }) {
      const selectedMovieDetails = await fetchDetails(state.selectedMovieId);
      commit('saveSelectedMovieDetails', selectedMovieDetails);
    }
  }
});
