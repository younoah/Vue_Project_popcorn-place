export default {
  namespaced: true,
  state() {
    return {
      message: 'Hello Vue!',
      cnt: 1,
    };
  },
  getters: {
    reversedMessage(state) {
      return state.message.split('').reverse().join('');
    },
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async fetchTodo({ commit }) {
      const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1') //
        .then(res => res.json());
      commit('assignState', {
        message: todo.title,
      });
    },
  },
};
