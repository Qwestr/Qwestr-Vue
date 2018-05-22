import Vue from 'vue'
import QwestDetails from '@/components/QwestDetails'

describe('QwestDetails.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(QwestDetails)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
