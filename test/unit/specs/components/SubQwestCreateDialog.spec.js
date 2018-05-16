import Vue from 'vue'
import SubQwestCreateDialog from '@/components/SubQwestCreateDialog'

describe('SubQwestCreateDialog.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(SubQwestCreateDialog)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
