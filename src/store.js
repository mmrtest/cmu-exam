import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "user1",
    password: "menbe9VhvUMCFIuUakAC",
  },
  mutations: {},
  actions: {
    setUsername(state, payload) {
      state.username = payload;
    },
    setPassword(state, payload) {
      state.password = payload;
    },
  },
  getters: {
    username(state) {
      return state.username;
    },
    password(state) {
      return state.password;
    },
  },
});
