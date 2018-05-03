const displayNameRequiredRule = v => {
  return !!v || 'Display name is required'
}

const emailRequiredRule = v => {
  return !!v || 'Email is required'
}

const emailValidRule = v => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
}

const passwordRequiredRule = v => {
  return !!v || 'Password is required'
}

const passwordLengthRule = v => {
  return (!!v && v.length >= 7) || 'Password must be at least 7 characters long'
}

const passwordContentRule = v => {
  return /[0-9]/.test(v) || 'Password must contain at least 1 number'
}

export default {
  displayNameRequiredRule,
  emailRequiredRule,
  emailValidRule,
  passwordRequiredRule,
  passwordLengthRule,
  passwordContentRule
}
