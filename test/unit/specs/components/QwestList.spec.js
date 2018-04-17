import Vue from 'vue'
import QwestList from '@/components/QwestList'

describe('Hello.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(QwestList)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
