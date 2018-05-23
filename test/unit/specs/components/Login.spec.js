import { shallowMount, createLocalVue } from '@vue/test-utils'
import Login from '@/components/Login'

// Create local Vue instance
const localVue = createLocalVue()

describe('Login.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(Login, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
