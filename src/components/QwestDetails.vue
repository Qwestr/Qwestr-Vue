<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-card>
        <v-card-title primary-title class="headline">
          {{ qwest.name }}
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