import Vue from 'vue'
import Qwest from '@/components/Qwest'

describe('Hello.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(Qwest)
    const vm = new Constructor().$mount()
    // console.log('vm', vm)
    // expect(vm).to.be(true)
    // expect(vm).toBeTruthy()
    expect(vm.$el).to.equal(true)
  })
})
