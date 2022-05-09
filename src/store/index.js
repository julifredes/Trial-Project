import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toaster: {
      show: false,
      message: "",
    },
  },
  mutations: {
    setShowToaster(state, payload) {
      state.toaster = payload;
    },
  },
  actions: {
    showToaster: ({ commit }, message) => {
      commit("setShowToaster", { show: true, message });
      setTimeout(() => {
        commit("setShowToaster", {
          show: false,
          message: "",
        });
      }, 6000);
    },
    hiddeToaster: ({ commit }) => {
      commit("setShowToaster", { show: false, message: null });
    },
  },
});
