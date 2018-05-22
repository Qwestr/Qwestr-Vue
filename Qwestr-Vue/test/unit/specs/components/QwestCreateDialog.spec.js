import Vue from 'vue'
import QwestCreateDialog from '@/components/QwestCreateDialog'

describe('QwestCreateDialog.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(QwestCreateDialog)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
