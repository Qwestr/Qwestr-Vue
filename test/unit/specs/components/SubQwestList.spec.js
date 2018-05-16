import Vue from 'vue'
import SubQwestList from '@/components/SubQwestList'

describe('SubQwestList.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(SubQwestList)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
