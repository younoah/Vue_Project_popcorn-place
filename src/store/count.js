export default {
  namespaced: true,
  state: () => {
    return {
      count: 1,
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
    increaseCount(state) {
      state.count += 1;
    },
    decreaseCount(state) {
      state.count -= 1;
    },
  },
  actions: {},
};
