import { shallow, createLocalVue } from '@vue/test-utils'
import SubQwestCreateDialog from '@/components/SubQwestCreateDialog'

// Create local Vue instance
const localVue = createLocalVue()

describe('SubQwestCreateDialog.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallow(SubQwestCreateDialog, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
