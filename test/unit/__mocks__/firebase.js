export default {
  initializeApp: jest.fn((config) => {
    return {
      database: jest.fn(() => {
        return {
          ref: jest.fn(() => {
            return {
              on: jest.fn()
            }
          })
        }
      })
    }
  })
}
