import { shallowMount } from '@vue/test-utils'
import Landing from '@/components/Landing'

describe('Landing.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(Landing)
    // Expect that the component has rendered successfully
    expect(true)
  })
})
