import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import QwestDetails from '@/components/QwestDetails'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  }, {
    path: '/qwest/:key/details',
    name: 'qwest-details',
    component: QwestDetails
  }]
})
