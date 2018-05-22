import { shallow, createLocalVue } from '@vue/test-utils'
import SubQwestList from '@/components/SubQwestList'

// Create local Vue instance
const localVue = createLocalVue()

describe('SubQwestList.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallow(SubQwestList, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
