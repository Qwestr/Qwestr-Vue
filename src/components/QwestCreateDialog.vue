<template>
  <v-dialog v-model="qwestCreateDialog" persistent max-width="500">
    <v-card>
      <v-card-title>
        <span class="headline">Create Qwest</span>
      </v-card-title>
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
        <v-spacer></v-spacer>
        <v-btn color="secondary" flat @click="closeDialog">Close</v-btn>
        <v-btn color="primary" flat @click="createQwest">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { userQwestsRef } from '@/firebase'

export default {
  data () {
    return {
      qwest: {
        name: null
      }
    }
  },
  computed: {
    qwestCreateDialog () {
      return this.$store.getters['qwestCreateDialog']
    }
  },
  methods: {
    createQwest () {
      try {
        // Create the new Qwest
        this.$firebaseRefs.qwests.push(this.qwest)
        // Clear the inputs
        this.qwest.name = null
        // Close the dialog
        this.closeDialog()
      } catch (error) {
        console.log('error', error)
      }
    },
    closeDialog () {
      // Dispatch the toggleQwestCreateDialog action
      this.$store.dispatch('toggleQwestCreateDialog')
    }
  },
  created () {
    // Setup Firebase references
    this.$bindAsArray('qwests', userQwestsRef())
  }
}
</script>
