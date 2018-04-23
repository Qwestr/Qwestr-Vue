<template>
  <div id="login">
    <v-container>
      <v-card>
        <v-card-title class="headline grey--text">
          Login
        </v-card-title>
        <v-form v-model="valid" class="pa-3">
          <v-text-field
            label="Email"
            v-model="login.email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="login.password"
            :append-icon="isPasswordVisible ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (isPasswordVisible = !isPasswordVisible)"
            :type="isPasswordVisible ? 'text' : 'password'"
            :rules="passwordRules"
            required
          ></v-text-field>
          <v-flex>
            <v-btn :loading="isDataProcessing" :disabled="!valid" @click="submitForm" color="primary">
              Login
            </v-btn>
            <v-btn :to="{name: 'sign-up'}" color="success">
              Sign Up
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn flat small color="info">Forgot Your Password?</v-btn>
          </v-flex>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import validations from '@/validations'

export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      emailRules: [
        validations.emailRequiredRule
      ],
      passwordRules: [
        validations.passwordRequiredRule
      ],
      isPasswordVisible: false,
      isDataProcessing: false,
      valid: false
    }
  },
  methods: {
    async submitForm() {
      try {
        // Set isDataProcessing to true
        this.isDataProcessing = true
        // Dispatch login action
        await this.$store.dispatch('login', this.login)
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