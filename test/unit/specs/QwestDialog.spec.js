import Vue from 'vue'
import QwestDialog from '@/components/QwestDialog'

describe('Hello.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(QwestDialog)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
