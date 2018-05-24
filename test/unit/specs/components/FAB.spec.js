import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FAB from '@/components/FAB'

// Create local Vue instance
const localVue = createLocalVue()

describe('FAB.vue', () => {
  // Declare mock store values
  let store, getters, actions

  beforeEach(() => {
    // Initialize mock getters
    getters = {
      'fab': jest.fn(() => {
        return {}
      })
    }
    // Initialize mock actions
    actions = {
      'toggleFABDial': jest.fn(),
      'toggleQwestCreateDialog': jest.fn()
    }
    // Initialize mock store
    store = new Vuex.Store({ getters, actions })
  })

  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(FAB, { localVue, store })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
