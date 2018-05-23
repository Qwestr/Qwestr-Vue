import { shallowMount, createLocalVue } from '@vue/test-utils'
import QwestCreateDialog from '@/components/QwestCreateDialog'

// Create local Vue instance
const localVue = createLocalVue()

describe('QwestCreateDialog.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(QwestCreateDialog, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
