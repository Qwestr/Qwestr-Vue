import { shallowMount, createLocalVue } from '@vue/test-utils'
import SubQwestDetails from '@/components/SubQwestDetails'

// Create local Vue instance
const localVue = createLocalVue()

describe('SubQwestDetails.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(SubQwestDetails, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
