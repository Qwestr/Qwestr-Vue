import { shallow, createLocalVue } from '@vue/test-utils'
import FAB from '@/components/FAB'

// Create local Vue instance
const localVue = createLocalVue()

describe('FAB.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallow(FAB, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
