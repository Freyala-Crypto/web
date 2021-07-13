import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  namespaced: true,

  state: {
    price: 0,
    tokenSupply: 0,
    currentSupply: 0,
  },

  getters: {
    price(state) {
      return state.price
    },
    tokenSupply(state) {
      return state.tokenSupply
    },
    currentSupply(state) {
      return state.currentSupply
    }
  },

  mutations: {
    SET_PRICE(state, data) {
      state.price = data
    },
    SET_TOKEN_SUPPLY(state, data) {
      state.tokenSupply = data
    },
    SET_CURRENT_SUPPLY(state, data) {
      state.currentSupply = data
    },
  },

  actions: {
  },

  plugins: [vuexLocal.plugin],
});
