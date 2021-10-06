import { createStore } from 'vuex'
import fetchApi from './fetchApi'

export default createStore({
  modules: { fetchApi },
})
