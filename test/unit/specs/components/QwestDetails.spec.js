import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import QwestDetails from '@/components/QwestDetails'

// Create local Vue instance
const localVue = createLocalVue()

describe('QwestDetails.vue', () => {
  // Declare mock store values
  let store, getters, actions
  // Create mock $route
  const $route = {
    params: {
      key: 'qwest-key'
    }
  }

  beforeEach(() => {
    // Initialize mock getters
    getters = {
      'qwestDetailsEditMode': jest.fn(() => {
        return true
      })
    }
    // Initialize mock actions
    actions = {
      'storeFAB': jest.fn()
    }
    // Initialize mock store
    store = new Vuex.Store({ getters, actions })
  })

  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(QwestDetails, { localVue, store, mocks: { $route } })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
