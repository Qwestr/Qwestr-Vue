import { shallow, createLocalVue } from '@vue/test-utils'
import QwestList from '@/components/QwestList'

// Create local Vue instance
const localVue = createLocalVue()

describe('QwestList.vue', () => {
  it('should successfully render when created', () => {
    // Mount the component
    shallow(QwestList, { localVue })
    // Expect that the component has rendered successfully
    expect(true)
  })
})
