import Vue from 'vue'
import Vuex from 'vuex'

// Plug in Vuex
Vue.use(Vuex)

const state = {
  qwest: {}
}

export const getters = {
  qwest (state) {
    return state.qwest
  }
}

export const mutations = {
  storeQwest (state, payload) {
    state.qwest = payload
  },
  clearQwest (state) {
    state.qwest = {}
  }
}

export const actions = {
  storeQwest ({ commit }, payload) {
    // Commit the corresponding mutation
    commit('storeQwest', payload)
  },
  clearQwest ({ commit }) {
    // Commit the corresponding mutation
    commit('clearQwest')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
