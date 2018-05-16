import Vue from 'vue'
import SubQwestEditDialog from '@/components/SubQwestEditDialog'

describe('SubQwestEditDialog.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(SubQwestEditDialog)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
