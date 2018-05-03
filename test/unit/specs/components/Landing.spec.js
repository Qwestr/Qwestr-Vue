import Vue from 'vue'
import Landing from '@/components/Landing'

describe('Landing.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(Landing)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
