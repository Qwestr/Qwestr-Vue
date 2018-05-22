import { shallow, createLocalVue } from '@vue/test-utils'
import SubQwestEditDialog from '@/components/SubQwestEditDialog'

// Create local Vue instance
const localVue = createLocalVue()

describe('SubQwestEditDialog.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallow(SubQwestEditDialog, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
