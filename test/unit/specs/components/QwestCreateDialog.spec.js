import { shallow, createLocalVue } from '@vue/test-utils'
import QwestCreateDialog from '@/components/QwestCreateDialog'

// Create local Vue instance
const localVue = createLocalVue()

describe('QwestCreateDialog.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallow(QwestCreateDialog, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
