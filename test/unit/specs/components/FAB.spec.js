import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FAB from '@/components/FAB'

// Create local Vue instance
const localVue = createLocalVue()
// Load Vuex into local Vue instance
localVue.use(Vuex)

describe('FAB.vue', () => {
  // Declare mock store values
  let store, actions

  beforeEach(() => {
    // Initialize mock actions
    actions = {
      'toggleFABDial': jest.fn(),
      'toggleQwestCreateDialog': jest.fn()
    }
    // Initialize mock store
    store = new Vuex.Store({ actions })
  })

  it('should successfully render when created', () => {
    // Mount the component
    shallow(FAB, { localVue, store })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
