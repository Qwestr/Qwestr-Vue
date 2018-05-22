import Vue from 'vue'
import SignUp from '@/components/SignUp'

describe('SignUp.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(SignUp)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
