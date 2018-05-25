import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SubQwestCreateDialog from '@/components/SubQwestCreateDialog'

// Create local Vue instance
const localVue = createLocalVue()

describe('SubQwestCreateDialog.vue', () => {
  // Declare mock store values
  let store, getters
  // Create mock $route
  const $route = {
    params: {
      key: 'sub-qwest-key'
    }
  }

  beforeEach(() => {
    // Initialize mock getters
    getters = {}
    // Initialize mock store
    store = new Vuex.Store({ getters })
  })

  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(SubQwestCreateDialog, { localVue, store, mocks: { $route } })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
