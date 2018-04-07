import Vue from 'vue'
import Qwest from '@/components/Qwest'

describe('Hello.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(Qwest)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
