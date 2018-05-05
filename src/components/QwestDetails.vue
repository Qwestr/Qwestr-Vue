<template>
  <v-container fluid>
    <v-btn
      fab
      dark
      fixed
      bottom
      right
      color="orange"
      slot="activator"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-card-title primary-title class="headline">
        <v-btn icon :to="{ name: 'home' }" exact>
          <v-icon color="grey">chevron_left</v-icon>
        </v-btn>
        {{ qwest.name }}
        <v-spacer></v-spacer>
        <v-btn v-if="!qwest.completed" @click="completeQwest()" icon class="mx-0">
          <v-icon color="grey">check_circle</v-icon>
        </v-btn>
        <v-btn v-else @click="restartQwest()" icon class="mx-0">
          <v-icon color="teal">check_circle</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div v-if="!qwest.description">
          <i class="grey--text">
            No Description Available
          </i>
        </div>
        <div v-else>
          {{ qwest.description }}
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { userQwestRef } from '@/firebase'

export default {
  methods: {
    completeQwest () {
      this.$firebaseRefs.qwest.child('completed').set(true)
    },
    restartQwest () {
      this.$firebaseRefs.qwest.child('completed').set(null)
    }
  },
  created () {
    // Setup Firebase references
    this.$bindAsObject('qwest', userQwestRef(this.$route.params.key))
  }
}
</script>