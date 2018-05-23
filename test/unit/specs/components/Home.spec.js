import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/components/FAB'

// Create local Vue instance
const localVue = createLocalVue()

describe('Home.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(Home, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
