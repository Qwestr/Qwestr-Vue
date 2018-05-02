<template>
  <div id="sign-up">
    <v-container>
      <v-card>
        <v-card-title class="headline grey--text">
          Sign Up
        </v-card-title>
        <v-form v-model="valid" class="pa-3">
          <v-text-field
            label="Email"
            hint="We'll never share your email with anyone else"
            persistent-hint
            v-model="user.email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            hint="Please use at least 1 number and at least 7 characters"
            persistent-hint
            counter="7"
            v-model="user.password"
            :append-icon="isPasswordVisible ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (isPasswordVisible = !isPasswordVisible)"
            :type="isPasswordVisible ? 'text' : 'password'"
            :rules="passwordRules"
            required
          ></v-text-field>
          <v-flex>
            <v-btn :loading="isDataProcessing" :disabled="!valid" @click="submitForm" color="primary">
              Sign Up
            </v-btn>
            <v-btn :to="{name: 'home'}" color="error">
              Cancel
            </v-btn>
          </v-flex>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import validations from '@/validations'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      emailRules: [
        validations.emailRequiredRule,
        validations.emailValidRule
      ],
      passwordRules: [
        validations.passwordRequiredRule,
        validations.passwordLengthRule,
        validations.passwordContentRule
      ],
      isPasswordVisible: false,
      isDataProcessing: false,
      valid: false
    }
  },
  methods: {
    async submitForm () {
      try {
        // Set isDataProcessing to true
        this.isDataProcessing = true
        // Dispatch signup action
        await this.$store.dispatch('signup', this.user)
        // Redirect to the home page
        this.$router.replace({ name: 'home' })
      } catch (error) {
        // Set isDataProcessing to false
        this.isDataProcessing = false
        // Dispatch storeError action
        this.$store.dispatch('storeError', error)
      }
    }
  }
}
</script>