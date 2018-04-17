import Vue from 'vue'
import QwestEditDialog from '@/components/QwestEditDialog'

describe('QwestEditDialog.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(QwestEditDialog)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
