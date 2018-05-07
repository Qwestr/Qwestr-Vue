<template>
  <v-container fluid>
    <v-card v-if="!qwestDetailsEditMode">
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
    <v-card v-else>
      <v-card-title>
        <span class="headline">Edit Qwest</span>
      </v-card-title>
      <v-form v-model="valid" class="pa-3">
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="qwest.name" label="Name" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-flex>
            <v-btn :loading="isDataProcessing" :disabled="!valid" @click="submitForm" color="primary">
              Update
            </v-btn>
            <v-btn @click="toggleQwestDetailsEditMode" color="error">
              Cancel
            </v-btn>
          </v-flex>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { userQwestRef } from '@/firebase'

export default {
  computed: {
    qwestDetailsEditMode () {
      return this.$store.getters['qwestDetailsEditMode']
    }
  },
  methods: {
    completeQwest () {
      this.$firebaseRefs.qwest.child('completed').set(true)
    },
    restartQwest () {
      this.$firebaseRefs.qwest.child('completed').set(null)
    },
    toggleQwestDetailsEditMode () {
      // Dispatch the toggleQwestDetailsEditMode action
      this.$store.dispatch('toggleQwestDetailsEditMode')
    }
  },
  created () {
    // Setup Firebase references
    this.$bindAsObject('qwest', userQwestRef(this.$route.params.key))
    // Dispatch the storeFAB action
    this.$store.dispatch('storeFAB', { id: 'QwestDetailsFAB', dial: false })
  },
  beforeDestroy () {
    // Dispatch the clearFAB action
    this.$store.dispatch('clearFAB')
    // Dispatch the resetQwestDetailsEditMode action
    this.$store.dispatch('resetQwestDetailsEditMode')
  }
}
</script>