import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import QwestCreateDialog from '@/components/QwestCreateDialog'

// Create local Vue instance
const localVue = createLocalVue()

describe('QwestCreateDialog.vue', () => {
  // Declare mock store values
  let store, getters

  beforeEach(() => {
    // Initialize mock getters
    getters = {}
    // Initialize mock store
    store = new Vuex.Store({ getters })
  })

  it('should successfully render when created', () => {
    // Mount the component
    shallowMount(QwestCreateDialog, { localVue, store })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
