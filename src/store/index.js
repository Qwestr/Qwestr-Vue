import _ from 'lodash'
import firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'

// Plug in Vuex
Vue.use(Vuex)

const state = {
  user: {},
  fab: {},
  qwest: {}
}

export const getters = {
  user (state) {
    return state.user
  },
  isUserLoaded (state) {
    return !_.isEmpty(state.user)
  },
  fab (state) {
    return state.fab
  },
  isFABLoaded (state) {
    return !_.isEmpty(state.fab)
  },
  qwest (state) {
    return state.qwest
  },
  isQwestLoaded (state) {
    return !_.isEmpty(state.qwest)
  }
}

export const mutations = {
  storeUser (state, payload) {
    state.user = payload
  },
  clearUser (state) {
    state.user = {}
  },
  storeFAB (state, payload) {
    state.fab = payload
  },
  clearFAB (state) {
    state.fab = {}
  },
  storeQwest (state, payload) {
    state.qwest = payload
  },
  clearQwest (state) {
    state.qwest = {}
  },
  clearAll (state) {
    state.user = {}
    state.fab = {}
    state.qwest = {}
  }
}

export const actions = {
  async signup ({ commit }, payload) {
    // Sign up user on Firebase
    const user = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    // Update user
    await user.updateProfile({ displayName: payload.displayName })
    // Commit the storeUser mutation
    commit('storeUser', user)
  },
  async login ({ commit }, payload) {
    // Sign in user on Firebase
    const user = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    // Commit the storeUser mutation
    commit('storeUser', user)
  },
  logout ({ commit }) {
    // Logout user on Firebase
    firebase.auth().signOut()
    // Commit the clearAll mutation
    commit('clearAll')
  },
  storeUser ({ commit }, payload) {
    // Commit the corresponding mutation
    commit('storeUser', payload)
  },
  storeFAB ({ commit }, payload) {
    // Commit the corresponding mutation
    commit('storeFAB', payload)
  },
  clearFAB ({ commit }) {
    // Commit the corresponding mutation
    commit('clearFAB')
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
