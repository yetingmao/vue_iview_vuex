import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalInfo: {
      uid: '',
      username: '',
    },
  },
  mutations: {
    setUserId(state, uid) {
      state.globalInfo.uid = uid;
    },
    setUserName(state, username) {
      state.globalInfo.username = username;
    },
  },
  actions: {
  },
  modules: {
  },
});
