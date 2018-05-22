import { shallow, createLocalVue } from '@vue/test-utils'
import QwestEditDialog from '@/components/QwestEditDialog'

// Create local Vue instance
const localVue = createLocalVue()

describe('QwestEditDialog.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallow(QwestEditDialog, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
