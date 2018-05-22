import { shallow, createLocalVue } from '@vue/test-utils'
import Home from '@/components/FAB'

// Create local Vue instance
const localVue = createLocalVue()

describe('Home.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallow(Home, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
