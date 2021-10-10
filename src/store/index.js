import { createStore } from 'vuex';
import { fetchItems } from '/functions/fetchItems';

export default createStore({
  state() {
    return {
      userInput: '',
      keyword: '',
      pageNumber: 0,
      results: [],
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

      await commit('changeLoadingStatus');
      await commit('increasePageNumber');

      const { Search } = await fetchItems(state.keyword, state.pageNumber);

      await commit('changeLoadingStatus');

      if (!Search) {
        return;
      }

      await commit('initState');
      await commit('updateResults', Search);
    }
  }
});
