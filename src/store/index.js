import { createStore } from 'vuex';

export default createStore({
  state: {
    loged: false
  },
  getters: {
    loged: state => state.loged
  },
  mutations: {
    login: (state) => {state.loged = true},
    logof: (state) => {state.loged = false}
  },
  actions: {
  },
  modules: {
  },
});
