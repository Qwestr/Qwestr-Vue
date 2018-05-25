import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import QwestList from '@/components/QwestList'

// Create local Vue instance
const localVue = createLocalVue()

describe('QwestList.vue', () => {
  // Declare mock store values
  let store, actions

  beforeEach(() => {
    // Initialize mock actions
    actions = {
      'storeFAB': jest.fn()
    }
    // Initialize mock store
    store = new Vuex.Store({ actions })
  })

  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(QwestList, { localVue, store })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
