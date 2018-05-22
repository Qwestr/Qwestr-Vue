import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import App from '@/App'

// Create local Vue instance
const localVue = createLocalVue()
// Load Vuex into local Vue instance
localVue.use(Vuex)

describe('App.vue', () => {
  // Declare mock store values
  let store, actions

  beforeEach(() => {
    // Initialize mock actions
    actions = {
      'initialize': jest.fn()
    }
    // Initialize mock store
    store = new Vuex.Store({ actions })
  })

  it('should call the correct actions when created', () => {
    // Mount the component
    shallow(App, { localVue, store })
    // Expect that the correct actions were called
    expect(actions['initialize']).toHaveBeenCalled()
  })
})
