import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('Hello.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm).to.equal(true)
  })
})
