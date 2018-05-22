/* eslint-disable no-new */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

// Setup Vue plugins
Vue.use(VueFire)
Vue.use(Vuetify)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Dispatch the storeUser action
    store.dispatch('storeUser', user)
  }
  // Load main VueJS component
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})
