// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import firebaseConfig from '../config/firebase/config'

// Setup Vue plugins
Vue.use(VueFire)
Vue.use(Vuetify)

// Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig)
let db = app.database()

// Setup Firebase refs
let qwestsRef = db.ref('qwests')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    qwests: qwestsRef
  },
  router,
  components: { App },
  template: '<App/>'
})
