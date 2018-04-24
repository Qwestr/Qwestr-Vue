import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'

// Plug in Vuex
Vue.use(Vuex)

const state = {
  user: {},
  qwest: {}
}

export const getters = {
  user (state) {
    return state.user
  },
  isUserLoaded (state) {
    return !_.isEmpty(state.user)
  },
  qwest (state) {
    return state.qwest
  }
}

export const mutations = {
  storeUser (state, payload) {
    state.user = payload
  },
  clearUser (state) {
    state.user = {}
  },
  storeQwest (state, payload) {
    state.qwest = payload
  },
  clearQwest (state) {
    state.qwest = {}
  }
}

export const actions = {
  signup ({ commit }, payload) {
    // Commit the corresponding mutation
    commit('storeUser', payload)
  },
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
