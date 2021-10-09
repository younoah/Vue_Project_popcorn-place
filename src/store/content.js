export default {
  namespaced: true,
  state() {
    return {
      contents: null,
      currentContent: {},
      isShowModal: false
    };
  },
  getters: {
    highQualityPoster: state => {
      if(!state.currentContent.Poster) return;
      return state.currentContent.Poster.replace('SX300', 'SX700');
    }
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
      console.log(state);
    },
    toggleModalState(state) {
      state.isShowModal = !state.isShowModal;
    }
  },
  actions: {
    async searchContents({ commit }, payload = {}) {
      let contents = await fetch('/.netlify/functions/requestContents', {
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(res => res.json());
      contents = contents.Search;
      commit('assignState', {
        contents
      });
    }, 
    async readContentDetail({ commit }, payload = {}) {
      const currentContent = await fetch('/.netlify/functions/requestDetail', {
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(res => res.json());
      await commit('assignState', {
        currentContent
      });
    },
    
  }
};