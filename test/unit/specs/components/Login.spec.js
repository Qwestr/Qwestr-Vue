import Vue from 'vue'
import Login from '@/components/Login'

describe('Login.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
