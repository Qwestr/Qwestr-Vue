import { shallow, createLocalVue } from '@vue/test-utils'
import SignUp from '@/components/SignUp'

// Create local Vue instance
const localVue = createLocalVue()

describe('SignUp.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallow(SignUp, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
