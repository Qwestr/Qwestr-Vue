import Vue from 'vue'
import SubQwestDetails from '@/components/SubQwestDetails'

describe('SubQwestDetails.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(SubQwestDetails)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
