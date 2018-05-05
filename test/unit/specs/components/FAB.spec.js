import Vue from 'vue'
import FAB from '@/components/FAB'

describe('FAB.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(FAB)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
