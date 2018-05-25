import validations from '@/validations'

describe('index.js', () => {
  describe('displayNameRequiredRule', () => {
    it('should return the correct result when the input is blank', () => {
      // Expect that the method returns the correct result
      expect(validations.displayNameRequiredRule('')).toEqual('Display name is required')
    })

    it('should return the correct result when the input is present', () => {
      // Expect that the method returns the correct result
      expect(validations.displayNameRequiredRule('displayName')).toEqual(true)
    })
  })

  describe('emailRequiredRule', () => {
    it('should return the correct result when the input is blank', () => {
      // Expect that the method returns the correct result
      expect(validations.emailRequiredRule('')).toEqual('Email is required')
    })

    it('should return the correct result when the input is present', () => {
      // Expect that the method returns the correct result
      expect(validations.emailRequiredRule('email')).toEqual(true)
    })
  })

  describe('emailValidRule', () => {
    it('should return the correct result when the input is invalid', () => {
      // Expect that the method returns the correct result
      expect(validations.emailValidRule('test@email')).toEqual('E-mail must be valid')
    })

    it('should return the correct result when the input is valid', () => {
      // Expect that the method returns the correct result
      expect(validations.emailValidRule('test@email.com')).toEqual(true)
    })
  })

  describe('passwordRequiredRule', () => {
    it('should return the correct result when the input is blank', () => {
      // Expect that the method returns the correct result
      expect(validations.passwordRequiredRule('')).toEqual('Password is required')
    })

    it('should return the correct result when the input is present', () => {
      // Expect that the method returns the correct result
      expect(validations.passwordRequiredRule('password')).toEqual(true)
    })
  })

  describe('passwordLengthRule', () => {
    it('should return the correct result when the input is invalid', () => {
      // Expect that the method returns the correct result
      expect(validations.passwordLengthRule('pwd')).toEqual('Password must be at least 7 characters long')
    })

    it('should return the correct result when the input is valid', () => {
      // Expect that the method returns the correct result
      expect(validations.passwordLengthRule('password')).toEqual(true)
    })
  })

  describe('passwordContentRule', () => {
    it('should return the correct result when the input is invalid', () => {
      // Expect that the method returns the correct result
      expect(validations.passwordContentRule('password')).toEqual('Password must contain at least 1 number')
    })

    it('should return the correct result when the input is valid', () => {
      // Expect that the method returns the correct result
      expect(validations.passwordContentRule('password1')).toEqual(true)
    })
  })

  describe('nameRequiredRule', () => {
    it('should return the correct result when the input is blank', () => {
      // Expect that the method returns the correct result
      expect(validations.nameRequiredRule('')).toEqual('Name is required')
    })

    it('should return the correct result when the input is present', () => {
      // Expect that the method returns the correct result
      expect(validations.nameRequiredRule('name')).toEqual(true)
    })
  })
})
