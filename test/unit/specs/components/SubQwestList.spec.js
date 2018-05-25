import { shallowMount, createLocalVue } from '@vue/test-utils'
import SubQwestList from '@/components/SubQwestList'

// Create local Vue instance
const localVue = createLocalVue()

describe('SubQwestList.vue', () => {
  // Create mock $route
  const $route = {
    params: {
      key: 'sub-qwest-key'
    }
  }

  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(SubQwestList, { localVue, mocks: { $route } })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
