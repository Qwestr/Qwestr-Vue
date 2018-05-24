import _ from 'lodash'
import {
  userQwestsRef
  // userQwestRef,
  // userSubQwestsRef,
  // userSubQwestRef
} from '@/firebase'

describe('index.js', () => {
  describe('userQwestsRef', () => {
    it('should return a valid reference object', () => {
      // Expect that the method returns the correct result
      expect(!_.isEmpty(userQwestsRef())).toEqual(true)
    })
  })
})
