import { createStore } from 'vuex';
import message from './message';
import count from './count';
import user from './user';

export default createStore({
  modules: {
    message,
    count,
    user,
  },
});
