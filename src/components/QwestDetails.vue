<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-card>
        <v-card-title class="headline grey--text">
          Qwest Details
        </v-card-title>
      </v-card>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { userQwestRef } from '@/firebase'

export default {
  created () {
    // Setup Firebase references
    this.$bindAsObject('qwest', userQwestRef(this.$route.params.key))
  }
}
</script>