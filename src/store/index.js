import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const vue = new Vue();

export default new Vuex.Store({
  state: {
    jogos: {},
    dados: {
      pontos: 0,
      triunfos: 0,
      empates: 0,
      metaTotal: 63,
      meta: 9
    }
  },
  mutations: {
    SET_JOGOS(state, payload) {
      state.jogos = payload;
    },
    SET_PONTOS(state, payload) {
      state.dados.pontos = payload;
    },
    SET_TRIUNFOS(state, payload) {
      state.dados.triunfos = payload;
    },
    SET_EMPATES(state, payload) {
      state.dados.empates = payload;
    }
  },
  actions: {
    async getJogos() {
      let response = await vue.$api.get('/teams/1777/matches', {});
      return response.data;
    },
    setJogos({ commit }, dados) {
      commit('SET_JOGOS', dados);
    },
    setPontos({ commit, state }, pontos) {
      let _pontos = state.dados.pontos + pontos;
      commit('SET_PONTOS', _pontos);
    },
    setTriunfos({ commit, state }, triunfos) {
      let _triunfos = state.dados.triunfos + triunfos;
      commit('SET_TRIUNFOS', _triunfos);
    },
    setEmpates({ commit, state }, empates) {
      let _empates = state.dados.empates + empates;
      commit('SET_EMPATES', _empates);
    }
  },
  getters: {
    jogos(state) {
      return state.jogos;
    },
    dados(state) {
      return state.dados;
    }
  }
});
