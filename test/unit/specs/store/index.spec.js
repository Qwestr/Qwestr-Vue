import { getters, actions, mutations } from '@/store'

describe('index.js', () => {
  describe('getters', () => {
    describe('user', () => {
      it('should return the correct value when called', () => {
        // Setup the state
        let state = {
          user: {
            id: 'user-id'
          }
        }
        // Expect that the getter will return the correct value
        expect(getters.user(state)).toEqual({
          id: 'user-id'
        })
      })
    })

    describe('isUserLoaded', () => {
      it('should return false when a user is not loaded into state', () => {
        // Setup the state
        let state = {
          user: {}
        }
        // Expect that the getter will return the correct value
        expect(getters.isUserLoaded(state)).toEqual(false)
      })

      it('should return true when a user is loaded into state', () => {
        // Setup the state
        let state = {
          user: {
            id: 'user-id'
          }
        }
        // Expect that the getter will return the correct value
        expect(getters.isUserLoaded(state)).toEqual(true)
      })
    })
  })

  describe('mutations', () => {
    describe('storeUser', () => {
      it('should mutate the state when called', () => {
        // Setup the state
        let state = {
          user: {}
        }
        // Call the mutation
        mutations.storeUser(state, {
          id: 'user-id'
        })
        // Expect that the state will change accordingly
        expect(state.user).toEqual({
          id: 'user-id'
        })
      })
    })
  })

  describe('actions', () => {
    describe('storeUser', () => {
      // Declare/ initialize mock store values
      let mockedMutations = {
        'storeUser': jest.fn()
      }

      it('should call the correct mutations when called', () => {
        // Call the action
        actions.storeUser({
          commit (mutation, payload) {
            mockedMutations[mutation](payload)
          }
        })
        // Expect the correct mutations were called
        expect(mockedMutations['storeUser']).toHaveBeenCalled()
      })
    })
  })
})
