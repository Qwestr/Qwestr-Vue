import {
  userQwestsRef
  // userQwestRef,
  // userSubQwestsRef,
  // userSubQwestRef
} from '@/firebase'

describe('index.js', () => {
  describe('userQwestsRef', () => {
    it('should return the correct result', () => {
      // Expect that the method returns the correct result
      expect(userQwestsRef()).toEqual(true)
    })
  })
})
