import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
